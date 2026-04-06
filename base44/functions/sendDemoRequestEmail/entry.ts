import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { event, data } = await req.json();

    if (event.type !== 'create') {
      return Response.json({ success: true });
    }

    await base44.integrations.Core.SendEmail({
      to: 'sanjay@sunio.ai',
      subject: 'New Demo Request from Suniyo',
      body: `Someone requested a demo.\n\nEmail: ${data.email}`
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending demo request email:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});