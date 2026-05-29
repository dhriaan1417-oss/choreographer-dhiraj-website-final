'use client';

import { motion } from 'framer-motion';
import { Award, Film, Play, Star, Calendar, ArrowRight, Instagram, Youtube, Mail } from 'lucide-react';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "linear" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            DHIRAJ <span className="text-gold">.</span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#work" className="hover:text-gold transition-colors">Work</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          {/* Placeholder for Cinematic Video Background */}
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
             <source src="/placeholders/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6"
          >
            Choreographing <br/> <span className="text-gold italic">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light mb-10"
          >
            Premium choreography for film, television, luxury weddings, and live entertainment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-gold text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2 mx-auto">
              <Play size={20} fill="currentColor" />
              Watch Showreel
            </button>
          </motion.div>
        </div>
      </section>

      {/* Award Highlight */}
      <section className="py-24 bg-gradient-to-b from-black to-neutral-950 border-y border-gold/20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <Award className="text-gold w-20 h-20 mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-gold">
              Best Choreographer of the Year
            </h2>
            <p className="text-2xl text-white/90 font-light mb-2">Zee Gaurav Award</p>
            <p className="text-lg text-white/50 tracking-widest uppercase">2025 – 2026</p>
          </motion.div>
        </div>
      </section>

      {/* 18+ Years Journey */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-gold font-mono tracking-widest mb-4 uppercase text-sm">The Journey</h3>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              18+ Years of <br/> <span className="text-white/50">Movement</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              With nearly two decades of experience shaping movement in the entertainment industry, Dhiraj brings unparalleled expertise to every project. From intimate cinematic moments to grand stadium spectacles.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-4xl font-bold text-gold mb-2">500+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold mb-2">18+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] bg-neutral-900 relative cinematic-shadow rounded-sm overflow-hidden flex items-center justify-center border border-white/10"
          >
            <img src="/placeholders/portrait.jpg" alt="Dhiraj - Professional Headshot" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Work Showcase Grid */}
      <section id="work" className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Portfolio</h2>
            <p className="text-white/50 text-lg max-w-2xl">A curated selection of defining moments across film, television, and live stages.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Film & TV */}
            <div className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                <Film className="w-10 h-10 text-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0" />
                <h3 className="text-2xl font-bold uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">Film & TV</h3>
                <img src="/placeholders/film1.jpg" alt="Portfolio placeholder" className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50" />
              </div>
            </div>

            {/* Luxury Weddings */}
            <div className="group relative aspect-square bg-neutral-800 overflow-hidden cursor-pointer md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                <Star className="w-10 h-10 text-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0" />
                <h3 className="text-2xl font-bold uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">Luxury Weddings</h3>
                <img src="/placeholders/film1.jpg" alt="Portfolio placeholder" className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50" />
              </div>
            </div>

            {/* Live Shows */}
            <div className="group relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer lg:col-span-2">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                <Calendar className="w-10 h-10 text-gold mb-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0" />
                <h3 className="text-2xl font-bold uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">Live Shows & Celeb Work</h3>
                <img src="/placeholders/film1.jpg" alt="Portfolio placeholder" className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50" />
              </div>
            </div>

            {/* Gallery Item */}
             <div className="group relative aspect-square bg-neutral-800 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
                <h3 className="text-2xl font-bold uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">Gallery</h3>
                <span className="text-white/20 font-mono text-xs mt-4 group-hover:opacity-0 transition-opacity">[ Image Placeholder ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Film & Television", desc: "Full-scale choreography for cinematic productions, music videos, and television sequences." },
              { title: "Luxury Weddings", desc: "Bespoke conceptual choreography for high-end Sangeets and premium wedding events." },
              { title: "Live Events", desc: "Stage direction and choreography for award shows, corporate events, and celebrity tours." }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 border border-white/10 hover:border-gold/50 transition-colors group bg-neutral-950/50"
              >
                <div className="text-gold mb-6">
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact (Placeholder) */}
      <section id="contact" className="py-32 bg-gold text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
              Let&apos;s Create <br/> Magic
            </h2>
            <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">
              Available for national and international projects. Get in touch to discuss your next vision.
            </p>
            <div className="inline-flex flex-col items-center gap-6 p-8 bg-black text-white w-full max-w-md mx-auto">
              <span className="text-white/50 font-mono uppercase text-sm">[ Contact Form Placeholder ]</span>
              <div className="w-full h-[200px] border border-white/10 border-dashed flex items-center justify-center">
                Form will go here
              </div>
              <button className="w-full bg-gold text-black py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                Send Inquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter">
            DHIRAJ <span className="text-gold">.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-gold transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-white/50 hover:text-gold transition-colors"><Youtube size={24} /></a>
            <a href="#" className="text-white/50 hover:text-gold transition-colors"><Mail size={24} /></a>
          </div>
          <div className="text-sm text-white/50 font-mono">
            © {new Date().getFullYear()} Dhiraj Choreography. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
