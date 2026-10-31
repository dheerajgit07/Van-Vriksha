import React from 'react';
import { Download, ShieldCheck, PhoneCall, Lock, FileText } from 'lucide-react';

export default function Policy() {
  const handleDownload = () => {
    // Document download link trigger
    const fileUrl = '/Privacy_Policy_Van_Vriksha_Landscaping.docx';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Privacy_Policy_Van_Vriksha_Landscaping.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='privacy' className="min-h-screen bg-[#FAF7F2] py-12 px-4 sm:px-6 lg:px-8 font-sans text-[#1C3F30]">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Main Heading Banner Card */}
        <div className="bg-white/90 backdrop-blur-md border border-[#DCD5C9] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              {/* Logo Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#FAF7F2] border border-[#DCD5C9] p-2 flex items-center justify-center shadow-xs shrink-0">
                <img 
                  src="/logo1.png" 
                  alt="Van Vriksha Landscaping Logo" 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title & Brand Name */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold tracking-widest text-[#59a785] uppercase">
                  Legal &amp; Compliance
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2E5B37] tracking-tight">
                  Privacy Policy
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-gray-600">
                  Van Vriksha Landscaping • Karnal, Haryana
                </p>
              </div>
            </div>

            {/* Download Document Button */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-[#2E5B37] hover:bg-[#1C3F30] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Download Document (.docx)</span>
            </button>

          </div>
        </div>

        {/* Main Content Details Card */}
        <div className="bg-white/90 backdrop-blur-md border border-[#DCD5C9] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 leading-relaxed">
          
          <div className="flex items-center justify-between flex-wrap gap-3 border-b border-[#DCD5C9] pb-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#59a785] bg-[#F4EFE6] px-3.5 py-1.5 rounded-full border border-[#EAE3D5]">
              <ShieldCheck className="w-4 h-4 text-[#2E5B37]" />
              Data Protection &amp; Confidentiality Guaranteed
            </div>
            <span className="text-xs text-gray-500 font-medium">
              Effective Date: October 2026
            </span>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2E5B37] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E5B37]"></span>
              1. Introduction &amp; Overview
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed pl-5 border-l-2 border-[#E2DACB]">
              Welcome to <strong>Van Vriksha Landscaping</strong>. We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your details when you explore our website or book landscape design and execution services in Karnal and across Haryana.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2E5B37] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E5B37]"></span>
              2. Information We Collect
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed pl-5 border-l-2 border-[#E2DACB]">
              We collect information that you voluntarily provide when booking a consultation or contacting us. This includes:
            </p>
            <ul className="list-disc pl-10 text-sm text-gray-700 space-y-1.5">
              <li>Full Name and Contact Phone Number (Call / WhatsApp)</li>
              <li>Site Location / Property Details in Haryana &amp; Karnal region</li>
              <li>Architectural preferences, layout requirements, and consultation notes</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2E5B37] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E5B37]"></span>
              3. How We Use Your Data
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed pl-5 border-l-2 border-[#E2DACB]">
              Your information is exclusively utilized to:
            </p>
            <ul className="list-disc pl-10 text-sm text-gray-700 space-y-1.5">
              <li>Schedule site visits and deliver customized 3D landscape designs</li>
              <li>Share estimates, package details, and project progress updates</li>
              <li>Provide seamless WhatsApp support and direct telephonic assistance</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2E5B37] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E5B37]"></span>
              4. Data Sharing &amp; Third Parties
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed pl-5 border-l-2 border-[#E2DACB]">
              <strong>Van Vriksha Landscaping</strong> does NOT sell, trade, or rent your personal data to third-party marketers. Information is shared only with internal site engineers or field managers directly involved in your landscape project execution.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2E5B37] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E5B37]"></span>
              5. Contact &amp; Support Inquiries
            </h2>
            <div className="bg-[#FAF7F2] border border-[#EFECE6] p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-sm font-bold text-gray-900">Have questions about our Policy?</p>
                <p className="text-xs text-gray-600">Reach out directly to our support team in Karnal.</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="tel:08904928104"
                  className="flex items-center gap-1.5 text-xs font-semibold bg-[#2E5B37] text-white px-4 py-2.5 rounded-xl hover:bg-[#1C3F30] transition shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  08904928104
                </a>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="pt-6 border-t border-[#DCD5C9] text-center text-xs text-gray-500">
            © 2026 Van Vriksha Landscaping. All Rights Reserved. • Karnal, Haryana
          </div>

        </div>

      </div>
    </div>
  );
}