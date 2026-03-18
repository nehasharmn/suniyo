import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { base44 } from '@/api/base44Client';

function getDevice() {
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua)) return 'mobile';
  return 'desktop';
}

function getDeviceName() {
  const ua = navigator.userAgent;
  let os = 'Unknown OS';
  if (/windows/i.test(ua)) os = 'Windows';
  else if (/mac os/i.test(ua)) os = 'macOS';
  else if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS';
  else if (/android/i.test(ua)) os = 'Android';
  else if (/linux/i.test(ua)) os = 'Linux';

  let browser = 'Unknown Browser';
  if (/chrome/i.test(ua) && !/edg/i.test(ua)) browser = 'Chrome';
  else if (/firefox/i.test(ua)) browser = 'Firefox';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';
  else if (/edg/i.test(ua)) browser = 'Edge';
  else if (/opr|opera/i.test(ua)) browser = 'Opera';

  return `${os} / ${browser}`;
}

function getOrCreateVisitorId() {
  const key = 'ars360_visitor_id';
  let id = document.cookie.split('; ').find(r => r.startsWith(key + '='))?.split('=')[1];
  if (!id) {
    id = 'v_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${key}=${id}; expires=${expires}; path=/; SameSite=Lax`;
  }
  return id;
}

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const track = async () => {
      try {
        const visitor_id = getOrCreateVisitorId();
        let visitor_email = '';
        try {
          const user = await base44.auth.me();
          if (user?.email) visitor_email = user.email;
        } catch (_) {}

        let ip_address = '', city = '', country = '';
        try {
          const geo = await fetch('https://ipapi.co/json/').then(r => r.json());
          ip_address = geo.ip || '';
          city = geo.city || '';
          country = geo.country_name || '';
        } catch (_) {}

        await base44.entities.PageVisit.create({
          page: location.pathname,
          visitor_email,
          user_agent: navigator.userAgent,
          referrer: document.referrer || 'direct',
          device: getDevice(),
          device_name: getDeviceName(),
          ip_address,
          domain: window.location.hostname,
          city,
          country
        });
      } catch (_) {}
    };
    track();
  }, [location.pathname]);
}