import { useEffect } from "react";
import "./stacked.css";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Images
import SimpleImg from "../assets/simple.png";
import BeautifulImg from "../assets/beautifulinterface.png";
import ToprateImg from "../assets/toprate.png";
import InnovativeImg from "../assets/innovative.png";

export default function Features() {
  useEffect(() => {
    const stack = document.querySelector(".stack-wrapper") as HTMLElement | null;
    const left = document.querySelector(".left-static-content") as HTMLElement | null;
    const wrapper = document.querySelector(".features-wrapper") as HTMLElement | null;
  
    if (!stack || !left || !wrapper) return;
  
    // 1) PIN LEFT SIDE WHILE RIGHT SCROLLS
    ScrollTrigger.create({
      trigger: "#features",
      start: "top top",
      end: () => stack.scrollHeight - stack.clientHeight,
      // SHORTER — removes large gap
      pin: ".left-static-content",
      pinSpacing: true,                // allows natural flow after unpin
      anticipatePin: 1,
    });
  
    // 2) ANIMATION FOR CARDS
    gsap.utils.toArray<HTMLElement>(".card-body").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            scroller: stack,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
  
    // 3) PARALLAX IMAGE
    gsap.utils.toArray<HTMLElement>(".panel-image").forEach((img) => {
      gsap.fromTo(
        img,
        { y: 60, scale: 1.08 },
        {
          y: -40,
          scale: 1,
          scrollTrigger: {
            trigger: img,
            scroller: stack,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  
    // ------------------------------------------------------------
    // 4) FORWARD SCROLL FROM LEFT → RIGHT SCROLL AREA
    // ------------------------------------------------------------
    const forwardScroll = (e: WheelEvent) => {
      const atTop = stack.scrollTop === 0;
      const atBottom = Math.ceil(stack.scrollTop + stack.clientHeight) >= stack.scrollHeight;
  
      // SCROLL inside right column
      if (!(atTop && e.deltaY < 0) && !(atBottom && e.deltaY > 0)) {
        e.preventDefault();
        stack.scrollBy({ top: e.deltaY, behavior: "auto" });
      }
    };
  
    left.addEventListener("wheel", forwardScroll, { passive: false });
  
    // Clean
    return () => {
      left.removeEventListener("wheel", forwardScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  
  return (
    <section id="features" className="bg-[#0F131D] py-24">

      {/* FLEX WRAPPER (VERY IMPORTANT) */}
      <div className="features-wrapper">
        <div className="features-inner">

          {/* LEFT — ALWAYS PINNED */}
          {/* LEFT — ALWAYS PINNED */}
<div className="left-static-content px-12 lg:px-24 py-20">
  <div className="max-w-[650px]">

    <h2
      className="
        text-white
        font-light
        tracking-tight
        leading-[1.1]
        text-[48px]
        md:text-[64px]
        lg:text-[72px]
        mb-12
      "
    >
      BE AN <br /> EFFECTIVE <br /> ADMINISTRATOR
    </h2>

    <p className="text-gray-300 text-[18px] leading-[1.7]">
    Managing a school is no easy task. The sheer magnitude of processes involved can be overwhelming, especially if they are disconnected. And gone are those days when people used to depend on each other for even the simplest procedures.
    We bring you the latest technology software for effective school management, shortening every lengthy procedure such as fee management, student attendance, exam management and student enrollment. We eliminate every extra manual labor involved via automating every school-related paperwork.


    </p>

  </div>
</div>


          {/* RIGHT — ONLY THIS SCROLLS */}
          <div className="right-stack-area pr-20 md:pr-32">


            <div className="stack-wrapper">
              <ul id="cards">

                {/* CARD 1 */}{/* CARD 1 */}
<li className="card border-anim-1">

                  
                <div className="card-frame px-8 md:px-12">
                    <div className="stack-glow" />
                    <div className="card-body bg-black rounded-3xl">

                      <div className="panel-inner">
                        <div className="panel-title">Top rated</div>
                        <div className="panel-sub">Designed for clarity</div>
                        <div className="chart-wrap">
                          <img src={SimpleImg} className="panel-image" />
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* CARD 2 */}
                <li className="card border-anim-1">
                <div className="card-frame px-8 md:px-12">
                    <div className="stack-glow" />
                    <div className="card-body bg-black rounded-3xl">

                      <div className="panel-inner">
                        <div className="panel-title">Beautiful Interface</div>
                        <div className="panel-sub">Clean modern visuals</div>
                        <div className="chart-wrap">
                          <img src={BeautifulImg} className="panel-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* CARD 3 */}
                <li className="card border-anim-1">
                <div className="card-frame px-8 md:px-12">
                    <div className="stack-glow" />
                    <div className="card-body bg-black rounded-3xl">

                      <div className="panel-inner">
                        <div className="panel-title">Top Performance</div>
                        <div className="panel-sub">Lightning fast</div>
                        <div className="chart-wrap">
                          <img src={ToprateImg} className="panel-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* CARD 4 */}<li className="card border-anim-1">
                <div className="card-frame px-8 md:px-12">
                    <div className="stack-glow" />
                    <div className="card-body bg-black rounded-3xl">

                      <div className="panel-inner">
                        <div className="panel-title">Simple Solutions</div>
                        <div className="panel-sub">No fluff — just functionality</div>
                        <div className="chart-box">
                          <img src={InnovativeImg} className="panel-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
