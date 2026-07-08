import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: Props) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (title) document.title = title;
  }, [title]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
