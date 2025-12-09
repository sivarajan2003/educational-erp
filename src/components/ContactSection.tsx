import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });

  // ✅ Add error state (ONLY email)
  const [errors, setErrors] = useState({
    email: '',
  });

  // ✅ Updated submit handler with email validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { email: '' };
    let hasError = false;

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear email error on typing
    if (e.target.name === 'email') {
      setErrors({ email: '' });
    }
  };

  return (
<section className="bg-gradient-to-b from-[#0A0F1C] to-[#0B1A2A] py-24">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    {/* LEFT SIDE CONTENT */}
    <div className="space-y-6">
      <button className="px-6 py-2 rounded-full bg-[#F7F2B3] text-black text-sm font-medium">
        Get started
      </button>

      <h2 className="text-white font-bold text-2xl leading-tight whitespace-nowrap">
        Build a complete website using the assistance
      </h2>

      <p className="text-gray-400 text-lg">
        Start your free trial today and see your ideas come to life easily and creatively.
      </p>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="space-y-6">
      <form onSubmit={handleSubmit}>

        {/* Email + Get Started Row */}
        <div className="flex items-center gap-4">
          
        <div className="flex-1">
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    value={formData.email}
    onChange={handleChange}
    className={`
      w-full rounded-full bg-transparent 
      px-8 py-3 text-white placeholder-gray-400 
      focus:outline-none border
      ${errors.email ? "border-[#FF8A8A]" : "border-white/20"}
    `}
  />

  {errors.email && (
    <p className="text-[#FF8A8A] text-xs mt-1">
      {errors.email}
    </p>
  )}
</div>


<button
  className="
  px-4 py-4 rounded-full text-lg font-medium
  bg-gradient-to-r from-purple-500 to-indigo-500
  text-white shadow-lg
  transition-all duration-300
  hover:bg-black hover:from-black hover:to-black
  "
>
  Get started
</button>

        </div>

      </form>

      {/* Checkmark Row */}
      <div className="flex items-center gap-10 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-yellow-300 text-lg">✔</span>
          No credit card required
        </div>

        <div className="flex items-center gap-2">
          <span className="text-yellow-300 text-lg">✔</span>
          10-Day free trial
        </div>
      </div>

    </div>

  </div>
</section>
  );
}
