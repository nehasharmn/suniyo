import React, { useState, useRef } from 'react';
import ChecklistEditor from '@/components/checklist/ChecklistEditor';
import ChecklistPreview from '@/components/checklist/ChecklistPreview';

export default function ChecklistBuilder() {
  const [hotelName, setHotelName] = useState('ABC Hotel');
  const [loyaltyProgram, setLoyaltyProgram] = useState('Marriott Bonvoy');
  const [upsellAmount, setUpsellAmount] = useState('XX');
  const [guestName, setGuestName] = useState('Mr. Smith');
  const [activeTab, setActiveTab] = useState('edit');
  const printRef = useRef();

  const config = { hotelName, loyaltyProgram, upsellAmount, guestName };

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
            body { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px; color: #1e293b; background: #fff; }
            .page { width: 8.5in; min-height: 11in; padding: 0.5in; margin: 0 auto; }
            h1 { font-size: 20px; font-weight: 800; letter-spacing: -0.02em; color: #0f172a; margin-bottom: 2px; }
            h2 { font-size: 14px; font-weight: 700; color: #0f4c5c; margin: 16px 0 8px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 2px solid #0f4c5c; padding-bottom: 4px; }
            .subtitle { font-size: 11px; font-style: italic; color: #64748b; margin-bottom: 12px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
            .step { margin-bottom: 10px; }
            .step-title { font-weight: 700; font-size: 11.5px; color: #0f172a; margin-bottom: 3px; }
            .step-body { color: #334155; line-height: 1.5; }
            .step-body .script { font-style: italic; color: #0f4c5c; font-weight: 600; }
            .check { color: #16a34a; font-weight: 700; }
            .arrow { color: #64748b; }
            .badge { display: inline-block; background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; border-radius: 4px; padding: 1px 6px; font-size: 10px; font-weight: 700; margin-bottom: 4px; }
            .warning { color: #dc2626; font-weight: 700; }
            .divider { border: none; border-top: 1px solid #e2e8f0; margin: 14px 0; }
            .footer { margin-top: 20px; font-size: 9px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 8px; }
            @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
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
            onChange={{ setHotelName, setLoyaltyProgram, setUpsellAmount, setGuestName }}
            onPreview={() => setActiveTab('preview')}
          />
        ) : (
          <ChecklistPreview config={config} printRef={printRef} onPrint={handlePrint} onBack={() => setActiveTab('edit')} />
        )}
      </div>
    </div>
  );
}