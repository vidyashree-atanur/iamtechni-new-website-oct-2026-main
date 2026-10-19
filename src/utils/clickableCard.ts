import type { KeyboardEvent } from 'react';

/**
 * Props that let a clickable card (div/article) behave like a button for keyboard
 * and screen-reader users: focusable with Tab, activated with Enter or Space.
 * Keys pressed inside nested controls (inner buttons/links) are left alone.
 */
export const clickableCardProps = (onActivate: () => void, label?: string) => ({
  role: 'button' as const,
  tabIndex: 0,
  'aria-label': label,
  onClick: onActivate,
  onKeyDown: (e: KeyboardEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onActivate();
    }
  }
});
