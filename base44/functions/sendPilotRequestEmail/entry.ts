import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { event, data } = await req.json();

    if (event.type !== 'create') {
      return Response.json({ success: true });
    }

    await Promise.all([
      base44.integrations.Core.SendEmail({
        to: 'sanjay@suniyo.ai',
        subject: 'New Pilot Request from Suniyo',
        body: `New pilot request received.\n\nName: ${data.name}\nEmail: ${data.email}\nHotel/Company: ${data.hotel_company}`
      }),
      base44.integrations.Core.SendEmail({
        to: 'psharma@suniyo.ai',
        subject: 'New Pilot Request from Suniyo',
        body: `New pilot request received.\n\nName: ${data.name}\nEmail: ${data.email}\nHotel/Company: ${data.hotel_company}`
      })
    ]);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending pilot request email:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});