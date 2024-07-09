import React, { ReactNode } from 'react';
import type { Metadata } from "next";
import Head from "next/head";
import { Gupter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const gupter = Gupter({
  subsets: ['latin'],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Keke",
  description: "The Official Website Of Keke. Our mission at Keke is to revolutionize campus transportation by offering a green alternative that not only eases commuting but also fosters a healthier and more connected university community. Hosted at Kekecruise. Kekecruise.com",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
        <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XaduTb"></script>
      </Head>
      <body className={`bg ${gupter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;