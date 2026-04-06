Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    const data = payload.data;

    if (!data || !data.email) {
      console.error('Invalid payload:', payload);
      return Response.json({ error: 'Missing email' }, { status: 400 });
    }

    const apiKey = Deno.env.get('RESEND_API_KEY');
    if (!apiKey) {
      console.error('RESEND_API_KEY not set');
      return Response.json({ error: 'API key missing' }, { status: 500 });
    }

    const emails = ['psharma@suniyo.ai', 'sanjay@suniyo.ai'];

    await Promise.all(
      emails.map(email =>
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'noreply@suniyo.ai',
            to: email,
            subject: 'New Demo Request',
            html: `<p>Email: ${data.email}</p>`
          })
        })
      )
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});