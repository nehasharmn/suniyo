import React, { useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Upload, X } from 'lucide-react';

export default function ChecklistEditor({ config, onChange, onPreview }) {
  const { hotelName, loyaltyProgram, upsellAmount, guestName, hotelImage } = config;
  const { setHotelName, setLoyaltyProgram, setUpsellAmount, setGuestName, setHotelImage } = onChange;
  const fileInputRef = useRef();

  const fields = [
    { label: 'Hotel Name', value: hotelName, set: setHotelName, placeholder: 'e.g. ABC Hotel', help: 'Used in greetings and document title' },
    { label: 'Loyalty Program Name', value: loyaltyProgram, set: setLoyaltyProgram, placeholder: 'e.g. Marriott Bonvoy', help: 'Referenced in the loyalty enrollment step' },
    { label: 'Upsell Price Difference ($)', value: upsellAmount, set: setUpsellAmount, placeholder: 'e.g. 25', help: 'Dollar amount shown in upsell offer' },
    { label: 'Sample Guest Name', value: guestName, set: setGuestName, placeholder: 'e.g. Mr. Smith', help: 'Used in script examples throughout the checklist' },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setHotelImage(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white border border-slate-100 shadow-sm">
        <CardContent className="p-8 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-1">Customize Your Checklist</h2>
            <p className="text-sm text-slate-500">These values will be injected into all scripts and examples in the checklist.</p>
          </div>

          {/* Hotel Image Upload */}
          <div className="space-y-1">
            <Label className="text-sm font-semibold text-slate-700">Hotel Logo / Image</Label>
            <div
              onClick={() => !hotelImage && fileInputRef.current.click()}
              className={`relative border-2 border-dashed rounded-xl overflow-hidden flex items-center justify-center transition-colors ${hotelImage ? 'border-teal-300 bg-teal-50' : 'border-slate-200 bg-slate-50 hover:border-teal-300 hover:bg-teal-50 cursor-pointer'}`}
              style={{ height: '120px' }}
            >
              {hotelImage ? (
                <>
                  <img src={hotelImage} alt="Hotel" className="h-full w-full object-contain p-2" />
                  <button
                    onClick={(e) => { e.stopPropagation(); setHotelImage(null); }}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-rose-50 text-slate-500 hover:text-rose-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center gap-2 text-slate-400">
                  <Upload className="w-7 h-7" />
                  <span className="text-sm">Click to upload hotel logo or photo</span>
                </div>
              )}
            </div>
            {hotelImage && (
              <button onClick={() => fileInputRef.current.click()} className="text-xs text-teal-600 hover:underline">
                Change image
              </button>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            <p className="text-xs text-slate-400">Appears in the top-left corner of each printed page</p>
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