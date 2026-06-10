"use client";

import React from 'react';
import jsPDF from 'jspdf';

const DownloadChecklist = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(6, 47, 54); // Teal color
    doc.text('UK Spouse Visa Checklist', 20, 20);
    
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);
    
    // Core Requirements
    doc.setFontSize(16);
    doc.text('Core Eligibility Requirements', 20, 40);
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    const requirements = [
      "1. Both partners must be over the age of 18.",
      "2. You must not be in a forbidden relationship (i.e., too closely related).",
      "3. You must have met your partner in person.",
      "4. You must be in a genuine and subsisting marriage or civil partnership.",
      "5. You must be free to marry (previous marriages must have been legally ended).",
      "6. You must intend to live together with your partner permanently in the UK.",
      "7. Financial Requirement: The sponsoring partner must earn more than GBP 18,600 per year or have sufficient savings.",
      "8. English Language: The applicant must provide proof of sufficient knowledge of the English language."
    ];
    
    let yPos = 50;
    requirements.forEach(req => {
      const splitText = doc.splitTextToSize(req, 170);
      doc.text(splitText, 20, yPos);
      yPos += (splitText.length * 7);
    });
    
    // Services Section
    yPos += 10;
    doc.setFontSize(16);
    doc.setTextColor(6, 47, 54);
    doc.text('Our Specialized Services', 20, yPos);
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    yPos += 10;
    const services = [
      "- Start-to-finish support: Eligibility checks, document preparation and submission.",
      "- Document expertise: We help you gather and format evidence to meet Home Office standards.",
      "- Clear timelines: We outline realistic expectations and keep you updated at every stage."
    ];
    
    services.forEach(service => {
      const splitText = doc.splitTextToSize(service, 170);
      doc.text(splitText, 20, yPos);
      yPos += (splitText.length * 7);
    });
    
    // Footer
    yPos = 260;
    doc.setLineWidth(0.5);
    doc.line(20, yPos - 5, 190, yPos - 5);
    
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text('MSD Solicitors | Phone: 0161 503 0553 | Email: info@spousevisa.co.uk', 20, yPos);
    doc.text('Website: www.msdsolicitors.co.uk', 20, yPos + 5);
    
    doc.save('UK-Spouse-Visa-Checklist.pdf');
  };

  return (
    <button onClick={generatePDF} className="download-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
      Download document checklist
    </button>
  );
};

export default DownloadChecklist;
