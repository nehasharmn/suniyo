import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function ChecklistEditor({ config, onChange, onPreview }) {
  const { hotelName, loyaltyProgram, upsellAmount, guestName } = config;
  const { setHotelName, setLoyaltyProgram, setUpsellAmount, setGuestName } = onChange;

  const fields = [
    { label: 'Hotel Name', value: hotelName, set: setHotelName, placeholder: 'e.g. ABC Hotel', help: 'Used in greetings and document title' },
    { label: 'Loyalty Program Name', value: loyaltyProgram, set: setLoyaltyProgram, placeholder: 'e.g. Marriott Bonvoy', help: 'Referenced in the loyalty enrollment step' },
    { label: 'Upsell Price Difference ($)', value: upsellAmount, set: setUpsellAmount, placeholder: 'e.g. 25', help: 'Dollar amount shown in upsell offer' },
    { label: 'Sample Guest Name', value: guestName, set: setGuestName, placeholder: 'e.g. Mr. Smith', help: 'Used in script examples throughout the checklist' },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white border border-slate-100 shadow-sm">
        <CardContent className="p-8 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-1">Customize Your Checklist</h2>
            <p className="text-sm text-slate-500">These values will be injected into all scripts and examples in the checklist.</p>
          </div>
          {fields.map(f => (
            <div key={f.label} className="space-y-1">
              <Label className="text-sm font-semibold text-slate-700">{f.label}</Label>
              <Input
                value={f.value}
                onChange={e => f.set(e.target.value)}
                placeholder={f.placeholder}
                className="border-slate-200"
              />
              <p className="text-xs text-slate-400">{f.help}</p>
            </div>
          ))}
          <Button
            onClick={onPreview}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full border-0 mt-2"
          >
            Preview Checklist →
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}