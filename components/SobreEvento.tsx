"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";

type EventoItem = {
  title: string;
  subtitle: string;
  img: string[];
};

const items: EventoItem[] = [
  {
    title: "Práticas de autoconhecimento ",
    subtitle: "Imersão prática e personalizada",
    img: [
      "/images/Eventos/PráticasDeAutoconhecimento/Fotos (37)_Original.JPG",
      "/images/Eventos/PráticasDeAutoconhecimento/Fotos (41)_Original.JPG",
      "/images/Eventos/PráticasDeAutoconhecimento/Fotos (230).jpeg",
      "/images/Eventos/PráticasDeAutoconhecimento/Fotos (297).jpeg",
    ],
  },
  {
    title: "Dinâmicas para leveza e bem estar",
    subtitle: "Protocolos premium e avaliação completa",
    img: [
      "/images/Eventos/Dinâmicasparalevezabemestar/Fotos (22)_Original.JPG",
      "/images/Eventos/Dinâmicasparalevezabemestar/Fotos (24)_Original.JPG",
      "/images/Eventos/Dinâmicasparalevezabemestar/Fotos (128)_Original.JPG",
      "/images/Eventos/Dinâmicasparalevezabemestar/Fotos (194)_Original.JPG",
    ],
  },
  {
    title: "Experiência Reiki",
    subtitle: "Bem-estar e recuperação corporal",
    img: [
      "/images/Eventos/Reiki/sessãoReik (1).jpg",
      "/images/Eventos/Reiki/sessãoReik (2).jpg",
      "/images/Eventos/Reiki/sessãoReik (3).jpg",
      "/images/Eventos/Reiki/sessãoReik (4).jpg",
    ],
  },
  {
    title: "Tarot",
    subtitle: "Resultados reais e acompanhamento",
    img: [
      "/images/Eventos/Tarot/SessãoTarot (1).jpg",
      "/images/Eventos/Tarot/SessãoTarot (2).jpg",
      "/images/Eventos/Tarot/SessãoTarot (3).jpg",
      "/images/Eventos/Tarot/SessãoTarot (4).jpg",
    ],
  },
];

export default function SobreEvento() {
  const [active, setActive] = useState(0);
  const [previewError, setPreviewError] = useState(false);
  const current = items[active] ?? items[0]!;
  const hasCarousel = current.img.length > 1;
  return (
    <section
      id="evento"
      className="relative overflow-hidden bg-neutral-950 py-20 text-white md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_50%_at_50%_20%,black,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,169,110,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,169,110,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(126,206,202,0.25),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(201,169,110,0.22),transparent_52%)]" />
      </div>

      <div className="section relative">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <motion.h2
            className="heading text-5xl leading-[1.05] md:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Nossos eventos
            <br />
            falam por si.
          </motion.h2>
          <motion.p
            className="text-sm text-white/70 md:text-right"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Cada experiência é feita sob medida para impactar, gerar valor e
            entregar resultados reais.
          </motion.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-[420px_1fr] md:items-center">
          <div className="space-y-2">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    setActive(i);
                    setPreviewError(false);
                  }}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition-colors ${
                    isActive
                      ? "border-accent/50 bg-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="mt-1 text-xs text-white/70">
                        {item.subtitle}
                      </div>
                    </div>
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-colors ${
                        isActive
                          ? "border-accent/60 bg-accent/20 text-accent"
                          : "border-white/15 bg-transparent text-white/70"
                      }`}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </button>
              );
            })}

            <div className="hidden pt-4 md:block">
              <a
                href="#agendamento"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:brightness-110"
              >
                Quero participar
              </a>
            </div>
          </div>

          <div className="min-w-0 space-y-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft">
              <div className="relative overflow-hidden aspect-[16/10] w-full">
                {hasCarousel ? (
                  <Swiper
                    modules={[Autoplay, A11y]}
                    autoplay={{ delay: 2600, disableOnInteraction: false }}
                    loop
                    speed={600}
                    className="evento-swiper absolute inset-0"
                  >
                    {current.img.map((raw) => {
                      const src = encodeURI(raw);
                      return (
                        <SwiperSlide key={src} className="!h-full">
                          <div className="relative h-full w-full">
                            <Image
                              src={src}
                              alt={current.title}
                              fill
                              className="object-cover"
                              sizes="(min-width: 1024px) 52vw, 100vw"
                              unoptimized
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                ) : (
                  <Image
                    src={
                      previewError
                        ? "/images/fallback-hero.svg"
                        : current.img[0]
                    }
                    alt={current.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    unoptimized
                    onError={() => setPreviewError(true)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/25 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{current.title}</h3>
                    <p className="mt-1 text-sm text-white/70">
                      {current.subtitle}
                    </p>
                  </div>
                  <a
                    href="#agendamento"
                    className="hidden md:inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white/90 hover:bg-white/10"
                  >
                    Agendar
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs text-white/60">
                  <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
                  <span>Vagas limitadas</span>
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                  <span>Atendimento premium</span>
                </div>
              </div>
            </div>

            <a
              href="#agendamento"
              className="md:hidden inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-white hover:brightness-110"
            >
              Agendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
