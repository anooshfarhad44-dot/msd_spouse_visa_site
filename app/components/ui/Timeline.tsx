type TimelineItem = {
  title: string;
  text: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="grid gap-5 mt-8">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="grid grid-cols-[58px_1fr] gap-5 p-6 bg-white border border-[#dbe7e9] rounded-2xl shadow-[0_18px_50px_rgba(6,47,54,0.08)] hover:-translate-y-1 hover:border-[#0f6b72]/30 hover:shadow-[0_24px_70px_rgba(6,47,54,0.14)] transition-all duration-200"
        >
          <span className="w-12 h-12 grid place-items-center rounded-full bg-[#0f6b72] text-white font-extrabold font-[var(--font-montserrat)]">
            {index + 1}
          </span>
          <div>
            <h2 className="text-xl font-bold text-[#073f47] m-0">{item.title}</h2>
            <p className="mt-2 text-[#62777d] leading-relaxed">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
