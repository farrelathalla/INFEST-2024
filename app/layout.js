import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INFEST 2024 | Investment Festival by KSEP ITB",
  description: "Join INFEST 2024, the biggest Investment Festival in Indonesia, organized by KSEP ITB. Learn about investment and capital market through seminars, workshops, and competitions.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://infestitb2024.com',
    title: 'INFEST 2024 | Investment Festival by KSEP ITB',
    description: 'Join INFEST 2024, the biggest Investment Festival in Indonesia, organized by KSEP ITB. Learn about investment and capital market through seminars, workshops, and competitions.',
    site_name: 'INFEST ITB 2024',
    images: [
      {
        url: 'https://infestitb2024.com/logo.png',
        width: 800,
        height: 600,
        alt: 'INFEST ITB 2024 Logo'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Join INFEST 2024, the biggest Investment Festival in Indonesia, organized by KSEP ITB. Learn about investment and capital market through seminars, workshops, and competitions." />
        <meta name="keywords" content="Investment, Festival, INFEST 2024, KSEP ITB, Indonesia, Seminar, Workshop, Competition" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&family=Nunito:wght@300;700;900&display=swap" rel="stylesheet" />
        <title>INFEST 2024 | Investment Festival by KSEP ITB</title>
      </head>
      <body className="poppins-regular">
        <Navbar />
        <div className="my-[120px] transition-all">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
