import { useEffect, useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useSoundFX } from '../hooks/useSoundFX';
import { EASE } from './fx';

const INTENTS = [
  'Full-Stack / AI Opportunity',
  'Project Collaboration',
  'Technical Advisory',
  'Networking / Say Hi',
] as const;

type Intent = (typeof INTENTS)[number];
type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  organization: string;
  intent: Intent;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const { playClick } = useSoundFX();
  const closeBtn = useRef<HTMLButtonElement>(null);

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    intent: INTENTS[0],
    subject: `Opportunity: ${INTENTS[0]}`,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && status !== 'sending') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, status]);

  const selectIntent = (intent: Intent) => {
    playClick();
    setForm((prev) => ({
      ...prev,
      intent,
      subject: `Inquiry: ${intent}`,
    }));
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Please provide a brief message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      playClick();
      return;
    }

    playClick();
    setStatus('sending');

    try {
      // Simulate network request / transmission
      await new Promise((resolve) => setTimeout(resolve, 950));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const openMailtoFallback = () => {
    playClick();
    const body = encodeURIComponent(
      `Hi ${profile.firstName},\n\nName: ${form.name}\nOrganization: ${form.organization || 'N/A'}\nIntent: ${form.intent}\n\n${form.message}`,
    );
    const subject = encodeURIComponent(form.subject || `Inquiry from ${form.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => status !== 'sending' && onClose()}
      />

      {/* modal box */}
      <motion.div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-ink-2/95 p-6 shadow-2xl backdrop-blur-2xl sm:p-10"
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ambient bloom glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(229,19,43,0.22),transparent_70%)] blur-3xl"
        />

        {/* close button */}
        <button
          ref={closeBtn}
          type="button"
          onClick={() => {
            playClick();
            onClose();
          }}
          disabled={status === 'sending'}
          aria-label="Close contact dialog"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist transition hover:border-white/30 hover:bg-white/10 hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson disabled:opacity-40 sm:right-6 sm:top-6"
        >
          ✕
        </button>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="py-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-crimson-2/40 bg-crimson/15 text-3xl text-crimson-2 shadow-[0_0_50px_rgba(229,19,43,0.35)]">
                ✓
              </div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.34em] text-crimson-2">TRANSMISSION RECEIVED</p>
              <h3 className="font-display text-4xl tracking-wide text-bone sm:text-5xl">THE SERIES CONTINUES</h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist">
                Thank you for reaching out, <strong className="text-bone">{form.name}</strong>. Your message regarding{' '}
                <span className="text-bone">&ldquo;{form.intent}&rdquo;</span> has been queued. {profile.displayName} will get back to you at{' '}
                <strong className="text-bone">{form.email}</strong> shortly.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    playClick();
                    onClose();
                  }}
                  className="flex min-h-11 items-center justify-center rounded-full bg-bone px-8 text-sm font-bold tracking-wide text-ink transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
                >
                  DISMISS
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2">
                  <img src="/favicon.svg" alt="" className="h-4.5 w-4.5 rounded object-contain shadow-sm" />
                  <span className="text-[10px] font-bold tracking-[0.32em] text-smoke">NEW EPISODE INQUIRY</span>
                </div>
                <h3 id="contact-modal-title" className="font-display text-4xl tracking-wide text-bone sm:text-5xl">
                  LET&apos;S BUILD SOMETHING
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-mist sm:text-sm">
                  Whether you have an engineering role, contract project, or AI initiative in mind, let&apos;s connect.
                </p>
              </div>

              {/* intent selector */}
              <div className="mb-6">
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-smoke">What brings you here?</p>
                <div className="flex flex-wrap gap-2">
                  {INTENTS.map((intent) => {
                    const active = form.intent === intent;
                    return (
                      <button
                        key={intent}
                        type="button"
                        onClick={() => selectIntent(intent)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition ${
                          active
                            ? 'border border-crimson-2 bg-crimson/25 text-white shadow-[0_0_20px_rgba(229,19,43,0.3)]'
                            : 'border border-white/10 bg-white/[0.04] text-mist hover:border-white/25 hover:text-bone'
                        }`}
                      >
                        {intent}
                      </button>
                    );
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-mist">
                      Your Name <span className="text-crimson-2">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-bone placeholder-smoke transition focus:border-crimson-2 focus:bg-black/60 focus:outline-none"
                    />
                    {errors.name && <p className="mt-1 text-[11px] text-crimson-2">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-mist">
                      Email Address <span className="text-crimson-2">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-bone placeholder-smoke transition focus:border-crimson-2 focus:bg-black/60 focus:outline-none"
                    />
                    {errors.email && <p className="mt-1 text-[11px] text-crimson-2">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-org" className="mb-1.5 block text-xs font-medium text-mist">
                      Company / Organization <span className="text-smoke text-[10px]">(Optional)</span>
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      placeholder="e.g. Stripe, TechHub"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-bone placeholder-smoke transition focus:border-crimson-2 focus:bg-black/60 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-medium text-mist">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-bone placeholder-smoke transition focus:border-crimson-2 focus:bg-black/60 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-mist">
                    Message <span className="text-crimson-2">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your team, tech stack, timeline, or idea..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm text-bone placeholder-smoke transition focus:border-crimson-2 focus:bg-black/60 focus:outline-none"
                  />
                  {errors.message && <p className="mt-1 text-[11px] text-crimson-2">{errors.message}</p>}
                </div>

                <div className="flex flex-col-reverse items-center justify-between gap-4 pt-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={openMailtoFallback}
                    className="text-xs font-semibold tracking-wide text-smoke underline-offset-4 hover:text-mist hover:underline"
                  >
                    Or open default email client ↗
                  </button>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-crimson px-7 text-sm font-bold tracking-wider text-white shadow-[0_0_40px_rgba(229,19,43,0.45)] transition hover:bg-crimson-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        TRANSMITTING…
                      </>
                    ) : (
                      <>
                        <span>▶</span> TRANSMIT MESSAGE
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
