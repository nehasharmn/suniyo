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

    // For every 1% (or 1-point) increase in satisfaction, there's a potential 1.42% increase in revenue.
    const calculatedIncrease = rev * (satIncrease * 0.0142);
    setRevenueIncrease(calculatedIncrease);
  }, [currentRevenue, satisfactionIncrease]);

  const handleInputChange = (setter) => (value) => {
    setter(value);
    // Only hide results when inputs change, not when calculate is pressed
    setShowResults(false);
  };

  const handleCalculate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address to see your results.');
      setShowResults(false);
    } else {
      setEmailError('');
      setShowResults(true);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const totalRevenue = (parseFloat(currentRevenue) || 0) + revenueIncrease;
  const overallIncreasePercent = currentRevenue && parseFloat(currentRevenue) !== 0 ? (revenueIncrease / parseFloat(currentRevenue)) * 100 : 0;

  return (
    <Card className="max-w-4xl mx-auto shadow-2xl bg-slate-800/50 backdrop-blur-md border border-white/20">
      <CardHeader className="text-center pb-6">
        <div className="w-16 h-16 bg-teal-400/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
          <TrendingUp className="w-8 h-8 text-teal-400" />
        </div>
        <CardTitle className="text-3xl font-bold text-white">Revenue Growth Estimator</CardTitle>
        <CardDescription className="text-slate-300 pt-2">
          Estimate the potential revenue lift from improving your guest satisfaction scores.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Input Fields */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-medium text-gray-300">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={`bg-slate-700 border-slate-600 text-white focus:border-teal-400 focus:ring-teal-400 ${emailError ? 'border-destructive' : ''}`}
                required
              />
              {emailError && <p className="text-sm text-destructive mt-1">{emailError}</p>}
            </div>
             <div className="space-y-2">
              <Label htmlFor="brand" className="font-medium text-gray-300">Hotel Brand</Label>
              <Input
                id="brand"
                value={brand}
                onChange={(e) => handleInputChange(setBrand)(e.target.value)}
                placeholder="e.g., Marriott, Hilton, etc."
                className="bg-slate-700 border-slate-600 text-white focus:border-teal-400 focus:ring-teal-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="room-count" className="font-medium text-gray-300">Room Count</Label>
              <Select value={roomCount} onValueChange={handleInputChange(setRoomCount)}>
                <SelectTrigger id="room-count" className="bg-slate-700 border-slate-600 text-white focus:border-teal-400 focus:ring-teal-400">
                  <SelectValue placeholder="Select room count" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600 text-white">
                  <SelectItem value="50-100">50 to 100</SelectItem>
                  <SelectItem value="101-125">101 to 125</SelectItem>
                  <SelectItem value="126+">126+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="current-revenue" className="font-medium text-gray-300">Current Annual Revenue</Label>
              <Select value={currentRevenue} onValueChange={handleInputChange(setCurrentRevenue)}>
                <SelectTrigger id="current-revenue" className="bg-slate-700 border-slate-600 text-white focus:border-teal-400 focus:ring-teal-400">
                  <SelectValue placeholder="Select revenue" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600 text-white">
                  {Array.from({ length: (10000000 - 1500000) / 500000 + 1 }, (_, i) => 1500000 + i * 500000).map((value) => (
                    <SelectItem key={value} value={String(value)}>
                      {formatCurrency(value)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="satisfaction-increase" className="font-medium text-gray-300">Customer Satisfaction Increase</Label>
              <Select value={satisfactionIncrease} onValueChange={handleInputChange(setSatisfactionIncrease)}>
                <SelectTrigger id="satisfaction-increase" className="bg-slate-700 border-slate-600 text-white focus:border-teal-400 focus:ring-teal-400">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600 text-white">
                  {[...Array(20)].map((_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      {i + 1}%
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Results */}
          <div className="bg-black/20 rounded-2xl p-8 space-y-6 h-full flex flex-col justify-center border border-slate-600">
            {showResults ? (
              <>
                <div className="text-center">
                  <Label className="text-sm font-medium text-slate-400">Estimated Annual Revenue Increase</Label>
                  <p className="text-4xl font-bold text-teal-400 mt-2">
                    {formatCurrency(revenueIncrease)}
                  </p>
                </div>
                <div className="text-center">
                  <Label className="text-sm font-medium text-slate-400">Overall Increase in Revenue %</Label>
                  <p className="text-2xl font-semibold text-cyan-400 mt-2">
                    {overallIncreasePercent.toFixed(1)}%
                  </p>
                </div>
                <div className="text-center">
                  <Label className="text-sm font-medium text-slate-400">New Estimated Total Revenue</Label>
                  <p className="text-2xl font-semibold text-white mt-2">
                    {formatCurrency(totalRevenue)}
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center flex flex-col items-center justify-center h-full gap-6">
                <div className="w-24 h-24 bg-teal-400/10 rounded-full flex items-center justify-center border-4 border-teal-400/20">
                    <Calculator className="w-12 h-12 text-teal-400" />
                </div>
                <div className="text-slate-400">
                  <p className="font-medium text-lg text-white">Your Growth Potential</p>
                  <p className="text-sm mt-1">Fill out the form to estimate your revenue increase.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-4 p-8 pt-0">
        <Button onClick={handleCalculate} size="lg" className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-teal-500/20 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
          <Calculator className="mr-2 h-5 w-5" />
          Calculate My Revenue Growth
        </Button>
        <p className="text-xs text-slate-400 italic text-center w-full pt-4">
          *These estimates are based on Cornell's study of impact of higher customer satisfaction on Revenue, which found a one-point increase in review score can boost RevPAR by up to 1.42%.
        </p>
      </CardFooter>
    </Card>
  );
}