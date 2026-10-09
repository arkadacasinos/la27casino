const TAGS = [
  { label: '#la-casino', href: '#q8k2-s1' },
  { label: '#la-casino-зеркало', href: '#q8k2-s3' },
  { label: '#la-casino-играть', href: '#q8k2-s5' },
  { label: '#la-casino-официальный', href: '#q8k2-s2' },
  { label: '#la-casino-официальный-сайт', href: '#q8k2-s2' },
  { label: '#la-казино', href: '#q8k2-s8' },
  { label: '#ля-казино', href: '#q8k2-s11' },
  { label: '#ля-казино-зеркало', href: '#q8k2-s14' },
  { label: '#ля-казино-зеркало-рабочее', href: '#q8k2-s4' },
  { label: '#ля-казино-играть', href: '#q8k2-s6' },
  { label: '#ля-казино-онлайн', href: '#q8k2-s7' },
  { label: '#ля-казино-официальный', href: '#q8k2-s10' },
  { label: '#ля-казино-официальный-сайт', href: '#q8k2-s9' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-card border-border/60 mt-auto border-t">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:py-10">
        <nav aria-label="Навигация по ключевым фразам" className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <a
              key={tag.label}
              href={tag.href}
              className="border-border text-muted-foreground hover:border-primary hover:text-foreground rounded-full border px-3 py-1 text-xs transition-colors"
            >
              {tag.label}
            </a>
          ))}
        </nav>
        <p className="text-muted-foreground mt-6 text-xs leading-relaxed">
          18+ Азартные игры могут вызывать зависимость. Материалы страницы носят информационный характер и не
          являются офертой. Играйте ответственно и устанавливайте лимиты депозита и времени сессии.
        </p>
        <p className="text-muted-foreground mt-2 text-xs">
          © 2026 Ля Казино (La Casino). Товарные знаки принадлежат их владельцам.
        </p>
      </div>
    </footer>
  )
}
