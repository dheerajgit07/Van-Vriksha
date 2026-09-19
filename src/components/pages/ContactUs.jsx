import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, Phone, MapPin, Calendar, Clock, Send, CheckCircle2, TreePine } from 'lucide-react';

export default function ContactUs() {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Individual Adoption',
    message: '',
    visitDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Inquiry Received! Our forestry team will contact you within 24 hours 🌿');
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Individual Adoption',
      message: '',
      visitDate: ''
    });
  };

  return (
    <div className="pt-24 pb-16 space-y-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block bg-[#E3F4E1] text-[#1D461A] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Get in Touch
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1D461A]">
          Contact Vanvriksha Forestry Team
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Have questions about tree adoption, corporate ESG partnerships, nursery bulk orders, or scheduling a visit to our forest sanctuary? Send us a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#C5E9C1] shadow-lg space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#1D461A]">Send an Inquiry / Book a Visit</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1D461A] mb-1">Your Full Name *</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anjali Sharma"
                  className="w-full bg-[#F4F8F3] border border-[#C5E9C1] rounded-xl px-3.5 py-2.5 text-xs text-[#1D461A] focus:outline-none focus:border-[#2D8425]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D461A] mb-1">Email Address *</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="anjali@example.com"
                  className="w-full bg-[#F4F8F3] border border-[#C5E9C1] rounded-xl px-3.5 py-2.5 text-xs text-[#1D461A] focus:outline-none focus:border-[#2D8425]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1D461A] mb-1">Phone Number *</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#F4F8F3] border border-[#C5E9C1] rounded-xl px-3.5 py-2.5 text-xs text-[#1D461A] focus:outline-none focus:border-[#2D8425]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1D461A] mb-1">Inquiry Type</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-[#F4F8F3] border border-[#C5E9C1] rounded-xl px-3.5 py-2.5 text-xs text-[#1D461A] focus:outline-none focus:border-[#2D8425]"
                >
                  <option value="Individual Adoption">Individual Tree Adoption</option>
                  <option value="Corporate ESG">Corporate ESG & Carbon Offset</option>
                  <option value="Nursery Wholesale">Nursery & Sapling Wholesale</option>
                  <option value="Forest Sanctuary Visit">Schedule Forest Sanctuary Visit</option>
                </select>
              </div>
            </div>

            {formData.inquiryType === 'Forest Sanctuary Visit' && (
              <div>
                <label className="block text-xs font-semibold text-[#1D461A] mb-1">Preferred Visit Date</label>
                <input
                  type="date"
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  className="w-full bg-[#F4F8F3] border border-[#C5E9C1] rounded-xl px-3.5 py-2.5 text-xs text-[#1D461A] focus:outline-none focus:border-[#2D8425]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#1D461A] mb-1">Your Message / Requirements</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your plantation or tree adoption goals..."
                className="w-full bg-[#F4F8F3] border border-[#C5E9C1] rounded-xl px-3.5 py-2.5 text-xs text-[#1D461A] focus:outline-none focus:border-[#2D8425]"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#2D8425] hover:bg-[#1D461A] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Inquiry</span>
            </button>

          </form>
        </div>

        {/* Right Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-[#1D461A] text-white p-6 sm:p-8 rounded-3xl shadow-lg space-y-4">
            <h3 className="font-serif text-xl font-bold flex items-center gap-2">
              <TreePine className="w-5 h-5 text-[#62C058]" /> Vanvriksha Sanctuary HQ
            </h3>
            
            <div className="space-y-3 text-xs text-[#E3F4E1]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#62C058] shrink-0 mt-0.5" />
                <span>Vanvriksha Forest Eco-Reserve, Plot 42, Western Ghats Buffer Zone, Maharashtra 411038</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#62C058] shrink-0" />
                <span>+91 1800 266 8733 (Toll Free Helpline)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#62C058] shrink-0" />
                <span>care@vanvriksha.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#62C058] shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Visit Information Card */}
          <div className="bg-[#F2F9F1] p-6 rounded-3xl border border-[#C5E9C1] space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#1D461A]">Visiting Our Forest Reserve</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Tree guardians and corporate sponsors are invited to tour our native nurseries and view their tagged trees in person. Advance booking via the form is required.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
