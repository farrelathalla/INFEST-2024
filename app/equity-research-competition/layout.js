export const metadata = {
  title: "INFEST 2024 | Equity Research Competition",
  description: "Join the Equity Research Competition at INFEST 2024, the premier Investment Festival in Indonesia, organized by KSEP ITB. Showcase your analytical skills, deepen your understanding of the stock market, and compete with the best minds in finance.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://infestitb2024.com/equity-research-competition',
    title: 'INFEST 2024 | Equity Research Competition',
    description: 'Join the Equity Research Competition at INFEST 2024, the premier Investment Festival in Indonesia. Showcase your analytical skills, deepen your understanding of the stock market, and compete with the best minds in finance.',
    siteName: 'INFESTITB2024',
  }
};

export default function RootLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}
