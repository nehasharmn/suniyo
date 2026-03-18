import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { base44 } from '@/api/base44Client';

function getDevice() {
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua)) return 'mobile';
  return 'desktop';
}

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const track = async () => {
      try {
        let visitor_email = '';
        try {
          const user = await base44.auth.me();
          if (user?.email) visitor_email = user.email;
        } catch (_) {}

        await base44.entities.PageVisit.create({
          page: location.pathname,
          visitor_email,
          user_agent: navigator.userAgent,
          referrer: document.referrer || 'direct',
          device: getDevice()
        });
      } catch (_) {}
    };
    track();
  }, [location.pathname]);
}