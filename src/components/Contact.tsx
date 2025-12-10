import Logo from "../assets/logo.png";
import ATSwhlo from "../assets/ATSwhlo.png";   // ✅ New PNG

export default function ContactSection() {
  return (
    <footer className="bg-[#0F131D] text-gray-300 py-16 px-6 md:px-20">
      <section id="contact" className="py-20 bg-[#0F131D]"></section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT SECTION */}
        <div>
          <img src={Logo} alt="Educational ERP" className="w-60 mb-6" />

          <p className="leading-relaxed">
            Educational ERP is a part of the fulfillment of our vision –
            "Develop and deliver most reliable cost-effective software based
            on innovation and creativity". We have always been ardent
            supporters of open source technology and believe there must be
            a cost-effective alternative for every software product.
          </p>
        </div>

        {/* MIDDLE SECTION */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Contact Information
          </h3>

          <p className="font-semibold">Cybrosys Technologies Pvt. Ltd.</p>
          <p className="leading-relaxed mb-4">
            Neospace, Kinfra Techno Park,<br />
            Kakkancherry, Calicut University P.O,<br />
            Kerala, India – 673635.
          </p>

          <hr className="border-gray-700 my-4 w-48" />

          <p className="font-semibold">Cybrosys Limited</p>
          <p className="leading-relaxed">
            Alpha House, 100 Borough High Street,<br />
            London SE1 1LB, United Kingdom
          </p>
        </div>

        {/* RIGHT SECTION - QUICK LINKS */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>

          {/* ✅ Replaced old image with ATSwhlo.png */}
          <img
            src={ATSwhlo}
            alt="Company Branding"
            className="w-56 mt-10"
          />

          <p className="mt-3 tracking-[0.2em] text-sm">www.cybrosys.com</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        Copyright © 2025 Educational ERP. All Rights Reserved
      </div>
    </footer>
  );
}
