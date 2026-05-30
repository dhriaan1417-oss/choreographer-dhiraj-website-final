'use client';

import { motion } from 'framer-motion';
import {
  Film,
  Play,
  Star,
  ArrowRight,
  Instagram,
  Youtube,
  Mail,
  Camera,
  Music,
  Heart,
  ChevronDown,
  Menu,
  Trophy
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
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
  return (
    <main className="relative w-full overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-deep-indigo)]"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            DHIRAJ BHALERAO
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-soft-slate)]">
            <a href="#work" className="hover:text-[var(--color-electric-orchid)] transition-colors">Work</a>
            <a href="#award" className="hover:text-[var(--color-electric-orchid)] transition-colors">Award</a>
            <a href="#journey" className="hover:text-[var(--color-electric-orchid)] transition-colors">Journey</a>
            <a href="#services" className="hover:text-[var(--color-electric-orchid)] transition-colors">Services</a>
            <button className="bg-[var(--color-deep-indigo)] text-white px-6 py-2.5 rounded-full hover:bg-[var(--color-electric-orchid)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Book Project
            </button>
          </div>
          <div className="md:hidden">
            <Menu className="w-6 h-6 text-[var(--color-deep-indigo)]" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-8"
            >
              {['Film Choreography', 'Luxury Weddings', 'Live Shows', 'Celebrity Work', 'Zee Gaurav Winner'].map((tag, i) => (
                <motion.span
                  key={i}
                  variants={fadeInUp}
                  className="px-4 py-1.5 rounded-full glass-panel text-xs font-semibold tracking-wide text-[var(--color-deep-indigo)] border border-white/60 shadow-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-clamp-hero font-bold text-[var(--color-deep-indigo)] mb-6"
            >
              Movement That <br className="hidden md:block" />
              <span className="text-gradient">Creates Moments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl text-[var(--color-soft-slate)] max-w-xl mb-10 leading-relaxed font-medium"
            >
              Award-winning choreography for films, television, luxury weddings, live shows, and celebrity events.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-[var(--color-deep-indigo)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--color-electric-orchid)] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 group">
                Book a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-panel px-8 py-4 rounded-full font-bold text-[var(--color-deep-indigo)] hover:bg-white/80 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                <Play className="w-4 h-4" fill="currentColor" />
                View Work
              </button>
            </motion.div>
          </div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
             className="relative h-[400px] md:h-[600px] w-full z-0 hidden lg:flex items-center justify-center"
          >
             {/* Abstract CSS Visual replacing broken image placeholder */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-electric-orchid)] to-[var(--color-rose-accent)] rounded-[40px] opacity-20 blur-3xl animate-pulse"></div>
             <div className="relative w-full h-full glass-panel rounded-[40px] overflow-hidden flex items-center justify-center border-white/80 shadow-2xl">
                <div className="absolute w-[200%] h-[200%] bg-gradient-to-br from-white/40 via-transparent to-[var(--color-blush-pink)] opacity-50 rotate-45 animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="relative text-center">
                    <Music className="w-16 h-16 text-[var(--color-electric-orchid)] mx-auto mb-4 opacity-80" />
                    <span className="font-headline font-bold text-2xl tracking-widest text-[var(--color-deep-indigo)] opacity-60">CHOREOGRAPHY</span>
                </div>
             </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-soft-slate)] animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Award Section */}
      <section id="award" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="glass-panel rounded-[2rem] p-8 md:p-16 text-center shimmer-sweep relative overflow-hidden shadow-2xl border-white/60 bg-white/40"
          >
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--color-electric-orchid)] opacity-10 rounded-full blur-3xl"></div>
            <Trophy className="w-20 h-20 text-[var(--color-cinematic-blue)] mx-auto mb-8 drop-shadow-md" />
            <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-[var(--color-electric-orchid)] mb-4">Award Highlight</h3>
            <h2 className="text-clamp-h2 font-bold mb-4 text-[var(--color-deep-indigo)]">
              Best Choreographer <br/> of the Year
            </h2>
            <p className="text-xl md:text-2xl text-[var(--color-soft-slate)] font-medium mb-6">Zee Gaurav Award 2025–2026</p>
            <div className="inline-block glass-panel px-6 py-3 rounded-full border-white/80 shadow-sm">
              <p className="text-sm font-semibold">Choreographed &quot;Jaraan&quot; from the Marathi movie Jaraan</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-electric-orchid)] mb-2 block">The Journey</span>
            <h2 className="text-clamp-h2 font-bold text-[var(--color-deep-indigo)]">18+ Years of Movement</h2>
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
                  className={`glass-panel p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-shadow bg-white/50 ${stat.col}`}
                >
                  <div className="text-4xl md:text-5xl font-black text-gradient-rose mb-2">{stat.number}</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-soft-slate)]">{stat.label}</div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Work Categories (Bento Grid) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-clamp-h2 font-bold text-[var(--color-deep-indigo)]">Crafted for Stage, <br/> Screen & Celebration</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
             {/* Card 1 */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2 glass-panel p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-white/60 to-white/30 group hover:shadow-2xl transition-all shadow-lg overflow-hidden relative">
               <div className="absolute right-0 top-0 w-64 h-64 bg-[var(--color-cinematic-blue)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
               <Film className="w-12 h-12 text-[var(--color-cinematic-blue)] mb-6" />
               <h3 className="text-2xl md:text-3xl font-bold mb-4">Film & Television</h3>
               <p className="text-[var(--color-soft-slate)] text-lg max-w-md">Full-scale choreography for films, music videos, ads, and television sequences.</p>
             </motion.div>

             {/* Card 2 */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1 glass-panel p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-white/60 to-white/30 group hover:shadow-2xl transition-all shadow-lg overflow-hidden relative">
               <div className="absolute right-0 top-0 w-40 h-40 bg-[var(--color-rose-accent)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
               <Heart className="w-12 h-12 text-[var(--color-rose-accent)] mb-6" />
               <h3 className="text-2xl md:text-3xl font-bold mb-4">Luxury Weddings</h3>
               <p className="text-[var(--color-soft-slate)] text-lg">Bespoke choreography for Sangeet, bride & groom entry, and family performances.</p>
             </motion.div>

              {/* Card 3 */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-1 glass-panel p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-white/60 to-white/30 group hover:shadow-2xl transition-all shadow-lg overflow-hidden relative">
               <div className="absolute right-0 top-0 w-40 h-40 bg-[var(--color-electric-orchid)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
               <Star className="w-12 h-12 text-[var(--color-electric-orchid)] mb-6" />
               <h3 className="text-2xl md:text-3xl font-bold mb-4">Live Shows & Celebs</h3>
               <p className="text-[var(--color-soft-slate)] text-lg">Stage choreography for award shows and celebrity events.</p>
             </motion.div>

             {/* Card 4 */}
             <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-2 glass-panel p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-white/60 to-white/30 group hover:shadow-2xl transition-all shadow-lg overflow-hidden relative">
               <div className="absolute right-0 top-0 w-64 h-64 bg-[var(--color-lavender-mist)] opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity"></div>
               <Camera className="w-12 h-12 text-[var(--color-deep-indigo)] mb-6" />
               <h3 className="text-2xl md:text-3xl font-bold mb-4">Music Videos & Brands</h3>
               <p className="text-[var(--color-soft-slate)] text-lg max-w-md">Choreography and movement direction for songs, reels, and branded entertainment.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Intentional CSS Framework (No Broken Images) */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 flex items-end justify-between"
          >
            <h2 className="text-clamp-h2 font-bold text-[var(--color-deep-indigo)]">Signature Work</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Film Choreography Reel", status: "Coming soon", color: "from-[var(--color-ice-blue)] to-white" },
              { title: "Luxury Wedding Moments", status: "Gallery will be added soon", color: "from-[var(--color-blush-pink)] to-white" },
              { title: "Celebrity Highlights", status: "Showcase coming soon", color: "from-[var(--color-lavender-mist)] to-white" },
              { title: "Behind The Scenes", status: "Videos will be added soon", color: "from-[var(--color-pearl-white)] to-gray-100" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/3] rounded-3xl mb-6 relative overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${item.color} border border-white/50 flex flex-col items-center justify-center`}>
                   <div className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-[var(--color-deep-indigo)] ml-1" fill="currentColor" />
                   </div>
                   <div className="absolute bottom-6 left-6 right-6">
                     <div className="h-1 w-full bg-black/5 rounded-full overflow-hidden">
                       <div className="h-full w-1/3 bg-[var(--color-electric-orchid)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     </div>
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-electric-orchid)] transition-colors">{item.title}</h3>
                <p className="text-[var(--color-soft-slate)] font-medium text-sm tracking-wide uppercase">{item.status}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 bg-white/30 border-y border-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-clamp-h3 font-bold mb-12 text-center">Comprehensive Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
             {[
               "Film choreography", "Television choreography", "Luxury wedding choreography",
               "Sangeet choreography", "Bride & groom entry", "Varmala concepts",
               "Family performance training", "Live show choreography", "Celebrity event choreography",
               "Music video movement direction", "Corporate shows", "Stage performance direction"
             ].map((service, i) => (
               <div key={i} className="glass-panel px-6 py-3 rounded-full text-sm md:text-base font-semibold text-[var(--color-deep-indigo)] hover:bg-[var(--color-electric-orchid)] hover:text-white transition-colors cursor-default shadow-sm border-white/80">
                 {service}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Form Frontend */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto glass-panel p-8 md:p-16 rounded-[2rem] shadow-2xl border-white/80 bg-white/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[var(--color-electric-orchid)] to-[var(--color-rose-accent)]"></div>
           <h2 className="text-clamp-h2 font-bold text-[var(--color-deep-indigo)] mb-2">Let&apos;s Build Your Next Moment</h2>
           <p className="text-[var(--color-soft-slate)] mb-10 text-lg">Inquire about availability for your upcoming project or event.</p>

           <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--color-deep-indigo)]">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-orchid)]/50 transition-all shadow-sm" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--color-deep-indigo)]">Phone / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-orchid)]/50 transition-all shadow-sm" placeholder="Your number" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--color-deep-indigo)]">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-orchid)]/50 transition-all shadow-sm" placeholder="Your email address" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--color-deep-indigo)]">Project Type</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-orchid)]/50 transition-all shadow-sm appearance-none cursor-pointer">
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
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--color-deep-indigo)]">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-orchid)]/50 transition-all shadow-sm resize-none" placeholder="Tell us about your vision..."></textarea>
              </div>

              <button type="button" className="w-full bg-[var(--color-deep-indigo)] text-white py-4 rounded-xl font-bold hover:bg-[var(--color-electric-orchid)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
                Send Inquiry
              </button>
           </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--color-deep-indigo)]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold tracking-tight text-[var(--color-deep-indigo)] mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              DHIRAJ BHALERAO
            </div>
            <div className="text-sm text-[var(--color-soft-slate)] font-medium">Award-winning choreographer</div>
            <div className="text-xs text-[var(--color-soft-slate)]/70 mt-1 uppercase tracking-wider">Film | TV | Weddings | Live Events</div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[var(--color-deep-indigo)] hover:text-[var(--color-electric-orchid)] hover:scale-110 transition-all shadow-sm">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[var(--color-deep-indigo)] hover:text-[var(--color-rose-accent)] hover:scale-110 transition-all shadow-sm">
              <Youtube size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[var(--color-deep-indigo)] hover:text-[var(--color-cinematic-blue)] hover:scale-110 transition-all shadow-sm">
              <Mail size={18} />
            </a>
          </div>

          <div className="text-sm text-[var(--color-soft-slate)] font-medium">
            © 2026 Dhiraj Bhalerao.
          </div>
        </div>
      </footer>
    </main>
  );
}
