import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import PaymentStep from './PaymentStep';

const solutionGoalOptions = [
  { value: 'improve_guest_satisfaction', label: 'Improve Guest Satisfaction' },
  { value: 'reward_recognize_performance', label: 'Reward & Recognize Associate Performance' },
  { value: 'visibility_to_issues', label: 'Visibility to Issues' }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', hotel_company: '', brand: '', solution_goals: [], urgency: '', message: '', num_devices: 1 });
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
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email address';
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
      await base44.entities.PilotRequest.create({ ...formData, phone: fullPhoneNumber });
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

  const handleGoalToggle = (goalValue, checked) => {
    setFormData(prev => ({
      ...prev,
      solution_goals: checked ? [...prev.solution_goals, goalValue] : prev.solution_goals.filter(g => g !== goalValue)
    }));
  };

  const inputClass = "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-teal-400 focus:ring-teal-400";
  const errorClass = "border-red-400 focus:border-red-400 focus:ring-red-400";

  if (isSubmitted) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-extrabold text-teal-500 mb-2 tracking-tight">Subscribe</h2>
            <p className="text-base text-slate-500">Almost there! Select your plan and complete your subscription.</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border border-slate-100 shadow-lg bg-white">
              <CardContent className="px-8 py-8">
                <PaymentStep formData={formData} />
              </CardContent>
            </Card>
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
                    <Label htmlFor="name" className="text-slate-700 font-medium text-sm">Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className={`${inputClass} ${fieldErrors.name ? errorClass : ''}`} />
                    {fieldErrors.name && <p className="text-xs text-red-500">{fieldErrors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-slate-700 font-medium text-sm">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={`${inputClass} ${fieldErrors.email ? errorClass : ''}`} />
                    {fieldErrors.email && <p className="text-xs text-red-500">{fieldErrors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="text-slate-700 font-medium text-sm">Phone</Label>
                    <div className="flex gap-2">
                      <Select value={countryCode} onValueChange={setCountryCode}>
                        <SelectTrigger className={`w-24 ${inputClass}`}><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+1">+1 (US)</SelectItem>
                          <SelectItem value="+44">+44 (UK)</SelectItem>
                          <SelectItem value="+1 (CA)">+1 (CA)</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input id="phone" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={`flex-1 ${inputClass}`} placeholder="555 123 4567" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="hotel_company" className="text-slate-700 font-medium text-sm">Company *</Label>
                    <Input id="hotel_company" value={formData.hotel_company} onChange={(e) => handleChange('hotel_company', e.target.value)} className={`${inputClass} ${fieldErrors.hotel_company ? errorClass : ''}`} />
                    {fieldErrors.hotel_company && <p className="text-xs text-red-500">{fieldErrors.hotel_company}</p>}
                  </div>
                </div>



                <div className="space-y-1">
                   <Label htmlFor="num_devices" className="text-slate-700 font-medium text-sm">No of Devices *</Label>
                   <Input id="num_devices" type="number" min="1" value={formData.num_devices} onChange={(e) => handleChange('num_devices', Math.max(1, parseInt(e.target.value) || 1))} className={inputClass} />
                 </div>

                <div className="space-y-1">
                   <Label htmlFor="message" className="text-slate-700 font-medium text-sm">Message</Label>
                   <Textarea id="message" rows={2} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Tell us about your property..." className={inputClass} />
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