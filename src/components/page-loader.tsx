'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    
    // Hide loader after a short delay to simulate completion
    // In App Router, we can't easily detect "load complete" for all chunks,
    // so we use a natural feeling timeout or trigger on pathname change.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full z-[300] pointer-events-none"
        >
          {/* Progress Bar Container */}
          <div className="h-1 w-full bg-transparent overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="h-full w-full bg-gradient-to-r from-primary via-secondary to-primary shadow-[0_0_15px_rgba(0,174,239,0.9)]"
            />
          </div>

          {/* Corner Spinner */}
          <div className="absolute top-4 right-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-5 h-5 border-2 border-secondary/20 border-t-secondary rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
