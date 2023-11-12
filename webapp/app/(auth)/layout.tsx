import React from 'react';
import AppBar from '@/components/layout/AppBar';
import Footer from '@/components/layout/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppBar hasLogo mode='simple' />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
