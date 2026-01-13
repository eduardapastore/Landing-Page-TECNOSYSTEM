// Metadata Imports
import type { Metadata, ResolvingMetadata } from 'next'
import clsx from "clsx";

// Styles imports
import { DM_Sans, Righteous } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Prismic imports
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";

// Components imports
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const righteous = Righteous({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-righteous",
  weight: "400",
});

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home").catch(() => notFound());

  return {
    title: page.data.meta_title || "TecnoSystem",
    description: page.data.meta_description || "Descrição da página",
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" >
      <body className={clsx(dmSans.className)}>
        <div className='font-dm'><Header /></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
