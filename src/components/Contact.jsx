import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Mail } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import PaymentStep from './PaymentStep';

export default function Contact() {
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', hotel_company: '', num_devices: 1 });
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.first_name.trim()) errors.first_name = 'First name is required';
    if (!formData.last_name.trim()) errors.last_name = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email address';
    if (!formData.hotel_company.trim()) errors.hotel_company = 'Company is required';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (parseInt(captchaAnswer) !== captchaNum1 + captchaNum2) {
      setCaptchaError('Incorrect answer. Please try again.');
      return;
    }
    setCaptchaError('');
    setIsSubmitting(true);
    try {
      const fullPhoneNumber = phoneNumber.trim() ? `${countryCode} ${phoneNumber}` : '';
      const name = `${formData.first_name} ${formData.last_name}`.trim();
      await base44.entities.PilotRequest.create({ ...formData, name, phone: fullPhoneNumber });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    }
    setIsSubmitting(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) setFieldErrors(prev => ({ ...prev, [field]: '' }));
  };

  const inputClass = "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-400 focus:ring-teal-400";
  const errorClass = "border-red-400 focus:border-red-400 focus:ring-red-400";

  if (isSubmitted) {
    return (
      <section className="py-24 bg-white min-h-[60vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-teal-500" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Check Your Email</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              We've sent an account setup link to <strong>{formData.email}</strong>. Click the link in the email to create your password and finish setting up your account.
            </p>
            <p className="text-sm text-slate-400">Didn't receive it? Check your spam folder.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-extrabold text-teal-500 mb-2 tracking-tight">Subscribe</h2>
          <p className="text-base text-slate-500">Every guest interaction tells a story. Let's ensure yours is positive.</p>
        </div>

        <div id="contact" className="max-w-2xl mx-auto scroll-mt-24">
          <Card className="border border-slate-100 shadow-lg bg-white">
            <CardContent className="px-8 py-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="first_name" className="text-slate-700 font-medium text-sm">First Name *</Label>
                    <Input id="first_name" value={formData.first_name} onChange={(e) => handleChange('first_name', e.target.value)} className={`${inputClass} ${fieldErrors.first_name ? errorClass : ''}`} />
                    {fieldErrors.first_name && <p className="text-xs text-red-500">{fieldErrors.first_name}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="last_name" className="text-slate-700 font-medium text-sm">Last Name *</Label>
                    <Input id="last_name" value={formData.last_name} onChange={(e) => handleChange('last_name', e.target.value)} className={`${inputClass} ${fieldErrors.last_name ? errorClass : ''}`} />
                    {fieldErrors.last_name && <p className="text-xs text-red-500">{fieldErrors.last_name}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-slate-700 font-medium text-sm">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={`${inputClass} ${fieldErrors.email ? errorClass : ''}`} />
                    {fieldErrors.email && <p className="text-xs text-red-500">{fieldErrors.email}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="text-slate-700 font-medium text-sm">Phone No</Label>
                    <div className="flex gap-2">
                      <Select value={countryCode} onValueChange={setCountryCode}>
                        <SelectTrigger className={`w-24 ${inputClass}`}><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+1">+1 (US)</SelectItem>
                          <SelectItem value="+44">+44 (UK)</SelectItem>
                          <SelectItem value="+1 (CA)">+1 (CA)</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input id="phone" type="tel" value={phoneNumber} onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
                        const formatted = digits.length <= 3 ? digits : digits.length <= 6 ? `${digits.slice(0,3)}-${digits.slice(3)}` : `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`;
                        setPhoneNumber(formatted);
                      }} className={`flex-1 ${inputClass}`} placeholder="111-111-1111" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="hotel_company" className="text-slate-700 font-medium text-sm">Company *</Label>
                    <Input id="hotel_company" value={formData.hotel_company} onChange={(e) => handleChange('hotel_company', e.target.value)} className={`${inputClass} ${fieldErrors.hotel_company ? errorClass : ''}`} />
                    {fieldErrors.hotel_company && <p className="text-xs text-red-500">{fieldErrors.hotel_company}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="num_devices" className="text-slate-700 font-medium text-sm">Number of Devices *</Label>
                    <Input id="num_devices" type="number" min="1" value={formData.num_devices} onChange={(e) => handleChange('num_devices', Math.max(1, parseInt(e.target.value) || 1))} className={inputClass} />
                  </div>
                </div>

                <div className="flex items-end gap-3">
                  <div className="space-y-1 flex-1">
                    <Label htmlFor="captcha" className="text-slate-700 font-medium text-sm">What is {captchaNum1} + {captchaNum2}? *</Label>
                    <Input id="captcha" type="number" value={captchaAnswer} onChange={(e) => setCaptchaAnswer(e.target.value)} className={inputClass} />
                    {captchaError && <p className="text-xs text-red-500">{captchaError}</p>}
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="px-8 py-2 font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md transition-all duration-300 border-0 whitespace-nowrap">
                    {isSubmitting ? 'Submitting...' : (<>Submit <Send className="ml-2 w-4 h-4" /></>)}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}