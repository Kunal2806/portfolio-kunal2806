import Image from 'next/image'
const MyImg = "/my-img01.png"
const Navbar = () => {
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
        <ul className='flex justify-center items-center gap-15 font-display'>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Projects
            </li>
            <li>
                Experience
            </li>
            <li>
                Linkedin
            </li>
            <li>
                Blog
            </li>
            <li>
                Contact
            </li>
            <li>
                Hire Me
            </li>
        </ul>
    </div>
  )
}

export default Navbar