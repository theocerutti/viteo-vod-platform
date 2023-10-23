import React from "react";
import AppBar from "@/components/reusable/layout/AppBar";
import Footer from "@/components/reusable/layout/Footer";

const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <AppBar hasLogo mode="simple" />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
