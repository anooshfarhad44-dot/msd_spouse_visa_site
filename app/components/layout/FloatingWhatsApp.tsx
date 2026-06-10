import { contact } from "../../data/site";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Message us on WhatsApp"
    >
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </a>
  );
}
