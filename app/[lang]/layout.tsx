import { PropsWithChildren } from "react";
import Script from "next/script";
import "../globals.css";
import localFont from "next/font/local";
import { Header } from "@/shared";
import classNames from "classnames";
import { Languages } from "@/shared/dictionaries/languages";
import { PreferredLanguageWrapper } from "@/shared/utils/PreferedLanguage.context";
import { Footer } from "@/shared/Footer";

const Satoshi = localFont({
  src: "./fonts/Satoshi.ttf",
  display: "swap",
});

export const metadata = {
  title: "Lighthouse Growth",
  description: "We are a software house",
};

export default function RootLayout({
  children,
  params,
}: PropsWithChildren<{ params: { lang: Languages } }>) {
  return (
    <html lang={params.lang}>
      <head>
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JKTRGML2VR"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JKTRGML2VR');`,
          }}
        />
      </head>
      <body className={classNames(Satoshi.className, "bg-white")}>
        <main className="min-h-screen flex flex-col items-center relative">
          <PreferredLanguageWrapper>
            <Header />
            {children}
            <Script
              src="https://widget.clutch.co/static/js/widget.js"
              strategy="afterInteractive"
              type="text/javascript"
            />
            <Footer />
          </PreferredLanguageWrapper>
        </main>
      </body>
    </html>
  );
}
