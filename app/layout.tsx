import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faren Architecture",
  description: "Where Creativity Meets Future-Ready Architecture",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${cabinetGrotesk.variable} ${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="container-main h-full">
            <div className="grid grid-cols-4 h-full opacity-30 border-x border-border">
              <div className="border-r border-border h-full"></div>
              <div className="border-r border-border h-full"></div>
              <div className="border-r border-border h-full"></div>
              {/* <div className="border-r border-border h-full"></ */}
              <div className="h-full"></div>
            </div>
          </div>
        </div>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
