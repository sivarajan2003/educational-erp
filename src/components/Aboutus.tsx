import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="aboutus" className="bg-[#0F131D] text-gray-300">
      
      {/* PAGE HEADING */}
      <div className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold tracking-wide text-white"
        >
          ABOUT US
        </motion.h1>
      </div>

      {/* --- WHO WE ARE --- */}
      <div className="grid md:grid-cols-2 gap-10 px-10 lg:px-24 py-20">

        {/* LEFT BIG TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[70px] leading-[1.1] font-light text-[#4C9FFF]">
            WHO <br /> WE <br /> ARE
          </h2>
        </motion.div>

        {/* RIGHT PARAGRAPH */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg leading-loose"
        >
          <p>
            Cybrosys is a well-established ISO Certified software development
            company providing quality services worldwide since 2008.
          </p>
          <br />
          <p>
            Our partnership with Microsoft, Sun, IBM, Symantec, and Odoo helps us
            deliver high-quality solutions to customers globally.
          </p>
          <br />
          <p>
            Cybrosys has been a trusted Odoo provider from the beginning and has
            made Odoo more user-friendly through innovation.
          </p>
        </motion.div>

      </div>

      {/* --- WHAT WE DO --- */}
      <div className="grid md:grid-cols-2 gap-10 px-10 lg:px-24 py-20 border-t border-white/10">

        {/* LEFT TITLE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[70px] leading-[1.1] font-light text-[#4C9FFF]">
            WHAT <br /> WE DO
          </h2>
        </motion.div>

        {/* RIGHT SERVICES */}
        <div className="grid md:grid-cols-2 gap-12 text-lg">

          {/* COLUMN 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#4C9FFF] font-semibold mb-2">🛠 Odoo Implementation</h3>
            <p className="mb-6">Do the best thing. Do the right implementation.</p>

            <h3 className="text-[#4C9FFF] font-semibold mb-2">⚙ Odoo Customization</h3>
            <p className="mb-6">Enhance customization and make perfection into reality.</p>

            <h3 className="text-[#4C9FFF] font-semibold mb-2">🔗 Odoo Integration</h3>
            <p>Advanced API & Web services supported.</p>
          </motion.div>

          {/* COLUMN 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#4C9FFF] font-semibold mb-2">👨‍💻 Developer Outsourcing</h3>
            <p className="mb-6">Hire top Odoo specialists for world-class results.</p>

            <h3 className="text-[#4C9FFF] font-semibold mb-2">🛡 Odoo Support</h3>
            <p className="mb-6">We upgrade and monitor your systems.</p>

            <h3 className="text-[#4C9FFF] font-semibold mb-2">✏ Odoo Apps</h3>
            <p>Explore our advanced Odoo community apps.</p>
          </motion.div>
        </div>
      </div>

      {/* --- WHY EDUCATIONAL ERP --- */}
      <div className="grid md:grid-cols-2 gap-10 px-10 lg:px-24 py-20 border-t border-white/10">

        {/* LEFT TITLE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[70px] leading-[1.1] font-light text-[#4C9FFF]">
            WHY <br /> EDUCATIONAL <br /> ERP
          </h2>
        </motion.div>

        {/* RIGHT PARAGRAPH */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg leading-loose"
        >
          <p>
            Educational ERP improves accountability and efficiency in academic institutions.
          </p>
          <br />
          <p>
            Powered by Odoo, it offers flexible workflows for managing school operations.
          </p>
          <br />
          <p>
            Enhanced with advanced modules, it becomes the most powerful open-source school management system.
          </p>
        </motion.div>

      </div>

    </section>
  );
}
