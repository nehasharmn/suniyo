import React from 'react';
const benefits = [
  "Increase GSS/online review scores → leverage premium pricing",
  "Reduce negative feedback → avoid discounts due to reputation damage",
  "Improve consistency across shifts → make every stay excellent",
  "Empower new hires with actionable feedback → reduce training costs"
];

export default function Solution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-slate-900 text-center mb-6">How our platform helps you capture revenue upside:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-5 bg-teal-50 rounded-xl border border-teal-100">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-xs">{index + 1}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}