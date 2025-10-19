import { useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Message() {
  const title = "Đôi lời gửi em 🌸";
  const message = `🌸 "Cảm ơn em đã đến bên anh, mang theo sự dịu dàng, thấu hiểu và nụ cười tươi tắn.
Khiến cuộc sống anh trở nên ấm áp và hạnh phúc hơn rất nhiều.
Anh biết đôi khi anh ngốc và chưa đủ quan tâm…

… nhưng không hề lơ là em. ❤️ `;

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
