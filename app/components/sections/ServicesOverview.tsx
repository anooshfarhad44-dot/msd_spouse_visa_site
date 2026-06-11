import { homeServices } from "../../data/site";
import ServiceCards from "../ui/ServiceCards";

export default function ServicesOverview() {
  return (
    <section className="py-24">
      <div className="w-full max-w-[1120px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <div>
            <p className="mb-3 text-[#0f6b72] font-extrabold text-sm tracking-widest uppercase">
              What We Handle
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#182d32] leading-snug font-[var(--font-montserrat)] m-0">
              Spouse Family Visa advice from experienced immigration solicitors.
            </h2>
          </div>
          <p className="text-[#62777d] text-lg leading-relaxed self-center">
            If you would like your partner to join you in the UK, MSD Solicitors can assess your
            circumstances, explain the correct visa route and help submit a well-prepared application.
          </p>
        </div>
        <ServiceCards items={homeServices} />
      </div>
    </section>
  );
}
