"use client";

import { motion } from "framer-motion";
import { fadeUp, letterStagger, staggerContainer } from "@/lib/animations";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function SplitText({ text }: { text: string }) {
  return (
    <span aria-label={text} className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          className="inline-block"
          variants={letterStagger}
          custom={i}
          key={i}
          aria-hidden="true"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const images = [
    "https://source.unsplash.com/1920x1080/?luxury%20clinic%20interior&sig=11",
    "https://source.unsplash.com/1920x1080/?medical%20spa%20lobby&sig=12",
    "https://source.unsplash.com/1920x1080/?aesthetic%20treatment%20room&sig=13",
    "https://source.unsplash.com/1920x1080/?minimal%20beauty%20clinic&sig=14",
    "https://source.unsplash.com/1920x1080/?premium%20spa%20suite&sig=15",
  ];
  const [idx, setIdx] = useState(0);
  const [fallback, setFallback] = useState<boolean[]>(() =>
    images.map(() => false),
  );

  useEffect(() => {
    if (!bgRef.current) return;
    const el = bgRef.current;
    const imgs = el.querySelectorAll(".hero-img");
    if (!imgs.length) return;

    const ctx = gsap.context(() => {
      imgs.forEach((img) => {
        gsap.to(img, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const particlesInit = async (_: Engine) => {};
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((v) => (v + 1) % images.length);
    }, 4500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section id="hero" className="relative min-h-[100dvh] overflow-hidden">
      <div ref={bgRef} className="absolute inset-0">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: i === 0 ? 1 : 0 }}
            animate={{ opacity: idx === i ? 1 : 0 }}
            transition={{ duration: 1.2 }}
            aria-hidden={idx !== i}
          >
            <Image
              className="hero-img object-cover"
              src={fallback[i] ? "/images/fallback-hero.svg" : src}
              alt="Ambiente luxuoso de clínica estética"
              fill
              unoptimized
              priority={i === 0}
              onError={() =>
                setFallback((arr) => {
                  const cp = [...arr];
                  cp[i] = true;
                  return cp;
                })
              }
            />
            <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-gradient-to-t from-white from-0% via-white/20 via-25% to-transparent to-50%" />
            <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-gradient-to-t from-white from-0% via-white/20 via-25% to-transparent to-50%" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white" />
          </motion.div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0  z-10 hidden w-[48vw] max-w-[760px] md:block">
        <div className="relative h-full w-full">
          <Image
            src="/images/sarahPrincipal.svg"
            alt="Profissional da saúde sorrindo com jaleco"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
          {/* Versão atualizada no seu contexto */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-gradient-to-t from-white from-0% via-white/20 via-25% to-transparent to-50%" />
        </div>
      </div>

      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 20 },
            color: { value: "#C9A96E" },
            shape: { type: "circle" },
            opacity: { value: 0.35 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.6 },
          },
        }}
      />

      <div className="section relative z-30 flex min-h-[100dvh] flex-col items-center md:items-start justify-center pt-24 pb-2 md:pt-0 md:pb-0">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h1
            className="heading text-5xl mt-2 md:text-6xl text-neutral-900 text-center md:text-left"
            variants={fadeUp}
          >
            <SplitText text={"Soullar\u00A0Tarot"} />
          </motion.h1>
          <div className="md:text-left text-center md:pr-8">
            <motion.p
              className="md:mt-4 mt-2 text-xs md:text-xl text-neutral-600  md:text-left"
              variants={fadeUp}
              custom={1}
            >
              Beleza que transforma vidas. Cuidado que encanta e renova.{" "}
              <br className="hidden md:block" /> Aqui, cada detalhe importa para
              realçar.
            </motion.p>
          </div>
          <motion.div
            className="mt-4 md:mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            variants={fadeUp}
            custom={2}
          >
            <a href="#agendamento" className="btn btn-accent w-full md:w-auto">
              Agende sua avaliação
            </a>
          </motion.div>
          <div className=" block md:hidden">
            <div className="relative h-96 w-full">
              <Image
                src="/images/sarahPrincipal.svg"
                alt="Profissional da saúde sorrindo com jaleco"
                fill
                className="object-contain"
                priority
              />
              <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-gradient-to-t from-white from-0% via-white/20 via-25% to-transparent to-50%" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
