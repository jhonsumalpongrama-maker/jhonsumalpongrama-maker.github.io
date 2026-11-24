import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const footerCode = {
  "/": 'console.log("Hello, world!");',
  "/about": 'return "Keep learning";',
  "/work": 'git commit -m "keep building"',
  "/contact": 'status = "available online";',
};

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on page change (like a real page load)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer code={footerCode[pathname] ?? footerCode["/"]} />
    </>
  );
}
