import { motion } from "framer-motion";

const ScrollAnimate = ({ children, direction = "up", delay = 0 }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
        delay: delay 
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // Cambiamos el margin a un valor que fuerce la detección apenas asome
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      variants={variants}
      // AGREGAMOS ESTO: flex 1 para que respete el 50/50 del padre
      style={{ flex: 1, width: '100%' }} 
      className="scroll-animate-wrapper"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimate;