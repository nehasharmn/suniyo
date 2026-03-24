import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft } from 'lucide-react';

const F = {
  heading: '30px',
  sub: '14px',
  section: '13px',
  stepTitle: '16px',
  body: '14px',
  footer: '11px',
};

export default function ChecklistPreview({ config, printRef, onPrint, onBack }) {
  const { hotelName, loyaltyProgram, upsellAmount, guestName } = config;

  const script = (text) => (
    <span style={{ fontStyle: 'italic', color: '#0e7490', fontWeight: 600 }}>{text}</span>
  );
  const check = <span style={{ color: '#16a34a', fontWeight: 700 }}>✔</span>;
  const arrow = <span style={{ color: '#64748b' }}>➜</span>;

  const Step = ({ icon, num, title, children }) => (
    <div style={{ display: 'flex', gap: '14px', marginBottom: '18px', alignItems: 'flex-start' }}>
      <div style={{
        minWidth: '44px', height: '44px', background: '#f0f9ff',
        borderRadius: '12px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '22px', flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: F.stepTitle, color: '#0f172a', marginBottom: '4px' }}>
          {num}. {title}
        </div>
        <div style={{ color: '#334155', lineHeight: 1.7, fontSize: F.body }}>{children}</div>
      </div>
    </div>
  );

  const PageHeader = ({ emoji, title, subtitle, accentColor }) => (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '20px',
      marginBottom: '28px', paddingBottom: '18px',
      borderBottom: `3px solid ${accentColor}`,
    }}>
      <div style={{
        width: '80px', height: '80px', background: accentColor + '18',
        borderRadius: '20px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '44px', flexShrink: 0,
      }}>
        {emoji}
      </div>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: accentColor, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
          {hotelName} · Front Desk Checklist
        </div>
        <h1 style={{ fontSize: F.heading, fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          {title}
        </h1>
        <p style={{ fontSize: F.sub, color: '#64748b', margin: '4px 0 0', fontStyle: 'italic' }}>{subtitle}</p>
      </div>
    </div>
  );

  const SectionLabel = ({ label, color }) => (
    <div style={{
      fontSize: F.section, fontWeight: 800, color: color,
      textTransform: 'uppercase', letterSpacing: '0.08em',
      borderBottom: `2px solid ${color}`, paddingBottom: '5px',
      marginBottom: '16px', marginTop: '4px',
    }}>
      {label}
    </div>
  );

  const Footer = ({ page }) => (
    <div style={{
      marginTop: '32px', fontSize: F.footer, color: '#94a3b8',
      textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '10px',
    }}>
      {hotelName} · Front Desk Checklist · Page {page} of 2 · Powered by ARS360 · {new Date().toLocaleDateString()}
    </div>
  );

  /* ── PAGE 1: CHECK-IN ── */
  const checkInPage = (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", padding: '48px', background: '#fff', minHeight: '297mm', pageBreakAfter: 'always' }}>
      <PageHeader emoji="🏨" title="Check-In Checklist" subtitle="Every Guest. Every Time. No Exceptions." accentColor="#0e7490" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div>
          <SectionLabel label="Arrival" color="#0e7490" />
          <Step icon="👋" num="1" title="Welcome — Start Strong">
            <p>{script(`"Welcome to ${hotelName} — how can I assist you today?"`)}</p>
            <p>{check} Smile &nbsp;{check} Eye contact &nbsp;{check} Confident tone</p>
          </Step>
          <Step icon="⭐" num="2" title="Loyalty Recognition">
            <p><strong>Member:</strong> {script(`"Welcome back, ${guestName} — thank you for being a member. Points or breakfast?"`)}</p>
            <p style={{ marginTop: '6px' }}><strong>Non-member:</strong> {script(`"We can enroll you in ${loyaltyProgram} — it's free."`)}</p>
          </Step>
          <Step icon="🪪" num="3" title="ID + Payment">
            <p>{script('"May I please see your photo ID?"')}</p>
            <p>{script('"And the card for your stay and incidentals?"')}</p>
            <p>{check} Smooth &nbsp;{check} No hesitation</p>
          </Step>
          <Step icon="💼" num="4" title="Sales Lead — MANDATORY">
            <p>{script(`"What brings you into town, ${guestName}?"`)}</p>
            <p>{arrow} Business → "Which company are you visiting?"</p>
            <p>{arrow} Leisure → "Have you been here before?"</p>
          </Step>
        </div>

        <div>
          <SectionLabel label="During Check-In" color="#0e7490" />
          <Step icon="🗣️" num="5" title="Use the Name">
            <p>{check} Minimum <strong>2–3 times</strong> &nbsp;{check} Natural, not forced</p>
            <p>{script(`"Absolutely, ${guestName}." · "Got it, ${guestName}.""`)}</p>
          </Step>
          <Step icon="💰" num="6" title="Upsell — Always Offer">
            <p>{script(`"We have a premium room with [benefit] for just $${upsellAmount} more — would you like to upgrade?"`)}</p>
            <p>{check} Focus on BENEFIT: space, view, kitchenette</p>
          </Step>
          <Step icon="🏊" num="7" title="Amenities — Keep It Short">
            <p>• Breakfast times &nbsp;&nbsp;• Gym / Pool location</p>
            <p>• Elevator direction</p>
            <p>🚫 Do NOT overload the guest</p>
          </Step>
          <Step icon="✅" num="8" title="Close Strong">
            <p>{script(`"You're all set, ${guestName} — room [###].""`)}</p>
            <p>{script('"Is there anything else I can take care of for you?"')}</p>
            <p>{script('"Enjoy your stay!"')}</p>
          </Step>
          <Step icon="⭐" num="9" title="Review Request">
            <p>{script("\"If everything looks great, we'd really appreciate a positive review.\"")} </p>
            <p>{check} Say it with confidence — it drives your scores</p>
          </Step>
        </div>
      </div>

      <Footer page="1" />
    </div>
  );

  /* ── PAGE 2: CHECK-OUT ── */
  const checkOutPage = (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", padding: '48px', background: '#fff', minHeight: '297mm' }}>
      <PageHeader emoji="🚀" title="Check-Out Checklist" subtitle="Fast. Friendly. Revenue Opportunity." accentColor="#0f766e" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div>
          <SectionLabel label="Opening" color="#0f766e" />
          <Step icon="👋" num="1" title="Greet + Acknowledge">
            <p>{script(`"Good morning, ${guestName} — checking out today?"`)}</p>
            <p>{check} Smile &nbsp;{check} Eye contact &nbsp;{check} Use name immediately</p>
          </Step>
          <Step icon="🧾" num="2" title="Confirm the Stay">
            <p>{script('"How was your stay with us?"')}</p>
            <p>{check} Listen carefully &nbsp;{check} Flag issues immediately</p>
          </Step>
          <Step icon="⚠️" num="3" title="Issue Recovery — If Needed">
            <p>{script('"I\'m sorry to hear that — let me take care of it right away."')}</p>
            <p>{check} Own it. Empathise. Escalate if needed.</p>
            <p>✗ Do NOT argue or dismiss</p>
          </Step>
          <Step icon="💳" num="4" title="Bill Review — Clear + Confident">
            <p>{script('"Here\'s a quick review of your folio."')}</p>
            <p>{check} Room charges &nbsp;{check} Incidentals &nbsp;{check} No surprises</p>
          </Step>
          <Step icon="💼" num="5" title="Sales Lead — Don't Miss It">
            <p>{script('"Will you be traveling back to the area?"')}</p>
            <p>{arrow} Business: "Would you like me to connect you with our sales team?"</p>
            <p>{arrow} Leisure: "We'd love to have you back — preferred rate available."</p>
          </Step>
        </div>

        <div>
          <SectionLabel label="Closing Strong" color="#0f766e" />
          <Step icon="⭐" num="6" title="Loyalty — Last Chance">
            <p><strong>If not yet a member:</strong></p>
            <p>{script(`"Before you go, I can quickly enroll you in ${loyaltyProgram} — it's free."`)}</p>
          </Step>
          <Step icon="🌟" num="7" title="Review Ask — CRITICAL">
            <p>{script('"If everything looked great, we\'d really appreciate a quick review."')}</p>
            <p>{check} This drives your scores &nbsp;{check} Say it confidently</p>
          </Step>
          <Step icon="🚗" num="8" title="Close Strong — Safe Travels">
            <p>{script(`"You're all set, ${guestName}."`)}</p>
            <p>{script('"Thank you for staying with us — have a safe trip!"')}</p>
            <p>{check} Warm farewell &nbsp;{check} Make it memorable</p>
          </Step>
        </div>
      </div>

      <Footer page="2" />
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
          <Download className="w-4 h-4" /> Download / Print PDF (2 pages)
        </Button>
      </div>

      {/* Scrollable preview */}
      <div className="flex-1 bg-slate-200 rounded-xl overflow-auto p-6 min-h-0">
        <div ref={printRef} className="mx-auto" style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">{checkInPage}</div>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">{checkOutPage}</div>
        </div>
      </div>
    </div>
  );
}