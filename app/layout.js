import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.scss";
import { Inter } from "next/font/google";
import BootstrapScripts from "./components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kinh te dau tu - Clone",
  description: "Using Next.js with Bootstrap + SCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BootstrapScripts />
      </body>
    </html>
  );
}
