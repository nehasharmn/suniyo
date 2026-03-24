import React, { useState, useRef } from 'react';
import ChecklistEditor from '@/components/checklist/ChecklistEditor';
import ChecklistPreview from '@/components/checklist/ChecklistPreview';

export default function ChecklistBuilder() {
  const [hotelName, setHotelName] = useState('ABC Hotel');
  const [loyaltyProgram, setLoyaltyProgram] = useState('Marriott Bonvoy');
  const [upsellAmount, setUpsellAmount] = useState('XX');
  const [guestName, setGuestName] = useState('Mr. Smith');
  const [hotelImage, setHotelImage] = useState(null);
  const [activeTab, setActiveTab] = useState('edit');
  const printRef = useRef();

  const config = { hotelName, loyaltyProgram, upsellAmount, guestName, hotelImage };

  const handlePrint = () => {
    const content = printRef.current.innerHTML;
    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Front Desk Checklist — ${hotelName}</title>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #1e293b; background: #fff; }
            @media print {
              body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              @page { size: A4; margin: 0; }
            }
          </style>
        </head>
        <body>
          <div class="page">${content}</div>
        </body>
      </html>
    `);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-6">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Front Desk Checklist Builder</h1>
          <p className="text-slate-500 mt-1">Customize your hotel's checklist and download a print-ready PDF.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-slate-200">
          {['edit', 'preview'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-semibold capitalize rounded-t-lg transition-colors ${
                activeTab === tab
                  ? 'bg-white border border-b-white border-slate-200 text-teal-600 -mb-px'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab === 'edit' ? '✏️ Customize' : '👁️ Preview & Print'}
            </button>
          ))}
        </div>

        {activeTab === 'edit' ? (
          <ChecklistEditor
            config={config}
            onChange={{ setHotelName, setLoyaltyProgram, setUpsellAmount, setGuestName, setHotelImage }}
            onPreview={() => setActiveTab('preview')}
          />
        ) : (
          <ChecklistPreview config={config} printRef={printRef} onPrint={handlePrint} onBack={() => setActiveTab('edit')} />
        )}
      </div>
    </div>
  );
}