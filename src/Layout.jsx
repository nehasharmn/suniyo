import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@300;400;500&display=swap');

        :root {
          --background: 0 0% 100%;
          --foreground: 222 47% 11%;
          --card: 0 0% 100%;
          --card-foreground: 222 47% 11%;
          --popover: 0 0% 100%;
          --popover-foreground: 222 47% 11%;
          --primary: 187 100% 42%;
          --primary-foreground: 0 0% 100%;
          --secondary: 210 40% 96%;
          --secondary-foreground: 222 47% 11%;
          --muted: 210 40% 96%;
          --muted-foreground: 215 16% 47%;
          --accent: 210 40% 96%;
          --accent-foreground: 222 47% 11%;
          --destructive: 0 84% 60%;
          --destructive-foreground: 0 0% 98%;
          --border: 214 32% 91%;
          --input: 214 32% 91%;
          --ring: 187 100% 42%;
          --radius: 0.75rem;
        }
        
        body {
          background-color: #ffffff;
          font-family: 'Roboto', sans-serif;
          color: #111827;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
      <div className="bg-white text-gray-900 min-h-screen">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}