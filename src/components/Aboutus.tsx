import { motion } from "framer-motion";
import AttendImg from "../assets/attend-removebg-preview.png";
import FeeManagementImg from "../assets/Fee_Management_System-removebg-preview.png";

export default function ModernSolutions() {
  const cardZoomIn = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  return (
    <section id="modern" className="bg-[#0F131D] text-gray-300 py-20 px-6 lg:px-20">

      {/* ---------- HEADER ---------- */}
      <div className="text-center mb-16">
        <p className="text-[#4C9FFF] tracking-widest text-sm">MODERN SOLUTIONS</p>

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

      {/* ---------- CARD WRAPPER ---------- */}
      <div className="grid gap-12">

        {/* ============================================================
    1️⃣ CARD — ATTENDANCE MANAGEMENT (IMAGE ON RIGHT)
============================================================ */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-[#141923] rounded-3xl p-12 shadow-lg shadow-black/20 
             flex flex-col md:flex-row items-center md:items-start gap-10 "
>
  {/* LEFT TEXT SECTION */}
  <div className="md:w-1/2 space-y-6">

    {/* EYEBROW TITLE */}
    <p className="text-[#4C9FFF] tracking-widest text-sm font-semibold">
      ATTENDANCE MANAGEMENT
    </p>

    {/* MAIN HEADING WITH PERFECT GLOW */}
<div className="relative inline-block">
  <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight relative z-10">
    Eliminate Manual Errors.
    <br /> Track Attendance in Seconds.
  </h2>

  {/* HEADING-ONLY GLOW */}
  <div className="
    absolute 
    inset-0 
    rounded-xl 
    blur-[35px] 
    bg-[#4C9FFF]/25 
    -z-10
  "></div>
</div>
    {/* PARAGRAPH */}

    <p className="features-card-text w-richtext">
  Traditional register-based attendance slows down classrooms and creates 
  inaccurate records. With our smart Attendance Management Module, schools 
  can automate daily attendance, ensure 100% accuracy, and send real-time 
  updates to parents all with a single click.
</p>

    <div className="absolute inset-0 pointer-events-none 
  bg-gradient-to-b 
  from-[#0B101B]/90 
  via-[#0B101B]/40 
  to-[#0B101B]/90">
</div>

  </div>

  {/* RIGHT IMAGE SECTION — CLEAN, NO BLACK BACKGROUND */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="md:w-1/2 flex justify-end relative"
>
  <div className="
      w-[520px] h-[360px]
      md:w-[600px] md:h-[420px]
      overflow-visible
      rounded-3xl
      flex items-center justify-center
      relative right-[-50px] 
  ">
    <img
      src={AttendImg}
      alt="attendance"
      className="w-full h-full object-cover rounded-3xl"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F131D]/80"></div>
  </div>
</motion.div>

</motion.div>
        <div className="grid md:grid-cols-2 gap-10">

{/* ----------------------------------------------------
    CARD 2 — FEE MANAGEMENT SYSTEM  (IMAGE ON TOP)<motion.div
  variants={cardZoomIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="bg-[#141923] rounded-3xl p-10 shadow-lg shadow-black/20"
>

---------------------------------------------------- */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="bg-[#141923] rounded-3xl p-10 shadow-lg shadow-black/20"
>

  {/* IMAGE ON TOP — CLEAN FLOATING PNG WITH GRADIENT */}
<div className="w-full flex justify-center mb-10 relative">

{/* MAIN IMAGE  FeeManagementImg*/}
<img
  src={FeeManagementImg}
  alt="Fee Management System"
  className="w-[85%] md:w-[70%] object-contain relative z-10"
/>

{/* SOFT GRADIENT BEHIND IMAGE */}
<div className="absolute inset-0 flex justify-center items-center -z-10">
  <div className="w-[90%] md:w-[75%] h-full 
    bg-gradient-to-b from-[#ffffff22] via-transparent to-transparent 
    blur-2xl rounded-3xl">
  </div>
</div>

</div>

{/* SECTION LABEL */}
<p className="text-[14px] font-medium tracking-[0.08em] text-[#4C9FFF] uppercase mb-4">
 FEE MANAGEMENT SYSTEM
</p>

{/* TITLE */}
<div className="max-w-[820px] pl-4 md:pl-0 space-y-6">

  <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
    Streamline Collections.  
    <br /> Improve Financial Transparency.
  </h2>

  <p className="features-card-text w-richtext">
    Manual fee collection leads to missed payments, calculation errors, and reconciliation delays.
    Our Fee Management System automates reminders, tracks dues,processes online payments, and generates transparent financial reports helping schools manage
    finances effortlessly.
  </p>

</div>

</motion.div>


      {/* ----------------------------------------------------
          CARD 3 — Complex Customizations Problem
      ---------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-[#141923] rounded-3xl p-8 shadow-lg shadow-black/20"
      >
        {/* IMAGE TOP */}
         {/* IMAGE ON TOP — CLEAN FLOATING PNG WITH GRADIENT */}
<div className="w-full flex justify-center mb-10 relative">

{/* MAIN IMAGE  FeeManagementImg*/}
<img
  src={FeeManagementImg}
  alt="Fee Management System"
  className="w-[85%] md:w-[70%] object-contain relative z-10"
/>

{/* SOFT GRADIENT BEHIND IMAGE */}
<div className="absolute inset-0 flex justify-center items-center -z-10">
  <div className="w-[90%] md:w-[75%] h-full 
    bg-gradient-to-b from-[#ffffff22] via-transparent to-transparent 
    blur-2xl rounded-3xl">
  </div>
</div>

</div>
       

        {/* SECTION LABEL */}
<p className="text-[14px] font-medium tracking-[0.08em] text-[#4C9FFF] uppercase mb-4">
EXAM & ACADEMIC MANAGEMENT
</p>

{/* TITLE */}
<div className="max-w-[820px] pl-4 md:pl-0 space-y-6">

  <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
    Plan Exams Faster.  
    <br /> Publish Results Instantly.
  </h2>

  <p className="features-card-text w-richtext">
    Creating timetables, entering marks, and preparing report cards manually consumes valuable
    time. Our Exam & Academic Module simplifies the entire workflow—automated marking, digital report cards, grade calculation, and error-free result
    generation in minutes.
  </p>

</div>

      </motion.div>

    </div>
        {/* ============================================================
            4️⃣ CARD — PARENT-TEACHER COMMUNICATION (IMAGE ON LEFT)
           ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#141923] rounded-3xl p-10 shadow-lg shadow-black/20 flex flex-col md:flex-row items-center gap-10"
        >
          {/* LEFT IMAGE */}
          <div
    className="
      w-[520px] h-[360px]
      md:w-[600px] md:h-[420px]
      overflow-visible
      rounded-3xl
      flex items-center justify-center
      relative left-[-50px]
    "
  >
    <img
      src={AttendImg}         // ← change image name if needed
      alt="Feature Illustration"
      className="w-full h-full object-cover rounded-3xl"
    />

    {/* Bottom gradient fade (same effect as Card 1) */}
    <div className="absolute inset-0 bg-gradient-to-b 
        from-transparent via-transparent to-[#0F131D]/80"></div>
  </div>

          {/* RIGHT TEXT */}
          <div className="md:w-1/2">
          <p className="text-[14px] font-medium tracking-[0.08em] text-[#4C9FFF] uppercase mb-4">
  PARENT TEACHER COMMUNICATION
</p>

<h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
  Bridge Communication Gaps  
  <br /> With a Unified Platform.
</h2>

<p className="features-card-text w-richtext">

  WhatsApp groups and circulars often result in scattered communication.
  Our Communication Module centralizes messages, announcements, homework, and student progress updates—ensuring 
  seamless, trackable interaction between parents and teachers.
</p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
