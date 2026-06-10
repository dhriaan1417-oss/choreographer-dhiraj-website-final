'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
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
  Clapperboard,
  Sparkle,
  Smartphone
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
};

/* const heroTextReveal = { hidden: { opacity: 0, filter: "blur(10px)", y: 20 }, visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1.2, ease: "easeOut" as const } } }; */

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  // const { scrollY } = useScroll();
  // const yHero
  // const opacityHero

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppInquiry = () => {
    const text = `Hi Dhiraj,

I am inquiring about a project.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Project Type: ${formData.projectType}
Message: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919325465937?text=${encodedText}`, '_blank');
  };


  return (
    <main className="relative w-full overflow-hidden selection:bg-[var(--color-electric-blue)] selection:text-white">
      {/* Sky Blue Cinematic Aurora Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[var(--color-midnight-navy)]"></div>
        {/* Animated Light Waves */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[var(--color-electric-blue)]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[var(--color-deep-denim)]/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-[var(--color-violet-accent)]/20 rounded-full blur-[90px]"
        />
        <div className="particles-mesh"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="font-display font-bold text-xl md:text-2xl tracking-tighter text-[var(--color-pearl-text)] relative group">
            DB.
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-electric-blue)] group-hover:w-full transition-all duration-500"></div>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['Journey', 'Work', 'Services', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-semibold tracking-widest uppercase text-[var(--color-slate-muted)] hover:text-[var(--color-electric-blue)] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-[var(--color-electric-blue)] rounded-full opacity-0 group-hover:opacity-100 -translate-x-1/2 transition-all"></span>
              </motion.a>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4">
            <a href="https://www.instagram.com/dhiiraj_bhalerao?igsh=bGxveWw3NzZrZXNl" target="_blank" rel="noopener noreferrer" className="p-2 glass-panel rounded-full hover:bg-[var(--color-electric-blue)]/20 transition-all text-[var(--color-pearl-text)] hover:text-[var(--color-electric-blue)] group">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com/@dhirajbhalerao8577" target="_blank" rel="noopener noreferrer" className="p-2 glass-panel rounded-full hover:bg-[var(--color-electric-blue)]/20 transition-all text-[var(--color-pearl-text)] hover:text-[var(--color-electric-blue)] group">
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <button className="md:hidden p-2 text-[var(--color-pearl-text)]">
              <Menu className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 pt-20 z-10">
        {/* Spotlight effect behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[var(--color-electric-blue)]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <motion.div className="flex flex-col items-center text-center">

            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center justify-center mb-8 relative group cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-electric-blue)] via-[var(--color-magenta-pink)] to-[var(--color-electric-blue)] opacity-30 blur-lg group-hover:opacity-60 transition-opacity duration-500 rounded-full"></div>
              <div className="glass-panel px-6 py-2.5 rounded-full border border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gradient-subtle flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[var(--color-electric-blue)]/50 text-[var(--color-electric-blue)]" />
                  Zee Gaurav Award Winner
                </span>
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mb-4"
            >
              <h1 className="text-clamp-hero font-bold font-display tracking-tight text-[var(--color-pearl-text)] btn-shine">
                Dhiraj Bhalerao
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="mb-8 md:mb-12"
            >
              <h2 className="text-clamp-hero-sub font-medium text-gradient-animated flex items-center justify-center gap-4">
                <span className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-[var(--color-electric-blue)]"></span>
                Choreographer
                <span className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-[var(--color-electric-blue)]"></span>
              </h2>
            </motion.div>

            {/* Floating Service Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto"
            >
              {['Feature Films', 'Music Videos', 'Luxury Weddings', 'Live Shows'].map((skill, i) => (
                <span key={i} className="px-5 py-2 rounded-full glass-panel text-xs md:text-sm font-semibold tracking-wider text-[var(--color-slate-muted)] hover:text-[var(--color-pearl-text)] hover:border-[var(--color-electric-blue)]/50 transition-all duration-300 cursor-default hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Glass CTA Buttons (Magnetic-style hover) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919325465937"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-[var(--color-electric-blue)]/10 border border-[var(--color-electric-blue)]/30 backdrop-blur-md text-[var(--color-pearl-text)] px-10 py-5 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] hover:bg-[var(--color-electric-blue)]/20 flex items-center gap-3 group text-sm md:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
                Book a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-panel px-10 py-5 rounded-full font-bold text-[var(--color-pearl-text)] hover:bg-white/5 hover:border-[var(--color-electric-blue)]/30 transition-all duration-300 flex items-center gap-3 text-sm md:text-base group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-electric-blue)]/20 transition-all duration-300 border border-white/10 group-hover:border-[var(--color-electric-blue)]/30">
                  <Play className="w-4 h-4 ml-0.5 text-[var(--color-pearl-text)] group-hover:text-[var(--color-electric-blue)] transition-colors" fill="currentColor" />
                </div>
                View Work
              </motion.button>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-slate-muted)] flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-[var(--color-electric-blue)]" />
          </motion.div>
        </motion.div>
      </section>

      <section id="award" className="py-24 md:py-32 px-6 relative z-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-electric-blue)]/20 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="glass-panel px-6 py-2.5 rounded-full border border-[var(--color-electric-blue)]/20 shadow-[0_0_20px_rgba(56,189,248,0.15)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gradient-subtle flex items-center gap-2">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-[var(--color-electric-blue)]/50" />
                  Award-Winning Choreographer
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-[var(--color-electric-blue)]/50" />
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
              }}
              className="text-clamp-h2 font-bold mb-4 font-display text-[var(--color-pearl-text)]"
            >
              Awards & <span className="text-gradient-animated">Recognition</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
            {/* Left: Cinematic Spotlight Featured Image */}
            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-5 relative group perspective-[1000px]"
            >
              <div className="absolute -inset-4 bg-[var(--color-electric-blue)]/10 rounded-[3rem] blur-3xl group-hover:bg-[var(--color-violet-accent)]/20 transition-colors duration-1000"></div>

              <div className="relative h-[450px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] p-[2px] animated-gradient-border transform transition-all duration-700 group-hover:rotate-y-2 group-hover:rotate-x-2">
                <div className="w-full h-full glass-panel rounded-[calc(2rem-2px)] md:rounded-[calc(3rem-2px)] bg-[#030A18]/90 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030A18] via-transparent to-transparent z-10"></div>

                  {/* Spotlight overlay effect */}
                  <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 mix-blend-overlay"></div>

                  <Image
                    src="/images/awards/award-trophy.jpg"
                    alt="Dhiraj Bhalerao holding the prestigious Zee Chitra Gaurav Award"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    priority
                  />

                  <div className="absolute top-6 left-6 z-20">
                    <span className="glass-panel px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[var(--color-electric-blue)] border-[var(--color-electric-blue)]/30 bg-black/40">Main Award Portrait</span>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="h-1 w-12 bg-gradient-to-r from-[var(--color-electric-blue)] to-[var(--color-violet-accent)] rounded-full mb-3 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                    <p className="text-sm md:text-base font-semibold text-white drop-shadow-md">Holding the prestigious Zee Chitra Gaurav Award</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Content & Gallery */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
                className="space-y-8"
              >
                {/* Main Award Spotlight Details */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="glass-panel p-8 md:p-12 rounded-3xl border-white/5 relative overflow-hidden group bg-gradient-to-br from-white/[0.02] to-transparent hover:border-[var(--color-electric-blue)]/20 transition-colors duration-500"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-electric-blue)]/5 rounded-full blur-[80px] group-hover:bg-[var(--color-violet-accent)]/10 transition-colors duration-700 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center bg-[var(--color-electric-blue)]/10 border border-[var(--color-electric-blue)]/30 shadow-[0_0_20px_rgba(56,189,248,0.15)] group-hover:scale-110 transition-transform duration-500">
                        <Trophy className="w-6 h-6 text-[var(--color-electric-blue)] drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                      </div>
                      <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[var(--color-electric-blue)]">Featured Achievement</h3>
                    </div>

                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-[var(--color-pearl-text)] leading-tight tracking-tight">Best Choreographer of the Year</h4>
                    <p className="text-xl md:text-2xl font-semibold text-gradient-animated mb-6">Zee Chitra Gaurav Award 2025–2026</p>

                    <p className="text-[var(--color-slate-muted)] text-base md:text-lg leading-relaxed mb-10 font-medium">
                      For choreographing the song <span className="text-[var(--color-pearl-text)]">&quot;Jaraan&quot;</span> from the Marathi movie <span className="text-[var(--color-pearl-text)]">&quot;Jaraan&quot;</span>. Recognized for outstanding choreography work in Marathi cinema, this award marks a major milestone in Dhiraj Bhalerao&apos;s creative journey.
                    </p>

                    {/* Interactive Gallery Slider */}
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[var(--color-slate-muted)] font-bold mb-4">Gallery Highlights</p>
                      <div className="flex gap-5 overflow-x-auto pb-6 snap-x hide-scrollbar px-1">
                        {[
                          { src: "/images/awards/award-stage.jpg", alt: "Award Stage Moment", label: "Stage" },
                          { src: "/images/awards/jarann-poster.jpg", alt: "Jaraan Movie Poster", label: "Jaraan" },
                          { src: "/images/awards/award-poster.png", alt: "INCA Award Nomination", label: "Nomination" }
                        ].map((img, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="min-w-[160px] h-[120px] md:min-w-[200px] md:h-[140px] glass-panel rounded-2xl flex-shrink-0 snap-center bg-[#030A18]/80 border-white/10 relative overflow-hidden group/thumb cursor-pointer hover:border-[var(--color-electric-blue)]/40 hover:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.3)] transition-all duration-300"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover transition-transform duration-700 group-hover/thumb:scale-110 opacity-70 group-hover/thumb:opacity-100"
                              sizes="(max-width: 768px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030A18] via-transparent to-transparent opacity-80 group-hover/thumb:opacity-40 transition-opacity duration-300"></div>

                            {/* Magic UI style subtle glow overlay */}
                            <div className="absolute inset-0 bg-[var(--color-electric-blue)]/0 group-hover/thumb:bg-[var(--color-electric-blue)]/10 transition-colors duration-300 mix-blend-overlay"></div>

                            <span className="absolute bottom-3 left-4 text-xs font-bold text-white tracking-wider opacity-0 group-hover/thumb:opacity-100 transform translate-y-2 group-hover/thumb:translate-y-0 transition-all duration-300">{img.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Award Note */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="glass-panel p-6 rounded-2xl border-white/5 bg-gradient-to-r from-white/[0.03] to-transparent flex items-center gap-6 group hover:border-[var(--color-violet-accent)]/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--color-violet-accent)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-violet-accent)]/20 transition-colors border border-[var(--color-violet-accent)]/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                    <Sparkle className="w-5 h-5 text-[var(--color-violet-accent)] drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[var(--color-pearl-text)] text-sm md:text-lg group-hover:text-[var(--color-violet-accent)] transition-colors">INCA Award</h5>
                    <p className="text-xs md:text-sm text-[var(--color-slate-muted)] mt-1 font-medium tracking-wide">Pan India Best Choreographer Nomination</p>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-electric-blue)] mb-4 block">The Journey</span>
            <h2 className="text-clamp-h2 font-bold text-gradient-animated">18+ Years of Excellence</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
             {[
               { number: "18+", label: "Years Experience", col: "md:col-span-1" },
               { number: "500+", label: "Projects Completed", col: "md:col-span-1" },
               { number: "Diverse", label: "Films | TV | Weddings | Live", col: "md:col-span-2", textGradient: "text-gradient-animated" }
             ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`glass-panel p-10 md:p-12 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-lg hover:shadow-[0_10px_30px_rgba(124,58,237,0.3)] hover:border-[var(--color-electric-blue)]/30 transition-all duration-500 bg-[#0E2A5C]/20 border-white/10 hover:-translate-y-2 group ${stat.col}`}
                >
                  <div className={`text-5xl md:text-7xl font-black mb-4 tracking-tighter ${stat.textGradient || 'text-gradient-accent'} group-hover:scale-105 transition-transform duration-500`}>{stat.number}</div>
                  <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-slate-muted)] group-hover:text-[var(--color-pearl-text)] transition-colors">{stat.label}</div>
                </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Work Categories (Bento Grid) */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-clamp-h2 font-bold text-gradient-animated">Crafted for Stage, <br className="hidden md:block"/> Screen & Celebration</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
             {/* Card 1 */}
             <motion.div variants={fadeInUp} className="md:col-span-2 glass-panel p-8 md:p-14 rounded-[2rem] bg-gradient-to-br from-[#0E2A5C]/50 to-transparent group hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] hover:border-[var(--color-electric-blue)]/50 transition-all duration-500 overflow-hidden relative border-white/10">
               <div className="absolute right-0 top-0 w-80 h-80 bg-[var(--color-electric-blue)] opacity-10 rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-panel flex items-center justify-center mb-8 bg-white/5 border border-[var(--color-electric-blue)]/20 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
                 <Clapperboard className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-electric-blue)] group-hover:scale-110 transition-transform" />
               </div>
               <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[var(--color-pearl-text)]">Film & Television</h3>
               <p className="text-[var(--color-slate-muted)] text-base md:text-lg max-w-lg leading-relaxed">Full-scale choreography for films, music videos, ads, and television sequences.</p>
             </motion.div>

             {/* Card 2 */}
             <motion.div variants={fadeInUp} className="md:col-span-1 glass-panel p-8 md:p-14 rounded-[2rem] bg-gradient-to-br from-[#0E2A5C]/50 to-transparent group hover:shadow-[0_10px_40px_rgba(236,72,153,0.3)] hover:border-[var(--color-magenta-pink)]/50 transition-all duration-500 overflow-hidden relative border-white/10">
               <div className="absolute right-0 top-0 w-48 h-48 bg-[var(--color-magenta-pink)] opacity-10 rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-panel flex items-center justify-center mb-8 bg-white/5 border border-[var(--color-magenta-pink)]/20 shadow-[0_0_15px_rgba(236,72,153,0.2)] group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all">
                 <Heart className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-magenta-pink)] group-hover:scale-110 transition-transform" />
               </div>
               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-pearl-text)]">Luxury Weddings</h3>
               <p className="text-[var(--color-slate-muted)] text-base md:text-lg leading-relaxed">Bespoke choreography for Sangeet, bride & groom entry, and family performances.</p>
             </motion.div>

              {/* Card 3 */}
             <motion.div variants={fadeInUp} className="md:col-span-1 glass-panel p-8 md:p-14 rounded-[2rem] bg-gradient-to-br from-[#0E2A5C]/50 to-transparent group hover:shadow-[0_10px_40px_rgba(124,58,237,0.3)] hover:border-[var(--color-violet-accent)]/50 transition-all duration-500 overflow-hidden relative border-white/10">
               <div className="absolute right-0 top-0 w-48 h-48 bg-[var(--color-violet-accent)] opacity-10 rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-panel flex items-center justify-center mb-8 bg-white/5 border border-[var(--color-violet-accent)]/20 shadow-[0_0_15px_rgba(124,58,237,0.2)] group-hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all">
                 <Star className="w-6 h-6 md:w-8 md:h-8 text-[#8B5CF6] group-hover:scale-110 transition-transform" />
               </div>
               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--color-pearl-text)]">Live Shows & Celebs</h3>
               <p className="text-[var(--color-slate-muted)] text-base md:text-lg leading-relaxed">Stage choreography for award shows and celebrity events.</p>
             </motion.div>

             {/* Card 4 */}
             <motion.div variants={fadeInUp} className="md:col-span-2 glass-panel p-8 md:p-14 rounded-[2rem] bg-gradient-to-br from-[#0E2A5C]/50 to-transparent group hover:shadow-[0_10px_40px_rgba(249,115,22,0.3)] hover:border-[var(--color-warm-orange)]/50 transition-all duration-500 overflow-hidden relative border-white/10">
               <div className="absolute right-0 top-0 w-80 h-80 bg-[var(--color-warm-orange)] opacity-10 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-700"></div>
               <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-panel flex items-center justify-center mb-8 bg-white/5 border border-[var(--color-warm-orange)]/20 shadow-[0_0_15px_rgba(249,115,22,0.2)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all">
                 <Camera className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-warm-orange)] group-hover:scale-110 transition-transform" />
               </div>
               <h3 className="text-2xl md:text-4xl font-bold mb-4 text-[var(--color-pearl-text)]">Music Videos & Brands</h3>
               <p className="text-[var(--color-slate-muted)] text-base md:text-lg max-w-lg leading-relaxed">Choreography and movement direction for songs, reels, and branded entertainment.</p>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Intentional CSS Framework */}
      <section id="work" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 flex items-end justify-between"
          >
            <h2 className="text-clamp-h2 font-bold text-gradient-animated">Signature Work</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              { title: "Film Choreography Reel", status: "Coming soon", highlight: "var(--color-electric-blue)" },
              { title: "Luxury Wedding Moments", status: "Gallery will be added soon", highlight: "var(--color-magenta-pink)" },
              { title: "Celebrity Highlights", status: "Showcase coming soon", highlight: "var(--color-violet-accent)" },
              { title: "Behind The Scenes", status: "Videos will be added soon", highlight: "var(--color-warm-orange)" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/3] md:aspect-[16/10] rounded-[2rem] mb-6 relative overflow-hidden shadow-lg group-hover:shadow-[0_20px_60px_-15px_${item.highlight}] transition-all duration-700 bg-[var(--color-deep-denim)]/20 border border-white/10 group-hover:border-white/30 cinematic-frame flex flex-col items-center justify-center`}>

                   {/* Animated cinematic gradient mesh background */}
                   <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-[${item.highlight}]/20 opacity-30 group-hover:opacity-80 transition-opacity duration-700 z-0`}></div>

                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>

                   <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full glass-panel flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[${item.highlight}]/20 transition-all duration-500 z-20 bg-white/10 border-white/20 backdrop-blur-md group-hover:shadow-[0_0_30px_${item.highlight}] pulse-glow`}>
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" />
                   </div>

                </div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 text-[var(--color-pearl-text)] group-hover:text-[${item.highlight}] transition-colors duration-500`}>{item.title}</h3>
                <p className="text-[var(--color-slate-muted)] font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">{item.status}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 md:py-32 px-6 relative border-y border-[var(--color-electric-blue)]/20 bg-[#0E2A5C]/30 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-violet-accent)]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-clamp-h3 font-bold mb-16 text-center text-gradient-animated"
          >
            Comprehensive Expertise
          </motion.h2>
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-5"
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
                 className="glass-panel px-6 md:px-8 py-3 md:py-4 rounded-full text-xs md:text-sm font-bold tracking-wide text-[var(--color-pearl-text)] hover:bg-[var(--color-electric-blue)] hover:border-[var(--color-electric-blue)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 cursor-default shadow-md border-white/10 hover:-translate-y-1"
               >
                 {service}
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Frontend */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto animated-gradient-border rounded-[2rem] md:rounded-[3rem] p-[2px]">
          <div className="glass-panel p-8 md:p-16 rounded-[calc(2rem-2px)] md:rounded-[calc(3rem-2px)] shadow-2xl bg-[#07112F]/80 backdrop-blur-3xl relative overflow-hidden h-full w-full">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-electric-blue)]/5 via-transparent to-[var(--color-magenta-pink)]/5"></div>

             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 relative z-10">
               <h2 className="text-clamp-h2 font-bold text-gradient-animated mb-4">Let&apos;s Build Your Next Moment.</h2>
               <p className="text-[var(--color-slate-muted)] text-base md:text-lg font-medium max-w-2xl mb-6">Inquire about availability for your upcoming project or event.</p>
               <div className="flex flex-col sm:flex-row gap-6 mb-8">
                 <a href="https://wa.me/919325465937" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--color-pearl-text)] hover:text-[var(--color-magenta-pink)] transition-colors group">
                   <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center bg-white/5 group-hover:bg-[var(--color-magenta-pink)]/20 transition-all border border-white/10">
                     <Smartphone className="w-4 h-4 text-[var(--color-magenta-pink)]" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[10px] uppercase tracking-widest text-[var(--color-slate-muted)] font-bold">WhatsApp / Phone</span>
                     <span className="font-semibold tracking-wide">9325465937 / 9175734571</span>
                   </div>
                 </a>
                 <a href="mailto:dhiraj.checks@gmail.com" className="flex items-center gap-3 text-[var(--color-pearl-text)] hover:text-[var(--color-electric-blue)] transition-colors group">
                   <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center bg-white/5 group-hover:bg-[var(--color-electric-blue)]/20 transition-all border border-white/10">
                     <Mail className="w-4 h-4 text-[var(--color-electric-blue)]" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[10px] uppercase tracking-widest text-[var(--color-slate-muted)] font-bold">Email</span>
                     <span className="font-semibold tracking-wide">dhiraj.checks@gmail.com</span>
                   </div>
                 </a>
               </div>
             </motion.div>

             <form className="space-y-6 md:space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-slate-muted)] pl-2">Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl glass-input focus:outline-none transition-all text-base md:text-lg hover:bg-white/5" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-slate-muted)] pl-2">Phone / WhatsApp</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-2xl glass-input focus:outline-none transition-all text-base md:text-lg hover:bg-white/5" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Your number" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-slate-muted)] pl-2">Email</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl glass-input focus:outline-none transition-all text-base md:text-lg hover:bg-white/5" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your email address" />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-slate-muted)] pl-2">Project Type</label>
                  <div className="relative">
                    <select name="projectType" value={formData.projectType} onChange={handleInputChange} className="w-full px-6 py-4 rounded-2xl glass-input focus:outline-none transition-all text-base md:text-lg appearance-none cursor-pointer hover:bg-white/5">
                      <option value="" className="text-black">Select an option</option>
                      <option value="film" className="text-black">Film / TV choreography</option>
                      <option value="luxury-wedding" className="text-black">Luxury wedding</option>
                      <option value="sangeet" className="text-black">Sangeet choreography</option>
                      <option value="entry" className="text-black">Bride & groom entry</option>
                      <option value="live-show" className="text-black">Live show</option>
                      <option value="celebrity" className="text-black">Celebrity event</option>
                      <option value="music-video" className="text-black">Music video</option>
                      <option value="other" className="text-black">Other</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-slate-muted)] pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-slate-muted)] pl-2">Message</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-2xl glass-input focus:outline-none transition-all text-base md:text-lg resize-none hover:bg-white/5" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your vision..."></textarea>
                </div>

                <button type="button" onClick={handleWhatsAppInquiry} className="btn-shine w-full bg-gradient-to-r from-[var(--color-electric-blue)] via-[var(--color-violet-accent)] to-[var(--color-magenta-pink)] text-white py-5 rounded-2xl font-bold transition-all duration-500 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] hover:-translate-y-1 text-base md:text-lg flex justify-center items-center gap-2 group">
                  Send Inquiry
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>
             </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 px-6 border-t border-white/5 relative z-20 bg-black/40 backdrop-blur-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-midnight-navy)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
          <div className="text-center md:text-left">
            <div className="text-2xl md:text-3xl font-bold tracking-tight mb-2 flex items-center justify-center md:justify-start gap-2 font-display">
              <Sparkle className="w-5 h-5 text-[var(--color-electric-blue)]" />
              <span className="text-gradient-animated">DHIRAJ BHALERAO</span>
            </div>
            <div className="text-sm md:text-base text-[var(--color-slate-muted)] font-semibold mb-3">Award-winning choreographer</div>
            <div className="text-[10px] md:text-xs text-[var(--color-slate-muted)]/70 uppercase tracking-[0.3em] font-bold">Film | TV | Weddings | Live Events</div>
          </div>

          <div className="flex gap-5">
            <a href="https://www.instagram.com/dhiiraj_bhalerao?igsh=bGxveWw3NzZrZXNl" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-pearl-text)] hover:text-white hover:bg-[var(--color-magenta-pink)] hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:border-transparent transition-all duration-300 shadow-sm border-white/10 group">
              <Instagram size={20} className="group-hover:animate-pulse" />
            </a>
            <a href="https://www.youtube.com/@dhirajbhalerao8577" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-pearl-text)] hover:text-white hover:bg-[#FF0000] hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:border-transparent transition-all duration-300 shadow-sm border-white/10 group">
              <Youtube size={20} className="group-hover:animate-pulse" />
            </a>
            <a href="mailto:dhiraj.checks@gmail.com" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-pearl-text)] hover:text-white hover:bg-[var(--color-electric-blue)] hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:border-transparent transition-all duration-300 shadow-sm border-white/10 group">
              <Mail size={20} className="group-hover:animate-pulse" />
            </a>
          </div>

          <div className="text-xs md:text-sm text-[var(--color-slate-muted)] font-semibold">
            © 2026 Dhiraj Bhalerao. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
