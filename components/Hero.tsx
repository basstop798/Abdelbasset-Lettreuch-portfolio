import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import ana from "../img/ana.jpg";
const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[120px]"
        />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </motion.div>
            
            <motion.h2 variants={item} className="text-2xl md:text-3xl font-medium text-white mb-2">
              Hi, I'm <span className="text-primary font-bold">Abdelbasset Lettreuch</span>
            </motion.h2>

            <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
              Full-Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-purple-400 animate-gradient-x">
                MERN Developer
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I architect and build scalable, secure, production-ready web applications. 
              Focused on real-world business solutions with modern technologies.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primaryHover text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-primary/25"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Contact Me
              </motion.a>
               <motion.a
                whileHover={{ scale: 1.05, color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                href="https://media.istockphoto.com/id/507714936/photo/close-up-of-mixed-breed-monkey-between-chimpanzee-and-bonobo-smiling.jpg?s=612x612&w=0&k=20&c=Z5PFpPKkDFEQV8ZQfJls25_mSbY90-_Mj5Xoslp9yIk="
                className="w-full sm:w-auto px-8 py-4 text-zinc-400 font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                CV
              </motion.a>
            </motion.div>

            <motion.div variants={item} className="flex items-center justify-center lg:justify-start gap-6 opacity-80">
               <motion.a 
                 href="https://github.com/basstop798"
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.1, color: "#fff" }}
                 whileTap={{ scale: 0.95 }}
                 className="text-zinc-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full border border-white/5 hover:bg-white/10"
               >
                  <Github className="w-6 h-6" />
               </motion.a>
               <motion.a 
                 href="https://www.linkedin.com/in/abdelbasset-lettreuch-133b5631a/"
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.1, color: "#0A66C2" }}
                 whileTap={{ scale: 0.95 }}
                 className="text-zinc-400 hover:text-[#0A66C2] transition-colors p-2 bg-white/5 rounded-full border border-white/5 hover:bg-white/10"
               >
                  <Linkedin className="w-6 h-6" />
               </motion.a>
               <motion.a 
                 href="https://x.com/Microbullet0"
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.1, color: "#1DA1F2" }}
                 whileTap={{ scale: 0.95 }}
                 className="text-zinc-400 hover:text-[#1DA1F2] transition-colors p-2 bg-white/5 rounded-full border border-white/5 hover:bg-white/10"
               >
                  <Twitter className="w-6 h-6" />
               </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 relative"
          >
             <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
             >
                {/* Rotating Glow Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 rounded-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full blur-2xl opacity-40" />
                </motion.div>

                {/* Pulsing Outer Ring */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-8 border-2 border-primary/30 rounded-full"
                />

                {/* Second Pulsing Ring */}
                <motion.div
                  animate={{ scale: [1.05, 1, 1.05], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -inset-12 border border-purple-500/20 rounded-full"
                />

                {/* Orbiting Dots */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-10"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
                </motion.div>

                {/* Static Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-2xl opacity-50" />
                
                {/* Image Container */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm"
                >
                   {/* Animated Border Gradient */}
                   <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                     className="absolute -inset-[2px] bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-full opacity-60"
                   />
                   <div className="absolute inset-[2px] rounded-full overflow-hidden bg-zinc-900">
                     <motion.img 
                       src={ana} 
                       alt="Developer Portrait" 
                       className="w-full h-full object-cover"
                       whileHover={{ scale: 1.1 }}
                       transition={{ duration: 0.5 }}
                     />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                   
                   {/* Shine Effect */}
                   <motion.div
                     animate={{ x: ['-100%', '200%'] }}
                     transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                   />
                </motion.div>
             </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;