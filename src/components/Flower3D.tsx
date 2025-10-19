import { motion } from "framer-motion";
import flowerSvg from "../assets/flower.svg";
import hintImg from "../assets/hint.jpg";

export default function Flower3D() {
  return (
    <motion.div
      initial={{ rotateX: -90, scale: 0.5, opacity: 0 }}
      animate={{ rotateX: 0, scale: 1.2, opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative perspective-1000"
    >
      {/* Bông hoa chính */}
      <motion.img
        src={flowerSvg}
        alt="flower"
        className="w-40 h-40 md:w-56 md:h-56 drop-shadow-2xl transform-gpu"
        animate={{ rotateZ: [0, 3, -3, 0], scale: [1, 1.05, 1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Nhụy hoa với hình ảnh */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform !-translate-x-1/2 !-translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.img
          src={hintImg}
          alt="pistil"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-lg border-2 "
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      </motion.div>
    </motion.div>
  );
}
