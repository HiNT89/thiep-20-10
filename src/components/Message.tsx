import { useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Message() {
  const title = "Chúc mừng ngày Phụ nữ Việt Nam 20/10 🌸";
  const message = `🌸 Chúc bà, các bác, mẹ và các chị gái 20/10 thật rực rỡ, luôn xinh đẹp – hạnh phúc – bình an 💖 `;

  const [shouldStartMessage, setShouldStartMessage] = useState(false);

  const { displayedText: displayedTitle, isComplete: titleComplete } =
    useTypewriter({
      text: title,
      speed: 80,
      delay: 500,
    });

  const { displayedText: displayedMessage, isComplete: messageComplete } =
    useTypewriter({
      text: shouldStartMessage ? message : "",
      speed: 30,
      delay: 500,
    });

  useEffect(() => {
    if (titleComplete) {
      const timer = setTimeout(() => {
        setShouldStartMessage(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [titleComplete]);

  return (
    <div className="text-center mt-6">
      <h1 className="text-2xl font-bold text-pink-600 min-h-[2.5rem]">
        {displayedTitle}
        {!titleComplete && <span className="animate-pulse">|</span>}
      </h1>
      <p className="text-lg mt-2 text-gray-700 min-h-[3rem]">
        {shouldStartMessage && displayedMessage}
        {shouldStartMessage && !messageComplete && (
          <span className="animate-pulse">|</span>
        )}
      </p>
    </div>
  );
}
