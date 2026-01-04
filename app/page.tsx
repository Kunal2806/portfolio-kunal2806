import AboutPage from "@/components/About";
import ContactPage from "@/components/Contact";
import ExperiencePage from "@/components/Experience";
import HeroPage from "@/components/Hero";
import ProjectsPage from "@/components/Projects";


const Home = () => {
  return (
    <>
      <HeroPage/>
      <AboutPage/>
      <ProjectsPage/>
      <ExperiencePage/>
      <ContactPage/>
    </>
  )
}

export default Home;