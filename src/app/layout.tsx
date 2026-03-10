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

  title: {
    default: "SahayakJi - Find Trusted Local Workers in Minutes",
    template: "%s | SahayakJi",
  },

  description:
    "Find trusted local workers for home services like electrician, plumber, carpenter, painter, AC repair and cleaning. Book nearby workers quickly via WhatsApp.",

  keywords: [
    "electrician near me",
    "plumber near me",
    "carpenter near me",
    "painter near me",
    "AC repair near me",
    "home cleaning near me",
    "ghar ka kaam worker",
    "ghar ka kaam karne wala",
    "local electrician India",
    "local plumber India",
    "trusted home services",
    "house repair services",
    "home maintenance services",
    "Nashik electrician",
    "Nashik plumber",
    "urban company alternative",
    "home service marketplace",
  ],

  authors: [{ name: "SahayakJi Team" }],
  creator: "SahayakJi",
  publisher: "SahayakJi",

  category: "Home Services",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://sahayakji.in",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sahayakji.in",
    siteName: "SahayakJi",
    title: "SahayakJi - Trusted Local Workers Near You",
    description:
      "Find electricians, plumbers, carpenters and cleaners near you instantly. Fast response and verified workers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SahayakJi Home Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SahayakJi - Trusted Local Workers Near You",
    description:
      "Find electricians, plumbers, carpenters and cleaners near you instantly.",
    images: ["/og-image.png"],
  },

  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "distribution": "global",
    "rating": "general",
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
