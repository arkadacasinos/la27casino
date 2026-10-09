export default function FirstScreen() {
  return (
    <section aria-label="Главный экран Ля Казино" className="mx-auto w-full max-w-6xl px-3 pt-3 md:px-5 md:pt-5">
      <div className="grid gap-3 md:grid-cols-[1fr_24rem] md:gap-4">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl md:aspect-[2.2/1]">
          <img
            src="/images/hero-neon.jpg"
            alt="Ля Казино: неоновый баннер с девушкой, держащей телефон с логотипом La Casino"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="from-night/85 via-night/20 absolute inset-0 bg-gradient-to-r to-transparent" aria-hidden="true" />
          <div className="relative flex h-full flex-col justify-center gap-1 pl-4 pr-2 md:pl-8">
            <p className="font-display text-foreground text-xl leading-tight font-semibold text-balance md:text-3xl">
              200 фриспинов без депозита
            </p>
            <p className="text-foreground/80 text-xs md:text-sm">за установку приложения Ля Казино</p>
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl md:aspect-auto">
          <img
            src="/images/city-neon.jpg"
            alt="Неоновый город на баннере кешбэка Ля Казино"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="from-night/90 via-night/25 absolute inset-0 bg-gradient-to-t to-transparent" aria-hidden="true" />
          <div className="relative flex h-full flex-col justify-end gap-2 p-4 md:p-6">
            <p className="font-display text-foreground text-2xl leading-none font-bold md:text-3xl">ДО 15% КЕШБЭК</p>
            <p className="text-foreground/85 text-sm md:text-base">Возвращай часть ставок</p>
            <a
              href="#q8k2-s8"
              className="bg-primary text-primary-foreground mt-1 inline-flex w-fit items-center rounded-full px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
            >
              Сделать ставку
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
