import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://christophorus-marino-porto.vercel.app"),
  title: {
    default: "Christophorus D. Marino",
    template: "Christophorus D. Marino | %s"
  },
  description: "My Portofolio",
  icons: {
    icon: "/star.png",
    shortcut: "/star.png",
  },
  openGraph: {
    title: "Christophorus D. Marino",
    description: "My Portfolio Website",
    url: "https://christophorus-marino-porto.vercel.app/",
    siteName: "Christophorus D. Marino Portfolio",
    images: [
      {
        url: "/foto.webp", // path gambar di public folder
        width: 1200,
        height: 630,
        alt: "Thumbnail Christophorus D. Marino Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christophorus D. Marino",
    description: "My Portfolio Website",
    images: ["/foto.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-400 leading-relaxed selection:bg-teal-300 selection:text-teal-900`}
      >
        {children}
      </body>
    </html>
  );
}
