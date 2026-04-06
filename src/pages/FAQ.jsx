import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    id: 'pricing',
    category: 'Pricing and subscription',
    title: 'Getting started',
    questions: [
      {
        q: 'What does it cost to get started?',
        a: 'There is a one-time setup fee of $500, which covers the pre-configured mobile device, stand, charger, and shipping. After setup, the monthly subscription is $250 per month billed annually, or $350 per month on a month-to-month basis. Both plans include analytics, reporting, and ongoing support.',
      },
      {
        q: 'Can I cancel my subscription at any time?',
        a: 'Yes, if you are on a month-to-month plan you can cancel at any time. We recommend giving Suniyo at least six months to see the full benefit of the insights and performance improvements.',
      },
      {
        q: 'Can reports be customized for our brand?',
        a: 'Yes. Customization of reports and metrics is available for hotel portfolios of 25 or more properties for an additional fee, allowing you to align insights with your brand standards and operational goals.',
      },
    ],
  },
  {
    id: 'setup',
    category: 'Setup and equipment',
    title: 'Installation and connectivity',
    questions: [
      {
        q: 'What equipment is installed at the front desk?',
        a: 'The setup is simple and non-intrusive. It includes a mobile phone pre-configured with the Suniyo app and a compact stand to securely position the device. The phone must remain powered on and connected to a power source at all times for uninterrupted operation.',
      },
      {
        q: 'Does it require special power or electrical setup?',
        a: 'No. The device uses a standard power outlet. No special electrical setup or IT involvement is needed.',
      },
      {
        q: 'Does it use our hotel Wi-Fi?',
        a: 'No. The device comes with a built-in eSIM providing dedicated mobile connectivity. There is no need to connect to hotel Wi-Fi, no additional setup is required, and there is no extra cost for data.',
      },
      {
        q: 'Does Suniyo offer training for our associates?',
        a: 'Yes. Suniyo provides short, easy-to-follow training videos designed to help front desk associates follow correct procedures, deliver consistent guest experiences, and align with your brand standards.',
      },
    ],
  },
  {
    id: 'reports',
    category: 'Reports and metrics',
    title: 'What Suniyo measures',
    questions: [
      {
        q: 'What does the daily report include?',
        a: 'Each day you receive a comprehensive dashboard covering check-in and check-out performance summaries, soft skills evaluation scores, detailed scoring for each guest interaction, and identification of operational issues at the front desk. These insights help you identify service gaps, improve staff performance, and track consistency across shifts.',
      },
      {
        q: 'What specific metrics are tracked?',
        a: 'Check-in metrics (10 total): Welcome, ID verification, credit card verification, loyalty recognition, name usage, amenities explanation, sales lead identification, upselling, review request, closing. Check-out metrics (4 total): Greeting, problem resolution, review request, closing. All metrics align with hospitality best practices and brand standards.',
      },
      {
        q: 'Does the device record 24/7?',
        a: 'Yes. The device is designed to remain always on and continuously captures front desk interactions across all shifts to ensure no service moment goes unanalyzed.',
      },
      {
        q: 'How long are recordings stored?',
        a: 'Audio recordings are retained for a minimum of 30 days.',
      },
    ],
  },
  {
    id: 'rewards',
    category: 'Associate rewards',
    title: 'Recognizing your team',
    questions: [
      {
        q: 'How does the associate rewards program work?',
        a: 'Hotels define a weekly bonus pool (for example, $200) and set a target performance score based on check-ins, check-outs, and soft skills. Suniyo\'s weekly report includes a ready-to-use template that calculates reward distribution based on performance scores, making it easy to recognize and motivate top performers.',
      },
    ],
  },
  {
    id: 'privacy',
    category: 'Privacy and compliance',
    title: 'Consent and legal requirements',
    questions: [
      {
        q: 'Are employee consent forms required?',
        a: 'Yes, ideally. Suniyo provides a sample employee consent form. We recommend including consent as part of the employee onboarding process, employee handbook, and signage at clock-in and clock-out areas. Hotels should always follow applicable local and state regulations.',
      },
      {
        q: 'Is guest consent required for recording?',
        a: 'In most U.S. states, guest consent is not required as long as the front desk associate has provided consent and is a party to the conversation. However, the following states require multi-party consent and visible signage: California, Connecticut, Delaware, Florida, Illinois, Maryland, Massachusetts, Montana, Nevada, New Hampshire, Oregon, Pennsylvania, Washington. For these states, hotels must display a clearly visible sign at the front desk stating: "Recording is in progress for training and quality assurance purposes." When prominently displayed, this is generally considered implied consent.',
      },
      {
        q: 'Do privacy laws apply to front desk recordings?',
        a: 'Hotel front desks are generally considered public interaction spaces. However, some states require employee and/or guest consent as described above. Hotels should always follow applicable local and state regulations.',
      },
    ],
  },
  {
    id: 'data',
    category: 'Data and security',
    title: 'How we protect your data',
    questions: [
      {
        q: 'How is guest personal information protected?',
        a: 'Before any AI processing, all personally identifiable information is removed, including names, payment details, and room numbers. Any sensitive or confidential information is filtered out. Suniyo follows industry-standard data security practices to ensure compliance with privacy standards while maintaining the accuracy of performance insights.',
      },
    ],
  },
];

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-slate-900 font-semibold text-base leading-snug group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <span className="mt-0.5 flex-shrink-0 text-blue-500">
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-slate-600 leading-relaxed text-sm">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('pricing');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    faqs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section style={{ backgroundColor: '#0A1628' }} className="pt-36 pb-20 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            FAQ
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
            Everything you need to know before you get started.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Questions about setup, pricing, privacy, and how Suniyo works day to day.
          </p>
        </div>
      </section>

      {/* FAQ Body */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex gap-12 items-start">

            {/* Sidebar */}
            <aside className="hidden md:block w-56 flex-shrink-0 sticky top-24">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Jump to</p>
              <nav className="flex flex-col gap-1">
                {faqs.map(({ id, category }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`text-left text-sm px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeCategory === id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {faqs.map(({ id, category, title, questions }) => (
                <div key={id} id={id} className="mb-16 scroll-mt-24">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">{category}</p>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">{title}</h2>
                  <div className="rounded-2xl border border-slate-200 px-6 divide-y divide-slate-200">
                    {questions.map((item, i) => (
                      <AccordionItem key={i} question={item.q} answer={item.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: '#0A1628' }} className="py-20 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Still have questions?
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Our team is happy to walk you through how Suniyo works at a property like yours.
          </p>
          <Link to="/Subscribe">
            <Button className="px-8 py-6 text-base font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg border-0 transition-all duration-200">
              Book a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}