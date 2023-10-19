import "./globals.css";
import { Inter } from "next/font/google";
import { ScrollProvider } from "./context/scrollContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PortFolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
