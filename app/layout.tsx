import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Playfair_Display } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageLoader } from "@/components/layout/page-loader";
import { PageTransition } from "@/components/layout/page-transition";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ybit Entertainment | Cinematic Event Production in Nairobi",
  description:
    "Premium event planning, public experiences, ticketing, and full-scale production by Ybit Entertainment in Westlands, Nairobi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased light`}
    >
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var savedTheme = localStorage.getItem('ybit-theme');
                var root = document.documentElement;

                if (savedTheme === 'dark') {
                  root.classList.remove('light');
                } else {
                  root.classList.add('light');
                }
              } catch (e) {
                document.documentElement.classList.add('light');
              }
            })();
          `}
        </Script>
      </head>
      <body className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)]">
        {/* <div className="noise-overlay" /> */}
        <PageLoader />
        <SmoothScroll>
          <SiteHeader />
          <main className="flex-1 overflow-x-clip">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}

