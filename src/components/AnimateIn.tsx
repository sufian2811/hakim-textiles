import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import type { RefObject } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
};

const SMALL_VIEWPORT_MEDIA = '(max-width: 1023px)';

export default function AnimateIn({ children, className = '', direction = 'up' }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(SMALL_VIEWPORT_MEDIA);
    setIsSmallViewport(mq.matches);
    const handler = () => setIsSmallViewport(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const showContent = inView || isSmallViewport;
  const base = 'transition-all duration-600 ease-out';
  const visible = 'opacity-100 translate-y-0 translate-x-0';
  const hidden =
    direction === 'left'
      ? 'opacity-0 -translate-x-8'
      : direction === 'right'
        ? 'opacity-0 translate-x-8'
        : 'opacity-0 translate-y-6';
  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={`${base} ${showContent ? visible : hidden} ${className}`.trim()}>
      {children}
    </div>
  );
}
