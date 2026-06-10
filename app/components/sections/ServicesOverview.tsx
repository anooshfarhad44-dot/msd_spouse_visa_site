import { homeServices } from "../../data/site";
import ServiceCards from "../ui/ServiceCards";

export default function ServicesOverview() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <p className="eyebrow">What We Handle</p>
          <h2>Spouse Family Visa advice from experienced immigration solicitors.</h2>
        </div>
        <p className="lead">
          If you would like your partner to join you in the UK, MSD Solicitors can
          assess your circumstances, explain the correct visa route and help submit
          a well-prepared application.
        </p>
      </div>
      <div className="container">
        <ServiceCards items={homeServices} />
      </div>
    </section>
  );
}
