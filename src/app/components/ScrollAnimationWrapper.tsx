import { motion } from "framer-motion";
import { FC } from "react";

const ScrollAnimationWrapper: FC<any> = ({ children, className, ...props }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
