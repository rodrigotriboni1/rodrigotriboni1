import type { ReactNode } from "react";

export function TerminalWindow({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-border bg-bg-elevated shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_20px_60px_-20px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-bg-inset px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-red/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-amber/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-green/80" />
        {title && (
          <span className="ml-2 truncate text-[11px] text-fg-soft">
            {title}
          </span>
        )}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
