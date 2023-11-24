import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
const inter = Inter({ subsets: ["latin"] });
export function AppContainer({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="no-touch">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
