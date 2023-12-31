import "./globals.css";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#282828]">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
