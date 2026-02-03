import { useInView } from '../hooks/useInView';
import type { RefObject } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
};

export default function AnimateIn({ children, className = '', direction = 'up' }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const base = 'transition-all duration-600 ease-out';
  const visible = inView ? 'opacity-100 translate-y-0 translate-x-0' : '';
  const hidden =
    direction === 'left'
      ? 'opacity-0 -translate-x-8'
      : direction === 'right'
        ? 'opacity-0 translate-x-8'
        : 'opacity-0 translate-y-6';
  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={`${base} ${inView ? visible : hidden} ${className}`.trim()}>
      {children}
    </div>
  );
}
