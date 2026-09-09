"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/data";

export function MobileWhatsapp() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (value) => setVisible(value > 520));

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={whatsappUrl()}
          className="mobile-whatsapp"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
        >
          <MessageCircle size={19} />
          Booking via WhatsApp
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
