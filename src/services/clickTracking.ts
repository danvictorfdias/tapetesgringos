import { supabase } from '../lib/supabase';
import { getUTMParams, buildURLWithUTM } from '../utils/utm';

export interface ClickTrackingData {
  source_url: string;
  destination_url: string;
  button_location: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  user_agent?: string;
  referrer?: string;
}

function trackClickBeacon(
  destinationUrl: string,
  buttonLocation: string
): void {
  try {
    const utmParams = getUTMParams();
    const trackingData = {
      source_url: window.location.href,
      destination_url: destinationUrl,
      button_location: buttonLocation,
      ...utmParams,
      user_agent: navigator.userAgent,
      referrer: document.referrer || undefined,
    };

    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(trackingData)], {
        type: 'application/json',
      });
      const url = `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/click_tracking`;
      navigator.sendBeacon(url, blob);
    } else {
      fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/click_tracking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(trackingData),
        keepalive: true,
      }).catch(() => {});
    }
  } catch (error) {
  }
}

export async function trackClick(
  destinationUrl: string,
  buttonLocation: string,
  retries = 3
): Promise<void> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const utmParams = getUTMParams();

      const trackingData: ClickTrackingData = {
        source_url: window.location.href,
        destination_url: destinationUrl,
        button_location: buttonLocation,
        ...utmParams,
        user_agent: navigator.userAgent,
        referrer: document.referrer || undefined,
      };

      const { error } = await supabase.from('click_tracking').insert(trackingData);

      if (error) {
        lastError = error as Error;

        if (attempt < retries) {
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        throw error;
      }

      return;
    } catch (error) {
      lastError = error as Error;
    }
  }
}

export function trackAndRedirect(
  destinationUrl: string,
  buttonLocation: string,
  openInNewTab = true
): void {
  const urlWithUTM = buildURLWithUTM(destinationUrl);

  trackClickBeacon(urlWithUTM, buttonLocation);

  if (openInNewTab) {
    window.open(urlWithUTM, '_blank');
  } else {
    window.location.href = urlWithUTM;
  }
}
