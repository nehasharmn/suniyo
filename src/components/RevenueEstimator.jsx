import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RevenueEstimator() {
  const [brand, setBrand] = useState('');
  const [roomCount, setRoomCount] = useState('101-125');
  const [currentRevenue, setCurrentRevenue] = useState('5000000');
  const [satisfactionIncrease, setSatisfactionIncrease] = useState('5');
  const [email, setEmail] = useState('');
  const [revenueIncrease, setRevenueIncrease] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const rev = parseFloat(currentRevenue) || 0;
    const satIncrease = parseFloat(satisfactionIncrease) || 0;
    setRevenueIncrease(rev * (satIncrease * 0.0142));
  }, [currentRevenue, satisfactionIncrease]);

  const handleInputChange = (setter) => (value) => { setter(value); setShowResults(false); };

  const handleCalculate = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address to see your results.');
      setShowResults(false);
    } else {
      setEmailError('');
      setShowResults(true);
    }
  };

  const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
  const totalRevenue = (parseFloat(currentRevenue) || 0) + revenueIncrease;
  const overallIncreasePercent = currentRevenue && parseFloat(currentRevenue) !== 0 ? (revenueIncrease / parseFloat(currentRevenue)) * 100 : 0;

  const inputClass = "bg-white border-slate-200 text-slate-900 focus:border-blue-400 focus:ring-blue-400";

  return (
    <Card className="max-w-4xl mx-auto shadow-md bg-white border border-slate-100">
      <CardHeader className="text-center pb-4 pt-8">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-3 mx-auto">
          <TrendingUp className="w-6 h-6 text-blue-500" />
        </div>
        <CardTitle className="text-2xl font-extrabold text-slate-900 tracking-tight">Revenue Growth Estimator</CardTitle>
        <CardDescription className="text-slate-500 pt-1">
          Estimate the potential revenue lift from improving your guest satisfaction scores.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="space-y-1.5">
              <Label className="font-medium text-slate-700 text-sm">Email Address</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className={`${inputClass} ${emailError ? 'border-red-400' : ''}`} />
              {emailError && <p className="text-xs text-red-500">{emailError}</p>}
            </div>
            <div className="space-y-1.5">
              <Label className="font-medium text-slate-700 text-sm">Hotel Brand</Label>
              <Input value={brand} onChange={(e) => handleInputChange(setBrand)(e.target.value)} placeholder="e.g., Marriott, Hilton" className={inputClass} />
            </div>
            <div className="space-y-1.5">
              <Label className="font-medium text-slate-700 text-sm">Room Count</Label>
              <Select value={roomCount} onValueChange={handleInputChange(setRoomCount)}>
                <SelectTrigger className={inputClass}><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="50-100">50 to 100</SelectItem>
                  <SelectItem value="101-125">101 to 125</SelectItem>
                  <SelectItem value="126+">126+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="font-medium text-slate-700 text-sm">Current Annual Revenue</Label>
              <Select value={currentRevenue} onValueChange={handleInputChange(setCurrentRevenue)}>
                <SelectTrigger className={inputClass}><SelectValue /></SelectTrigger>
                <SelectContent>
                  {Array.from({ length: (10000000 - 1500000) / 500000 + 1 }, (_, i) => 1500000 + i * 500000).map((value) => (
                    <SelectItem key={value} value={String(value)}>{formatCurrency(value)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="font-medium text-slate-700 text-sm">Satisfaction Increase (%)</Label>
              <Select value={satisfactionIncrease} onValueChange={handleInputChange(setSatisfactionIncrease)}>
                <SelectTrigger className={inputClass}><SelectValue /></SelectTrigger>
                <SelectContent>
                  {[...Array(20)].map((_, i) => <SelectItem key={i + 1} value={String(i + 1)}>{i + 1}%</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 flex flex-col justify-center border border-slate-100">
            {showResults ? (
              <div className="space-y-6 text-center">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Estimated Annual Revenue Increase</p>
                  <p className="text-4xl font-extrabold text-blue-600">{formatCurrency(revenueIncrease)}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Overall Revenue Increase</p>
                  <p className="text-2xl font-bold text-cyan-500">{overallIncreasePercent.toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">New Estimated Total Revenue</p>
                  <p className="text-xl font-bold text-slate-800">{formatCurrency(totalRevenue)}</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-blue-400" />
                </div>
                <p className="font-semibold text-slate-800 mb-1">Your Growth Potential</p>
                <p className="text-sm text-slate-400">Fill out the form and click calculate.</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-3 px-8 pb-8 pt-0">
        <Button onClick={handleCalculate} size="lg" className="w-full py-5 text-base font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-full border-0 shadow-sm transition-all duration-300">
          <Calculator className="mr-2 h-5 w-5" />
          Calculate My Revenue Growth
        </Button>
        <p className="text-xs text-slate-400 italic text-center">
          *Estimates based on Cornell's study: a one-point increase in review score can boost RevPAR by up to 1.42%.
        </p>
      </CardFooter>
    </Card>
  );
}