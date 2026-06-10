type ChecklistProps = {
  items: string[];
  className?: string;
};

export default function Checklist({ items, className = "checklist" }: ChecklistProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <div className="check-row" key={item}>
          <span aria-hidden="true">+</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
