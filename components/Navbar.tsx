"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#evento", label: "Eventos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.nav
        className="relative mx-auto mt-4 w-[min(1120px,100%-32px)] rounded-full px-4 py-3 flex items-center justify-between border border-neutral-200 bg-white shadow-soft"
        aria-label="Navegação principal"
      >
        <Link
          href="#hero"
          className="relative flex h-10 w-60 items-center overflow-visible"
          aria-label="Ir para o topo da página"
        >
          <Image
            src="/images/logoS.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute left-0 top-1/2 md:w-44 w-36 -translate-y-[52%]"
          />
        </Link>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12 text-base">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a href="#agendamento" className="btn btn-accent text-sm shadow-soft">
            Agendar agora
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white/80 p-2 text-neutral-800"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mx-auto mt-3 w-[min(1120px,100%-32px)] rounded-3xl border border-white/60 bg-white/95 backdrop-blur-xl shadow-soft px-6 py-5 space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <nav className="flex flex-col gap-3" aria-label="Navegação mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-1 text-sm text-neutral-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#agendamento"
                className="btn btn-accent w-full justify-center mt-2"
                onClick={() => setOpen(false)}
              >
                Agendar avaliação
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
