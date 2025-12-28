import { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface TrackingEvent {
  id: string;
  timestamp: number;
  type: 'click' | 'redirect';
  destination: string;
  location: string;
  status: 'pending' | 'success' | 'error';
}

export default function TrackingDebug() {
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState<TrackingEvent[]>([]);

  useEffect(() => {
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    console.log = (...args: unknown[]) => {
      originalConsoleLog(...args);

      const message = args.join(' ');
      if (message.includes('[TRACKING]') || message.includes('[REDIRECT]')) {
        const event: TrackingEvent = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
          type: message.includes('[REDIRECT]') ? 'redirect' : 'click',
          destination: extractDestination(args),
          location: extractLocation(args),
          status: message.includes('✅') ? 'success' : 'pending',
        };

        setEvents(prev => [event, ...prev].slice(0, 10));
      }
    };

    console.error = (...args: unknown[]) => {
      originalConsoleError(...args);

      const message = args.join(' ');
      if (message.includes('[TRACKING]')) {
        const event: TrackingEvent = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
          type: 'click',
          destination: 'Error',
          location: 'Error',
          status: 'error',
        };

        setEvents(prev => [event, ...prev].slice(0, 10));
      }
    };

    return () => {
      console.log = originalConsoleLog;
      console.error = originalConsoleError;
    };
  }, []);

  return null;
}

function extractDestination(args: unknown[]): string {
  const str = JSON.stringify(args);
  const match = str.match(/"(?:destino|url_com_utm|url)":\s*"([^"]+)"/);
  return match ? match[1] : 'N/A';
}

function extractLocation(args: unknown[]): string {
  const str = JSON.stringify(args);
  const match = str.match(/"(?:localização|location)":\s*"([^"]+)"/);
  return match ? match[1] : 'N/A';
}
