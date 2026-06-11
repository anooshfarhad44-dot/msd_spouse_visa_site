"use client";

import jsPDF from "jspdf";

const DownloadChecklist = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.setTextColor(6, 47, 54);
    doc.text("UK Spouse Visa Checklist", 20, 20);

    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    doc.setFontSize(16);
    doc.text("Core Eligibility Requirements", 20, 40);

    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    const requirements = [
      "1. Both partners must be over the age of 18.",
      "2. You must not be in a forbidden relationship (i.e., too closely related).",
      "3. You must have met your partner in person.",
      "4. You must be in a genuine and subsisting marriage or civil partnership.",
      "5. You must be free to marry (previous marriages must have been legally ended).",
      "6. You must intend to live together with your partner permanently in the UK.",
      "7. Financial Requirement: The sponsoring partner must earn more than GBP 29,000 per year or have sufficient savings.",
      "8. English Language: The applicant must provide proof of sufficient knowledge of the English language.",
    ];

    let yPos = 50;
    requirements.forEach((req) => {
      const splitText = doc.splitTextToSize(req, 170);
      doc.text(splitText, 20, yPos);
      yPos += splitText.length * 7;
    });

    yPos += 10;
    doc.setFontSize(16);
    doc.setTextColor(6, 47, 54);
    doc.text("Our Specialized Services", 20, yPos);

    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    yPos += 10;
    const services = [
      "- Start-to-finish support: Eligibility checks, document preparation and submission.",
      "- Document expertise: We help you gather and format evidence to meet Home Office standards.",
      "- Clear timelines: We outline realistic expectations and keep you updated at every stage.",
    ];
    services.forEach((service) => {
      const splitText = doc.splitTextToSize(service, 170);
      doc.text(splitText, 20, yPos);
      yPos += splitText.length * 7;
    });

    yPos = 260;
    doc.setLineWidth(0.5);
    doc.line(20, yPos - 5, 190, yPos - 5);
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text("MSD Solicitors | Phone: 0161 503 0553 | Email: info@spousevisa.co.uk", 20, yPos);
    doc.text("Website: www.msdsolicitors.co.uk", 20, yPos + 5);

    doc.save("UK-Spouse-Visa-Checklist.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="inline-flex items-center gap-2 px-4 py-2 border border-[#0f6b72] text-[#0f6b72] rounded-xl font-extrabold text-sm hover:bg-[#0f6b72] hover:text-white transition-all duration-200"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download document checklist
    </button>
  );
};

export default DownloadChecklist;
