"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Sobre() {
  const primary =
    "https://source.unsplash.com/900x1125/?female%20aesthetic%20doctor%20portrait%20clinic&sig=21";
  const fallback =
    "https://source.unsplash.com/900x1125/?professional%20woman%20clinic%20portrait&sig=22";
  const [imgSrc, setImgSrc] = useState(primary);
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="section grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/sarahSobre.JPG"
            alt="Dra. Priscila Martins em seu consultório"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            unoptimized
            onError={() => setImgSrc(fallback)}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="heading text-4xl text-neutral-900"
            variants={fadeUp}
          >
            Sobre mim
          </motion.h2>
          <motion.p
            className="mt-4 text-neutral-700 leading-relaxed"
            variants={fadeUp}
            custom={1}
          >
            Ao longo da minha jornada, antes de me tornar terapeuta, fui bióloga
            e professora. Ao seguir meu chamado na espiritualidade, passei a
            unir intuição e ciência para criar um espaço de acolhimento e
            autoconhecimento, onde você pode se reconectar com mais clareza e
            verdade.
          </motion.p>
          <motion.div className="mt-6" variants={fadeUp} custom={2}>
            <Link href="https://api.whatsapp.com/send/?phone=5531995724666&text&type=phone_number&app_absent=0&utm_source=ig">
              <div className="btn btn-accent">Agendar atendimento</div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
