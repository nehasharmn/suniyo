import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import usePageTracking from './hooks/usePageTracking';

function TrackingWrapper() {
  usePageTracking();
  return null;
}

export default function Layout({ children }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@600;700;800&display=swap');

        :root {
          --background: 0 0% 100%;
          --foreground: 220 25% 10%;
          --card: 0 0% 100%;
          --card-foreground: 220 25% 10%;
          --popover: 0 0% 100%;
          --popover-foreground: 220 25% 10%;
          --primary: 180 72% 40%;
          --primary-foreground: 0 0% 100%;
          --secondary: 210 20% 96%;
          --secondary-foreground: 220 25% 10%;
          --muted: 210 20% 96%;
          --muted-foreground: 215 16% 50%;
          --accent: 210 20% 96%;
          --accent-foreground: 220 25% 10%;
          --destructive: 0 84% 60%;
          --destructive-foreground: 0 0% 98%;
          --border: 214 20% 90%;
          --input: 214 20% 90%;
          --ring: 180 72% 40%;
          --radius: 0.75rem;
        }

        * { box-sizing: border-box; }
        
        body {
          background-color: #ffffff;
          font-family: 'Inter', sans-serif;
          color: #0f172a;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Sora', sans-serif;
          letter-spacing: -0.02em;
        }
      `}</style>
      <div className="bg-white text-slate-900 min-h-screen">
        <TrackingWrapper />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}