import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ybit-black text-ybit-ivory">
        {children}
      </body>
    </html>
  );
}
