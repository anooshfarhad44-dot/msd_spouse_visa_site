"use client";

import { useEffect } from "react";

export default function HubspotForm() {
  useEffect(() => {
    const loadForm = () => {
      if (window.hbspt) {
        const container = document.getElementById("hubspot-form-container-home");

        if (container) {
          container.innerHTML = "";

          window.hbspt.forms.create({
            portalId: "8559434",
            formId: "fbd1deba-5122-437b-a2f7-65fed9ae1b77",
            region: "na1",
            target: "#hubspot-form-container-home",
          });
        }
      }
    };

    if (!document.getElementById("hubspot-script")) {
      const script = document.createElement("script");
      script.id = "hubspot-script";
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = loadForm;
      document.body.appendChild(script);
    } else {
      loadForm();
    }
  }, []);

  return (
    <div className="contact-form">
      <div id="hubspot-form-container-home"></div>
    </div>
  );
}
