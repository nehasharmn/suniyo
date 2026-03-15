import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@300;400;500&display=swap');

        :root {
          --background: #111827;
          --foreground: #F3F4F6;
          --card: #1F2937;
          --card-foreground: #F3F4F6;
          --popover: #1F2937;
          --popover-foreground: #F3F4F6;
          --primary: #06B6D4;
          --primary-foreground: #FFFFFF;
          --secondary: #374151;
          --secondary-foreground: #F3F4F6;
          --muted: #374151;
          --muted-foreground: #9CA3AF;
          --accent: #0891B2;
          --accent-foreground: #FFFFFF;
          --destructive: #DC2626;
          --destructive-foreground: #F3F4F6;
          --border: #374151;
          --input: #374151;
          --ring: #06B6D4;
          --radius: 0.75rem;
        }
        
        body {
          background-color: #111827;
          font-family: 'Roboto', sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
      <div className="bg-gray-900 text-white min-h-screen">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}