import Image from 'next/image'
import Link from 'next/link'
const MyImg = "/my-img01.png"
const NavbarPage = () => {
    const Menu = [
        {
            title: "Home",
            link: "#home"
        },
        {
            title: "About",
            link: "#about"
        },
        {
            title: "Projects",
            link: "#projects"
        },
        {
            title: "Experience",
            link: "#experience"
        },
        {
            title: "Contact",
            link: "#contact"
        },
        
    ]
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
                    <Link key={index} href={menu.link}>
                        {menu.title}
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default NavbarPage