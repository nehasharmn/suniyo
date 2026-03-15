import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, CheckCircle } from 'lucide-react';
import { PilotRequest } from '@/entities/PilotRequest';
import { SendEmail } from '@/integrations/Core';

const solutionGoalOptions = [
  { value: 'improve_guest_satisfaction', label: 'Improve Guest Satisfaction' },
  { value: 'reward_recognize_performance', label: 'Reward & Recognize Associate Performance' },
  { value: 'visibility_to_issues', label: 'Visibility to Issues' }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', hotel_company: '', brand: '', solution_goals: [], urgency: '', message: '' });
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
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email address';
    if (!formData.hotel_company.trim()) errors.hotel_company = 'Hotel/Company name is required';
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
      await PilotRequest.create({ ...formData, phone: fullPhoneNumber });
      try {
        await SendEmail({
          to: 'psharma@suniyo.ai',
          subject: 'New ARS360 Pilot Program Request',
          body: `New pilot request:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${fullPhoneNumber || 'N/A'}\n- Hotel: ${formData.hotel_company}\n- Brand: ${formData.brand || 'N/A'}\n- Goals: ${formData.solution_goals.join(', ') || 'None'}\n- Urgency: ${formData.urgency || 'N/A'}\n- Message: ${formData.message || 'None'}`
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div id="contact" className="max-w-lg mx-auto text-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Thank You!</h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              We've received your pilot program request and will reach out soon to discuss how ARS<sup>360</sup> can help your property.
            </p>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-left">
              <p className="text-slate-700 font-semibold mb-2">What's Next:</p>
              <ul className="text-slate-500 text-sm space-y-1">
                <li>• We'll contact you to schedule a brief discovery call</li>
                <li>• You'll receive a customized pilot program proposal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Every guest interaction tells a story.
          </h2>
          <p className="text-lg text-slate-500">Let's ensure yours is positive.</p>
        </div>

        <div id="contact" className="max-w-2xl mx-auto scroll-mt-24">
          <Card className="border border-slate-100 shadow-lg bg-white">
            <CardHeader className="text-center pb-6 pt-8">
              <CardTitle className="text-xl font-bold text-slate-900">Request Pilot Access</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-slate-700 font-medium text-sm">Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className={`${inputClass} ${fieldErrors.name ? errorClass : ''}`} required />
                    {fieldErrors.name && <p className="text-xs text-red-500">{fieldErrors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-slate-700 font-medium text-sm">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className={`${inputClass} ${fieldErrors.email ? errorClass : ''}`} required />
                    {fieldErrors.email && <p className="text-xs text-red-500">{fieldErrors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-slate-700 font-medium text-sm">Phone Number</Label>
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

                <div className="space-y-1.5">
                  <Label htmlFor="hotel_company" className="text-slate-700 font-medium text-sm">Hotel / Company *</Label>
                  <Input id="hotel_company" value={formData.hotel_company} onChange={(e) => handleChange('hotel_company', e.target.value)} className={`${inputClass} ${fieldErrors.hotel_company ? errorClass : ''}`} required />
                  {fieldErrors.hotel_company && <p className="text-xs text-red-500">{fieldErrors.hotel_company}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="brand" className="text-slate-700 font-medium text-sm">Hotel Brand</Label>
                  <Select value={formData.brand} onValueChange={(value) => handleChange('brand', value)}>
                    <SelectTrigger className={inputClass}><SelectValue placeholder="Select brand" /></SelectTrigger>
                    <SelectContent>
                      {["Marriott","Hilton","IHG","Choice","Wyndham","Independent","Other"].map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium text-sm">What would you like to achieve? (Select all that apply)</Label>
                  <div className="space-y-2">
                    {solutionGoalOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-3">
                        <Checkbox
                          id={option.value}
                          checked={formData.solution_goals.includes(option.value)}
                          onCheckedChange={(checked) => handleGoalToggle(option.value, checked)}
                          className="border-slate-300 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                        />
                        <Label htmlFor={option.value} className="text-sm font-normal text-slate-600 cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="urgency" className="text-slate-700 font-medium text-sm">How urgent is your interest?</Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleChange('urgency', value)}>
                    <SelectTrigger className={inputClass}><SelectValue placeholder="Select urgency level" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (within 1 week)</SelectItem>
                      <SelectItem value="within_month">Within a month</SelectItem>
                      <SelectItem value="within_quarter">Within this quarter</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-slate-700 font-medium text-sm">Message</Label>
                  <Textarea id="message" rows={4} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Tell us about your property and any specific questions..." className={inputClass} />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="captcha" className="text-slate-700 font-medium text-sm">Quick check: What is {captchaNum1} + {captchaNum2}? *</Label>
                  <Input id="captcha" type="number" value={captchaAnswer} onChange={(e) => setCaptchaAnswer(e.target.value)} className={inputClass} required />
                  {captchaError && <p className="text-xs text-red-500">{captchaError}</p>}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-base font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md transition-all duration-300 border-0">
                  {isSubmitting ? 'Submitting...' : (<>Submit Request <Send className="ml-2 w-4 h-4" /></>)}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}