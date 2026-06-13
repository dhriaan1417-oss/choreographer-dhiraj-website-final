'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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

  Menu,
  Trophy,
  Clapperboard,
  Sparkle,
  Smartphone,

  Users
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
};

const heroTextReveal = {
  hidden: { opacity: 0, filter: "blur(15px)", y: 30 },
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
    <main className="relative w-full max-w-[100vw] overflow-x-hidden selection:bg-[var(--color-electric-cyan)] selection:text-[var(--color-deep-navy)] bg-[var(--color-ice-blue)]">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-deep-navy)] flex items-center gap-2 group cursor-pointer"
          >
            <Sparkle className="w-5 h-5 text-[var(--color-electric-cyan)] group-hover:text-[var(--color-royal-blue)] transition-colors hidden sm:block animate-pulse" />
            <span className="group-hover:text-gradient-animated transition-all duration-500 font-display">
              DHIRAJ BHALERAO
            </span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider text-[var(--color-slate-muted)] uppercase">
            <a href="#work" className="hover:text-[var(--color-royal-blue)] transition-all">Work</a>
            <a href="#award" className="hover:text-[var(--color-royal-blue)] transition-all">Awards</a>
            <a href="#services" className="hover:text-[var(--color-royal-blue)] transition-all">Services</a>
            <div className="gradient-border-wrap rounded-full p-[1px]">
              <a href="https://wa.me/919325465937" target="_blank" rel="noopener noreferrer" className="btn-shine bg-[var(--color-deep-navy)] px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 text-white inline-block">
                Book Project
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-full bg-white/50 border border-white/80 hover:bg-white transition-colors">
              <Menu className="w-6 h-6 text-[var(--color-deep-navy)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center pt-28 pb-16 px-6 overflow-hidden">
        {/* Animated Background Elements for Hero */}
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-[var(--color-electric-cyan)] to-[var(--color-royal-blue)] rounded-full blur-[100px] md:blur-[120px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-bl from-[var(--color-light-denim)] to-[var(--color-violet-glow)] rounded-full blur-[120px] md:blur-[150px] opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <motion.div
            style={{ y: yHero, opacity: opacityHero }}
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-20"
          >
            {/* Opening Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="mb-8 md:mb-12 inline-flex"
            >
              <div className="glass-panel-dark px-5 md:px-6 py-2 md:py-2.5 rounded-full border border-[var(--color-electric-cyan)]/30 shadow-[0_0_20px_rgba(0,229,255,0.2)] glow-sweep group hover:border-[var(--color-electric-cyan)] transition-colors duration-300">
                <span className="text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-cloud-white)] flex items-center gap-2">
                  <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4 text-[var(--color-electric-cyan)] group-hover:scale-110 group-hover:animate-pulse transition-transform" />
                  Zee Gaurav Award Winner — Best Choreographer
                </span>
              </div>
            </motion.div>

            {/* Huge Name & Identity */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center lg:items-start mb-8 md:mb-10 w-full"
            >
              <div className="overflow-hidden w-full pb-2 px-1">
                <motion.h1 variants={heroTextReveal} className="text-clamp-hero-name font-bold font-display text-[var(--color-deep-navy)] drop-shadow-sm tracking-tight leading-[1.1]">
                  DHIRAJ <span className="text-gradient-animated block lg:inline leading-[1.1]">BHALERAO</span>
                </motion.h1>
              </div>
              <div className="overflow-hidden mt-3 md:mt-4 w-full">
                <motion.p variants={heroTextReveal} className="text-clamp-hero-sub font-bold text-[var(--color-slate-muted)] max-w-2xl leading-relaxed">
                  Cinematic Motion Direction & Premium Choreography for Film, Television, and Luxury Events.
                </motion.p>
              </div>
            </motion.div>

            {/* Service Chips - FIXED: White/Cyan text on dark glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 md:mb-12 max-w-2xl w-full px-2 lg:px-0"
            >
              {[
                { text: "Film & TV", icon: Clapperboard },
                { text: "Luxury Weddings", icon: Heart },
                { text: "Live Shows", icon: Sparkle },
                { text: "Celebrity Work", icon: Star }
              ].map((item, i) => (
                <div key={i} className="glass-panel-dark px-4 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-wider text-[var(--color-cloud-white)] flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border-[var(--color-electric-cyan)]/30 hover:bg-[var(--color-electric-cyan)] hover:text-[var(--color-deep-navy)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-1 transform cursor-default">
                  <item.icon className="w-3.5 h-3.5 text-[var(--color-electric-cyan)] group-hover:text-[var(--color-deep-navy)]" />
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0"
            >
              <a href="#work" className="btn-shine bg-[var(--color-deep-navy)] hover:bg-[var(--color-royal-blue)] text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(11,17,32,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] flex items-center justify-center gap-3 w-full sm:w-auto group transform hover:-translate-y-1">
                View Signature Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/919325465937" target="_blank" rel="noopener noreferrer" className="glass-panel bg-white/80 px-8 md:px-10 py-4 rounded-xl font-bold text-[var(--color-deep-navy)] hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,1)] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto border-[var(--color-electric-cyan)]/30 hover:border-[var(--color-electric-cyan)] transform hover:-translate-y-1">
                <Smartphone className="w-5 h-5 text-[var(--color-royal-blue)]" />
                Book Project
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image / Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="w-full lg:w-[45%] relative flex justify-center lg:justify-end mt-12 lg:mt-0 px-4 lg:px-0"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] p-[2px] animated-gradient-border group">
              <div className="absolute -inset-6 bg-gradient-to-r from-[var(--color-electric-cyan)] to-[var(--color-violet-glow)] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
              <div className="w-full h-full glass-panel-dark rounded-[calc(2.5rem-2px)] overflow-hidden relative shadow-[0_20px_50px_rgba(11,17,32,0.3)] z-10 bg-[#0B1120]">
                {/* Real media restored: using the premium portrait of him holding the trophy */}
                <Image
                  src="/images/awards/award-trophy.jpg"
                  alt="Dhiraj Bhalerao - Award Winning Cinematic Choreographer"
                  fill
                  className="object-cover object-top opacity-90 transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-navy)] via-[var(--color-deep-navy)]/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Floating elements inside frame */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 md:bottom-8 left-4 md:left-6 right-4 md:right-6 glass-panel p-4 md:p-5 rounded-2xl border-white/20 bg-white/10 backdrop-blur-xl flex items-center gap-4 z-20 shadow-2xl"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--color-electric-cyan)] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-deep-navy)]" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[var(--color-cloud-white)]">Zee Chitra Gaurav</p>
                    <p className="text-sm md:text-base font-bold text-[var(--color-electric-cyan)]">Best Choreographer</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 hidden md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-slate-muted)]">Scroll</span>
          <div className="w-6 h-10 border-2 border-[var(--color-slate-muted)]/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[var(--color-royal-blue)] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Awards & Recognition Section */}
      <section id="award" className="py-24 md:py-32 px-6 relative bg-gradient-to-b from-[var(--color-ice-blue)] via-white/50 to-[var(--color-ice-blue)] overflow-hidden">
        {/* Sky Motion Accent Background */}
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-gradient-to-l from-[var(--color-electric-cyan)] to-[var(--color-light-denim)] rounded-full blur-[150px] opacity-10 animate-blob"></div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="mb-12 md:mb-20 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="glass-panel px-6 py-2.5 rounded-full border border-[var(--color-electric-cyan)]/30 shadow-[0_0_20px_rgba(0,229,255,0.2)] glow-sweep bg-white/80">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gradient-award flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[var(--color-royal-blue)]" />
                  Major Milestone
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="text-clamp-h2 font-bold font-display text-[var(--color-deep-navy)]"
            >
              Awards & <span className="text-gradient-animated">Recognition</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
            {/* Left: Featured Award Card / Spotlight */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 h-[400px] sm:h-[500px] lg:h-full min-h-[450px] rounded-[2.5rem] p-[2px] animated-gradient-border group"
            >
              <div className="w-full h-full glass-panel-dark rounded-[calc(2.5rem-2px)] overflow-hidden relative shadow-2xl bg-[#0B1120]">
                {/* FIXED permanently: Using the real award stage image here if trophy is used in hero, or trophy here. Let's use award-stage.jpg for variety, it's real. */}
                <Image
                  src="/images/awards/award-stage.jpg"
                  alt="Dhiraj Bhalerao Award Moment"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 z-10"></div>

                <div className="absolute bottom-8 left-6 right-6 z-20 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-1 w-16 bg-gradient-to-r from-[var(--color-electric-cyan)] to-[var(--color-royal-blue)] rounded-full mb-4 shadow-[0_0_10px_rgba(0,229,255,0.5)]"></div>
                  <p className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md font-display mb-2">Zee Chitra Gaurav Award</p>
                  <p className="text-sm md:text-md text-[var(--color-electric-cyan)] font-bold tracking-wide">Best Choreographer of the Year</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Content & Gallery */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="space-y-6"
              >
                {/* Main Award Description Block */}
                <motion.div variants={fadeInUp} className="glass-panel p-6 md:p-10 rounded-3xl border-[var(--color-royal-blue)]/20 relative overflow-hidden group hover:border-[var(--color-electric-cyan)]/50 transition-colors duration-500 bg-white/70 shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-[var(--color-electric-cyan)]/10 rounded-full blur-3xl group-hover:bg-[var(--color-electric-cyan)]/20 transition-colors duration-700 pointer-events-none"></div>
                  <div className="relative z-10">
                    <h4 className="text-2xl md:text-4xl font-bold mb-3 text-[var(--color-deep-navy)] leading-tight font-display pr-4">Best Choreographer of the Year</h4>
                    <p className="text-lg md:text-xl font-bold text-gradient-animated mb-6">Zee Chitra Gaurav Award 2025–2026</p>

                    <p className="text-[var(--color-slate-muted)] text-sm md:text-base leading-relaxed mb-8 font-medium">
                      For choreographing the song &quot;Jaraan&quot; from the Marathi movie &quot;Jaraan&quot;. Recognized for outstanding choreography work in Marathi cinema, this award marks a major milestone in Dhiraj Bhalerao&apos;s creative journey.
                    </p>

                    {/* Gallery Slider - Preserved images */}
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar w-full">
                      <div className="min-w-[140px] h-[100px] md:min-w-[180px] md:h-[120px] glass-panel-dark rounded-2xl flex-shrink-0 snap-center border-[var(--color-electric-cyan)]/30 relative overflow-hidden group/thumb cursor-pointer hover:border-[var(--color-electric-cyan)] transition-colors shadow-md">
                        <Image
                          src="/images/awards/award-trophy.jpg"
                          alt="Award Trophy"
                          fill
                          className="object-cover transition-transform duration-700 group-hover/thumb:scale-110"
                          sizes="(max-width: 768px) 33vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 to-transparent opacity-60 group-hover/thumb:opacity-30 transition-opacity duration-300"></div>
                      </div>

                      <div className="min-w-[140px] h-[100px] md:min-w-[180px] md:h-[120px] glass-panel-dark rounded-2xl flex-shrink-0 snap-center border-[var(--color-electric-cyan)]/30 relative overflow-hidden group/thumb cursor-pointer hover:border-[var(--color-electric-cyan)] transition-colors shadow-md">
                        <Image
                          src="/images/awards/jarann-poster.jpg"
                          alt="Jaraan Movie Poster"
                          fill
                          className="object-cover transition-transform duration-700 group-hover/thumb:scale-110"
                          sizes="(max-width: 768px) 33vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 to-transparent opacity-60 group-hover/thumb:opacity-30 transition-opacity duration-300"></div>
                      </div>

                      <div className="min-w-[140px] h-[100px] md:min-w-[180px] md:h-[120px] glass-panel-dark rounded-2xl flex-shrink-0 snap-center border-[var(--color-electric-cyan)]/30 relative overflow-hidden group/thumb cursor-pointer hover:border-[var(--color-electric-cyan)] transition-colors shadow-md">
                        <Image
                          src="/images/awards/award-poster.png"
                          alt="INCA Award Nomination"
                          fill
                          className="object-cover transition-transform duration-700 group-hover/thumb:scale-110"
                          sizes="(max-width: 768px) 33vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 to-transparent opacity-60 group-hover/thumb:opacity-30 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Award */}
                <motion.div variants={fadeInUp} className="glass-panel p-5 md:p-6 rounded-2xl border-[var(--color-royal-blue)]/20 bg-white/80 flex items-center gap-4 md:gap-6 group hover:bg-white transition-colors duration-300 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] w-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-electric-cyan)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-electric-cyan)]/20 transition-colors border border-[var(--color-electric-cyan)]/30">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-royal-blue)] drop-shadow-[0_0_8px_rgba(29,78,216,0.3)]" fill="currentColor" />
                  </div>
                  <div className="pr-2">
                    <h5 className="font-bold text-[var(--color-deep-navy)] text-base md:text-lg">INCA Award</h5>
                    <p className="text-xs md:text-sm text-[var(--color-slate-muted)] mt-1 font-medium leading-snug">Pan India Best Choreographer Nomination</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 w-full"
              >
                <a href="https://www.instagram.com/reel/DWGawYvDI9g/?igsh=MWhrMmY4N2kxaHJiYg==" target="_blank" rel="noopener noreferrer" className="btn-shine bg-gradient-to-r from-[var(--color-royal-blue)] to-[var(--color-electric-cyan)] text-white px-5 md:px-8 py-3.5 md:py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_5px_15px_rgba(0,229,255,0.3)] hover:shadow-[0_10px_25px_rgba(0,229,255,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group text-xs md:text-sm flex-1 sm:flex-auto whitespace-nowrap">
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" />
                  Watch Award Reel
                </a>

                <a href="https://www.instagram.com/reel/DZNMEQbsiWX/?igsh=ZmpvMjIyMmlveXd3" target="_blank" rel="noopener noreferrer" className="glass-panel bg-white/90 px-5 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-[var(--color-deep-navy)] hover:shadow-[0_5px_20px_rgba(29,78,216,0.15)] transition-all duration-300 flex items-center justify-center gap-2 group text-xs md:text-sm border-[var(--color-royal-blue)]/10 hover:border-[var(--color-royal-blue)]/50 hover:-translate-y-1 flex-1 sm:flex-auto whitespace-nowrap">
                  <Play className="w-4 h-4 text-[var(--color-royal-blue)] group-hover:scale-110 transition-transform" fill="currentColor" />
                  Watch Moment
                </a>

                <a href="https://www.instagram.com/reel/DXKq1NlDIsm/?igsh=MXI5YnkycHZhaGhuaQ==" target="_blank" rel="noopener noreferrer" className="glass-panel bg-white/90 px-5 md:px-8 py-3.5 md:py-4 rounded-xl font-bold text-[var(--color-deep-navy)] hover:shadow-[0_5px_20px_rgba(29,78,216,0.15)] transition-all duration-300 flex items-center justify-center gap-2 group text-xs md:text-sm border-[var(--color-royal-blue)]/10 hover:border-[var(--color-royal-blue)]/50 hover:-translate-y-1 w-full sm:w-auto mt-1 sm:mt-0">
                  <Instagram className="w-4 h-4 text-[var(--color-royal-blue)] group-hover:scale-110 transition-transform" />
                  View INCA Nomination
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Work Section */}
      <section id="work" className="py-24 md:py-32 px-6 relative overflow-hidden bg-white/30 backdrop-blur-md">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[var(--color-ice-blue)] to-transparent opacity-80 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-12 md:mb-16 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="glass-panel px-6 py-2.5 rounded-full border border-[var(--color-electric-cyan)]/30 shadow-[0_0_20px_rgba(0,229,255,0.2)] mb-6 glow-sweep bg-white/80">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-royal-blue)] flex items-center gap-2">
                <Clapperboard className="w-4 h-4" />
                Featured Projects
              </span>
            </div>
            <h2 className="text-clamp-h2 font-bold font-display text-[var(--color-deep-navy)]">Signature <span className="text-gradient-animated">Work</span></h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {[
              { title: "Jaraan", project: "Marathi Movie 'Jaraan'", role: "Choreographer", link: "https://youtu.be/PmcLtM2GdgU?si=7IALLbjUl2HH0Gie", badge: "Zee Gaurav Award Winner", highlight: "var(--color-electric-cyan)" },
              { title: "Nashu Mainu", project: "One Day (ft. Esha Gupta)", role: "Choreographer", link: "https://youtu.be/mOWK4_iouFU?si=TT8O2c4qpk9slefn", badge: "", highlight: "var(--color-royal-blue)" },
              { title: "Kanha Re", project: "Devotional Video Song", role: "Choreographer", link: "https://youtu.be/mICmUiHgLaU?si=34wrMAThvdfMWyIB", badge: "", highlight: "var(--color-violet-glow)" },
              { title: "Premika", project: "I Prem U", role: "Choreographer", link: "https://youtu.be/8pmAid1ERmg?si=t3z9t8SdBTL83dHv", badge: "", highlight: "var(--color-light-denim)" },
              { title: "Halu Halu", project: "I Prem U", role: "Choreographer", link: "https://youtu.be/iV1e3zY2Ba8?si=XVBnhdM5je6YnJyh", badge: "", highlight: "var(--color-electric-cyan)" },
              { title: "Neta Geeta", project: "Title Song", role: "Choreographer", link: "https://youtu.be/31uxfcxDXQo?si=-RQGiNDesvkkAVB5", badge: "", highlight: "var(--color-royal-blue)" },
              { title: "Sindhi Aahiyun", project: "Music Video", role: "Choreographer", link: "https://youtu.be/QkJhBI8VQkk?si=LMw87iDgHpMTn9Gz", badge: "", highlight: "var(--color-violet-glow)" }
            ].map((item, i) => {
              // Extract video ID for thumbnail
              let videoId = "";
              const match = item.link.match(/youtu\.be\/([^?]+)/);
              if (match && match[1]) {
                videoId = match[1];
              }

              return (
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                variants={fadeInUp}
                className={`group cursor-pointer block relative w-full ${i === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <div className={`w-full ${i === 0 ? 'aspect-[16/10] md:aspect-[16/9]' : 'aspect-[16/10] sm:aspect-[4/3]'} rounded-[2rem] p-[2px] animated-gradient-border`}>
                  <div className={`w-full h-full glass-panel-dark rounded-[calc(2rem-2px)] overflow-hidden relative shadow-lg group-hover:shadow-[0_20px_40px_-10px_${item.highlight}] transition-all duration-700 bg-[#0B1120]`}>

                    {/* Safe YouTube Thumbnail using img tag */}
                    {videoId && (
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={`${item.title} Video Thumbnail`}
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/50 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

                    {item.badge && (
                      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30">
                        <div className="bg-[var(--color-electric-cyan)] text-[var(--color-deep-navy)] text-[9px] md:text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 md:gap-2 shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                          <Trophy className="w-3 h-3 md:w-3.5 md:h-3.5" />
                          {item.badge}
                        </div>
                      </div>
                    )}

                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full glass-panel flex items-center justify-center shadow-lg group-hover:scale-110 bg-white/20 border-white/40 backdrop-blur-md transition-all duration-500 z-20 pulse-glow`}>
                       <Play className="w-5 h-5 md:w-8 md:h-8 text-white ml-1 drop-shadow-md" fill="currentColor" />
                    </div>

                    <div className="absolute bottom-5 md:bottom-6 left-5 md:left-6 right-5 md:right-6 z-20 translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-[var(--color-electric-cyan)] to-white rounded-full mb-2 md:mb-3"></div>
                      <h3 className={`text-lg md:text-2xl font-bold mb-1 text-white group-hover:text-[var(--color-electric-cyan)] transition-colors duration-500 drop-shadow-md font-display truncate`}>{item.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-xs md:text-sm font-medium text-white/80">
                        <span className="truncate">{item.project}</span>
                        <span className="hidden sm:inline text-white/40">•</span>
                        <span className="text-[var(--color-light-denim)] truncate">{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Luxury Weddings & Celebrity Events (Premium Coming Soon Cards) */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-transparent via-[var(--color-ice-blue)]/50 to-transparent">
        <div className="max-w-7xl mx-auto w-full">
           <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 gap-6 md:gap-10 w-full">
              {/* Wedding Showcase Card */}
              <motion.div variants={fadeInUp} className="w-full h-full glass-panel p-8 md:p-12 rounded-[2.5rem] border-[var(--color-royal-blue)]/20 bg-white/50 backdrop-blur-xl hover:bg-white/70 hover:shadow-[0_20px_50px_rgba(0,229,255,0.1)] transition-all duration-700 flex flex-col items-center justify-center text-center group min-h-[300px]">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-light-denim)] to-[var(--color-violet-glow)] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20"></div>
                    <Heart className="w-8 h-8 text-white drop-shadow-md" fill="currentColor" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-deep-navy)] mb-3">Luxury Weddings</h3>
                 <div className="h-1 w-16 bg-gradient-to-r from-[var(--color-electric-cyan)] to-[var(--color-royal-blue)] rounded-full mb-4"></div>
                 <p className="text-[var(--color-slate-muted)] font-medium max-w-sm">Premium bridal entry, Sangeet direction, and Varmala concepts showcase is being curated.</p>
                 <div className="mt-8 px-5 py-2 glass-panel-dark rounded-full text-[10px] uppercase tracking-widest font-bold text-[var(--color-electric-cyan)] border-[var(--color-electric-cyan)]/30 inline-block">Curating Portfolio</div>
              </motion.div>

              {/* Celebrity Events Card */}
              <motion.div variants={fadeInUp} className="w-full h-full glass-panel p-8 md:p-12 rounded-[2.5rem] border-[var(--color-royal-blue)]/20 bg-white/50 backdrop-blur-xl hover:bg-white/70 hover:shadow-[0_20px_50px_rgba(0,229,255,0.1)] transition-all duration-700 flex flex-col items-center justify-center text-center group min-h-[300px]">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-electric-cyan)] to-[var(--color-royal-blue)] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20"></div>
                    <Users className="w-8 h-8 text-white drop-shadow-md" fill="currentColor" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-deep-navy)] mb-3">Celebrity Highlights</h3>
                 <div className="h-1 w-16 bg-gradient-to-r from-[var(--color-electric-cyan)] to-[var(--color-royal-blue)] rounded-full mb-4"></div>
                 <p className="text-[var(--color-slate-muted)] font-medium max-w-sm">Exclusive behind-the-scenes and live show moments with industry artists.</p>
                 <div className="mt-8 px-5 py-2 glass-panel-dark rounded-full text-[10px] uppercase tracking-widest font-bold text-[var(--color-electric-cyan)] border-[var(--color-electric-cyan)]/30 inline-block">Curating Portfolio</div>
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 md:py-32 px-6 relative border-y border-[var(--color-electric-cyan)]/20 bg-white/60 backdrop-blur-md overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ice-blue)] via-[var(--color-light-denim)]/10 to-[var(--color-ice-blue)] z-0 pointer-events-none"></div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[var(--color-electric-cyan)]/20 rounded-full blur-[100px] animate-blob pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--color-violet-glow)]/10 rounded-full blur-[120px] animate-blob animation-delay-2000 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="glass-panel px-6 py-2.5 rounded-full border border-[var(--color-electric-cyan)]/30 shadow-[0_0_20px_rgba(0,229,255,0.2)] glow-sweep bg-white/80">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-royal-blue)] flex items-center gap-2">
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-[var(--color-electric-cyan)] text-[var(--color-electric-cyan)]" />
                  What We Do
                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-[var(--color-electric-cyan)] text-[var(--color-electric-cyan)]" />
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="text-clamp-h2 font-bold font-display text-[var(--color-deep-navy)]"
            >
              Comprehensive <span className="text-gradient-animated">Expertise</span>
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-3 md:gap-5 w-full"
          >
             {[
               { title: "Film choreography", icon: Clapperboard, color: "var(--color-royal-blue)", size: "large" },
               { title: "Television choreography", icon: Play, color: "var(--color-electric-cyan)", size: "medium" },
               { title: "Luxury wedding", icon: Heart, color: "var(--color-violet-glow)", size: "large" },
               { title: "Sangeet choreography", icon: Star, color: "var(--color-light-denim)", size: "medium" },
               { title: "Bride & groom entry", icon: Sparkle, color: "var(--color-royal-blue)", size: "small" },
               { title: "Varmala concepts", icon: Camera, color: "var(--color-electric-cyan)", size: "small" },
               { title: "Family training", icon: Heart, color: "var(--color-violet-glow)", size: "small" },
               { title: "Live shows", icon: Trophy, color: "var(--color-royal-blue)", size: "large" },
               { title: "Celebrity events", icon: Star, color: "var(--color-electric-cyan)", size: "medium" },
               { title: "Music video direction", icon: Play, color: "var(--color-light-denim)", size: "medium" },
               { title: "Corporate shows", icon: Clapperboard, color: "var(--color-violet-glow)", size: "small" },
               { title: "Stage direction", icon: Sparkle, color: "var(--color-royal-blue)", size: "medium" }
             ].map((service, i) => {
               const Icon = service.icon;

               // Dynamic sizing
               const sizeClasses = {
                 large: "px-6 md:px-10 py-4 md:py-6 text-sm md:text-lg",
                 medium: "px-5 md:px-8 py-3 md:py-5 text-xs md:text-base",
                 small: "px-4 md:px-6 py-2 md:py-4 text-[10px] md:text-sm"
               }[service.size];

               const floatVariant = {
                 hidden: { opacity: 0, y: 30, scale: 0.9 },
                 visible: {
                   opacity: 1,
                   y: 0,
                   scale: 1,
                   transition: { type: "spring" as const, stiffness: 100, damping: 12 }
                 }
               };

               return (
                 <motion.div
                   variants={floatVariant}
                   key={i}
                   className="relative group cursor-pointer"
                 >
                   <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0 shadow-[0_0_30px_rgba(0,229,255,0.4)]"></div>
                   <div className={`relative glass-panel rounded-full border border-white/80 bg-white/90 backdrop-blur-xl hover:bg-white transition-all duration-500 flex items-center justify-center gap-2 md:gap-3 overflow-hidden z-10 group-hover:-translate-y-2 shadow-md hover:shadow-xl ${sizeClasses} whitespace-nowrap`}>

                     <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg] group-hover:animate-shine-sweep"></div>

                     <div className="flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110">
                       <Icon className="w-4 h-4 md:w-5 md:h-5 transition-colors duration-300" style={{ color: service.color }} />
                     </div>
                     <h3 className="font-bold tracking-wide text-[var(--color-deep-navy)] relative z-10 group-hover:text-[var(--color-royal-blue)] transition-colors duration-300">{service.title}</h3>
                   </div>
                 </motion.div>
               );
             })}
          </motion.div>
        </div>
      </section>

      {/* Footer Section (Contact) */}
      <footer id="contact" className="py-20 md:py-32 px-6 border-t border-[var(--color-electric-cyan)]/20 relative bg-white/50 backdrop-blur-md overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-t from-[var(--color-ice-blue)] to-transparent opacity-80 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 w-full">
          <div className="text-center md:text-left flex-1 max-w-xl w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="inline-flex items-center justify-center md:justify-start mb-6"
            >
              <div className="glass-panel px-5 py-2 rounded-full border border-[var(--color-electric-cyan)]/30 shadow-[0_0_20px_rgba(0,229,255,0.2)] glow-sweep bg-white/80">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-royal-blue)] flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-[var(--color-electric-cyan)]" />
                  Let&apos;s Talk
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="text-clamp-h2 font-bold font-display text-[var(--color-deep-navy)] mb-4 md:mb-6"
            >
              Ready to create something <span className="text-gradient-animated">extraordinary?</span>
            </motion.h2>

            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="text-sm md:text-lg text-[var(--color-slate-muted)] font-medium mb-8 md:mb-10 max-w-md mx-auto md:mx-0 px-4 md:px-0"
            >
              Reach out to discuss film choreography, luxury weddings, and premium live shows.
            </motion.p>

            {/* Contact Form / Card */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="glass-panel p-6 md:p-8 rounded-3xl border-[var(--color-electric-cyan)]/20 bg-white/80 shadow-2xl w-full"
            >
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 w-full">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="w-full glass-input px-5 py-3 md:py-4 rounded-xl text-sm font-medium border-white/50 hover:border-[var(--color-electric-cyan)] transition-colors focus:bg-white" />
                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full glass-input px-5 py-3 md:py-4 rounded-xl text-sm font-medium border-white/50 hover:border-[var(--color-electric-cyan)] transition-colors focus:bg-white" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full glass-input px-5 py-3 md:py-4 rounded-xl text-sm font-medium border-white/50 hover:border-[var(--color-electric-cyan)] transition-colors focus:bg-white" />
                <select name="projectType" value={formData.projectType} onChange={handleInputChange} className="w-full glass-input px-5 py-3 md:py-4 rounded-xl text-sm font-medium border-white/50 hover:border-[var(--color-electric-cyan)] transition-colors cursor-pointer focus:bg-white">
                  <option value="" disabled className="text-gray-400">Select Project Type</option>
                  <option value="Film / Music Video">Film / Music Video</option>
                  <option value="Luxury Wedding">Luxury Wedding</option>
                  <option value="Live Event / Show">Live Event / Show</option>
                  <option value="Other">Other</option>
                </select>
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your vision..." rows={3} className="w-full glass-input px-5 py-3 md:py-4 rounded-xl text-sm font-medium border-white/50 hover:border-[var(--color-electric-cyan)] transition-colors resize-none focus:bg-white"></textarea>
              </div>
              <button onClick={handleWhatsAppInquiry} className="w-full btn-shine bg-[var(--color-deep-navy)] hover:bg-[var(--color-royal-blue)] text-white px-6 py-3.5 md:py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_5px_15px_rgba(0,229,255,0.3)] hover:shadow-[0_10px_25px_rgba(0,229,255,0.5)] flex items-center justify-center gap-2 md:gap-3 group text-sm md:text-base transform hover:-translate-y-1">
                Send Inquiry via WhatsApp
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center w-full md:w-auto">
            <div className="text-center md:text-right mb-8 md:mb-10">
              <span className="text-xl md:text-2xl font-bold font-display text-[var(--color-deep-navy)] block mb-1 md:mb-2 tracking-tight">DHIRAJ BHALERAO</span>
              <span className="text-xs md:text-sm text-[var(--color-slate-muted)] font-bold uppercase tracking-widest">Award-Winning Choreographer</span>
            </div>

            {/* Direct Contact Options */}
            <div className="flex flex-col gap-3 md:gap-4 w-full max-w-sm mb-10 md:mb-12">
              <a href="tel:+919325465937" className="glass-panel p-3 md:p-4 rounded-2xl border-white/80 bg-white/80 hover:bg-white transition-all flex items-center gap-3 md:gap-4 group cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[var(--color-electric-cyan)]/20 flex items-center justify-center text-[var(--color-royal-blue)] group-hover:bg-[var(--color-electric-cyan)] transition-colors">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-[var(--color-slate-muted)]">Call / WhatsApp</p>
                  <p className="text-sm md:text-base font-bold text-[var(--color-deep-navy)]">+91 9325465937</p>
                </div>
              </a>
              <a href="mailto:dhiraj.checks@gmail.com" className="glass-panel p-3 md:p-4 rounded-2xl border-white/80 bg-white/80 hover:bg-white transition-all flex items-center gap-3 md:gap-4 group cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-[var(--color-violet-glow)]/20 flex items-center justify-center text-[var(--color-royal-blue)] group-hover:bg-[var(--color-violet-glow)] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-[var(--color-slate-muted)]">Email</p>
                  <p className="text-sm md:text-base font-bold text-[var(--color-deep-navy)] break-all">dhiraj.checks@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/dhiiraj_bhalerao?igsh=bGxveWw3NzZrZXNl" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-royal-blue)] hover:text-white hover:bg-[var(--color-magenta-pink)] hover:scale-110 transition-all duration-300 shadow-md border-white bg-white group">
                <Instagram size={20} className="group-hover:animate-pulse" />
              </a>
              <a href="https://www.youtube.com/@dhirajbhalerao8577" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[var(--color-royal-blue)] hover:text-white hover:bg-[#FF0000] hover:scale-110 transition-all duration-300 shadow-md border-white bg-white group">
                <Youtube size={20} className="group-hover:animate-pulse" />
              </a>
            </div>

            <div className="mt-10 md:mt-12 text-[10px] md:text-xs text-[var(--color-slate-muted)] font-semibold text-center md:text-right">
              © 2026 Dhiraj Bhalerao. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
