import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Eye, EyeOff } from 'lucide-react';

export default function SetupAccount() {
  const params = new URLSearchParams(window.location.search);
  const emailFromLink = params.get('email') || '';

  const [userId, setUserId] = useState(emailFromLink);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const validate = () => {
    const errs = {};
    if (!userId.trim()) errs.userId = 'User ID is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userId)) errs.userId = 'User ID must be a valid email';
    if (!password) errs.password = 'Password is required';
    else if (password.length < 8) errs.password = 'Password must be at least 8 characters';
    if (!confirmPassword) errs.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) errs.confirmPassword = 'Passwords do not match';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      // Account setup is done — in a real integration this would call an auth API
      // Here we simulate success and show confirmation
      await new Promise(r => setTimeout(r, 800));
      setIsComplete(true);
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
    setIsSubmitting(false);
  };

  const inputClass = "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-400 focus:ring-teal-400";
  const errorClass = "border-red-400 focus:border-red-400 focus:ring-red-400";

  if (isComplete) {
    return (
      <section className="py-24 bg-white min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-teal-500" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Account Created!</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Your Suniyo account has been set up successfully. We'll be in touch shortly.
            </p>
            <p className="text-sm text-slate-400">Check your email for next steps.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto text-center mb-8">
          <h2 className="text-3xl font-extrabold text-teal-500 mb-2 tracking-tight">Create Your Account</h2>
          <p className="text-base text-slate-500">Set up your login credentials to access Suniyo.</p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border border-slate-100 shadow-lg bg-white">
            <CardContent className="px-8 py-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <Label htmlFor="userId" className="text-slate-700 font-medium text-sm">User ID (Email)</Label>
                  <Input
                    id="userId"
                    type="email"
                    value={userId}
                    onChange={(e) => { setUserId(e.target.value); setErrors(p => ({ ...p, userId: '' })); }}
                    className={`${inputClass} ${errors.userId ? errorClass : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.userId && <p className="text-xs text-red-500">{errors.userId}</p>}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="password" className="text-slate-700 font-medium text-sm">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setErrors(p => ({ ...p, password: '' })); }}
                      className={`${inputClass} ${errors.password ? errorClass : ''} pr-10`}
                      placeholder="Min. 8 characters"
                    />
                    <button type="button" onClick={() => setShowPassword(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="confirmPassword" className="text-slate-700 font-medium text-sm">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirm ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => { setConfirmPassword(e.target.value); setErrors(p => ({ ...p, confirmPassword: '' })); }}
                      className={`${inputClass} ${errors.confirmPassword ? errorClass : ''} pr-10`}
                      placeholder="Re-enter password"
                    />
                    <button type="button" onClick={() => setShowConfirm(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                      {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword}</p>}
                  {password && confirmPassword && password === confirmPassword && (
                    <p className="text-xs text-teal-600 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Passwords match</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md transition-all duration-300 border-0"
                >
                  {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}