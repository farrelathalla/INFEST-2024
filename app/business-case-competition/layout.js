export const metadata = {
  title: "INFEST 2024 | Business Case Competition",
  description: "Join the Business Case Competition at INFEST 2024, the biggest Investment Festival in Indonesia, organized by KSEP ITB. Challenge your strategic thinking, enhance your business acumen, and compete with the brightest minds.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://infestitb2024.com/business-case-competition',
    title: 'INFEST 2024 | Business Case Competition',
    description: 'Join the Business Case Competition at INFEST 2024, the biggest Investment Festival in Indonesia. Challenge your strategic thinking, enhance your business acumen, and compete with the brightest minds.',
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