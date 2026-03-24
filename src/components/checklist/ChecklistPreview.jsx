import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';

export default function ChecklistPreview({ config, printRef, onPrint, onBack }) {
  const { hotelName, loyaltyProgram, upsellAmount, guestName } = config;

  const checkInStepsLeft = [
    {
      icon: '👋', num: '1', title: 'WELCOME (Start Strong)',
      content: (
        <>
          <p className="script">"{hotelName} — how can I assist you today?"</p>
          <p><span className="check">✔</span> Smile &nbsp;<span className="check">✔</span> Eye contact &nbsp;<span className="check">✔</span> Confident tone</p>
        </>
      )
    },
    {
      icon: '⭐', num: '2', title: 'LOYALTY',
      content: (
        <>
          <p><strong>Member:</strong></p>
          <p className="script">"Welcome back, {guestName} — thank you for being a member. Points or breakfast?"</p>
          <p className="mt-1"><strong>Non-member:</strong></p>
          <p className="script">"We can enroll you in {loyaltyProgram} — it's free."</p>
        </>
      )
    },
    {
      icon: '🪪', num: '3', title: 'ID + PAYMENT',
      content: (
        <>
          <p className="script">"May I please see your photo ID?"</p>
          <p className="script">"And the card for your stay and incidentals?"</p>
          <p><span className="check">✔</span> Smooth &nbsp;<span className="check">✔</span> No hesitation</p>
        </>
      )
    },
    {
      icon: '💼', num: '4', title: 'SALES LEAD (MANDATORY)',
      content: (
        <>
          <p className="script">"What brings you into town, {guestName}?"</p>
          <p><span className="arrow">➡</span> Business → "Which company are you visiting?"</p>
          <p><span className="arrow">➡</span> Leisure → "Have you been here before?"</p>
        </>
      )
    },
  ];

  const checkInStepsRight = [
    {
      icon: '', num: '5', title: 'USE THE NAME',
      content: (
        <>
          <p><span className="check">✔</span> Minimum <strong>2–3 times</strong> &nbsp;<span className="check">✔</span> Natural, not forced</p>
          <p className="script">"Absolutely, {guestName}." &nbsp; "Got it, {guestName}."</p>
        </>
      )
    },
    {
      icon: '💰', num: '6', title: 'UPSELL',
      content: (
        <>
          <p className="script">"We have a premium room with [benefit] for just ${upsellAmount} more — would you like to upgrade?"</p>
          <p><span className="check">✔</span> Always offer &nbsp;<span className="check">✔</span> Focus on BENEFIT</p>
        </>
      )
    },
    {
      icon: '🏊', num: '7', title: 'AMENITIES (KEEP IT SHORT)',
      content: (
        <>
          <p>• Breakfast times</p>
          <p>• Gym / Pool location</p>
          <p>• Elevator direction</p>
          <p><span className="warning">🚫</span> Do NOT overload the guest</p>
        </>
      )
    },
    {
      icon: '✅', num: '8', title: 'CLOSE STRONG',
      content: (
        <>
          <p className="script">"You're all set, {guestName} — room [###]."</p>
          <p className="script">"Is there anything else I can take care of for you?"</p>
          <p className="script">"Enjoy your stay!"</p>
          <p className="mt-1"><strong>9. REVIEW REQUEST:</strong> <span className="script">"If everything looks great, we'd really appreciate a positive review."</span></p>
        </>
      )
    },
  ];

  const checkOutStepsLeft = [
    {
      icon: '👋', num: '1', title: 'GREET + ACKNOWLEDGE',
      content: (
        <>
          <p className="script">"Good morning, {guestName} — checking out today?"</p>
          <p><span className="check">✔</span> Smile &nbsp;<span className="check">✔</span> Eye contact &nbsp;<span className="check">✔</span> Use name immediately</p>
        </>
      )
    },
    {
      icon: '🧾', num: '2', title: 'CONFIRM STAY',
      content: (
        <>
          <p className="script">"How was your stay with us?"</p>
          <p><span className="check">✔</span> Listen carefully &nbsp;<span className="check">✔</span> Flag issues immediately</p>
        </>
      )
    },
    {
      icon: '⚠️', num: '3', title: 'ISSUE RECOVERY (IF NEEDED)',
      content: (
        <>
          <p className="script">"I'm sorry to hear that — let me take care of it right away."</p>
          <p><span className="check">✔</span> Own the problem, Empathise</p>
          <p><span className="warning">✔</span> Do NOT argue &nbsp;<span className="check">✔</span> Escalate if needed</p>
        </>
      )
    },
    {
      icon: '💳', num: '4', title: 'BILL REVIEW (CLEAR + CONFIDENT)',
      content: (
        <>
          <p className="script">"Here's a quick review of your folio."</p>
          <p><span className="check">✔</span> Room charges &nbsp;<span className="check">✔</span> Incidentals &nbsp;<span className="check">✔</span> No surprises</p>
        </>
      )
    },
    {
      icon: '💼', num: '5', title: 'SALES LEAD',
      content: (
        <>
          <p className="script">"Will you be traveling back to the area?"</p>
          <p><span className="arrow">➡</span> Business: "Would you like me to connect you with our sales team?"</p>
          <p><span className="arrow">➡</span> Leisure: "We'd love to have you back — we can set up a preferred rate."</p>
        </>
      )
    },
  ];

  const checkOutStepsRight = [
    {
      icon: '⭐', num: '6', title: 'LOYALTY (LAST CHANCE)',
      content: (
        <>
          <p><strong>If not a member:</strong></p>
          <p className="script">"Before you go, I can quickly enroll you in {loyaltyProgram} — it's free."</p>
        </>
      )
    },
    {
      icon: '🌟', num: '7', title: 'REVIEW ASK (CRITICAL)',
      content: (
        <>
          <p className="script">"If everything looked great, we'd really appreciate a quick review."</p>
          <p><span className="check">✔</span> This drives your scores &nbsp;<span className="check">✔</span> Say it confidently</p>
        </>
      )
    },
    {
      icon: '🚗', num: '8', title: 'CLOSE STRONG',
      content: (
        <>
          <p className="script">"You're all set, {guestName}."</p>
          <p className="script">"Thank you for staying with us — have a safe trip!"</p>
        </>
      )
    },
  ];

  const Step = ({ icon, num, title, content }) => (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ fontWeight: 700, fontSize: '11.5px', color: '#0f172a', marginBottom: '3px' }}>
        {icon} {num}. {title}
      </div>
      <div style={{ color: '#334155', lineHeight: 1.55, fontSize: '11px' }}>
        {content}
      </div>
    </div>
  );

  const sectionStyle = {
    marginBottom: '10px',
    fontSize: '13px',
    fontWeight: 800,
    color: '#0f4c5c',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: '2px solid #0f4c5c',
    paddingBottom: '4px',
  };

  const scriptStyle = { fontStyle: 'italic', color: '#0f4c5c', fontWeight: 600 };
  const checkStyle = { color: '#16a34a', fontWeight: 700 };
  const arrowStyle = { color: '#64748b' };
  const warningStyle = { color: '#dc2626', fontWeight: 700 };

  const renderStep = ({ icon, num, title, content }) => (
    <div key={num} style={{ marginBottom: '10px' }}>
      <div style={{ fontWeight: 700, fontSize: '11.5px', color: '#0f172a', marginBottom: '3px' }}>
        {icon} {num}. {title}
      </div>
      <div style={{ color: '#334155', lineHeight: 1.55, fontSize: '11px' }}>{content}</div>
    </div>
  );

  const printContent = (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '14px', borderBottom: '3px solid #0f4c5c', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
          {hotelName} — Front Desk Checklist
        </h1>
        <p style={{ fontSize: '11px', color: '#64748b', margin: '2px 0 0', fontStyle: 'italic' }}>
          Every Guest. Every Time. No Exceptions.
        </p>
      </div>

      {/* CHECK-IN */}
      <div style={sectionStyle}>CHECK-IN</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '16px' }}>
        <div>
          {checkInStepsLeft.map(s => (
            <div key={s.num} style={{ marginBottom: '10px' }}>
              <div style={{ fontWeight: 700, fontSize: '11.5px', color: '#0f172a', marginBottom: '3px' }}>{s.icon} {s.num}. {s.title}</div>
              <div style={{ color: '#334155', lineHeight: 1.55, fontSize: '11px' }}>{s.content}</div>
            </div>
          ))}
        </div>
        <div>
          {checkInStepsRight.map(s => (
            <div key={s.num} style={{ marginBottom: '10px' }}>
              <div style={{ fontWeight: 700, fontSize: '11.5px', color: '#0f172a', marginBottom: '3px' }}>{s.icon} {s.num}. {s.title}</div>
              <div style={{ color: '#334155', lineHeight: 1.55, fontSize: '11px' }}>{s.content}</div>
            </div>
          ))}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '14px 0' }} />

      {/* CHECK-OUT */}
      <div style={sectionStyle}>CHECK-OUT — Fast. Friendly. Revenue Opportunity.</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          {checkOutStepsLeft.map(s => (
            <div key={s.num} style={{ marginBottom: '10px' }}>
              <div style={{ fontWeight: 700, fontSize: '11.5px', color: '#0f172a', marginBottom: '3px' }}>{s.icon} {s.num}. {s.title}</div>
              <div style={{ color: '#334155', lineHeight: 1.55, fontSize: '11px' }}>{s.content}</div>
            </div>
          ))}
        </div>
        <div>
          {checkOutStepsRight.map(s => (
            <div key={s.num} style={{ marginBottom: '10px' }}>
              <div style={{ fontWeight: 700, fontSize: '11.5px', color: '#0f172a', marginBottom: '3px' }}>{s.icon} {s.num}. {s.title}</div>
              <div style={{ color: '#334155', lineHeight: 1.55, fontSize: '11px' }}>{s.content}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '20px', fontSize: '9px', color: '#94a3b8', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '8px' }}>
        {hotelName} · Front Desk Checklist · Powered by ARS360 · Printed {new Date().toLocaleDateString()}
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Editor
        </button>
        <Button onClick={onPrint} className="bg-teal-500 hover:bg-teal-600 text-white rounded-full border-0 gap-2">
          <Download className="w-4 h-4" /> Download / Print PDF
        </Button>
      </div>

      {/* Paper preview */}
      <div className="bg-slate-200 rounded-xl p-6 overflow-auto">
        <div
          ref={printRef}
          className="bg-white shadow-xl mx-auto"
          style={{ width: '816px', minHeight: '1056px', padding: '48px', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
        >
          {printContent}
        </div>
      </div>
    </div>
  );
}