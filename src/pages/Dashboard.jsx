import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, Clock } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem('suniyo_user') || '{}');

  const handleLogout = () => {
    sessionStorage.removeItem('suniyo_user');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
          USER DASHBOARD
        </h1>
        <p className="text-2xl font-bold text-blue-600 mb-4">COMING SOON</p>
        <p className="text-slate-500 mb-8">
          {user.name ? `Welcome, ${user.name}!` : 'Welcome!'} We're building something great for you.
        </p>
        <Button
          onClick={handleLogout}
          variant="outline"
          className="rounded-full border-slate-300 text-slate-600 hover:bg-slate-100"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </Button>
      </div>
    </div>
  );
}