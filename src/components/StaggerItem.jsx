import { motion } from "framer-motion";

function StaggerItem({ children }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}

export default StaggerItem;