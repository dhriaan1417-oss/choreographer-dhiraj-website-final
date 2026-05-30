'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Play,
  Star,
  ArrowRight,
  Instagram,
  Youtube,
  Mail,
  Camera,
  Heart,
  ChevronDown,
  Menu,
  Trophy,
  Sparkles,
  Clapperboard
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function Home() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <main className="relative w-full overflow-hidden selection:bg-[var(--color-premium-denim)] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-deep-ink)] flex items-center gap-2"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            <Sparkles className="w-5 h-5 text-[var(--color-premium-denim)] hidden sm:block" />
            DHIRAJ BHALERAO
          </motion.div>
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide text-[var(--color-slate-blend)]">
            <a href="#work" className="hover:text-[var(--color-premium-denim)] transition-colors">Work</a>
            <a href="#award" className="hover:text-[var(--color-premium-denim)] transition-colors">Award</a>
            <a href="#journey" className="hover:text-[var(--color-premium-denim)] transition-colors">Journey</a>
            <a href="#services" className="hover:text-[var(--color-premium-denim)] transition-colors">Services</a>
            <button className="bg-[var(--color-deep-ink)] text-white px-8 py-3.5 rounded-full hover:bg-[var(--color-premium-denim)] hover:shadow-lg hover:shadow-[var(--color-premium-denim)]/20 transition-all duration-300 transform hover:-translate-y-0.5">
              Book Project
            </button>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <Menu className="w-6 h-6 text-[var(--color-deep-ink)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div
            className="flex flex-col z-10 lg:col-span-7"
            style={{ y: yHero, opacity: opacityHero }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-10"
            >
              {['Film Choreography', 'Luxury Weddings', 'Live Shows', 'Celebrity Work'].map((tag, i) => (
                <motion.span
                  key={i}
                  variants={fadeInUp}
                  className="px-5 py-2 rounded-full glass-panel text-[11px] md:text-xs font-bold tracking-widest uppercase text-[var(--color-premium-denim)] border border-white/80 shadow-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' as const }}
              className="text-clamp-hero font-bold text-[var(--color-deep-ink)] mb-8"
            >
              Movement That <br className="hidden md:block" />
              <span className="text-gradient-primary">Creates Moments.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-2xl text-[var(--color-slate-blend)] max-w-2xl mb-12 leading-relaxed font-medium"
            >
              Award-winning choreography for films, television, luxury weddings, live shows, and celebrity events.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <button className="bg-[var(--color-deep-ink)] text-white px-10 py-5 rounded-full font-bold hover:bg-[var(--color-premium-denim)] transition-all duration-300 shadow-xl shadow-[var(--color-deep-ink)]/10 hover:shadow-2xl hover:shadow-[var(--color-premium-denim)]/20 hover:-translate-y-1 flex items-center gap-3 group text-sm md:text-base">
                Book a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button className="glass-panel px-10 py-5 rounded-full font-bold text-[var(--color-deep-ink)] hover:bg-white transition-all shadow-md hover:shadow-xl flex items-center gap-3 text-sm md:text-base group">
                <div className="w-8 h-8 rounded-full bg-[var(--color-premium-denim)]/10 flex items-center justify-center group-hover:bg-[var(--color-premium-denim)] group-hover:text-white transition-colors">
                  <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                </div>
                View Work
              </button>
            </motion.div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
             animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
             className="relative h-[450px] md:h-[650px] w-full z-0 lg:col-span-5 hidden lg:flex items-center justify-center"
          >
             {/* Premium CSS Visual representing movement & light */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-premium-denim)] to-[var(--color-soft-lavender)] rounded-[3rem] opacity-30 blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
             <div className="relative w-full h-full glass-panel rounded-[3rem] overflow-hidden flex items-center justify-center border-white shadow-2xl">
                <div className="absolute w-[250%] h-[250%] bg-gradient-to-tr from-white/60 via-transparent to-[var(--color-light-denim)] opacity-60 rotate-45 animate-spin" style={{ animationDuration: '40s' }}></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
                <div className="relative text-center p-8 glass-panel rounded-2xl bg-white/40">
                    <Sparkles className="w-12 h-12 text-[var(--color-premium-denim)] mx-auto mb-4" />
                    <span className="font-headline font-bold text-sm tracking-[0.3em] text-[var(--color-deep-ink)] uppercase">Cinematic<br/>Motion</span>
                </div>
             </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[var(--color-slate-blend)]/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Award Section */}
      <section id="award" className="py-32 px-6 relative z-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="glass-panel rounded-[2.5rem] p-10 md:p-20 text-center shimmer-sweep relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(90,116,214,0.15)] border-white bg-white/50"
          >
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-soft-lavender)] opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--color-light-denim)] opacity-40 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto mb-8 glass-panel rounded-full flex items-center justify-center shadow-lg bg-white/80">
                <Trophy className="w-10 h-10 text-[var(--color-premium-denim)]" />
              </div>
              <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[var(--color-premium-denim)] mb-6">Award Highlight</h3>
              <h2 className="text-clamp-h2 font-bold mb-6 text-[var(--color-deep-ink)]">
                Best Choreographer <br className="hidden md:block"/> of the Year
              </h2>
              <p className="text-xl md:text-3xl text-[var(--color-slate-blend)] font-semibold mb-10 text-gradient-soft">Zee Gaurav Award 2025–2026</p>
              <div className="inline-block glass-panel px-8 py-4 rounded-full border-white shadow-sm bg-white/70">
                <p className="text-sm md:text-base font-bold text-[var(--color-deep-ink)]">Choreographed &quot;Jaraan&quot; from the Marathi movie Jaraan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-premium-denim)] mb-4 block">The Journey</span>
            <h2 className="text-clamp-h2 font-bold text-[var(--color-deep-ink)]">18+ Years of Excellence</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
             {[
               { number: "18+", label: "Years Experience", col: "md:col-span-1" },
               { number: "500+", label: "Projects Completed", col: "md:col-span-1" },
               { number: "Diverse", label: "Films | TV | Weddings | Live", col: "md:col-span-2" }
             ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`glass-panel p-10 md:p-12 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/60 border-white hover:-translate-y-1 ${stat.col}`}
                >
                  <div className="text-5xl md:text-7xl font-black text-gradient-primary mb-4 tracking-tighter">{stat.number}</div>
                  <div className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-slate-blend)]">{stat.label}</div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Work Categories (Bento Grid) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-clamp-h2 font-bold text-[var(--color-deep-ink)]">Crafted for Stage, <br className="hidden md:block"/> Screen & Celebration</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
             {/* Card 1 */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2 glass-panel p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-white/90 to-white/40 group hover:shadow-2xl transition-all duration-500 shadow-lg overflow-hidden relative border-white">
               <div className="absolute right-0 top-0 w-80 h-80 bg-[var(--color-premium-denim)] opacity-5 rounded-full blur-3xl group-hover:opacity-15 transition-opacity duration-700"></div>
               <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-8 bg-white/80 shadow-sm">
                 <Clapperboard className="w-8 h-8 text-[var(--color-premium-denim)]" />
               </div>
               <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-deep-ink)]">Film & Television</h3>
               <p className="text-[var(--color-slate-blend)] text-lg md:text-xl max-w-lg leading-relaxed">Full-scale choreography for films, music videos, ads, and television sequences.</p>
             </motion.div>

             {/* Card 2 */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1 glass-panel p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-white/90 to-white/40 group hover:shadow-2xl transition-all duration-500 shadow-lg overflow-hidden relative border-white">
               <div className="absolute right-0 top-0 w-48 h-48 bg-[var(--color-pink-glow)] opacity-5 rounded-full blur-3xl group-hover:opacity-15 transition-opacity duration-700"></div>
               <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-8 bg-white/80 shadow-sm">
                 <Heart className="w-8 h-8 text-[var(--color-pink-glow)]" />
               </div>
               <h3 className="text-3xl font-bold mb-4 text-[var(--color-deep-ink)]">Luxury Weddings</h3>
               <p className="text-[var(--color-slate-blend)] text-lg leading-relaxed">Bespoke choreography for Sangeet, bride & groom entry, and family performances.</p>
             </motion.div>

              {/* Card 3 */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1 glass-panel p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-white/90 to-white/40 group hover:shadow-2xl transition-all duration-500 shadow-lg overflow-hidden relative border-white">
               <div className="absolute right-0 top-0 w-48 h-48 bg-[var(--color-electric-orchid)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700"></div>
               <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-8 bg-white/80 shadow-sm">
                 <Star className="w-8 h-8 text-[#8B5CF6]" />
               </div>
               <h3 className="text-3xl font-bold mb-4 text-[var(--color-deep-ink)]">Live Shows & Celebs</h3>
               <p className="text-[var(--color-slate-blend)] text-lg leading-relaxed">Stage choreography for award shows and celebrity events.</p>
             </motion.div>

             {/* Card 4 */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2 glass-panel p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-white/90 to-white/40 group hover:shadow-2xl transition-all duration-500 shadow-lg overflow-hidden relative border-white">
               <div className="absolute right-0 top-0 w-80 h-80 bg-[var(--color-soft-lavender)] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700"></div>
               <div className="w-16 h-16 rounded-2xl glass-panel flex items-center justify-center mb-8 bg-white/80 shadow-sm">
                 <Camera className="w-8 h-8 text-[var(--color-deep-ink)]" />
               </div>
               <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-deep-ink)]">Music Videos & Brands</h3>
               <p className="text-[var(--color-slate-blend)] text-lg md:text-xl max-w-lg leading-relaxed">Choreography and movement direction for songs, reels, and branded entertainment.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Intentional CSS Framework */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 flex items-end justify-between"
          >
            <h2 className="text-clamp-h2 font-bold text-[var(--color-deep-ink)]">Signature Work</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Film Choreography Reel", status: "Coming soon", gradient: "from-[var(--color-premium-denim)]/20 to-[var(--color-cool-mist)]" },
              { title: "Luxury Wedding Moments", status: "Gallery will be added soon", gradient: "from-[var(--color-blush-pink)]/40 to-white" },
              { title: "Celebrity Highlights", status: "Showcase coming soon", gradient: "from-[var(--color-soft-lavender)]/30 to-white" },
              { title: "Behind The Scenes", status: "Videos will be added soon", gradient: "from-[var(--color-deep-ink)]/10 to-white" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/3] md:aspect-[16/10] rounded-[2rem] mb-6 relative overflow-hidden shadow-lg group-hover:shadow-[0_20px_40px_-15px_rgba(28,36,84,0.2)] transition-all duration-700 bg-gradient-to-br ${item.gradient} border border-white cinematic-frame flex flex-col items-center justify-center`}>

                   {/* Cinematic overlay */}
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--color-deep-ink)]/5 transition-colors duration-500 z-10"></div>

                   <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 z-20 bg-white/90">
                      <Play className="w-8 h-8 text-[var(--color-premium-denim)] ml-1" fill="currentColor" />
                   </div>

                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--color-deep-ink)] group-hover:text-[var(--color-premium-denim)] transition-colors">{item.title}</h3>
                <p className="text-[var(--color-slate-blend)] font-bold text-xs md:text-sm tracking-[0.15em] uppercase">{item.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-clamp-h3 font-bold mb-16 text-center text-[var(--color-deep-ink)]"
          >
            Comprehensive Expertise
          </motion.h2>
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
             {[
               "Film choreography", "Television choreography", "Luxury wedding choreography",
               "Sangeet choreography", "Bride & groom entry", "Varmala concepts",
               "Family performance training", "Live show choreography", "Celebrity event choreography",
               "Music video movement direction", "Corporate shows", "Stage performance direction"
             ].map((service, i) => (
               <motion.div
                 variants={fadeInUp}
                 key={i}
                 className="glass-panel px-6 md:px-8 py-4 rounded-full text-sm md:text-base font-bold text-[var(--color-deep-ink)] hover:bg-[var(--color-premium-denim)] hover:text-white transition-all duration-300 cursor-default shadow-md hover:shadow-xl border-white hover:-translate-y-1"
               >
                 {service}
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Frontend */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-20 rounded-[3rem] shadow-2xl border-white bg-white/60 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-premium-denim)] via-[var(--color-soft-lavender)] to-[var(--color-blush-pink)]"></div>

           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
             <h2 className="text-clamp-h2 font-bold text-[var(--color-deep-ink)] mb-4">Let&apos;s Build Your Next Moment.</h2>
             <p className="text-[var(--color-slate-blend)] mb-12 text-lg md:text-xl font-medium">Inquire about availability for your upcoming project or event.</p>
           </motion.div>

           <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-slate-blend)] pl-2">Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl glass-input text-[var(--color-deep-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-premium-denim)]/40 transition-all text-lg" placeholder="Your name" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-slate-blend)] pl-2">Phone / WhatsApp</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-2xl glass-input text-[var(--color-deep-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-premium-denim)]/40 transition-all text-lg" placeholder="Your number" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-slate-blend)] pl-2">Email</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl glass-input text-[var(--color-deep-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-premium-denim)]/40 transition-all text-lg" placeholder="Your email address" />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-slate-blend)] pl-2">Project Type</label>
                <div className="relative">
                  <select className="w-full px-6 py-4 rounded-2xl glass-input text-[var(--color-deep-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-premium-denim)]/40 transition-all text-lg appearance-none cursor-pointer">
                    <option value="">Select an option</option>
                    <option value="film">Film / TV choreography</option>
                    <option value="luxury-wedding">Luxury wedding</option>
                    <option value="sangeet">Sangeet choreography</option>
                    <option value="entry">Bride & groom entry</option>
                    <option value="live-show">Live show</option>
                    <option value="celebrity">Celebrity event</option>
                    <option value="music-video">Music video</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-slate-blend)] pointer-events-none" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-slate-blend)] pl-2">Message</label>
                <textarea rows={5} className="w-full px-6 py-4 rounded-2xl glass-input text-[var(--color-deep-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-premium-denim)]/40 transition-all text-lg resize-none" placeholder="Tell us about your vision..."></textarea>
              </div>

              <button type="button" className="w-full bg-[var(--color-deep-ink)] text-white py-5 rounded-2xl font-bold hover:bg-[var(--color-premium-denim)] transition-all duration-300 shadow-xl shadow-[var(--color-deep-ink)]/10 hover:shadow-2xl hover:shadow-[var(--color-premium-denim)]/20 hover:-translate-y-1 text-lg flex justify-center items-center gap-2 group">
                Send Inquiry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
           </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[var(--color-premium-denim)]/10 relative z-20 bg-white/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold tracking-tight text-[var(--color-deep-ink)] mb-2 flex items-center justify-center md:justify-start gap-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              <Sparkles className="w-5 h-5 text-[var(--color-premium-denim)]" />
              DHIRAJ BHALERAO
            </div>
            <div className="text-base text-[var(--color-slate-blend)] font-semibold">Award-winning choreographer</div>
            <div className="text-xs text-[var(--color-slate-blend)]/80 mt-2 uppercase tracking-[0.2em] font-bold">Film | TV | Weddings | Live Events</div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-deep-ink)] hover:text-white hover:bg-[var(--color-premium-denim)] hover:scale-110 transition-all duration-300 shadow-sm border-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-deep-ink)] hover:text-white hover:bg-[#FF0000] hover:scale-110 transition-all duration-300 shadow-sm border-white">
              <Youtube size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-deep-ink)] hover:text-white hover:bg-[var(--color-deep-ink)] hover:scale-110 transition-all duration-300 shadow-sm border-white">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-sm text-[var(--color-slate-blend)] font-semibold">
            © 2026 Dhiraj Bhalerao. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
