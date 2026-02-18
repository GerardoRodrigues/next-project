import { Footer } from "../footer";
import { Header } from "../header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col dark min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col mb-12">{children}</main>
      <Footer />
    </div>
  );
}
