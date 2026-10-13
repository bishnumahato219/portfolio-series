import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useSoundFX } from '../hooks/useSoundFX';
import AnimatedCounter from './AnimatedCounter';
import { EASE, Magnetic } from './fx';
import { ProjectArt } from './Poster';

const block = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

type TabId = 'overview' | 'architecture' | 'impact';

const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'OVERVIEW & STORY' },
  { id: 'architecture', label: 'ENGINEERING & STACK' },
  { id: 'impact', label: 'METRICS & RESULTS' },
];

export default function ProjectModal({
  project,
  onClose,
  onSwitch,
}: {
  project: Project;
  onClose: () => void;
  onSwitch: (p: Project) => void;
}) {
  useScrollLock(true);
  const { playClick } = useSoundFX();
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
    setActiveTab('overview');
  }, [project.id]);

  const more = projects.filter((p) => p.id !== project.id);

  return (
    <motion.div className="fixed inset-0 z-[140]" role="dialog" aria-modal="true" aria-labelledby={`title-${project.id}-modal`}>
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div ref={scroller} data-lenis-prevent className="absolute inset-0 overflow-y-auto overscroll-contain" onClick={onClose}>
        <motion.div
          className="relative mx-auto min-h-full max-w-5xl bg-ink-2 shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          {/* billboard */}
          <div className="relative h-[50vh] min-h-[320px] overflow-hidden sm:rounded-t-2xl">
            <motion.div layoutId={`art-${project.id}`} className="absolute inset-0" transition={{ duration: 0.7, ease: EASE }}>
              <ProjectArt project={project} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent" />
            <button
              ref={closeBtn}
              type="button"
              onClick={() => {
                playClick();
                onClose();
              }}
              data-cursor="close"
              aria-label="Close project"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-lg text-bone backdrop-blur transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
            >
              ✕
            </button>
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10">
              <motion.p
                className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.34em] text-bone/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-display text-xl tracking-normal text-crimson-2">S</span> ORIGINAL
              </motion.p>
              <motion.h2
                id={`title-${project.id}-modal`}
                layoutId={`title-${project.id}`}
                className="font-display text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.86] tracking-wide text-bone"
                transition={{ duration: 0.7, ease: EASE }}
              >
                {project.title}
              </motion.h2>
            </div>
          </div>

          <motion.div className="px-5 pb-12 sm:px-10" initial="hidden" animate="show" transition={{ staggerChildren: 0.08, delayChildren: 0.25 }}>
            {/* Meta bar */}
            <motion.div variants={block} className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist">
                <span className="font-semibold text-[#46e3a8]">{project.year}</span>
                <span className="h-1 w-1 rounded-full bg-smoke" />
                <span>{project.genre}</span>
                <span className="h-1 w-1 rounded-full bg-smoke" />
                <span className="text-bone/80">{project.stack.slice(0, 3).join(' • ')}</span>
              </div>

              {project.github && (
                <div className="flex items-center gap-3">
                  <Magnetic>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playClick()}
                      data-cursor="link"
                      className="flex min-h-10 items-center gap-2 rounded-lg bg-bone px-5 text-sm font-bold text-ink transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
                    >
                      GitHub Repo ↗
                    </a>
                  </Magnetic>
                </div>
              )}
            </motion.div>

            {/* Tab navigation */}
            <motion.nav variants={block} className="mt-8 flex gap-2 border-b border-white/10 pb-3" aria-label="Project details tabs">
              {TABS.map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      playClick();
                      setActiveTab(tab.id);
                    }}
                    className={`relative rounded-md px-4 py-2 text-xs font-bold tracking-[0.14em] transition ${
                      active ? 'text-bone' : 'text-mist hover:text-bone'
                    }`}
                  >
                    {tab.label}
                    {active && (
                      <motion.div
                        layoutId="active-project-tab"
                        className="absolute -bottom-3.5 left-0 right-0 h-[2px] bg-crimson"
                        transition={{ duration: 0.3, ease: EASE }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.nav>

            {/* Tab Contents */}
            <div className="pt-8">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="tab-overview"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-crimson-2">Logline & Objective</h3>
                      <p className="max-w-3xl text-lg leading-relaxed text-bone sm:text-xl">{project.logline}</p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                      <div>
                        <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-crimson-2">Featured Capabilities</h3>
                        <ul className="space-y-3">
                          {project.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-sm text-bone/90">
                              <span className="text-crimson-2 font-bold">✓</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-crimson-2">Primary Architecture</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((t) => (
                            <span key={t} className="glass rounded-lg px-3.5 py-1.5 text-xs font-semibold text-bone">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'architecture' && (
                  <motion.div
                    key="tab-architecture"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-crimson-2">Engineering Contributions</h3>
                      <ul className="space-y-4">
                        {project.build.map((b) => (
                          <li key={b} className="flex gap-3 text-sm leading-relaxed text-bone/90 sm:text-[15px]">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: project.palette.accent }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                      <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-crimson-2">Design Philosophy</h3>
                      <p className="text-sm leading-relaxed text-mist">
                        Engineered with modular service decoupling, resilient error boundary handling, and optimized database indexing to handle real-world throughput and multi-tenant workloads.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'impact' && (
                  <motion.div
                    key="tab-impact"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-crimson-2">Quantifiable Results & Performance</h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                      {project.metrics.map((m, i) => (
                        <div key={m.label} className="rounded-xl border border-white/10 bg-ink p-5">
                          <AnimatedCounter
                            value={m.value}
                            delay={0.1 * i}
                            className="block font-display text-4xl leading-none text-bone sm:text-5xl"
                            style={{ color: i === 0 ? project.palette.accent : undefined }}
                          />
                          <p className="mt-2.5 text-xs font-medium leading-snug text-mist">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* More originals */}
            <motion.section variants={block} className="mt-14 border-t border-white/10 pt-8">
              <h3 className="mb-4 font-sans text-lg font-semibold text-bone">More Originals</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {more.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    data-cursor="view"
                    onClick={() => {
                      playClick();
                      onSwitch(p);
                    }}
                    className="group relative aspect-video overflow-hidden rounded-xl text-left ring-1 ring-white/10 transition hover:ring-white/30"
                  >
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <ProjectArt project={p} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-mist">{p.genre}</p>
                      <p className="font-display text-3xl leading-none tracking-wide text-bone">{p.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
