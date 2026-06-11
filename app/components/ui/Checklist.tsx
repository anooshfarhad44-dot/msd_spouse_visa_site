type ChecklistProps = {
  items: string[];
  className?: string;
};

export default function Checklist({ items }: ChecklistProps) {
  return (
    <div className="grid gap-3 mt-8">
      {items.map((item) => (
        <div
          key={item}
          className="grid grid-cols-[32px_1fr] gap-3 items-center p-4 bg-[#f5f8f8] border border-[#dbe7e9] rounded-2xl shadow-[0_10px_24px_rgba(6,47,54,0.05)]"
        >
          <span className="w-7 h-7 grid place-items-center rounded-full bg-[#f4c400] text-[#062f36]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <p className="text-[#182d32] font-semibold text-sm leading-relaxed m-0">{item}</p>
        </div>
      ))}
    </div>
  );
}
