import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { Varela_Round } from "next/font/google";
import "./globals.css";

const varelaRound = Varela_Round({ subsets: ["latin"], weight: '400' });

const APP_NAME = "Okay";
const APP_DEFAULT_TITLE = "Okay";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Your mental health it's Okay?";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbe5a8",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" dir="ltr" className={varelaRound.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
