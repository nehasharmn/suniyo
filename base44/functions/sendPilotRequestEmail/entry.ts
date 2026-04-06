Deno.serve(async (req) => {
  try {
    const { event, data } = await req.json();

    if (event.type !== 'create') {
      return Response.json({ success: true });
    }

    const apiKey = Deno.env.get('RESEND_API_KEY');
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
            subject: 'New Pilot Request',
            html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Hotel/Company: ${data.hotel_company}</p>`
          })
        })
      )
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});