import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/NavbarClient";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: 'black',
}

export const metadata = {
  title: 'Vandit Shah | Full-Stack Web Developer Portfolio',
  description:
    'Vandit Shah is a full-stack web developer and software developer based in Toronto, Canada. Explore my portfolio, skills, and projects in web development and blockchain.',
  keywords: [
    'Vandit Shah',
    'software developer',
    'full-stack developer',
    'web developer Toronto',
    'blockchain development',
    'MERN stack',
    'portfolio',
    'York University',
    'Computer Science'
  ],
  authors: [{ name: 'Vandit Shah' }],
  alternates: {
    canonical: 'https://vandit-shah.me',
  },
  appleWebApp: {
    title: "Vandit-Shah-Portfolio"
  },
  openGraph: {
    title: 'Vandit Shah | Full-Stack Web Developer Portfolio',
    description:
      'Explore Vandit Shah’s portfolio, showcasing skills and projects in full-stack web development and blockchain.',
    url: 'https://vandit-shah.me',
    siteName: 'Vandit Shah Portfolio',
    images: [
      {
        url: 'https://vandit-shah.me/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vandit Shah Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vandit Shah | Full-Stack Web Developer Portfolio',
    description:
      'Explore Vandit Shah’s portfolio, showcasing skills and projects in full-stack web development and blockchain.',
    images: ['https://vandit-shah.me/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vandit Shah',
              jobTitle: 'Full-Stack Web Developer',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toronto',
                addressRegion: 'ON',
                addressCountry: 'Canada',
              },
              url: 'https://vandit-shah.me',
              sameAs: [
                'https://github.com/ShahVandit8',
                'https://www.linkedin.com/in/shah-vandit/',
                'https://www.instagram.com/shahvandit8/',
                'https://medium.com/@shahvandit8',
                'https://vandit-shah.vercel.app/'
              ],
              description:
                'Vandit Shah is a full-stack web developer based in Toronto, Canada, specializing in MERN stack, Python, Java, and blockchain development.',
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `} suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
