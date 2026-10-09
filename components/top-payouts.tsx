const PAYOUTS = [
  { mult: '×2.5', shape: 'diamond', burst: '', id: 'ID 11……69', win: '5 003 RUB', dep: '2 000 RUB депозит' },
  { mult: '×9.2', shape: 'burst', burst: '', id: 'ID 62……41', win: '3 200 RUB', dep: '347 RUB депозит' },
  { mult: '×88.2', shape: 'burst', burst: 'q8k2-burst--pink', id: 'ID 23……82', win: '9 000 RUB', dep: '102 RUB депозит' },
  { mult: '×5', shape: 'burst', burst: '', id: 'ID 63……03', win: '3 997 RUB', dep: '800 RUB депозит' },
  { mult: '×7.7', shape: 'burst', burst: '', id: 'ID 30……02', win: '8 600 RUB', dep: '1 111 RUB депозит' },
  { mult: '×9.9', shape: 'burst', burst: '', id: 'ID 89……75', win: '5 000 RUB', dep: '504 RUB депозит' },
  { mult: '×12.4', shape: 'burst', burst: 'q8k2-burst--pink', id: 'ID 45……17', win: '7 440 RUB', dep: '600 RUB депозит' },
  { mult: '×3.8', shape: 'burst', burst: '', id: 'ID 71……28', win: '4 180 RUB', dep: '1 100 RUB депозит' },
]

function WinArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-win h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M9.5 7H17v7.5" />
    </svg>
  )
}

export default function TopPayouts() {
  return (
    <section aria-label="Топ выплаты Ля Казино" className="mx-auto w-full max-w-6xl px-3 pt-3 md:px-5 md:pt-4">
      <div className="bg-card rounded-2xl p-4 md:p-5">
        <div className="flex items-center gap-2">
          <p className="font-display text-foreground text-base font-semibold md:text-lg">ТОП Выплаты</p>
          <span className="q8k2-burst h-3.5 w-3.5" aria-hidden="true" />
        </div>
        <p className="text-foreground mt-1 text-2xl font-extrabold tracking-tight md:text-3xl">22 504 518 RUB</p>
        <ul className="q8k2-noscroll mt-4 flex gap-6 overflow-x-auto pb-1 md:gap-8">
          {PAYOUTS.map((p) => (
            <li key={p.id} className="flex min-w-max items-center gap-3">
              {p.shape === 'diamond' ? (
                <span className={`q8k2-diamond h-10 w-10 md:h-11 md:w-11 ${p.burst}`}>
                  <span className="text-foreground text-[11px] font-bold">{p.mult}</span>
                </span>
              ) : (
                <span className={`q8k2-burst h-10 w-10 md:h-11 md:w-11 ${p.burst}`}>
                  <span className="text-foreground text-[11px] font-bold">{p.mult}</span>
                </span>
              )}
              <span className="flex flex-col">
                <span className="text-muted-foreground text-[11px]">{p.id}</span>
                <span className="text-foreground flex items-center gap-1 text-sm font-bold md:text-base">
                  {p.win}
                  <WinArrow />
                </span>
                <span className="text-muted-foreground text-[11px]">{p.dep}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
