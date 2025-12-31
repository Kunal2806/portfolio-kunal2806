"use client"
import { motion, motionValue, useScroll } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface ShowCatProps {     
    showCat : boolean
}
interface CatEyeProps {
  eyeY: number, 
  eyeX: number
}
const CatEye = ({eyeY,eyeX}: CatEyeProps) => {

  const [angleEye, setangleEye] = useState(0);

  const angle = (mouseX: number, mouseY: number, anchorX: number, anchorY: number) => {
    const dy = anchorY - mouseY;
    const dx = anchorX - mouseX;
    const angleRad = Math.atan2(dy, dx);
    const angleDeg = angleRad * 180 / Math.PI;
    return angleDeg;
  }
  useEffect(()=>{
    const anchor = document.getElementById("anchor");
    if(!anchor) return;
    const handleMouseMove = (e: MouseEvent) => {
      const MouseX = e.clientX;
      const MouseY = e.clientY;   
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;  
      const angleDeg = angle(MouseX, MouseY, anchorX, anchorY);
      setangleEye(90 + angleDeg);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return ()=> window.removeEventListener("mousemove", handleMouseMove);
  })

  return(
    <motion.div
    className="absolute -z-9 h-6 w-6 rounded-full bg-black"
      style={{
        left: eyeX,
        bottom: eyeY,
        rotate: angleEye
      }}
    > 
    
    <span className="absolute -z-99 top-3.5 left-2.5 rounded-full h-[4.1px] w-[4.7px] bg-white"></span>

    </motion.div>
  )
}

const CatAnime = (Props: ShowCatProps) => {
  return (
    <motion.div
      id="anchor"
      className='absolute pointer-events-none'
      animate={{
          opacity: Props.showCat ? 1 : 0,
          y: Props.showCat ? -82 : -40,
      }}
      >
      <Image
        src="/cat_animation.png"
        width={500}
        height={500}
        alt='cat animation body'
      />

      <CatEye eyeY ={36.5} eyeX={55.8}/> 
      <CatEye eyeY ={36.5} eyeX={92}/>
        
    </motion.div>
  )
}

export default CatAnime
