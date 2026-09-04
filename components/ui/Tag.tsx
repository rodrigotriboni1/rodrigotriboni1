export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border-strong bg-bg-inset px-2.5 py-1 font-mono text-[11px] text-accent-blue">
      {children}
    </span>
  );
}
