import { useEffect, useState } from "react";

/* 单个时间块 */
function TimeBlock({ value, className = "" }) {
  return (
    <div
      className={`
        min-w-[48px] px-3 py-2 rounded-xl
        bg-white/70 dark:bg-white/10
        backdrop-blur
        text-2xl font-semibold text-gray-900 dark:text-white
        shadow-sm
        [font-variant-numeric:tabular-nums]
        ${className}
      `}
    >
      {value}
    </div>
  );
}

/* 冒号分隔符 */
function Separator() {
  return (
    <div
      className="
        text-2xl font-semibold text-gray-400 px-1
        animate-pulse select-none
      "
    >
    </div>
  );
}

export  function HorizontalClock() {
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

      {/* 左耳朵 */}
      <div
        className="
          absolute -top-2 left-5
          w-4 h-4 rounded-full
          bg-gradient-to-br from-slate-200 to-slate-400
          dark:from-slate-600 dark:to-slate-800
          shadow-sm
        "
      />

      {/* 右耳朵 */}
      <div
        className="
          absolute -top-2 right-5
          w-4 h-4 rounded-full
          bg-gradient-to-br from-slate-200 to-slate-400
          dark:from-slate-600 dark:to-slate-800
          shadow-sm
        "
      />

      {/* 钟表主体 */}
      <div
        className="
          flex items-center gap-2
          px-4 py-3 rounded-2xl
          bg-gradient-to-r from-slate-100 to-slate-50
          dark:from-slate-800 dark:to-slate-900
          shadow-inner
        "
      >
        <TimeBlock value={h} />
        <Separator />
        <TimeBlock value={m} />
        <Separator />
        <TimeBlock value={s} className="opacity-75" />
      </div>
    </div>
  );
}
