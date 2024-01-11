"use client";

import Header from "@/components/layout/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/common/Cart/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
