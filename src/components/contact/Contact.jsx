import React, { useState } from 'react';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Contact configurations
  const callNumber = '08904928104';
  const displayWhatsappNumber = '9646497662';
  const cleanWhatsappNumber = '919646497662'; // Country code (+91) format
  const greetingMsg = encodeURIComponent('Hello! I would like to inquire about your services and pricing details.');
  const whatsappUrl = `https://wa.me/${cleanWhatsappNumber}?text=${greetingMsg}`;

  return (
    <div id="contacts" className=" relative min-h-screen bg-[#FAF7F2] flex flex-col items-center justify-center p-6 text-gray-800">
      
      {/* Main Professional Contact Card */}
      <div className="relative max-w-lg w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-[#EFECE6] p-8 text-center space-y-8 transition-all duration-300">
        
        {/* Header Section */}
        <div className="space-y-3">
          <span className="inline-block bg-[#F4EFE6] text-amber-900 border border-[#EAE3D5] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
            24/7 Dedicated Support
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Get in Touch With Us
          </h1>
          <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
            We are here to assist you with any inquiries, professional services, or project consultations. Reach out to us instantly.
          </p>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          
          {/* Direct Call Button */}
          <a
            href={`tel:${callNumber}`}
            className="group flex items-center p-4 bg-[#FAF7F2] hover:bg-amber-50/50 border border-[#EFECE6] hover:border-amber-200 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
          >
            <div className="bg-[#F4EFE6] text-amber-800 p-3 rounded-xl group-hover:scale-110 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300 mr-4">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Direct Call</p>
              <p className="text-sm font-bold text-gray-900 tracking-wide">{callNumber}</p>
            </div>
          </a>

          {/* WhatsApp Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-4 bg-[#FAF7F2] hover:bg-emerald-50/50 border border-[#EFECE6] hover:border-emerald-200 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
          >
            <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 mr-4">
              <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">WhatsApp Chat</p>
              <p className="text-sm font-bold text-gray-900 tracking-wide">{displayWhatsappNumber}</p>
            </div>
          </a>

        </div>
      </div>

      {/* Floating WhatsApp Widget (Bottom-Right Corner) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {/* Chat Box Greeting Popup */}
        {isOpen && (
          <div className="mb-4 w-80 bg-white border border-[#EFECE6] rounded-2xl shadow-2xl p-5 relative animate-fade-in text-left">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
              aria-label="Close chat popup"
            >
              &times;
            </button>

            <div className="flex items-center space-x-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center text-white font-bold text-xs shadow-md">
                CS
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Customer Support</h4>
                <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span> Active & Online
                </p>
              </div>
            </div>

            {/* Professional Greeting Message */}
            <div className="bg-[#FAF7F2] border border-[#EFECE6] p-3.5 rounded-xl text-xs text-gray-600 mb-4 leading-relaxed">
              Hello! Welcome to our support desk. How can we help you today? Click below to connect instantly with our team.
            </div>

            {/* Action Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 transition-all transform active:scale-95"
            >
              <span>Start Instant Chat</span>
            </a>
          </div>
        )}

        {/* Small Animated WhatsApp Floating Button */}
        <div className="relative">
          {/* Glowing Pulse Ring */}
          <div className="absolute -inset-1.5 rounded-full bg-emerald-400 opacity-50 animate-ping"></div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(!isOpen)}
            className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
            title="Chat on WhatsApp"
          >
            {/* SVG WhatsApp Icon */}
            <svg
              className="w-7 h-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;