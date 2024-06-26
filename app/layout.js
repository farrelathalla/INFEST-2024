import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INFEST 2024 | Investment Festival by KSEP ITB",
  description: "Join INFEST 2024, the biggest Investment Festival in Indonesia, organized by KSEP ITB. Learn about investment and capital market through seminars, workshops, and competitions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Investment, Festival, INFEST 2024, KSEP ITB, Indonesia, Seminar, Workshop, Competition" />
        <title>INFEST 2024 | Investment Festival by KSEP ITB</title>
        <meta name="description" content="Join INFEST 2024, the biggest Investment Festival in Indonesia, organized by KSEP ITB. Learn about investment and capital market through seminars, workshops, and competitions." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Event",
            "name": "INFEST 2024 | Investment Festival",
            "description": "Join INFEST 2024, the biggest Investment Festival in Indonesia, organized by KSEP ITB. Learn about investment and capital market through seminars, workshops, and competitions.",
            "startDate": "2024-09-01T09:00",
            "endDate": "2024-09-02T17:00",
            "eventAttendanceMode": "http://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "http://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "Bandung, Indonesia",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Ganesha No.10",
                "addressLocality": "Bandung",
                "postalCode": "40132",
                "addressCountry": "ID"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "KSEP ITB",
              "url": "https://www.ksepitb.com"
            }
          })}
        </script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
