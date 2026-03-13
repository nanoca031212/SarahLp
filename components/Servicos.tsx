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

type ServiceItem = {
  title: string;
  img: string;
  cardClassName?: string;
  mediaClassName?: string;
};

const items: ServiceItem[] = [
  { title: "Tiragens", img: "/images/services/Tiragem.JPG" },
  {
    title: "Chamada de vídeo",
    img: "/images/services/Chamada.png",
  },
  {
    title: "Chamada de vídeo",
    img: "/images/services/Chamada.png",
  },
  {
    title: "Reiki",
    img: "/images/services/Reik.JPG",
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
          Oferecemos um atendimento exclusivo e completamente personalizado, com
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <ServiceCard
              key={`${s.title}-${i}`}
              title={s.title}
              img={s.img}
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
  index,
  cardClassName,
  mediaClassName,
}: {
  title: string;
  img: string;
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
                <DialogDescription>
                  Um pacote pensado para você, com orientação personalizada e
                  atendimento exclusivo.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 flex items-center justify-end gap-3">
                <a
                  href="#agendamento"
                  className="btn btn-accent px-5 py-2 text-sm"
                >
                  Agendar
                </a>
              </div>
            </DialogContent>
          </Dialog>

          <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
            <h3 className="text-white text-lg font-semibold">{title}</h3>

            <a
              href="#agendamento"
              className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all rounded-full bg-accent px-4 py-2 text-white text-sm"
            >
              Agendar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
