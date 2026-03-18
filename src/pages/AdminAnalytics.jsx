import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Eye, Monitor, Smartphone, Globe, Lock, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ADMIN_PASSWORD = 'ARS360admin!';

export default function AdminAnalytics() {
  const [authenticated, setAuthenticated] = useState(() => sessionStorage.getItem('ars360_admin_auth') === 'true');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  useEffect(() => {
    base44.entities.PageVisit.list('-created_date', 500).then(data => {
      setVisits(data);
      setLoading(false);
    });
  }, []);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white border border-slate-100 shadow-lg rounded-2xl p-10 w-full max-w-sm text-center">
          <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <Lock className="w-7 h-7 text-teal-500" />
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 mb-1">Admin Access</h2>
          <p className="text-sm text-slate-400 mb-6">Enter the password to view analytics.</p>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Password"
              value={passwordInput}
              onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false); }}
              className={`text-center ${passwordError ? 'border-red-400' : 'border-slate-200'}`}
              autoFocus
            />
            {passwordError && <p className="text-xs text-red-500">Incorrect password.</p>}
            <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-full border-0">
              Unlock
            </Button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-24">
      <div className="w-8 h-8 border-4 border-teal-200 border-t-teal-500 rounded-full animate-spin" />
    </div>
  );

  const totalVisits = visits.length;
  const uniqueVisitors = new Set(visits.map(v => v.visitor_email || v.user_agent)).size;
  const loggedInVisits = visits.filter(v => v.visitor_email).length;

  const pageCounts = visits.reduce((acc, v) => { acc[v.page] = (acc[v.page] || 0) + 1; return acc; }, {});
  const topPages = Object.entries(pageCounts).sort((a, b) => b[1] - a[1]);

  const deviceCounts = visits.reduce((acc, v) => { acc[v.device] = (acc[v.device] || 0) + 1; return acc; }, {});

  const knownVisitors = visits.filter(v => v.visitor_email);
  const uniqueEmails = [...new Set(knownVisitors.map(v => v.visitor_email))];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Site Analytics</h1>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          <Card className="bg-white border border-slate-100 shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">{totalVisits}</p>
                <p className="text-sm text-slate-500">Total Page Views</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border border-slate-100 shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">{uniqueVisitors}</p>
                <p className="text-sm text-slate-500">Unique Visitors</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border border-slate-100 shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">{loggedInVisits}</p>
                <p className="text-sm text-slate-500">Logged-In Visits</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Top Pages */}
          <Card className="bg-white border border-slate-100 shadow-sm">
            <CardHeader><CardTitle className="text-base font-bold text-slate-900">Top Pages</CardTitle></CardHeader>
            <CardContent className="px-6 pb-6 space-y-3">
              {topPages.map(([page, count]) => (
                <div key={page} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 font-mono truncate">{page || '/'}</span>
                  <span className="text-sm font-bold text-teal-600 ml-4 flex-shrink-0">{count} views</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Devices */}
          <Card className="bg-white border border-slate-100 shadow-sm">
            <CardHeader><CardTitle className="text-base font-bold text-slate-900">Devices</CardTitle></CardHeader>
            <CardContent className="px-6 pb-6 space-y-3">
              {Object.entries(deviceCounts).map(([device, count]) => (
                <div key={device} className="flex items-center gap-3">
                  {device === 'mobile' ? <Smartphone className="w-4 h-4 text-slate-400" /> : <Monitor className="w-4 h-4 text-slate-400" />}
                  <span className="text-sm text-slate-600 capitalize">{device}</span>
                  <div className="flex-1 bg-slate-100 rounded-full h-2">
                    <div className="bg-teal-400 h-2 rounded-full" style={{ width: `${(count / totalVisits) * 100}%` }} />
                  </div>
                  <span className="text-sm font-bold text-slate-700 w-8 text-right">{count}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Known Visitors */}
        {uniqueEmails.length > 0 && (
          <Card className="bg-white border border-slate-100 shadow-sm">
            <CardHeader><CardTitle className="text-base font-bold text-slate-900">Known Visitors (Logged-In Users)</CardTitle></CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="divide-y divide-slate-50">
                {uniqueEmails.map(email => {
                  const userVisits = visits.filter(v => v.visitor_email === email);
                  const lastVisit = userVisits[0]?.created_date;
                  return (
                    <div key={email} className="py-3 flex items-center justify-between">
                      <span className="text-sm text-slate-700 font-medium">{email}</span>
                      <div className="text-right">
                        <p className="text-sm font-bold text-teal-600">{userVisits.length} visits</p>
                        {lastVisit && <p className="text-xs text-slate-400">{new Date(lastVisit).toLocaleDateString()}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Visits */}
        <Card className="bg-white border border-slate-100 shadow-sm mt-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-bold text-slate-900">Recent Visits</CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 text-slate-600 border-slate-200"
              onClick={() => {
                const headers = ['Time', 'Page', 'Visitor', 'Device', 'OS / Browser', 'IP Address', 'City', 'Country'];
                const rows = visits.map(v => [
                  new Date(v.created_date).toLocaleString(),
                  v.page,
                  v.visitor_email || 'Anonymous',
                  v.device || '',
                  v.device_name || '',
                  v.ip_address || '',
                  v.city || '',
                  v.country || ''
                ]);
                const fmtTime = (d) => new Date(d).toLocaleString('en-US', { timeZone: 'America/New_York', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true }) + ' EST';
                rows.forEach((r, i) => r[0] = fmtTime(visits[i].created_date));
                const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
                const blob = new Blob([csv], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url; a.download = 'analytics.csv'; a.click();
                URL.revokeObjectURL(url);
              }}
            >
              <Download className="w-4 h-4" /> Export CSV
            </Button>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-2 text-slate-500 font-semibold text-xs uppercase tracking-wide">Time</th>
                    <th className="text-left py-3 px-2 text-slate-500 font-semibold text-xs uppercase tracking-wide">Page</th>
                    <th className="text-left py-3 px-2 text-slate-500 font-semibold text-xs uppercase tracking-wide">Visitor</th>
                    <th className="text-left py-3 px-2 text-slate-500 font-semibold text-xs uppercase tracking-wide">Device</th>
                    <th className="text-left py-3 px-2 text-slate-500 font-semibold text-xs uppercase tracking-wide">OS / Browser</th>
                    <th className="text-left py-3 px-2 text-slate-500 font-semibold text-xs uppercase tracking-wide">IP Address</th>
                    <th className="text-left py-3 px-2 text-slate-500 font-semibold text-xs uppercase tracking-wide">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {visits.slice(0, 50).map((visit, i) => (
                    <tr key={visit.id} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="py-3 px-2 text-slate-400 text-xs whitespace-nowrap">{new Date(visit.created_date).toLocaleString('en-US', { timeZone: 'America/New_York', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })} EST</td>
                      <td className="py-3 px-2 text-teal-600 font-mono text-xs font-medium">{visit.page}</td>
                      <td className="py-3 px-2 text-slate-700 text-xs">{visit.visitor_email || <span className="text-slate-400 italic">Anonymous</span>}</td>
                      <td className="py-3 px-2 text-xs capitalize">
                        <span className="inline-flex items-center gap-1 text-slate-600">
                          {visit.device === 'mobile' ? <Smartphone className="w-3 h-3" /> : <Monitor className="w-3 h-3" />}
                          {visit.device}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-slate-500 text-xs whitespace-nowrap">{visit.device_name || '—'}</td>
                      <td className="py-3 px-2 text-slate-500 text-xs font-mono">{visit.ip_address || '—'}</td>
                      <td className="py-3 px-2 text-slate-500 text-xs whitespace-nowrap">{[visit.city, visit.country].filter(Boolean).join(', ') || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}