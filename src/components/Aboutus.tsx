import { motion } from "framer-motion";

// UPDATED IMAGE IMPORTS ↓↓↓
import AttendanceImg from "../assets/Attandence.png";
import FeeManagementImg from "../assets/Fee_Management_System-removebg-preview.png";
import ExamImg from "../assets/Exam and Accademic.png";
import ParentImg from "../assets/parent.png";

export default function ModernSolutions() {
  return (
    <section id="modern" className="bg-[#0F131D] text-gray-300 py-10 px-6 lg:px-20">

  {/* ---- HEADER ---- */}
  <div className="text-center mb-8">
  <p className="text-[#3A7CFF] tracking-[0.25em] text-xs font-medium">
    MODERN SOLUTIONS
  </p>

    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold text-white leading-snug mt-3"
    >
      Powerful ERP Features  
      <br /> Built for Educational Institutions
    </motion.h1>
  </div>


      {/* ----------- CARD WRAPPER Powerful ERP Features  
      <br /> Built for Educational Institutions----------- */}
<div className="max-w-6xl mx-auto space-y-12 px-4 md:px-0">

{/* ==========================================
    CARD 1 — Attendance (IMAGE RIGHT)
=========================================== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    bg-gradient-to-br from-[#0B0F18] to-[#0E121D]
    rounded-3xl
    px-10 py-16
    min-h-[550px]
    shadow-xl shadow-black/40
    flex flex-col md:flex-row
    items-start gap-12
    max-w-6xl mx-auto
  "
>

  {/* TEXT LEFT */}
  <div className="md:w-1/2 flex flex-col justify-center space-y-5">
    
    <p className="text-sm font-semibold tracking-widest text-[#4C9FFF]">
      ATTENDANCE MANAGEMENT
    </p>

    <div className="relative inline-block">
      <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mt-4">
        Eliminate Manual Errors.
        <br /> Track Attendance in Seconds.
      </h2>

      {/* SUBTLE BLUE GLOW */}
      <div className="absolute inset-0 rounded-xl blur-[30px] bg-[#4C9FFF]/20 -z-10"></div>
    </div>

    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mt-6">
      Traditional register-based attendance slows down classrooms and creates 
      inaccurate records. With our smart Attendance Management Module, schools 
      can automate daily attendance, ensure 100% accuracy, and send real-time 
      updates to parents all with a single click.
    </p>
  </div>

  {/* IMAGE RIGHT WITH GRADIENT OVERLAY */}
  <div className="md:w-1/2 flex justify-end items-center">
    <div className="w-full md:w-[110%] lg:w-[125%] relative right-[-40px] rounded-3xl overflow-hidden">

      {/* IMAGE */}
      <img 
        src={AttendanceImg}
        className="w-full object-cover rounded-3xl scale-110"
      />

      {/* PREMIUM DARK GRADIENT OVERLAY */}
      <div className="
        absolute inset-0 
        bg-gradient-to-b 
        from-[#0B0F18]/40 
        via-transparent 
        to-[#0B0F18]/80
      "></div>
      
    </div>
  </div>

</motion.div>


{/* ==========================================
    GRID — CARD 2 + CARD 3
=========================================== */}
<div className="grid md:grid-cols-2 gap-6 w-full">

  {/* CARD 2 — Fee Management */}
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="
    bg-gradient-to-br from-[#0B0F18] to-[#0E121D]
    rounded-3xl 
    p-8 
    shadow-xl shadow-black/40 
    w-full
  "
>

  {/* IMAGE BLOCK WITH PREMIUM GRADIENT */}
  <div className="w-full flex justify-center mb-8 relative">
    <div className="w-full md:w-[95%] lg:w-[110%] rounded-3xl overflow-hidden relative">

      {/* IMAGE */}
      <img 
        src={FeeManagementImg}
        className="w-full object-cover rounded-3xl scale-110"
      />

      {/* BEAUTIFUL SOFT IMAGE FADE */}
      <div className="absolute inset-0 bg-gradient-to-b 
                      from-[#0B0F18]/30
                      via-transparent 
                      to-[#0B0F18]/75" />
    </div>
  </div>


  <p className="text-sm font-semibold tracking-widest text-[#4C9FFF]">
    FEE MANAGEMENT SYSTEM
  </p>

  <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mt-4">
    Streamline Collections.  
    <br /> Improve Financial Transparency.
  </h2>

  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mt-6">
    Manual fee collection leads to missed payments, calculation errors, and
    reconciliation delays. Our Fee Management System automates reminders,
    tracks dues, processes online payments, and generates transparent
    financial reports—helping schools manage finances effortlessly.
  </p>

</motion.div>



  {/* CARD 3 — Exam Management */}
  <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="
    bg-gradient-to-br from-[#0B0F18] to-[#0E121D]
    rounded-3xl 
    p-8 
    shadow-xl shadow-black/40 
    w-full
  "
>
  
  {/* IMAGE BLOCK WITH SOFT GRADIENT */}
  <div className="w-full flex justify-center mb-8 relative">
    <div className="w-full md:w-[95%] lg:w-[110%] rounded-3xl overflow-hidden relative">

      {/* IMAGE — NO BORDER, NO OVERLAY */}
      <img
        src={ExamImg}
        className="w-full object-cover rounded-3xl"
      />

      {/* BEAUTIFUL SOFT IMAGE GRADIENT (top → transparent → fade) */}
      <div className="absolute inset-0 bg-gradient-to-b 
                      from-[#0B0F18]/30 
                      via-transparent 
                      to-[#0B0F18]/70" />
    </div>
  </div>

  <p className="text-sm font-semibold tracking-widest text-[#4C9FFF]">
    EXAM & ACADEMIC MANAGEMENT
  </p>

  <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mt-4">
    Plan Exams Faster.  
    <br /> Publish Results Instantly.
  </h2>

  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mt-6">
    Creating timetables, entering marks, and preparing report cards manually 
    consumes valuable time. Our Exam & Academic Module simplifies the entire 
    workflow—automated marking, digital report cards, grade calculation, and  
    error-free result generation in minutes.
  </p>

</motion.div>

</div>


{/* ==========================================
    CARD 4 — Communication (IMAGE LEFT)
=========================================== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    bg-gradient-to-br from-[#0B0F18] to-[#0E121D]
    rounded-3xl
    px-10 py-16
    min-h-[550px]
    shadow-xl shadow-black/40
    flex flex-col md:flex-row
    items-start gap-12
    max-w-6xl mx-auto
  "
>

  {/* IMAGE LEFT WITH GRADIENT OVERLAY */}
  <div className="md:w-1/2 flex justify-end items-center">
    <div className="w-full md:w-[110%] lg:w-[125%] relative right-[-10px] rounded-3xl overflow-hidden">

      {/* IMAGE */}
      <img 
        src={ParentImg}
        className="w-full object-cover rounded-3xl scale-110"
      />

      {/* GRADIENT OVERLAY FOR PREMIUM LOOK */}
      <div className="
        absolute inset-0
        bg-gradient-to-b
        from-[#0B0F18]/40
        via-transparent
        to-[#0B0F18]/80
      "></div>

    </div>
  </div>


  {/* TEXT SECTION */}
  <div className="md:w-1/2 space-y-5">

    <p className="text-sm font-semibold tracking-widest text-[#4C9FFF]">
      PARENT TEACHER COMMUNICATION
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mt-4">
      Bridge Communication Gaps With a Unified Platform.
    </h2>

    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mt-6">
      WhatsApp groups and circulars often result in scattered communication.
      Our Communication Module centralizes messages, announcements, homework,
      and student progress updates—ensuring seamless, trackable interaction
      between parents and teachers.
    </p>

  </div>

</motion.div>

</div>
 </section>
  );
}
