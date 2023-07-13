import { Suspense } from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Header />
      {children}
      <Footer />
    </Suspense>
  );
}
