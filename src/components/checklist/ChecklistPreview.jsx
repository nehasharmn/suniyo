import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';

const S = {
  titleSize: '15px',
  bodySize: '13px',
  sectionSize: '14px',
  headingSize: '26px',
  subtitleSize: '13px',
  footerSize: '11px',
  stepGap: '14px',
  colGap: '28px',
};

export default function ChecklistPreview({ config, printRef, onPrint, onBack }) {
  const { hotelName, loyaltyProgram, upsellAmount, guestName } = config;

  const sectionStyle = {
    marginBottom: '12px',
    fontSize: S.sectionSize,
    fontWeight: 800,
    color: '#0f4c5c',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    borderBottom: '2.5px solid #0f4c5c',
    paddingBottom: '5px',
  };

  const stepTitleStyle = {
    fontWeight: 700,
    fontSize: S.titleSize,
    color: '#0f172a',
    marginBottom: '4px',
  };

  const stepBodyStyle = {
    color: '#334155',
    lineHeight: 1.65,
    fontSize: S.bodySize,
  };

  const script = (text) => (
    <span style={{ fontStyle: 'italic', color: '#0f4c5c', fontWeight: 600 }}>{text}</span>
  );

  const check = <span style={{ color: '#16a34a', fontWeight: 700 }}>✔</span>;
  const arrow = <span style={{ color: '#64748b' }}>➡</span>;
  const no = <span style={{ color: '#dc2626', fontWeight: 700 }}>🚫</span>;

  const Step = ({ icon, num, title, children }) => (
    <div style={{ marginBottom: S.stepGap }}>
      <div style={stepTitleStyle}>{icon} {num}. {title}</div>
      <div style={stepBodyStyle}>{children}</div>
    </div>
  );

  const checkInLeft = (
    <>
      <Step icon="👋" num="1" title="WELCOME (Start Strong)">
        <p>{script(`"Welcome to ${hotelName} — how can I assist you today?"`)}</p>
        <p>{check} Smile &nbsp;{check} Eye contact &nbsp;{check} Confident tone</p>
      </Step>
      <Step icon="⭐" num="2" title="LOYALTY">
        <p><strong>Member:</strong></p>
        <p>{script(`"Welcome back, ${guestName} — thank you for being a member. Points or breakfast?"`)}</p>
        <p style={{ marginTop: '4px' }}><strong>Non-member:</strong></p>
        <p>{script(`"We can enroll you in ${loyaltyProgram} — it's free."`)}</p>
      </Step>
      <Step icon="🪪" num="3" title="ID + PAYMENT">
        <p>{script('"May I please see your photo ID?"')}</p>
        <p>{script('"And the card for your stay and incidentals?"')}</p>
        <p>{check} Smooth &nbsp;{check} No hesitation</p>
      </Step>
      <Step icon="💼" num="4" title="SALES LEAD (MANDATORY)">
        <p>{script(`"What brings you into town, ${guestName}?"`)}</p>
        <p>{arrow} Business → "Which company are you visiting?"</p>
        <p>{arrow} Leisure → "Have you been here before?"</p>
      </Step>
    </>
  );

  const checkInRight = (
    <>
      <Step icon="" num="5" title="USE THE NAME">
        <p>{check} Minimum <strong>2–3 times</strong> &nbsp;{check} Natural, not forced</p>
        <p>{script(`"Absolutely, ${guestName}." · "Got it, ${guestName}.""`)}</p>
      </Step>
      <Step icon="💰" num="6" title="UPSELL">
        <p>{script(`"We have a premium room with [benefit] for just $${upsellAmount} more — would you like to upgrade?"`)}</p>
        <p>{check} Always offer &nbsp;{check} Focus on BENEFIT (space, view, kitchenette)</p>
      </Step>
      <Step icon="🏊" num="7" title="AMENITIES (KEEP IT SHORT)">
        <p>• Breakfast times</p>
        <p>• Gym / Pool location</p>
        <p>• Elevator direction</p>
        <p>🚫 Do NOT overload the guest</p>
      </Step>
      <Step icon="✅" num="8" title="CLOSE STRONG">
        <p>{script(`"You're all set, ${guestName} — room [###].""`)}</p>
        <p>{script('"Is there anything else I can take care of for you?"')}</p>
        <p>{script('"Enjoy your stay!"')}</p>
        <p style={{ marginTop: '5px' }}><strong>9. REVIEW REQUEST:</strong> {script("\"If everything looks great, we'd really appreciate a positive review.\"")}</p>
      </Step>
    </>
  );

  const checkOutLeft = (
    <>
      <Step icon="👋" num="1" title="GREET + ACKNOWLEDGE">
        <p>{script(`"Good morning, ${guestName} — checking out today?"`)}</p>
        <p>{check} Smile &nbsp;{check} Eye contact &nbsp;{check} Use name immediately</p>
      </Step>
      <Step icon="🧾" num="2" title="CONFIRM STAY">
        <p>{script('"How was your stay with us?"')}</p>
        <p>{check} Listen carefully &nbsp;{check} Flag issues immediately</p>
      </Step>
      <Step icon="⚠️" num="3" title="ISSUE RECOVERY (IF NEEDED)">
        <p>{script('"I\'m sorry to hear that — let me take care of it right away."')}</p>
        <p>{check} Own the problem, Empathise</p>
        <p>✗ Do NOT argue &nbsp;{check} Escalate if needed</p>
      </Step>
      <Step icon="💳" num="4" title="BILL REVIEW (CLEAR + CONFIDENT)">
        <p>{script('"Here\'s a quick review of your folio."')}</p>
        <p>{check} Room charges &nbsp;{check} Incidentals &nbsp;{check} No surprises</p>
      </Step>
      <Step icon="💼" num="5" title="SALES LEAD">
        <p>{script('"Will you be traveling back to the area?"')}</p>
        <p>{arrow} Business: "Would you like me to connect you with our sales team?"</p>
        <p>{arrow} Leisure: "We'd love to have you back — preferred rate available."</p>
      </Step>
    </>
  );

  const checkOutRight = (
    <>
      <Step icon="⭐" num="6" title="LOYALTY (LAST CHANCE)">
        <p><strong>If not a member:</strong></p>
        <p>{script(`"Before you go, I can quickly enroll you in ${loyaltyProgram} — it's free."`)}</p>
      </Step>
      <Step icon="🌟" num="7" title="REVIEW ASK (CRITICAL)">
        <p>{script('"If everything looked great, we\'d really appreciate a quick review."')}</p>
        <p>{check} This drives your scores &nbsp;{check} Say it confidently</p>
      </Step>
      <Step icon="🚗" num="8" title="CLOSE STRONG">
        <p>{script(`"You're all set, ${guestName}."`)}</p>
        <p>{script('"Thank you for staying with us — have a safe trip!"')}</p>
      </Step>
    </>
  );

  const printContent = (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: '16px', borderBottom: '3px solid #0f4c5c', paddingBottom: '12px' }}>
        <h1 style={{ fontSize: S.headingSize, fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
          {hotelName} — Front Desk Checklist
        </h1>
        <p style={{ fontSize: S.subtitleSize, color: '#64748b', margin: '3px 0 0', fontStyle: 'italic' }}>
          Every Guest. Every Time. No Exceptions.
        </p>
      </div>

      {/* CHECK-IN */}
      <div style={sectionStyle}>CHECK-IN</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: S.colGap, marginBottom: '18px' }}>
        <div>{checkInLeft}</div>
        <div>{checkInRight}</div>
      </div>

      <hr style={{ border: 'none', borderTop: '1.5px solid #e2e8f0', margin: '16px 0' }} />

      {/* CHECK-OUT */}
      <div style={sectionStyle}>CHECK-OUT — Fast. Friendly. Revenue Opportunity.</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: S.colGap }}>
        <div>{checkOutLeft}</div>
        <div>{checkOutRight}</div>
      </div>

      <div style={{ marginTop: '22px', fontSize: S.footerSize, color: '#94a3b8', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
        {hotelName} · Front Desk Checklist · Powered by ARS360 · Printed {new Date().toLocaleDateString()}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 180px)' }}>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Editor
        </button>
        <Button onClick={onPrint} className="bg-teal-500 hover:bg-teal-600 text-white rounded-full border-0 gap-2">
          <Download className="w-4 h-4" /> Download / Print PDF
        </Button>
      </div>

      {/* Scrollable paper preview that fills remaining height */}
      <div className="flex-1 bg-slate-200 rounded-xl overflow-auto p-6 min-h-0">
        <div
          ref={printRef}
          className="bg-white shadow-xl mx-auto"
          style={{ width: '100%', maxWidth: '900px', minHeight: '600px', padding: '48px' }}
        >
          {printContent}
        </div>
      </div>
    </div>
  );
}