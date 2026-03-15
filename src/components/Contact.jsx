
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hotel_company: '',
    brand: '',
    solution_goals: [],
    urgency: '',
    message: ''
  });
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({}); // New state for field-specific errors

  useEffect(() => {
    setCaptchaNum1(Math.floor(Math.random() * 10) + 1);
    setCaptchaNum2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.hotel_company.trim()) {
      errors.hotel_company = 'Hotel/Company name is required';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (parseInt(captchaAnswer) !== captchaNum1 + captchaNum2) {
      setCaptchaError('Incorrect answer. Please try again.');
      return;
    }
    setCaptchaError('');

    setIsSubmitting(true);

    try {
      const fullPhoneNumber = phoneNumber.trim() ? `${countryCode} ${phoneNumber}` : '';
      const submissionData = {
        ...formData,
        phone: fullPhoneNumber,
      };
      
      // Create the pilot request
      await PilotRequest.create(submissionData);

      // Try to send notification email, but don't let it block success
      try {
        const emailBody = `
A new pilot program request has been submitted for ARS360.

Here are the details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${fullPhoneNumber || 'Not provided'}
- Hotel/Company: ${formData.hotel_company}
- Brand: ${formData.brand || 'Not specified'}
- Solution Goals: ${formData.solution_goals.map(goal => solutionGoalOptions.find(opt => opt.value === goal)?.label || goal).join(', ') || 'None selected'}
- Urgency: ${formData.urgency || 'Not specified'}
- Message: ${formData.message || 'No additional message'}

You can view this request in your dashboard.
        `;

        await SendEmail({
          to: 'psharma@suniyo.ai', // Target email for notifications
          subject: 'New ARS360 Pilot Program Request',
          body: emailBody
        });
      } catch (emailError) {
        // Log the email error to the console for debugging, but don't show an alert to the user.
        console.error('Email notification failed, but the request was saved successfully. Error:', emailError);
      }

      // Mark as submitted regardless of email outcome
      setIsSubmitted(true);
    } catch (error) {
      // This will now only catch errors from PilotRequest.create()
      console.error('Error submitting form data:', error);
      alert('There was an error submitting your request. Please try again.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleGoalToggle = (goalValue, checked) => {
    setFormData(prev => ({
      ...prev,
      solution_goals: checked
        ? [...prev.solution_goals, goalValue]
        : prev.solution_goals.filter(goal => goal !== goalValue)
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div id="contact" className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You for Your Request!
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              We've received your pilot program request and someone will reach back out to you soon to discuss how ARS<sup>360</sup> can help your property.
            </p>
            {/* Added "What's Next" section */}
            <div className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border-white/10">
              <p className="text-gray-300 mb-2">
                <strong>What's Next:</strong>
              </p>
              <ul className="text-center text-gray-400 space-y-2 list-none">
                <li>We'll contact you to schedule a brief discovery call</li>
                <li>You'll receive a customized pilot program proposal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Every guest interaction tells a story.
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Let's ensure yours is positive.
          </p>
        </div>

        <div id="contact" className="max-w-2xl mx-auto scroll-mt-24">
          <Card className="border-white/20 bg-slate-800/50 backdrop-blur-md shadow-2xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-white">
                Request Pilot Access
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300 font-medium">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400 ${fieldErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      required
                    />
                    {fieldErrors.name && <p className="text-sm text-red-500">{fieldErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300 font-medium">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400 ${fieldErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      required
                    />
                    {fieldErrors.email && <p className="text-sm text-red-500">{fieldErrors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300 font-medium">Phone Number</Label>
                  <div className="flex gap-2">
                    <Select value={countryCode} onValueChange={setCountryCode}>
                      <SelectTrigger className="w-24 bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600 text-white">
                        <SelectItem value="+1">+1 (US)</SelectItem>
                        <SelectItem value="+44">+44 (UK)</SelectItem>
                        <SelectItem value="+1 (CA)">+1 (CA)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                      placeholder="555 123 4567"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hotel_company" className="text-gray-300 font-medium">Hotel / Company *</Label>
                  <Input
                    id="hotel_company"
                    value={formData.hotel_company}
                    onChange={(e) => handleChange('hotel_company', e.target.value)}
                    className={`bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400 ${fieldErrors.hotel_company ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    required
                  />
                  {fieldErrors.hotel_company && <p className="text-sm text-red-500">{fieldErrors.hotel_company}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brand" className="text-gray-300 font-medium">What Brand is your hotel?</Label>
                  <Select value={formData.brand} onValueChange={(value) => handleChange('brand', value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400">
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600 text-white">
                      <SelectItem value="Marriott">Marriott</SelectItem>
                      <SelectItem value="Hilton">Hilton</SelectItem>
                      <SelectItem value="IHG">IHG</SelectItem>
                      <SelectItem value="Choice">Choice</SelectItem>
                      <SelectItem value="Wyndham">Wyndham</SelectItem>
                      <SelectItem value="Independent">Independent</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label className="text-gray-300 font-medium">What would you like to get this solution for? (Select all that apply)</Label>
                  <div className="space-y-3">
                    {solutionGoalOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.value}
                          checked={formData.solution_goals.includes(option.value)}
                          onCheckedChange={(checked) => handleGoalToggle(option.value, checked)}
                          className="border-slate-500 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black"
                        />
                        <Label
                          htmlFor={option.value}
                          className="text-sm font-normal text-gray-300 cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency" className="text-gray-300 font-medium">How urgent is your interest?</Label>
                  <Select value={formData.urgency} onValueChange={(value) => handleChange('urgency', value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400">
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600 text-white">
                      <SelectItem value="immediate">Immediate (within 1 week)</SelectItem>
                      <SelectItem value="within_month">Within a month</SelectItem>
                      <SelectItem value="within_quarter">Within this quarter</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300 font-medium">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your property and any specific questions..."
                    className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="captcha" className="text-gray-300 font-medium">
                    Simple Captcha: What is {captchaNum1} + {captchaNum2}? *
                  </Label>
                  <Input
                    id="captcha"
                    type="number"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                    required
                  />
                  {captchaError && <p className="text-sm text-red-500">{captchaError}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white rounded-full shadow-xl hover:shadow-lg hover:shadow-teal-500/20 transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Submit Request
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
