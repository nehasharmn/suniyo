import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    await base44.integrations.Core.SendEmail({
      to: 'sanjay@sunio.ai',
      subject: 'New Demo Request from Suniyo',
      body: `Someone requested a demo.\n\nEmail: ${email}`
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
});