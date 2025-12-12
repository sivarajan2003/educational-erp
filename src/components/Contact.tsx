import Logo from "../assets/logo.png";
import ATSwhlo from "../assets/ATSwhlo.png";

export default function ContactSection() {
  return (
<footer id="contact" className="bg-[#0F131D] text-gray-300 py-16 px-6 md:px-20">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT SECTION */}
        <div>
          <img src={Logo} alt="Educational ERP" className="w-52 mb-6" />

          <p className="leading-relaxed text-gray-400">
            Educational ERP is dedicated to simplifying school administration by 
            improving collaboration, streamlining academic processes, and enhancing 
            operational efficiency—regardless of your institution’s size.
          </p>
        </div>

        {/* CENTER COLUMN — QUICK LINKS + SOCIALS */}
        <div>
          {/* QUICK LINKS */}
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-300 mb-10">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>

          {/* SOCIALS
          <h3 className="text-[#3A7CFF] text-xl font-semibold mb-4">Socials</h3>

          <ul className="space-y-3 text-gray-300">
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Dribbble</li>
          </ul> */}
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact us</h3>

          <p className="mb-2">84282 05537</p>
          <p className="mb-4">Atelierhub.assist@gmail.com</p>

          <p className="leading-relaxed mb-6">
            No 293/6 R G Complex 1st Floor,<br />
            Perur Main Road, Telungapalayam,<br />
            Near Canara Bank, Coimbatore – 641039
          </p>

          <img src={ATSwhlo} alt="Company" className="w-52 mt-2" />
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© 2025 Educational ERP. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-white">Terms & Conditions</a>
          <a className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
