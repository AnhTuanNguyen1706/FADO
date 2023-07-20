/* eslint-disable no-undef */

import type { Metadata } from 'next';
import './page.module.css'
import './global.css'
export const metadata: Metadata = {
  title: 'FadoVN',
  description: 'FadoVN Description'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
