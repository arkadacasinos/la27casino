import type { ReactNode } from 'react'

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 md:h-[18px] md:w-[18px]"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const PILLS = [
  {
    label: 'Слоты',
    href: '#q8k2-s7',
    icon: (
      <Icon>
        <circle cx="8" cy="15.5" r="3.2" />
        <circle cx="15.5" cy="16.5" r="3.2" />
        <path d="M8 12.3C9 8.5 11 5.5 14 4.5" />
        <path d="M15.5 13.3c0-4 1.5-7.3 4-9" />
      </Icon>
    ),
  },
  {
    label: 'Live-казино',
    href: '#q8k2-s7',
    icon: (
      <Icon>
        <rect x="6" y="3.5" width="12" height="17" rx="2" />
        <path d="M12 8.5l2.2 3.5-2.2 3.5-2.2-3.5z" />
      </Icon>
    ),
  },
  {
    label: 'Быстрые игры',
    href: '#q8k2-s7',
    icon: (
      <Icon>
        <path d="M12 3.5c2.8 1.8 4 5.2 4 8.5l-4 3-4-3c0-3.3 1.2-6.7 4-8.5z" />
        <circle cx="12" cy="9.5" r="1.6" />
        <path d="M8 12l-2.5 4.5" />
        <path d="M16 12l2.5 4.5" />
        <path d="M12 15v3.5" />
      </Icon>
    ),
  },
  {
    label: 'Бонусы',
    href: '#q8k2-s8',
    icon: (
      <Icon>
        <rect x="4" y="10" width="16" height="9.5" rx="1.5" />
        <path d="M4 13.5h16" />
        <path d="M12 10v9.5" />
        <path d="M12 10c-3.5 0-4.8-3.6-2.4-4.2C11.4 5.3 12 8 12 10z" />
        <path d="M12 10c3.5 0 4.8-3.6 2.4-4.2C12.6 5.3 12 8 12 10z" />
      </Icon>
    ),
  },
  {
    label: 'ВИП-программа',
    href: '#q8k2-s15',
    icon: (
      <Icon>
        <path d="M7.5 4.5h9l3.5 5-8 10-8-10z" />
        <path d="M4 9.5h16" />
        <path d="M12 19.5L9.2 9.5l2.8-5 2.8 5z" />
      </Icon>
    ),
  },
  {
    label: 'Турниры',
    href: '#q8k2-s15',
    icon: (
      <Icon>
        <path d="M8 4.5h8V9a4 4 0 01-8 0z" />
        <path d="M8 5.5H5.5a3 3 0 003 4" />
        <path d="M16 5.5h2.5a3 3 0 01-3 4" />
        <path d="M12 13v3.5" />
        <path d="M8.5 19.5h7" />
        <path d="M10 16.5h4v3" />
      </Icon>
    ),
  },
  {
    label: 'Провайдеры',
    href: '#q8k2-s7',
    icon: (
      <Icon>
        <path d="M12 3.5l7.5 4v9L12 20.5l-7.5-4v-9z" />
        <path d="M4.5 7.5L12 11.5l7.5-4" />
        <path d="M12 11.5v9" />
      </Icon>
    ),
  },
]

export default function CategoryPills() {
  return (
    <nav aria-label="Разделы Ля Казино" className="mx-auto w-full max-w-6xl px-3 pt-3 md:px-5 md:pt-4">
      <ul className="q8k2-noscroll flex gap-2 overflow-x-auto pb-1 md:gap-3">
        {PILLS.map((pill) => (
          <li key={pill.label}>
            <a
              href={pill.href}
              className="bg-card text-foreground hover:bg-secondary flex min-w-max items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              <span className="text-primary">{pill.icon}</span>
              {pill.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
