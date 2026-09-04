export function SectionComment({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <p className="mb-6 select-none font-mono text-sm text-comment sm:mb-8">
      <span className="text-fg-soft">{index}</span>
      <span className="mx-2 text-fg-soft">{"//"}</span>
      {label}
    </p>
  );
}
