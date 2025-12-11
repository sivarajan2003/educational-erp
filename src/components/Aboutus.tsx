import { motion } from "framer-motion";
import AttendImg from "../assets/attend-removebg-preview.png";
import FeeManagementImg from "../assets/Fee_Management_System-removebg-preview.png";

export default function ModernSolutions() {
  return (
    <section id="modern" className="bg-[#0F131D] text-gray-300 py-10 px-6 lg:px-20">

  {/* ---- HEADER ---- */}
  <div className="text-center mb-8">
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


      {/* ----------- CARD WRAPPER ----------- */}
<div className="max-w-6xl mx-auto space-y-12 px-4 md:px-0">

{/* ==========================================
    CARD 1 — Attendance (IMAGE RIGHT)
=========================================== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
  bg-[#161A23]
 rounded-3xl
    px-10 py-16                 /* ← increased height */
    min-h-[550px]              /* ← EXACT height of image 2 */
    shadow-lg shadow-black/20
    flex flex-col md:flex-row
    items-start gap-12
    max-w-6xl mx-auto
  "
>

  {/* TEXT */}
  <div className="md:w-1/2 flex flex-col justify-center space-y-5">
  <p className="text-sm font-semibold tracking-widest text-[#4C9FFF]">
    ATTENDANCE MANAGEMENT
  </p>

  <div className="relative inline-block">
    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mt-4">
      Eliminate Manual Errors.
      <br /> Track Attendance in Seconds.
    </h2>
    <div className="absolute inset-0 rounded-xl blur-[30px] bg-[#4C9FFF]/20 -z-10"></div>
  </div>

  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mt-6">
    Traditional register-based attendance slows down classrooms and creates 
    inaccurate records. Our Attendance Module automates attendance, ensures 
    100% accuracy, and sends real-time updates to parents.
  </p>
</div>

  {/* IMAGE */}
  <div className="md:w-1/2 flex justify-end items-center">
  <div className="w-full md:w-[110%] lg:w-[125%] relative right-[-40px] rounded-3xl overflow-hidden">
    
    {/* IMAGE ONLY */}
    <img 
      src={AttendImg} 
      className="w-full object-cover rounded-3xl scale-110"
    />

  </div>
</div>


</motion.div>


{/* ==========================================
    GRID — CARD 2 + CARD 3
=========================================== */}
<div className="grid md:grid-cols-2 gap-6 w-full">

  {/* CARD 2 — Fee Management {FeeManagementImg}*/}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="
    bg-[#161A23]
rounded-3xl 
      p-8 
      shadow-lg shadow-black/20 
      w-full
    "
  >
   <div className="w-full flex justify-center mb-8 relative">
  <div className="w-full md:w-[95%] lg:w-[110%] rounded-3xl overflow-hidden relative">
    
    {/* IMAGE with ZOOM */}
    <img 
      src={FeeManagementImg} 
      className="w-full object-cover rounded-3xl scale-110"
    />

    {/* DARK GRADIENT OVERLAY (like Card 1) */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F131D]/70" />
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
      Manual fee collection leads to delays. Our system automates reminders, 
      tracks dues, handles online payments, and provides transparent reporting.
    </p>
  </motion.div>


  {/* CARD 3 — Exam Management */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="
    bg-[#161A23]

    rounded-3xl 
      p-8 
      shadow-lg shadow-black/20 
      w-full
    "
  >
    <div className="w-full flex justify-center mb-8 relative">
  <div className="w-full md:w-[95%] lg:w-[110%] rounded-3xl overflow-hidden relative">
    
    {/* IMAGE with ZOOM */}
    <img 
      src={FeeManagementImg} 
      className="w-full object-cover rounded-3xl scale-110"
    />

    {/* DARK GRADIENT OVERLAY (like Card 1) */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F131D]/70" />
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
      Auto-generate report cards, publish results instantly, and simplify 
      your entire academic workflow.
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
  bg-[#161A23]
rounded-3xl
    px-1 py-16                 /* ← increased height */
    min-h-[550px]              /* ← EXACT height of image 2 */
    shadow-lg shadow-black/20
    flex flex-col md:flex-row
    items-start gap-12
    max-w-6xl mx-auto
  "
>

  {/* IMAGE LEFT */}
  <div className="md:w-1/2 flex justify-end items-center">
  <div className="w-full md:w-[110%] lg:w-[125%] relative right-[-40px] rounded-3xl overflow-hidden">
    
    <img 
      src={AttendImg} 
      className="w-full object-cover rounded-3xl scale-110"    />
  </div>
</div>


  {/* TEXT */}
  <div className="md:w-1/2 space-y-5">
  <p className="text-sm font-semibold tracking-widest text-[#4C9FFF]">
      PARENT TEACHER COMMUNICATION
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mt-4">
      Bridge Communication Gaps With a Unified Platform.
    </h2>

    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mt-6">
      Centralize announcements, homework, messages, and student progress 
      updates all in one unified platform.
    </p>
  </div>
</motion.div>

</div>
 </section>
  );
}
