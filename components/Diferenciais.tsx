"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import {
  Sparkles,
  HandHeart,
  FlaskConical,
  ShieldCheck,
  Award,
  Star,
  Lock,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  {
    icon: HandHeart,
    title: "Atendimento único",
    desc: "Protocolos exclusivos e personalizados.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente exclusivo",
    desc: "Conforto e privacidade.",
  },
  {
    icon: FlaskConical,
    title: "Tecnologia avançada",
    desc: "Equipamentos de ponta.",
  },
  {
    icon: Sparkles,
    title: "Produtos premium",
    desc: "Marcas reconhecidas e seguras.",
  },
  {
    icon: Award,
    title: "Profissionais certificados",
    desc: "Formação contínua e credenciamentos.",
  },
  {
    icon: Star,
    title: "Resultados naturais",
    desc: "Foco na harmonia e sutileza.",
  },
  {
    icon: Lock,
    title: "Privacidade garantida",
    desc: "Dados e imagens protegidos.",
  },
  {
    icon: Users,
    title: "Acompanhamento próximo",
    desc: "Pós-tratamento atencioso.",
  },
];

export default function Diferenciais() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const duration = 1200;
    const target = 500;
    const animate = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="diferenciais" className="py-20 md:py-28">
      <div className="section">
        <motion.h2
          className="heading text-4xl text-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Diferenciais
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-soft"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
            >
              <item.icon className="h-7 w-7 text-accent" aria-hidden="true" />
              <h3 className="mt-3 font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-10 rounded-2xl bg-primary/10 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-4xl font-bold text-accent">+{count}</span>
          <span className="ml-2 text-neutral-700">clientes atendidas</span>
        </motion.div>
      </div>
    </section>
  );
}
