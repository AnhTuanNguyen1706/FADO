import '@/styles/vendor-1.scss';
import type { Metadata } from 'next';

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
