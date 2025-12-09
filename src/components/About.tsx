import PenImage from "../assets/pen.png";

export default function About() {
  return (
    <section id="aboutus" className="py-20 bg-[#0F131D]">
      <div className="grid lg:grid-cols-2 gap-0 min-h-[700px]">

        {/* LEFT SIDE */}
        <div className="px-8 lg:px-16 py-16 flex items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#DE6C6C] tracking-wide">
              BE AN EFFECTIVE ADMINISTRATOR
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6 text-justify">
              Managing a school is no easy task. The sheer magnitude of processes involved can
              be overwhelming, especially if they are disconnected…
            </p>

            <p className="text-gray-300 leading-relaxed text-justify">
              We <span className="text-blue-400 font-medium">bring</span> you the latest
              technology software for effective school management…
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${PenImage})`,
            minHeight: "700px",
          }}
        >
          <div className="absolute inset-0 bg-red-400/70"></div>

          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="border-4 border-white/50 p-12 max-w-2xl w-full">
              <h2 className="text-4xl md:text-6xl font-light text-white text-center tracking-wider uppercase">
                BE AN EFFECTIVE ADMINISTRATOR
              </h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
