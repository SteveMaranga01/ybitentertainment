import type { Metadata } from "next";
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
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('ybit-theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else if (theme === 'dark') {
                    document.documentElement.classList.remove('light');
                  } else {
                    var mq = window.matchMedia('(prefers-color-scheme: light)');
                    if (mq.matches) {
                      document.documentElement.classList.add('light');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-ybit-black text-ybit-ivory">
        {/* <div className="noise-overlay" /> */}
        <PageLoader />
        <SmoothScroll>
          <SiteHeader />
          <main className="flex-1 overflow-x-hidden">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}

