import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Lora, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const SITE_URL = 'https://hlelauthuthuke.co.za'
const SITE_TITLE = 'Hlela Uthuthuke | Development Management & Advisory'
const SITE_DESCRIPTION =
  'Hlela Uthuthuke is a South African property development management and advisory firm, turning property potential into successful developments across the public and private sectors.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Hlela Uthuthuke',
  },
  description: SITE_DESCRIPTION,
  applicationName: 'Hlela Uthuthuke',
  generator: 'v0.app',
  keywords: [
    'property development management',
    'development advisory South Africa',
    'feasibility studies',
    'development funding',
    'project management',
    'public sector property',
    'Johannesburg property development',
    'Hlela Uthuthuke',
  ],
  authors: [{ name: 'Hlela Uthuthuke Development and Planning Solutions' }],
  creator: 'Hlela Uthuthuke',
  publisher: 'Hlela Uthuthuke Development and Planning Solutions (Pty) Ltd',
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: SITE_URL,
    siteName: 'Hlela Uthuthuke',
    title: SITE_TITLE,
    description:
      'Turning property potential into successful developments across South Africa.',
    images: [
      {
        url: '/images/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hlela Uthuthuke property development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description:
      'Turning property potential into successful developments across South Africa.',
    images: ['/images/og/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  formatDetection: { telephone: true, email: true, address: true },
  category: 'business',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Hlela Uthuthuke Development and Planning Solutions (Pty) Ltd',
  alternateName: 'Hlela Uthuthuke',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/hlela-logo.png`,
  image: `${SITE_URL}/images/og/og-image.jpg`,
  email: 'emily@hlelauthuthuke.co.za',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '542 Karee Drive, Bassonia Estate',
    postalCode: '2190',
    addressLocality: 'Johannesburg',
    addressCountry: 'ZA',
  },
  areaServed: { '@type': 'Country', name: 'South Africa' },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5efe6' },
    { media: '(prefers-color-scheme: dark)', color: '#2f3137' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-ZA"
      suppressHydrationWarning
      className={`bg-background ${inter.variable} ${lora.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
