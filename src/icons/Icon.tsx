import type { CSSProperties } from 'react';

import { I_PATHS } from './paths';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  bounce?: boolean;
}

export function Icon({ name, size = 18, color, className, style, bounce }: IconProps) {
  const node = I_PATHS[name];
  if (!node) return null;
  return (
    <svg
      className={(bounce ? 'i-bounce ' : '') + (className || '')}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        color: color || 'currentColor',
        display: 'inline-block',
        verticalAlign: '-0.18em',
        flex: 'none',
        ...(style || {}),
      }}
      fill="currentColor"
      aria-hidden="true"
    >
      {node}
    </svg>
  );
}
