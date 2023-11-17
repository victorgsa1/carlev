import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlev | Assistência Autorizada",
  description: "",
  keywords: [""],
  alternates: {
    canonical: "carlev.com.br",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  openGraph: {
    title: "Carlev | Assistência Autorizada",
    description: "",
    url: "https://carlev.com.br",
    locale: "pt_BR",
    type: "website",
    siteName: "Carlev",
    images: [
      {
        origin: "",
        type: "image/png",
        href: "",
        url: "",
        width: 600,
        height: 454,
        secureUrl: "",
        alt: "Carlev | Assistência Técnica",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "",
    shortcut: "",
    apple: "",
    other: {
      rel: "",
      url: "",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
