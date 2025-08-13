'use client';

import { DarkModeProvider } from './DarkModeContext';

export default function ClientWrapper({ children }) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}
