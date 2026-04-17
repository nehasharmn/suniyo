import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const { email, first_name, appUrl } = await req.json();

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const apiKey = Deno.env.get('RESEND_API_KEY');
    if (!apiKey) {
      return Response.json({ error: 'API key missing' }, { status: 500 });
    }

    // Build the setup account link with email encoded
    const setupUrl = `${appUrl}/SetupAccount?email=${encodeURIComponent(email)}`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'noreply@suniyo.ai',
        to: email,
        subject: 'Set Up Your Suniyo Account',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <img src="https://suniyo.ai/logo.png" alt="Suniyo" style="height: 40px; margin-bottom: 24px;" />
            <h2 style="color: #0f172a;">Hello ${first_name || ''},</h2>
            <p style="color: #475569;">Thank you for signing up! Please click the button below to set up your Suniyo account.</p>
            <a href="${setupUrl}" style="display: inline-block; margin: 24px 0; padding: 12px 32px; background-color: #14b8a6; color: white; text-decoration: none; border-radius: 9999px; font-weight: 600;">
              Set Up My Account
            </a>
            <p style="color: #94a3b8; font-size: 13px;">If you didn't request this, you can safely ignore this email.</p>
            <p style="color: #94a3b8; font-size: 13px;">Or copy this link: ${setupUrl}</p>
          </div>
        `
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});