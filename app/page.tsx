'use client'

import {easeInOut, motion} from 'framer-motion'
export default function Home() {
  
  const FloatingShape = ({className, delay = 0}: {className: string, delay?: number}) => (
    <motion.div 
      className={className}
      initial={{
        opacity: 0,
        scale: 0
      }} animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
      }} transition={{
        opacity: {duration: 0.6},  
        scale: {duration: 0.6},
        y: {
          duration: 6,
          repeat: Infinity,
          delay,
          ease: easeInOut
        }
      }}
    />
  )

  return(
    <main className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden'>
      <FloatingShape delay={-3} className='fixed top-20 left-[10%] w-20 h-20 border-2 border-primary/40 -rotate-6'/>
      <FloatingShape delay={-3} className='fixed bottom-20 left-[20%] w-20 h-20 rounded-full border-2 border-primary/30'/>
      <FloatingShape delay={0} className='fixed top-15 right-[20%] w-20 h-20 rounded-2xl border-2 border-primary/20'/>
      <FloatingShape delay={0} className='fixed botton-16 right-[25%] w-20 h-20 rounded-md border-2 border-primary/30 rotate-12'/>
      <FloatingShape delay={-3} className='fixed top-30 left-[30%] w-20 h-20 rounded-4xl border-2 border-primary/30'/>
      <FloatingShape delay={0} className='fixed bottom-18 right-[14%] w-5 h-5 rounded-4xl bg-primary/10'/>
      <FloatingShape delay={-3} className='fixed top-48 left-[14%] w-5 h-5 rounded-4xl bg-primary/10'/>
      <FloatingShape delay={0} className='fixed top-18 right-[14%] w-5 h-5 rounded-4xl bg-primary/10'/>

      <h1 className='text-8xl font-display font-bold text-center leading-tight tracking-tight'>
        I craft{" "}
        <span className='text-primary'>digital</span><br/>
        experiences
      </h1>

      <p className='text-lg max-w-2xl text-center mx-auto mb-12 font-body text-foreground/50'>
        A creative developer passionate about building beautiful, functional, and user-centered digital experiences that leave a lasting impression.
      </p>

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