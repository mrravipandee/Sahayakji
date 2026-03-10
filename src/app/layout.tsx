import type { Metadata, Viewport } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const montserrat = Montserrat_Alternates({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#32297c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sahayakji.in"),
  title: "SahayakJi - Find Trusted Local Workers in Minutes",
  description: "Connect with verified local workers for all your home services. Electricians, plumbers, painters, carpenters, AC repair, and home cleaning services available near you. Fast, affordable, and trusted by local households.",
  keywords: ["home services", "electrician", "plumber", "painter", "carpenter", "AC repair", "home cleaning", "local workers", "trusted workers", "SahayakJi"],
  authors: [{ name: "SahayakJi" }],
  creator: "SahayakJi",
  publisher: "SahayakJi",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahayakji.in",
    siteName: "SahayakJi",
    title: "SahayakJi - Find Trusted Local Workers in Minutes",
    description: "Connect with verified local workers for all your home services. Electricians, plumbers, painters, carpenters and more available near you.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SahayakJi - Trusted Local Home Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SahayakJi - Find Trusted Local Workers in Minutes",
    description: "Connect with verified local workers for all your home services. Electricians, plumbers, painters, carpenters and more available near you.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  );
}
