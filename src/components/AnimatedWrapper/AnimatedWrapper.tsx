import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AnimatedWrapper: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
