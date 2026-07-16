import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to an element, plus a boolean that flips to true
 * the first time that element scrolls into view. Used to trigger the
 * counter and skill-bar animations only once.
 */
export default function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
