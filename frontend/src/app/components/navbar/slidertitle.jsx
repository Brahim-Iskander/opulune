"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@mui/material/Typography";

export default function SlidingTitle() {
  const phrases = [
    "Opulune la beauté",
    "L'élégance naturelle",
    "La perfection en chaque détail",
    "Révélez votre éclat",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // change phrase every 3 seconds
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        flexGrow: 1,
        textAlign: "center",
        fontFamily: "var(--font-playfair)",
        fontWeight: "600",
        fontSize: "1.2rem",
        color: "white",
        position: "relative",
        overflow: "hidden",
        height: "1.5em",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
          }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </Typography>
  );
}
