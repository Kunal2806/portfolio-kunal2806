"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
const MyImg = "/my-img01.png"

export const Menu = [
    {
        title: "Home",
        link: "home"
    },
    {
        title: "About",
        link: "about"
    },
    {
        title: "Projects",
        link: "projects"
    },
    {
        title: "Experience",
        link: "experience"
    },
    {
        title: "Contact",
        link: "contact"
    },
    
]

export function ScrollToSection( id: string){
    const section = document.getElementById(id);
    section?.scrollIntoView({behavior: "smooth", block: "start"});
}   

const NavbarPage = () => {

const [activeSection, setActiveSection] = useState("home");

useEffect(()=>{
    const handleScroll = () => {
        const scrollY = window.scrollY + 120;
        Menu.forEach((menu)=>{
            const section = document.getElementById(menu.link);
            if(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
                    setActiveSection(menu.link)
                }
            }
        })
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
},[]);

return (
    <div className='fixed top-0 left-0 z-999 flex justify-between items-center w-full h-20 px-10 backdrop-blur-lg border-b border-foreground/10'>
        <div>
            <Image
                src={MyImg}
                height={80}
                width={60}
                alt='Kunal'
                />
        </div>
        <div className='flex justify-center items-center gap-15 font-display'>
            {
                Menu.map((menu,index)=>(
                    <div 
                        key={index} 
                        onClick={()=>ScrollToSection(menu.link)}
                        className={` cursor-pointer transition-all duration-300
                            ${activeSection === menu.link ? "text-primary scale-110":
                            "text-foreground/60 hover:text-primary hover:scale-95"
                        }`}
                    >
                        {menu.title}
                    </div>
                ))
            }
        </div>
    </div>
)
}

export default NavbarPage