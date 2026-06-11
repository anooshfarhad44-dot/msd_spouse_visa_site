import PageHero from "../ui/PageHero";
import ServiceCards from "../ui/ServiceCards";

const values = [
  {
    title: "Experienced Immigration Team",
    text: "MSD Solicitors are experts in immigration law and visa applications, helping clients understand the right route before they apply.",
  },
  {
    title: "Careful Client Support",
    text: "We take time to understand the unique details of your circumstances and handle your case with care.",
  },
  {
    title: "Close Communication",
    text: "With UK visa solicitors based in Manchester, Birmingham and London, we keep in close contact throughout the process.",
  },
];

export default function AboutPageContent() {
  return (
    <section className="py-24 min-h-[60vh] bg-gradient-to-b from-white to-[#f8fbfb]">
      <div className="w-full max-w-[890px] mx-auto px-4">
        <PageHero
          eyebrow="About MSD Solicitors"
          title="Family and spouse visa solicitors who guide you with clarity."
        >
          Our experienced immigration solicitors help you find out which visa you need, prepare the
          application and move through the immigration process with diligence and reassurance.
        </PageHero>
        <ServiceCards items={values} />
      </div>
    </section>
  );
}
