'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Auto-logout hook based on session age stored in localStorage.
 * @param authKey       - localStorage key that holds the auth object (e.g. 'portalAuth')
 * @param redirectPath  - where to redirect after logout (e.g. '/portal/login')
 * @param timeoutMs     - session duration in milliseconds (default 30 min)
 */
export function useSessionTimeout(
  authKey: string,
  redirectPath: string,
  timeoutMs: number = 30 * 60 * 1000
) {
  const router = useRouter();

  useEffect(() => {
    const check = () => {
      const raw = localStorage.getItem(authKey);
      if (!raw) return;

      try {
        const auth = JSON.parse(raw);
        const loginTime: number = auth.loginTime ?? 0;
        const elapsed = Date.now() - loginTime;

        if (elapsed >= timeoutMs) {
          localStorage.removeItem(authKey);
          router.replace(redirectPath);
        }
      } catch {
        localStorage.removeItem(authKey);
        router.replace(redirectPath);
      }
    };

    // Check immediately on mount
    check();

    // Then check every 60 seconds
    const interval = setInterval(check, 60 * 1000);
    return () => clearInterval(interval);
  }, [authKey, redirectPath, timeoutMs, router]);
}
