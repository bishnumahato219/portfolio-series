import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { useSoundFX } from '../hooks/useSoundFX';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay, onContact }: { onReplay: () => void; onContact?: () => void }) {
  const { playClick } = useSoundFX();
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.6em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const ctas = [
    { label: "Let's Build", href: `mailto:${profile.email}?subject=${encodeURIComponent("Let's build something")}`, primary: true, cursor: 'play' },
    { label: 'Instagram', href: profile.links.instagram, cursor: 'link' },
    { label: 'LinkedIn', href: profile.links.linkedin, cursor: 'link' },
    { label: 'GitHub', href: profile.links.github, cursor: 'link' },
    { label: 'Email', href: `mailto:${profile.email}`, cursor: 'link' },
  ];

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]" />
      <Particles count={36} />

      <motion.p
        className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>
      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={{ fontSize: 'clamp(3.4rem, 13vw, 12rem)', letterSpacing: spacing, filter: blur, opacity }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">{profile.displayName.toUpperCase()}</p>
        <p className="mt-2 text-xs font-semibold tracking-[0.4em] text-mist sm:text-sm">{profile.role.toUpperCase()}</p>
      </motion.div>

      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
      >
        {ctas.map((c) => (
          <motion.div key={c.label} variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
            <Magnetic>
              {c.primary && onContact ? (
                <button
                  type="button"
                  onClick={() => {
                    playClick();
                    onContact();
                  }}
                  data-cursor={c.cursor}
                  className="flex min-h-12 items-center gap-2 rounded-full bg-crimson px-7 text-sm font-bold tracking-[0.12em] text-white shadow-[0_0_50px_rgba(229,19,43,0.5)] transition hover:bg-crimson-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
                >
                  <span>▶</span>
                  {c.label.toUpperCase()}
                </button>
              ) : (
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  onClick={() => playClick()}
                  data-cursor={c.cursor}
                  className="flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-7 text-sm font-bold tracking-[0.12em] text-bone transition hover:border-bone hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
                >
                  {c.label.toUpperCase()}
                  <span className="text-mist">↗</span>
                </a>
              )}
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      {/* Instagram QR Card */}
      <motion.div
        className="relative mt-12 mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <img
            src={profile.links.instagramQr}
            alt="Instagram @bishnufilms QR Code"
            className="h-24 w-24 shrink-0 rounded-xl object-contain bg-white p-1.5 shadow-md"
          />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-pink-400">INSTAGRAM HANDLE</p>
            <p className="font-display text-2xl tracking-wide text-bone">@bishnufilms</p>
            <p className="mt-1 text-xs leading-relaxed text-mist">
              Scan or tap to explore all cinematic films, color grading reels, and CapCut edits.
            </p>
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClick()}
              className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 transition hover:text-white"
            >
              Follow on Instagram ↗
            </a>
          </div>
        </div>
      </motion.div>

      <div className="relative mt-16 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">
          ↺ WATCH AGAIN
        </button>
        <button type="button" onClick={onReplay} className="hover:text-bone">
          ▶ REPLAY OPENING
        </button>
      </div>

      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. A personal, streaming-inspired portfolio — not affiliated with any streaming service.
        </p>
      </footer>
    </section>
  );
}
