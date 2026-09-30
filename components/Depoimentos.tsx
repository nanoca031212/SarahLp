"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useRef, useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";

const feedbackImages = [
  "/images/feedback/feedback mentoria (1).PNG",
  "/images/feedback/feedback mentoria (4).PNG",
  "/images/feedback/feedback mentoria (5).PNG",
  "/images/feedback/feedbackTarot.PNG",
  "/images/feedback/feedbackTarot (1).PNG",
  "/images/feedback/feedbackTarot (4).PNG",
  "/images/feedback/IMG_7085.PNG",
  "/images/feedback/IMG_7089.PNG",
  "/images/feedback/IMG_7093.PNG",
];

export default function Depoimentos() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section id="depoimentos" className="py-20 md:pb-36 md:pt-10">
      <motion.div
        className="my-20 rounded-2xl flex items-center justify-center bg-primary/10 p-8 "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-4xl font-bold text-accent">+500</span>
        <span className="ml-2 text-neutral-700">clientes atendidas</span>
      </motion.div>
      <div className="section">
        <h2 className="heading text-4xl text-neutral-900">Depoimentos</h2>
      </div>

      <div className="relative left-1/2 right-1/2 mt-8 w-screen -translate-x-1/2 px-6 md:px-8">
        <Swiper
          modules={[Autoplay, A11y]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          speed={600}
          spaceBetween={18}
          slidesPerView="auto"
          centeredSlides
          breakpoints={{
            768: { allowTouchMove: false },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {feedbackImages.map((raw, i) => {
            const src = encodeURI(raw);
            return (
              <SwiperSlide key={src} className="!w-[220px] md:!w-[260px]">
                <button
                  type="button"
                  className="w-full"
                  onClick={() => {
                    setSelected(src);
                    setOpen(true);
                  }}
                  aria-label="Abrir depoimento em tela cheia"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-neutral-100 bg-white shadow-soft">
                    <Image
                      src={src}
                      alt={`Feedback ${i + 1}`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 260px, 220px"
                      unoptimized
                    />
                  </div>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="mt-4 hidden justify-center gap-2 md:flex">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-soft transition hover:brightness-110"
            aria-label="Anterior"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-soft transition hover:brightness-110"
            aria-label="Próximo"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      <Dialog
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) setSelected(null);
        }}
      >
        <DialogContent className="w-[100vw] h-[100dvh] max-w-none rounded-none border-none bg-neutral-950 p-0">
          <div className="relative h-[100dvh] w-[100vw]">
            {selected && (
              <Image
                src={selected}
                alt="Feedback em tela cheia"
                fill
                className="object-contain"
                sizes="100vw"
                unoptimized
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
