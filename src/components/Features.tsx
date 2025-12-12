import { motion } from "framer-motion";
import "./stacked.css";

import SimpleImg from "../assets/simple.png";
import BeautifulImg from "../assets/beautifulinterface.png";
import ToprateImg from "../assets/toprate.png";
import InnovativeImg from "../assets/innovative.png";

import {
  Handshake, HardDrive, CalendarCheck, CalendarDays, Pencil,
  Bed, Bus, Banknote, Database, Briefcase, CheckSquare, TrendingUp
} from "lucide-react";

const features = [
  { icon: Handshake, title: "Admission", desc: "An easy gateway to manage the admission procedure." },
  { icon: HardDrive, title: "Student Database", desc: "A single interface incorporating every detail of a student." },
  { icon: CalendarCheck, title: "Student Attendance", desc: "An intuitive attendance management system." },
  { icon: CalendarDays, title: "Timetable", desc: "An enhanced communication network for sharing information." },
  { icon: Pencil, title: "Exam management", desc: "Accurately evaluate each student effectively." },
  { icon: Bed, title: "Hostel management", desc: "Smartly allocate the stay and administer related activities." },
  { icon: Bus, title: "Transportation", desc: "Efficiently manages buses, routes, stops and charges." },
  { icon: Banknote, title: "Fee management", desc: "Makes account processes streamlined and error-proof." },
  { icon: Database, title: "Staff database", desc: "Presents staff information in a handy way." },
  { icon: Briefcase, title: "Staff Recruitment", desc: "Dynamic recruiting and efficient tracking." },
  { icon: CheckSquare, title: "Staff Attendance", desc: "Easy intuitive attendance management." },
  { icon: TrendingUp, title: "Staff payroll", desc: "Centralized database to manage benefits." }
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0F131D] py-24">

      {/* ---------------- TOP FEATURE CARDS ---------------- */}
      <div className="max-w-[1450px] mx-auto px-0 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-[#161A23] rounded-3xl p-7 shadow-xl text-center cursor-pointer transition-all duration-300"
            >
              <item.icon className="w-14 h-14 mx-auto mb-5 text-white" strokeWidth={1.2} />
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
    </div>
      <div className="grid lg:grid-cols-2 gap-0 min-h-[700px]">

        {/* LEFT TEXT SECTION */}
        <div className="px-8 lg:px-24 py-20 flex items-start">
          <div className="max-w-[650px]">
            <h2 className="text-[52px] md:text-[64px] font-light leading-tight text-[#DE6C6C] mb-14 tracking-wide">
              BE AN EFFECTIVE <br /> ADMINISTRATOR
            </h2>

            <p className="text-gray-300 text-[18px] leading-[1.7] mb-10">
              Managing a school is no easy task. The sheer magnitude of processes involved
              can be overwhelming, especially if they are disconnected. Gone are the days
              when people depended on each other for the simplest procedures.
              We bring modern ERP software that automates fee management, attendance,
              exam management and student enrollment—eliminating unnecessary manual labor.
            </p>
          </div>
        </div>

        {/* ---------------- RIGHT STACK UI ---------------- */}
        <div className="right-stack-area">
  <div className="stack-wrapper">
          <ul id="cards">

            <li id="card1" className="card">
              <div className="card-body glow-border">
                <img src={SimpleImg} className="stack-img" />
              </div>
            </li>

            <li id="card2" className="card">
              <div className="card-body glow-border">
                <img src={BeautifulImg} className="stack-img" />
              </div>
            </li>

            <li id="card3" className="card">
              <div className="card-body glow-border">
                <img src={ToprateImg} className="stack-img" />
              </div>
            </li>

            <li id="card4" className="card">
              <div className="card-body glow-border">
                <img src={InnovativeImg} className="stack-img" />
              </div>
            </li>

          </ul>
        </div>

      </div>
      </div>
    </section>
  );
}
