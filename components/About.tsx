import Image from "next/image"

const MyImg = "/my-img02.png"

const About = () => {
  return (
    <section className="flex justify-center items-center mt-16 px-4">
      <div className="max-w-4xl">
        <Image
          className="rounded-full float-left mr-6 mb-4"
          src={MyImg}
          height={250}
          width={250}
          alt="kunal"
          style={{ shapeOutside: 'circle(50%)' }}
        />
        <h5 className="font-bold text-2xl font-display">About <span className="text-primary">Me...</span></h5>
        <p className="text-lg leading-relaxed text-foreground/40 font-body">
          I'm a passionate developer who loves creating exceptional digital experiences. With a keen eye for design and a strong foundation in modern web technologies, I bring ideas to life through clean, efficient code.
          My journey in tech has been driven by curiosity and a desire to solve real-world problems. I believe in writing code that not only works but is also maintainable and scalable.
          When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
        </p>

      </div>
    </section>
  )
}

export default About