import { motion, Variants } from "framer-motion";
import {
  Handshake, HardDrive, CalendarCheck, CalendarDays, Pencil,
  Bed, Bus, Banknote, Database, Briefcase, CheckSquare, TrendingUp
} from "lucide-react";

import PenImage from "../assets/pen.png";

// ---------------- FEATURE CARD DATA ----------------
const features = [
  { icon: Handshake, title: "Admission", desc: "An easy gateway to manage the admission procedure." },
  { icon: HardDrive, title: "Student Database", desc: "A single interface incorporating every detail of a student." },
  { icon: CalendarCheck, title: "Student Attendance", desc: "An intuitive attendance management system with better clarity." },
  { icon: CalendarDays, title: "Timetable", desc: "An enhanced communication network for sharing information." },
  { icon: Pencil, title: "Exam management", desc: "Accurately evaluate each student with effective exam management." },
  { icon: Bed, title: "Hostel management", desc: "Smartly allocate the stay and administer related activities." },
  { icon: Bus, title: "Transportation management", desc: "Efficiently takes care of buses, routes, stops and charges." },
  { icon: Banknote, title: "Fee management", desc: "Makes account related processes error proof and streamlined." },
  { icon: Database, title: "Staff database", desc: "Present staff information in a quick and handy way." },
  { icon: Briefcase, title: "Staff Recruitment", desc: "Dynamic recruiting with an efficient tracking system." },
  { icon: CheckSquare, title: "Staff Attendance", desc: "Easy to monitor intuitive attendance management system." },
  { icon: TrendingUp, title: "Staff payroll", desc: "Centralized database to manage staff benefits." },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// ---------------- MERGED COMPONENT ----------------
export default function FeaturesWithAbout() {
  return (
    <section id="features" className="bg-[#0F131D] py-24">

      {/* ---------------- 12 FEATURE CARDS ---------------- */}
      <div className="max-w-[1450px] mx-auto px-0 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

          {features.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-[#161A23] rounded-3xl p-7 shadow-[0px_8px_25px_rgba(0,0,0,0.3)] 
                         text-center cursor-pointer transition-all duration-300"
            >
              <item.icon className="w-14 h-14 mx-auto mb-5 text-white" strokeWidth={1.2} />

              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* ---------------- BE AN EFFECTIVE ADMINISTRATOR SECTION ---------------- */}
      <section id="features" className="bg-[#0F131D] py-24">
      
      <div className="grid lg:grid-cols-2 gap-0 min-h-[700px]">

        {/* LEFT TEXT WITH ANIMATION */}
        <motion.div
          className="px-8 lg:px-16 py-16 flex items-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="max-w-xl">
            <motion.h2
              className="text-4xl md:text-5xl font-light mb-8 text-[#DE6C6C] tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              BE AN EFFECTIVE ADMINISTRATOR
            </motion.h2>

            <motion.p
              className="text-gray-300 leading-relaxed mb-6 text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Managing a school is no easy task. The sheer magnitude of processes involved can
              be overwhelming, especially if they are disconnected And gone are those days when people used to depend on each other for even the simplest procedures.

            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed text-justify"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              viewport={{ once: true }}
            >
              We bring you the latest technology software for effective school management shortening every lengthy procedure such as fee management, student attendance, exam management and student enrollment. We eliminate every extra manual labor involved via automating every school-related paperwork.


            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE WITH ANIMATION */}
        <motion.div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${PenImage})`, minHeight: "700px" }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Pink Overlay */}
          <motion.div
            className="absolute inset-0 bg-red-400/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          {/* White Border Box */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-8"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="border-4 border-white/50 p-12 max-w-2xl w-full">
              <h2 className="text-4xl md:text-6xl font-light text-white text-center tracking-wider uppercase">
                BE AN EFFECTIVE ADMINISTRATOR
              </h2>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>

    </section>
  );
}
