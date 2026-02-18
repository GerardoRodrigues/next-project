import { Footer } from "../footer";
import { Header } from "../header";
import { Inter } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} relative flex flex-col dark min-h-screen bg-gray-700`}
    >
      <Header />
      <main className="flex flex-1 flex-col mb-12">{children}</main>
      <Footer />
    </div>
  );
}
