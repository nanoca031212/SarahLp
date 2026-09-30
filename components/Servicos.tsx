"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";

type ServiceItem = {
  title: string;
  img: string;
  description: string;
  cardClassName?: string;
  mediaClassName?: string;
};

const items: ServiceItem[] = [
  {
    title: "Tiragem de Tarot",
    img: "/images/services/Tiragem.JPG",
    description:
      "Se você busca direcionamento, clareza ou respostas para os conflitos da sua vida, o Tarot te ajuda a compreender o momento que está vivendo. Através das cartas, você acessa o que está oculto e desenvolve mais consciência sobre seus caminhos.",
  },
  {
    title: "Jornada Soullar",
    img: "/images/services/Chamada.png",
    description:
      "Um acompanhamento personalizado com 4 sessões, alternando entre Tarot e Reiki, de acordo com a sua necessidade.Indicado para quem sente que está travado, sem clareza ou busca se aprofundar na espiritualidade e no autoconhecimento.Um processo para te ajudar a enxergar com mais consciência e se reconectar com seu propósito.",
  },
  {
    title: "Mentoria",
    img: "/images/services/Chamada.JPG",
    description:
      "Para você que está começando no Tarot ou no Reiki e deseja se desenvolver com segurança e direcionamento.Te acompanho de perto nesse processo, trazendo clareza, prática e aprofundamento na sua jornada.",
  },
  {
    title: "Reiki",
    img: "/images/services/Reik.JPG",
    description:
      "Uma terapia energética para limpar, alinhar e equilibrar seu campo. Durante a sessão, acessamos padrões emocionais e energéticos, promovendo desbloqueios e maior fluidez nos seus caminhos.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20  md:pt-18 md:pb-0">
      <div className="section">
        <motion.h2
          className="heading text-6xl text-center text-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pacotes de Consultorias
        </motion.h2>
        <motion.h2
          className="heading text-lg pb-10 py-3 text-center text-neutral-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Oferecemos um atendimento exclusivo e completamente personalizado.
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <ServiceCard
              key={`${s.title}-${i}`}
              title={s.title}
              img={s.img}
              description={s.description}
              index={i}
              cardClassName={s.cardClassName}
              mediaClassName={s.mediaClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  img,
  description,

  cardClassName,
  mediaClassName,
}: {
  title: string;
  img: string;
  description: string;
  index: number;
  cardClassName?: string;
  mediaClassName?: string;
}) {
  const [src, setSrc] = useState(img);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div>
      <div
        ref={ref}
        className={`group transition-all duration-300 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } ${cardClassName ?? ""}`}
        style={{ willChange: "transform, opacity" }}
      >
        <div
          className={`relative overflow-hidden rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-105 ${
            mediaClassName ?? "h-64"
          }`}
        >
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
            unoptimized
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            onError={() => setSrc("/images/fallback-service.svg")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/0" />
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="absolute inset-0"
                aria-label={`Ver detalhes de ${title}`}
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
              <div className="mt-6 flex items-center justify-end gap-3">
                <Link href="https://api.whatsapp.com/send/?phone=5531995724666&text&type=phone_number&app_absent=0&utm_source=ig">
                  <div className="btn btn-accent px-5 py-2 text-sm">
                    Agendar
                  </div>
                </Link>
              </div>
            </DialogContent>
          </Dialog>

          <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            <Link href="https://api.whatsapp.com/send/?phone=5531995724666&text&type=phone_number&app_absent=0&utm_source=ig">
              <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all rounded-full bg-accent px-4 py-2 text-white text-sm">
                Agendar
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
