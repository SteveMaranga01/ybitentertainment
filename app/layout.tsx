import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ybit Entertainment | Premium Event Planning & Production",
  description:
    "Ybit Entertainment is a premium event organizing group based in Westlands, Nairobi. We specialize in weddings, festivals, birthdays, and corporate events.",
  keywords: [
    "event planning",
    "wedding planner",
    "festival production",
    "corporate events",
    "Nairobi events",
    "Westlands",
    "Ybit Entertainment",
  ],
  openGraph: {
    title: "Ybit Entertainment | Premium Event Planning & Production",
    description:
      "Premium event organizing group based in Westlands, Nairobi. Weddings, festivals, birthdays, and corporate events.",
    type: "website",
    locale: "en_US",
    siteName: "Ybit Entertainment",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
