import TopArrow from "../assets/top-arrow.png";   // Arrow import

export default function ChatWidget() {

  return (
    <div className="fixed bottom-20 right-16 z-50">

      {/* ONLY ARROW BUTTON */}
      <div className="relative flex flex-col items-center">

        {/* 🔼 CLICK ARROW → GO TO HOME */}
        <a href="#home" className="cursor-pointer">
          <img
            src={TopArrow}
            alt="arrow"
            className="w-7 h-7 mb-2 rotate-180 animate-bounce"
          />
        </a>

      </div>

    </div>
  );
}
