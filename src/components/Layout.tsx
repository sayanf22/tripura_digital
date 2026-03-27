import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <div className="mt-16" />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
