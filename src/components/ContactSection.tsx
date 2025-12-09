import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
<section id="contactsection" className="py-20 bg-[#0F131D]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
          <h2 className="relative inline-block text-5xl lg:text-6xl font-extrabold mb-8">
  <span
    className="
      bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400
      text-transparent bg-clip-text
    "
  >
    REQUEST A DEMO
  </span>
</h2>


          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/60 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/60 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/60 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-white/40 text-white placeholder-white/60 py-3 px-0 focus:outline-none focus:border-white transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex justify-end">
              <button
  type="submit"
  className="
    px-12 py-4 
    rounded-full 
    font-medium text-lg 
    text-gray-200 
    bg-[#8B5CF6] 
    transition-all duration-300
    hover:bg-black hover:text-white
  "
>
  SEND MESSAGE
</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
