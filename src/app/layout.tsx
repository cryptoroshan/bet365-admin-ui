import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
        />
      </body>
    </html>
  );
}
