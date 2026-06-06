const fs = require('fs');

const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const signatureWorkStart = content.indexOf('      {/* Portfolio Intentional CSS Framework */}');
const signatureWorkEnd = content.indexOf('      {/* Services Grid */}');

const newSection = `      {/* Film Choreography & Music Videos */}
      <section id="work" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 flex items-end justify-between"
          >
            <h2 className="text-clamp-h2 font-bold text-gradient-animated">Film Choreography & Music Videos</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="flex flex-col gap-12">

            {/* Featured Video: Jaraan */}
            <motion.div variants={fadeInUp} className="group cursor-pointer">
              <a href="https://youtu.be/PmcLtM2GdgU?si=7IALLbjUl2HH0Gie" target="_blank" rel="noopener noreferrer" className="block relative">
                <div className="aspect-video md:aspect-[21/9] rounded-[2rem] relative overflow-hidden shadow-lg group-hover:shadow-[0_20px_60px_-15px_var(--color-electric-blue)] transition-all duration-700 bg-[var(--color-deep-denim)]/20 border border-white/10 group-hover:border-white/30 cinematic-frame flex flex-col items-center justify-center animated-gradient-border p-[2px]">
                   <img src="https://img.youtube.com/vi/PmcLtM2GdgU/maxresdefault.jpg" alt="Jaraan" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" />

                   {/* Animated cinematic gradient mesh background */}
                   <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-electric-blue)]/20 opacity-30 group-hover:opacity-80 transition-opacity duration-700 z-0"></div>

                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>

                   <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                     <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[var(--color-electric-blue)] to-[var(--color-magenta-pink)] text-white text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                       Featured Work
                     </span>
                     <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#FFD700] text-xs font-bold tracking-wider uppercase shadow-lg">
                       🏆 Zee Gaurav Award-Winning Work
                     </span>
                   </div>

                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full glass-panel flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[var(--color-electric-blue)]/20 transition-all duration-500 z-20 bg-white/10 border-white/20 backdrop-blur-md group-hover:shadow-[0_0_30px_var(--color-electric-blue)] pulse-glow">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" fill="currentColor" />
                   </div>
                </div>
              </a>
              <div className="mt-6 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[var(--color-pearl-text)] group-hover:text-[var(--color-electric-blue)] transition-colors duration-500">Jaraan</h3>
                <p className="text-[var(--color-slate-muted)] font-medium text-base md:text-lg mb-2">Project: Jaraan (Marathi Movie) • Role: Choreographer</p>
                <p className="text-[var(--color-magenta-pink)] font-bold text-sm md:text-base italic">"Award-winning choreography that earned Dhiraj Bhalerao the Zee Gaurav Award 2025–2026 for Best Choreographer of the Year."</p>
              </div>
            </motion.div>

            {/* Other Videos Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 'mOWK4_iouFU',
                  title: 'Nashu Mainu',
                  project: 'One Day',
                  artist: 'Esha Gupta',
                  role: 'Choreographer',
                  category: 'Film Song',
                  url: 'https://youtu.be/mOWK4_iouFU?si=TT8O2c4qpk9slefn',
                  highlight: 'var(--color-magenta-pink)'
                },
                {
                  id: 'mICmUiHgLaU',
                  title: 'Kanha Re',
                  project: 'Devotional Video Song',
                  role: 'Choreographer',
                  category: 'Devotional Song',
                  url: 'https://youtu.be/mICmUiHgLaU?si=34wrMAThvdfMWyIB',
                  highlight: 'var(--color-violet-accent)'
                },
                {
                  id: '8pmAid1ERmg',
                  title: 'Premika',
                  project: 'I Prem U',
                  artist: 'Kaydu Lohar and Abhijeet Amkar',
                  role: 'Choreographer',
                  category: 'Film Song',
                  url: 'https://youtu.be/8pmAid1ERmg?si=t3z9t8SdBTL83dHv',
                  highlight: 'var(--color-warm-orange)'
                },
                {
                  id: 'iV1e3zY2Ba8',
                  title: 'Halu Halu',
                  project: 'I Prem U',
                  artist: 'Kaydu Lohar and Abhijeet Amkar',
                  role: 'Choreographer',
                  category: 'Film Song',
                  url: 'https://youtu.be/iV1e3zY2Ba8?si=XVBnhdM5je6YnJyh',
                  highlight: 'var(--color-electric-blue)'
                },
                {
                  id: '31uxfcxDXQo',
                  title: 'Neta Geeta',
                  project: 'Title Song',
                  artist: 'Shivani Baokar',
                  role: 'Choreographer',
                  category: 'Title Song',
                  url: 'https://youtu.be/31uxfcxDXQo?si=-RQGiNDesvkkAVB5',
                  highlight: 'var(--color-magenta-pink)'
                },
                {
                  id: 'QkJhBI8VQkk',
                  title: 'Sindhi Aahiyun',
                  project: 'Music Video',
                  role: 'Choreographer',
                  category: 'Music Video',
                  url: 'https://youtu.be/QkJhBI8VQkk?si=LMw87iDgHpMTn9Gz',
                  highlight: 'var(--color-violet-accent)'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className={\`aspect-video rounded-[1.5rem] mb-4 relative overflow-hidden shadow-lg group-hover:shadow-[0_20px_60px_-15px_\${item.highlight}] transition-all duration-700 bg-[var(--color-deep-denim)]/20 border border-white/10 group-hover:border-white/30 cinematic-frame flex flex-col items-center justify-center\`}>
                       <img src={\`https://img.youtube.com/vi/\${item.id}/hqdefault.jpg\`} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" />

                       <div className="absolute top-4 left-4 z-20">
                         <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-wider uppercase">
                           {item.category}
                         </span>
                       </div>

                       <div className={\`absolute inset-0 bg-gradient-to-br from-transparent to-[\${item.highlight}]/20 opacity-30 group-hover:opacity-80 transition-opacity duration-700 z-0\`}></div>

                       <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-700 z-10"></div>

                       <div className={\`w-14 h-14 md:w-16 md:h-16 rounded-full glass-panel flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[\${item.highlight}]/20 transition-all duration-500 z-20 bg-white/10 border-white/20 backdrop-blur-md group-hover:shadow-[0_0_30px_\${item.highlight}] pulse-glow\`}>
                          <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-1" fill="currentColor" />
                       </div>
                    </div>
                  </a>
                  <div>
                    <h3 className={\`text-xl md:text-2xl font-bold mb-1 text-[var(--color-pearl-text)] group-hover:text-[\${item.highlight}] transition-colors duration-500\`}>{item.title}</h3>
                    <p className="text-[var(--color-slate-muted)] font-medium text-xs md:text-sm">
                      {item.project} • {item.artist ? \`\${item.artist} • \` : ''}Role: {item.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
`;

if (signatureWorkStart !== -1 && signatureWorkEnd !== -1) {
  content = content.substring(0, signatureWorkStart) + newSection + content.substring(signatureWorkEnd);
  fs.writeFileSync(file, content);
  console.log('File updated successfully!');
} else {
  console.error('Could not find section boundaries');
}
