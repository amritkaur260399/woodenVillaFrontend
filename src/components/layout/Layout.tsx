import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here

  return (
    <div className="mt-[-60px]">
      <Header />

      <div className="min-h-screen">{children}</div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
