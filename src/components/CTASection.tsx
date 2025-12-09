export default function CTASection() {
  return (
    <section className="py-16 bg-[#0B0F19]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-400 font-light mb-12">
          Educational ERP- Master of School Administration
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* REQUEST DEMO BUTTON (Purple) */}
          <a
            href="#contactsection"
            className="
              px-10 py-4 rounded-full font-medium text-lg 
              bg-[#8854FF] text-white
              hover:bg-black transition-all duration-300
            "
          >
            Request a demo
          </a>

          {/* DOWNLOAD BUTTON */}
          <a
            href="https://apps.odoo.com/apps/modules/17.0/education_core"
            className="
              px-10 py-4 border-2 border-teal-500 
              text-teal-400 rounded-full font-medium text-lg 
              hover:bg-teal-900/30 transition-colors
            "
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
}
