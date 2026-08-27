/* SVARA style reminder: calming-clinical editorial healthcare, split-screen rhythm, Tidal Ink + bone + eucalyptus, Cormorant Garamond with Manrope. */
import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Menu, ArrowUpRight, Instagram, Mail, MapPin, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Treatments from "@/pages/Treatments";
import Method from "@/pages/Method";
import Journal from "@/pages/Journal";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const links = [
  ["The house", "/about"],
  ["Treatments", "/treatments"],
  ["The method", "/method"],
  ["Journal", "/journal"],
  ["Contact", "/contact"],
] as const;

function Mark({ small = false }: { small?: boolean }) {
  return <img src="/manus-storage/svara-mark_93ad61ec.png" alt="SVARA mark" className={small ? "h-7 w-7" : "h-10 w-10"} />;
}

function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 24); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);
  useEffect(() => setOpen(false), [location]);
  const activeIndex = Math.max(0, links.findIndex(([, href]) => href === location));
  const lightRoute = ["/treatments", "/method", "/journal"].includes(location);
  return <>
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled || lightRoute ? "border-b border-[#123c43]/10 bg-[#f6f2ea]/90 text-[#123c43] backdrop-blur-xl" : "bg-transparent text-white"}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <a href="/" className="flex items-center gap-3" aria-label="SVARA home"><Mark /><span className="font-display text-2xl tracking-[0.16em]">SVARA</span></a>
        <nav className="hidden items-center gap-7 lg:flex">{links.map(([label, href], i) => <a key={href} href={href} className={`relative py-2 text-[10px] font-semibold uppercase tracking-[0.22em] transition-opacity hover:opacity-60 ${location === href ? "opacity-100" : "opacity-70"}`}>{label}{location === href && <span className="absolute -bottom-1 left-0 h-px w-full bg-current" />}</a>)}<a href="/contact" className={`ml-3 flex items-center gap-2 border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#c97861] hover:text-white hover:border-[#c97861] ${scrolled ? "border-[#123c43]" : "border-white/60"}`}>Book a visit <ArrowUpRight size={13} /></a></nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      <div className="mx-auto hidden max-w-[1440px] px-6 pb-3 lg:block lg:px-12"><div className="flex items-center gap-3"><span className="h-px w-16 bg-current opacity-50" /><span className="text-[9px] uppercase tracking-[0.28em] opacity-60">0{activeIndex + 1} / 05 — your pace, held</span></div></div>
    </header>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="fixed inset-x-0 top-20 z-40 border-b border-[#123c43]/10 bg-[#f6f2ea] px-6 pb-7 pt-3 text-[#123c43] lg:hidden">{links.map(([label, href], i) => <a key={href} href={href} className="flex items-center justify-between border-b border-[#123c43]/10 py-4 text-sm uppercase tracking-[0.18em]"><span>0{i + 1}</span><span>{label}</span><ArrowUpRight size={15} /></a>)}<a href="/contact" className="mt-5 block bg-[#123c43] px-4 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#f6f2ea]">Book a first visit</a></motion.div>}</AnimatePresence>
  </>;
}

function Footer() { return <footer className="bg-[#123c43] px-6 py-16 text-[#f6f2ea] lg:px-12 lg:py-24"><div className="mx-auto max-w-[1440px]"><div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]"><div><div className="mb-8 flex items-center gap-3"><Mark /><span className="font-display text-3xl tracking-[0.16em]">SVARA</span></div><p className="max-w-xs font-display text-2xl leading-tight text-[#dce8df]">A quieter way back to yourself.</p></div><div><p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#a8c3b5]">Explore</p>{links.slice(0,4).map(([label, href]) => <a key={href} href={href} className="mb-3 block text-sm text-[#dce8df] transition-colors hover:text-[#c97861]">{label}</a>)}</div><div><p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#a8c3b5]">Find us</p><p className="mb-3 flex gap-2 text-sm text-[#dce8df]"><MapPin size={15} /> Jalan Kemang Raya 18<br/>South Jakarta 12730</p><p className="mb-3 flex items-center gap-2 text-sm text-[#dce8df]"><Phone size={15} /> +62 000 0000 0000 (demo)</p><a className="flex items-center gap-2 text-sm text-[#dce8df] hover:text-[#c97861]" href="mailto:hello@svara.house"><Mail size={15} /> hello@svara.house</a></div><div><p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#a8c3b5]">A note, monthly</p><p className="mb-5 text-sm leading-relaxed text-[#dce8df]">Small observations on rest, ritual, and living at a human pace.</p><div className="flex border-b border-[#a8c3b5]/50 pb-3"><input className="w-full bg-transparent text-sm outline-none placeholder:text-[#a8c3b5]/70" placeholder="Your email" /><button aria-label="Subscribe"><ArrowUpRight size={18} /></button></div></div></div><div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#a8c3b5]/20 pt-5 text-[10px] uppercase tracking-[0.16em] text-[#a8c3b5] sm:flex-row"><span>© 2026 SVARA Wellness House</span><span className="flex items-center gap-2"><Instagram size={13} /> @svara.house</span><span>Open Tue—Sun · 08:00—20:00</span><a href="https://www.centrova.id/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f6f2ea]">Developer: Centrova</a></div></div></footer> }

function App() { return <><Header /><main><Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/treatments" component={Treatments} /><Route path="/method" component={Method} /><Route path="/journal" component={Journal} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch></main><Footer /></>; }
export default App;
