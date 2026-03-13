"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import { useState } from "react";

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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="heading text-4xl text-neutral-900"
            variants={fadeUp}
          >
            Mentoria
          </motion.h2>
          <motion.p
            className="mt-4 text-neutral-700 leading-relaxed"
            variants={fadeUp}
            custom={1}
          >
            Oferecemos um atendimento exclusivo e completamente personalizado,
            com protocolos clínicos de alta performance desenvolvidos
            especialmente para você — unindo ciência estética de ponta,
            segurança em cada procedimento e o cuidado genuíno e acolhedor que
            você sempre mereceu sentir. Aqui, sua beleza natural é celebrada e
            potencializada com dedicação total.
          </motion.p>
          <motion.div className="mt-6" variants={fadeUp} custom={2}>
            <a href="#agendamento" className="btn btn-accent">
              Agende sua avaliação
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/SarahMentoria.JPG"
            alt="Dra. Priscila Martins em seu consultório"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            unoptimized
            onError={() => setImgSrc(fallback)}
          />
        </motion.div>
      </div>
    </section>
  );
}
