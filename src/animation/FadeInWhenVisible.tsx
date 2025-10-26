import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export const FadeInWhenVisible = ({
  children,
  delay = 0,
  duration = 0.6,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
