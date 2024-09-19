import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

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
    siteName: 'INFESTITB2024',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="poppins-regular">
        <Navbar />
        <div className="my-[120px] transition-all">
          {children}
          <Toaster/>
        </div>
        <Footer />
      </body>
    </html>
  );
}
