import "./globals.css";
import Link from "next/link";

import { ModalProvider } from "@/contexts/ModalContext";
import PrimaryHeader from "./components/PrimaryHeader";
import Sidenav from "./components/Sidenav";

export const metadata = {
  title: "Bet with bet365 - Live Online Betting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-xs leading-[0px] antialiased">
        <header>
          <PrimaryHeader />
        </header>
        <div className="flex flex-row">
          <Sidenav />
          <ModalProvider>
            <main className="w-full h-[calc(100vh-60px)] bg-[#545454]">
              {children}
            </main>
          </ModalProvider>
        </div>
      </body>
    </html>
  );
}
