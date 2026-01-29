'use client'

import CatAnime from '@/components/CatAnime'
import { easeInOut, motion} from 'framer-motion'
import { Github, Linkedin, LucideIcon, Mail} from 'lucide-react'
import { useState } from 'react'
import { ScrollToSection } from './Navbar'


  
export default function HeroPage() {
  
  const [animeCat, setAnimeCat] = useState(true);

  const FloatingShape = [
    {delay: -3, className: 'top-22 left-[10%] md:w-20 md:h-20 w-10 h-10 border-2 border-primary/40 -rotate-6'},
    {delay: -3, className: 'bottom-14 left-[20%] md:w-20 md:h-20 w-10 h-10 rounded-full border-2 border-primary/30'},
    {delay:  0, className: 'top-14 right-[20%] md:w-20 md:h-20 w-10 h-10 rounded-2xl border-2 border-primary/20'},
    {delay:  0, className: 'botton-16 right-[28%] md:w-20 md:h-20 w-10 h-10 rounded-md border-2 border-primary/30 rotate-12'},
    {delay: -3, className: 'top-32 left-[30%] md:w-20 md:h-20 w-10 h-10 rounded-3xl border-2 border-primary/30'},
    {delay:  0, className: 'bottom-18 right-[14%] md:w-5 md:h-5 w-2 h-2 rounded-4xl bg-primary/10'},
    {delay: -3, className: 'top-50 left-[14%] md:w-5 md:h-5 w-2 h-2 rounded-4xl bg-primary/10'},
    {delay:  0, className: 'top-40 right-[10%] md:w-5 md:h-5 w-2 h-2 rounded-4xl bg-primary/10'},
  ];

  const socialLinks: { icon: LucideIcon; href: string; label: string }[] = [
    { icon: Github, href: 'https://github.com/Kunal2806', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kunal2806-dev/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kunalgoswami.2806@email.com', label: 'Email' }
  ];

  return(
    <section id='home' className='relative min-h-screen flex flex-col md:gap-10 gap-5 items-center justify-center overflow-hidden pt-15'>
    {
      FloatingShape.map((shape, index)=>(
        <motion.div 
          key={index}
          className={`fixed ${shape.className}`}
          initial={{
            opacity: 0,
            scale: 0
          }} 
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
          }} 
          transition={{
            opacity: {
              duration: 0.6,
              repeat: 0
            },  
            scale: {
              duration: 0.6,
              repeat: 0
            },
            y: {
              duration: 6,
              repeat: Infinity,
              delay: shape.delay,
              ease: easeInOut
            }
          }}
        />
      ))
    }
    
      <h1 className='md:text-8xl text-5xl font-display font-bold text-center'>
        I craft{" "}
        <span className='text-primary'>digital</span><br/>
        experiences
      </h1>

      <p className='md:text-lg text-sm md:max-w-2xl max-w-2xs text-center mx-auto font-body text-foreground/50'>
        A creative developer passionate about building beautiful, functional, and user-centered digital experiences that leave a lasting impression.
      </p>

      <div className='flex justify-center items-center gap-10 mt-5'>
        <div className='relative'>
          <CatAnime showCat = {animeCat}/>
          <motion.button
          type="button"
          className="
            px-8 py-4
            bg-primary
            border-2 border-transparent
            rounded-full
            text-background
            font-semibold
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

          onMouseEnter={()=>setAnimeCat(false)}
          onMouseLeave={()=>setAnimeCat(true)}
          onClick={()=>ScrollToSection("projects")}
        >
            View My Work
        </motion.button>
        </div>
        
        <motion.button
          type="button"
          className="
            px-8 py-4
            bg-transparent
            border-2 border-primary
            rounded-full
            text-primary
            font-semibold
            transition-colors duration-900
            hover:bg-primary
            hover:text-background
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={()=>ScrollToSection("contact")}
        >
            Get in Touch
        </motion.button>

      </div>

      <div className='flex gap-10'>
        {
          socialLinks.map((social, index)=>{
            const Icon = social.icon;
            return(
              <motion.div
                key={index} 
                whileHover={{scale: 1.3}}
                whileTap={{scale: 0.95}}
              >
                <a 
                  href={social.href}
                  target='_blank'
                  aria-label={social.label}
                >
                  <Icon 
                    size={40} 
                    className='border p-2 rounded-full border-gray-400 text-gray-400 
                              hover:border-primary hover:text-primary cursor-pointer
                              transition-colors duration-600'
                  />
                </a>   
              </motion.div>         
            )
          })
        }
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-foreground) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
      }} />
      </div>
    </section>
  )
}