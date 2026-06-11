type ChecklistProps = {
  items: string[];
  className?: string;
};

export default function Checklist({ items, className = "checklist" }: ChecklistProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <div className="check-row" key={item}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
