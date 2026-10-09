import type { ReactNode } from 'react'
import { Manrope, Oswald } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

const oswald = Oswald({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-oswald',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="8de38115df42d0a9" />
        <title>Ля Казино — La Casino официальный сайт: играть онлайн, рабочее зеркало и бонусы</title>
        <meta
          name="description"
          content="La Casino официальный сайт — играй в Ля Казино онлайн: слоты, live-казино и быстрые игры. La Casino зеркало рабочее, кешбэк до 15%. Ля Казино играть бесплатно и на деньги с телефона и ПК."
        />
        <meta
          name="keywords"
          content="la casino, la casino зеркало, la casino играть, la casino официальный, la casino официальный сайт, la казино, ля казино, ля казино зеркало, ля казино зеркало рабочее, ля казино играть, ля казино онлайн, ля казино официальный, ля казино официальный сайт"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://la27casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://la27casino.vercel.app/" />
        <meta property="og:site_name" content="Ля Казино" />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:title"
          content="Ля Казино — La Casino официальный сайт: играть онлайн, рабочее зеркало и бонусы"
        />
        <meta
          property="og:description"
          content="La Casino официальный сайт — играй в Ля Казино онлайн: слоты, live-казино и быстрые игры. La Casino зеркало рабочее, кешбэк до 15%. Ля Казино играть бесплатно и на деньги с телефона и ПК."
        />
        <meta property="og:image" content="https://la27casino.vercel.app/images/hero-neon.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ля Казино — La Casino официальный сайт: играть онлайн, рабочее зеркало и бонусы"
        />
        <meta
          name="twitter:description"
          content="La Casino официальный сайт — играй в Ля Казино онлайн: слоты, live-казино и быстрые игры. La Casino зеркало рабочее, кешбэк до 15%."
        />
        <meta name="twitter:image" content="https://la27casino.vercel.app/images/hero-neon.jpg" />
        <meta name="theme-color" content="#2f0a1d" />
      </head>
      <body
        className={`${manrope.variable} ${oswald.variable} bg-background text-foreground font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
