'use client';

import React, { useState } from 'react';
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
  Clapperboard,
  Sparkle,
  Smartphone
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
};

const heroTextReveal = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1.2, ease: "easeOut" as const } }
};

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
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 800], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

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
    <main className="relative w-full overflow-hidden selection:bg-[var(--color-magenta-pink)] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-pearl-text)] flex items-center gap-2 group"
          >
            <Sparkle className="w-5 h-5 text-[var(--color-electric-blue)] group-hover:text-[var(--color-magenta-pink)] transition-colors hidden sm:block" />
            <span className="group-hover:text-gradient-animated transition-all duration-500 font-display">
              DHIRAJ
            </span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-[var(--color-slate-muted)] uppercase">
            <a href="#work" className="hover:text-[var(--color-pearl-text)] transition-all">Work</a>
            <a href="#award" className="hover:text-[var(--color-pearl-text)] transition-all">Award</a>
            <a href="#journey" className="hover:text-[var(--color-pearl-text)] transition-all">Journey</a>
            <a href="#services" className="hover:text-[var(--color-pearl-text)] transition-all">Services</a>
            <div className="gradient-border-wrap rounded-full p-[1px]">
              <a href="https://wa.me/919325465937" target="_blank" rel="noopener noreferrer" className="btn-shine bg-[var(--color-midnight-navy)] px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 text-[var(--color-pearl-text)] inline-block">
                Book Project
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Menu className="w-6 h-6 text-[var(--color-pearl-text)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <motion.div
            style={{ y: yHero, opacity: opacityHero }}
            className="w-full flex flex-col items-center"
          >
            {/* Opening Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 md:mb-12 inline-flex items-center justify-center"
            >
              <div className="glass-panel px-6 py-2.5 rounded-full border border-white/20 shadow-[0_0_20px_rgba(124,58,237,0.3)] glow-sweep">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gradient-award">
                  Zee Gaurav Award Winner — Best Choreographer of the Year 2025–2026
                </span>
              </div>
            </motion.div>

            {/* Huge Name & Identity */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center mb-10 md:mb-14"
            >
              <div className="overflow-hidden">
                <motion.h1 variants={heroTextReveal} className="text-clamp-hero-name font-bold font-display text-[var(--color-pearl-text)] drop-shadow-2xl">
                  DHIRAJ BHALERAO
                </motion.h1>
              </div>
              <div className="overflow-hidden mt-2 md:mt-4">
                <motion.h2 variants={heroTextReveal} className="text-clamp-hero-sub font-bold uppercase text-gradient-animated">
                  Choreographer
                </motion.h2>
              </div>
            </motion.div>

            {/* Service Chips */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-3 md:gap-5 mb-14 md:mb-20 max-w-4xl"
            >
              {['Film Choreography', 'Luxury Weddings', 'Live Shows', 'Celebrity Work'].map((tag, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="gradient-border-wrap rounded-full p-[1px] group cursor-default"
                >
                  <div className="bg-[var(--color-midnight-navy)]/80 backdrop-blur-md px-6 py-2.5 rounded-full text-[11px] md:text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-pearl-text)] group-hover:bg-transparent group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300">
                    <span className="group-hover:text-gradient-animated transition-all duration-300">{tag}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center gap-5"
            >
              <a href="https://wa.me/919325465937" target="_blank" rel="noopener noreferrer" className="btn-shine bg-gradient-to-r from-[var(--color-electric-blue)] to-[var(--color-magenta-pink)] text-white px-10 py-5 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-105 flex items-center gap-3 group text-sm md:text-base">
                Book a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
              <button className="glass-panel px-10 py-5 rounded-full font-bold text-[var(--color-pearl-text)] hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 flex items-center gap-3 text-sm md:text-base group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[var(--color-electric-blue)] group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                  <Play className="w-4 h-4 ml-0.5 text-[var(--color-pearl-text)] group-hover:text-white transition-colors" fill="currentColor" />
                </div>
                View Work
              </button>
            </motion.div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-slate-muted)] flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Award Section */}
      <section id="award" className="py-24 md:py-32 px-6 relative z-20 bg-[var(--color-midnight-navy)]/80 backdrop-blur-md border-y border-[var(--color-electric-blue)]/10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--color-violet-accent)]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--color-magenta-pink)]/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="glass-panel px-6 py-2.5 rounded-full border border-white/20 shadow-[0_0_20px_rgba(249,115,22,0.3)] glow-sweep">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gradient-award flex items-center gap-2">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-[var(--color-warm-orange)]" />
                  Award-Winning Choreographer
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-[var(--color-warm-orange)]" />
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-clamp-h2 font-bold mb-4 font-display text-[var(--color-pearl-text)]"
            >
              Awards & <span className="text-gradient-animated">Recognition</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Featured Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 h-[400px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] p-[2px] animated-gradient-border"
            >
              <div className="w-full h-full glass-panel rounded-[calc(2rem-2px)] md:rounded-[calc(3rem-2px)] bg-[#07112F]/90 backdrop-blur-3xl overflow-hidden flex flex-col items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <Camera className="w-16 h-16 text-white/10 mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:text-white/20" />
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold z-20">Main Award Portrait</p>
                <div className="absolute bottom-8 left-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="h-1 w-12 bg-gradient-to-r from-[var(--color-warm-orange)] to-[var(--color-magenta-pink)] rounded-full mb-2"></div>
                  <p className="text-sm font-semibold text-white">Dhiraj Bhalerao holding the prestigious Zee Chitra Gaurav Award</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Content & Gallery */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-8"
              >
                {/* Main Award Spotlight */}
                <motion.div variants={fadeInUp} className="glass-panel p-8 md:p-10 rounded-3xl border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-warm-orange)]/10 rounded-full blur-3xl group-hover:bg-[var(--color-magenta-pink)]/20 transition-colors duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center bg-white/5 border border-[var(--color-warm-orange)]/30 shadow-[0_0_20px_rgba(249,115,22,0.2)] group-hover:scale-110 transition-transform duration-500">
                        <Trophy className="w-6 h-6 text-[var(--color-warm-orange)] drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]" />
                      </div>
                      <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[var(--color-warm-orange)]">Featured Achievement</h3>
                    </div>

                    <h4 className="text-2xl md:text-4xl font-bold mb-3 text-[var(--color-pearl-text)] leading-tight">Best Choreographer of the Year</h4>
                    <p className="text-lg md:text-xl font-semibold text-gradient-award mb-6">Zee Chitra Gaurav Award 2025–2026</p>

                    <p className="text-[var(--color-slate-muted)] text-base leading-relaxed mb-8">
                      For choreographing the song &quot;Jaraan&quot; from the Marathi movie &quot;Jaraan&quot;. Recognized for outstanding choreography work in Marathi cinema, this award marks a major milestone in Dhiraj Bhalerao&apos;s creative journey.
                    </p>

                    {/* Gallery Slider Placeholder */}
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="min-w-[140px] h-[100px] md:min-w-[180px] md:h-[120px] glass-panel rounded-xl flex-shrink-0 snap-center bg-white/5 border-white/10 flex flex-col items-center justify-center relative overflow-hidden group/thumb cursor-pointer hover:border-white/30 transition-colors">
                          <Camera className="w-6 h-6 text-white/20 mb-2 group-hover/thumb:scale-110 transition-transform duration-300" />
                          <span className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Gallery Image {i}</span>
                          <div className="absolute inset-0 bg-[var(--color-electric-blue)]/0 group-hover/thumb:bg-[var(--color-electric-blue)]/10 transition-colors duration-300"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Award */}
                <motion.div variants={fadeInUp} className="glass-panel p-6 rounded-2xl border-white/5 bg-white/5 flex items-center gap-6 group hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-electric-blue)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-electric-blue)]/20 transition-colors border border-[var(--color-electric-blue)]/20">
                    <Star className="w-5 h-5 text-[var(--color-electric-blue)] drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-[var(--color-pearl-text)] text-sm md:text-base">INCA Award</h5>
                    <p className="text-xs md:text-sm text-[var(--color-slate-muted)] mt-1 font-medium">Pan India Best Choreographer Nomination</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <a href="https://www.instagram.com/reel/DWGawYvDI9g/?igsh=MWhrMmY4N2kxaHJiYg==" target="_blank" rel="noopener noreferrer" className="btn-shine bg-gradient-to-r from-[var(--color-electric-blue)] to-[var(--color-magenta-pink)] text-white px-6 md:px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 group text-sm">
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" />
                  Watch Award Reel
                </a>

                <a href="https://www.instagram.com/reel/DZNMEQbsiWX/?igsh=ZmpvMjIyMmlveXd3" target="_blank" rel="noopener noreferrer" className="glass-panel px-6 md:px-8 py-4 rounded-xl font-bold text-[var(--color-pearl-text)] hover:bg-white/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300 flex items-center justify-center gap-3 group text-sm border-white/10 hover:border-[var(--color-warm-orange)]/50">
                  <Play className="w-4 h-4 text-[var(--color-warm-orange)] group-hover:scale-110 transition-transform" fill="currentColor" />
                  Watch Award Moment
                </a>

                <a href="https://www.instagram.com/reel/DXKq1NlDIsm/?igsh=MXI5YnkycHZhaGhuaQ==" target="_blank" rel="noopener noreferrer" className="glass-panel px-6 md:px-8 py-4 rounded-xl font-bold text-[var(--color-pearl-text)] hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 flex items-center justify-center gap-3 group text-sm border-white/10 hover:border-[var(--color-electric-blue)]/50">
                  <Instagram className="w-4 h-4 text-[var(--color-electric-blue)] group-hover:scale-110 transition-transform" />
                  View INCA Nomination
                </a>
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
