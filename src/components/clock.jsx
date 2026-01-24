import { useEffect, useState } from "react";

function TimeBlock({ value, className = "" }) {
  return (
    <div
      className={`
        min-w-[42px] px-2 py-2 rounded-xl
        bg-white dark:bg-zinc-800
        border border-zinc-200 dark:border-white/5
        text-2xl font-bold text-zinc-900 dark:text-white
        shadow-sm
        [font-variant-numeric:tabular-nums]
        ${className}
      `}
    >
      {value}
    </div>
  );
}

function Separator() {
  return (
    <div
      className="
        text-2xl font-bold text-zinc-300 dark:text-zinc-600 px-0.5
        animate-pulse select-none
      "
    >
      :
    </div>
  );
}

export function HorizontalClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick(); 
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  return (
    <div className="relative inline-flex items-center justify-center">
      <div
        className="
          flex items-center gap-1
          px-4 py-3 rounded-2xl
          bg-zinc-50 dark:bg-zinc-900/50
          border border-zinc-100 dark:border-white/5
        "
      >
        <TimeBlock value={h} />
        <Separator />
        <TimeBlock value={m} />
        <Separator />
        <TimeBlock value={s} className="opacity-50" />
      </div>
    </div>
  );
}
