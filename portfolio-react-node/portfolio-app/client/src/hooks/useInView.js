import { useEffect, useRef, useState, useMemo } from 'react';

/**
 * Returns a ref to attach to an element, plus a boolean that flips to true
 * the first time that element scrolls into view. Used to trigger the
 * counter and skill-bar animations only once.
 */
export default function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const observerRef = useRef(null);

  // Memoize threshold to prevent unnecessary observer recreation
  const memoizedThreshold = useMemo(() => threshold, [threshold]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Clean up previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
          observerRef.current = null;
        }
      },
      { threshold: memoizedThreshold }
    );

    observerRef.current = observer;
    observer.observe(node);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [memoizedThreshold]);

  return [ref, inView];
}