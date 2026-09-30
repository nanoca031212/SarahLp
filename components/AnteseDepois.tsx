"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const pairs = [
  {
    before: "/images/antes-depois/before-1.jpg",
    after: "/images/antes-depois/after-1.png",
  },
  {
    before: "/images/antes-depois/before-2.png",
    after: "/images/antes-depois/after-2.png",
  },
  {
    before: "/images/antes-depois/before-3.png",
    after: "/images/antes-depois/after-3.jpg",
  },
];

function PairSlide({ before, after }: { before: string; after: string }) {
  const [bSrc, setBSrc] = useState(before);
  const [aSrc, setASrc] = useState(after);
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="relative h-56 overflow-hidden rounded-xl">
        <Image
          src={bSrc}
          alt="Antes do tratamento"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, 50vw"
          unoptimized
          onError={() => setBSrc("/images/fallback-before.svg")}
        />
        <span className="absolute left-2 top-2 rounded-full bg-neutral-900/80 px-2 py-1 text-xs text-white">
          Antes
        </span>
      </div>
      <div className="relative h-56 overflow-hidden rounded-xl">
        <Image
          src={aSrc}
          alt="Depois do tratamento"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, 50vw"
          unoptimized
          onError={() => setASrc("/images/fallback-before.svg")}
        />
        <span className="absolute left-2 top-2 rounded-full bg-accent px-2 py-1 text-xs text-white">
          Depois
        </span>
      </div>
    </div>
  );
}

export default function AnteseDepois() {
  return (
    <section id="antes-depois" className="py-20 md:py-28">
      <div className="section">
        <motion.h2
          className="heading text-4xl text-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Antes e Depois
        </motion.h2>
        <div className="mt-8">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {pairs.map((p, idx) => (
              <SwiperSlide key={idx}>
                <PairSlide before={p.before} after={p.after} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
