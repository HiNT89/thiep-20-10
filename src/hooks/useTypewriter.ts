import { useState, useEffect } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({
  text,
  speed = 50,
  delay = 0,
}: UseTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    setHasStarted(false);

    if (!text) return;

    const timer = setTimeout(() => {
      setHasStarted(true);
      let index = 0;

      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(timer);
      setDisplayedText("");
      setIsComplete(false);
      setHasStarted(false);
    };
  }, [text, speed, delay]);

  return { displayedText, isComplete, hasStarted };
};
