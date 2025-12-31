'use client'

import CatAnime from '@/components/CatAnime'
import {easeIn, easeInOut, easeOut, motion} from 'framer-motion'
import { Github, Icon, Key, Linkedin, LucideIcon, Mail} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'


  
export default function Home() {
  
  const [animeCat, setAnimeCat] = useState(true);

  const FloatingShape = [
    {delay: -3, className: 'top-20 left-[10%] w-20 h-20 border-2 border-primary/40 -rotate-6'},
    {delay: -3, className: 'bottom-20 left-[20%] w-20 h-20 rounded-full border-2 border-primary/30'},
    {delay:  0, className: 'top-15 right-[10%] w-20 h-20 rounded-2xl border-2 border-primary/20'},
    {delay:  0, className: 'botton-16 right-[15%] w-20 h-20 rounded-md border-2 border-primary/30 rotate-12'},
    {delay: -3, className: 'top-30 left-[30%] w-20 h-20 rounded-3xl border-2 border-primary/30'},
    {delay:  0, className: 'bottom-18 right-[14%] w-5 h-5 rounded-4xl bg-primary/10'},
    {delay: -3, className: 'top-48 left-[14%] w-5 h-5 rounded-4xl bg-primary/10'},
    {delay:  0, className: 'top-18 right-[14%] w-5 h-5 rounded-4xl bg-primary/10'},
  ];

  const socialLinks: { icon: LucideIcon; href: string; label: string }[] = [
    { icon: Github, href: 'https://github.com/Kunal2806', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kunal2806-dev/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kunalgoswami.2806@email.com', label: 'Email' }
  ];

  return(
    <main className='relative min-h-screen flex flex-col gap-10 items-center justify-center overflow-hidden'>
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
    
      <h1 className='text-8xl font-display font-bold text-center'>
        I craft{" "}
        <span className='text-primary'>digital</span><br/>
        experiences
      </h1>

      <p className='text-lg max-w-2xl text-center mx-auto font-body text-foreground/50'>
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
    </main>
  )
}