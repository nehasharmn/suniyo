import React from 'react';
import PilotProgram from '../components/PilotProgram';
import Contact from '../components/Contact';

export default function PilotProgramPage() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <div>
      <PilotProgram onScrollToContact={scrollToContact} />
      <Contact />
    </div>
  );
}