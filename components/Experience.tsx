import { Briefcase, Calendar } from 'lucide-react';

const ExperiencePage = () => {
  const experiences = [
    {
      company: "MangosOrange",
      role: "Software Developer",
      period: "July-2025 - Present",
      description: "Developed and maintained web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "TypeScript", "Express.js","MongoDB", "Tailwind CSS", "Next.js"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-foreground/70 text-lg">My professional journey and contributions</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-background border border-foreground/10 rounded-xl shadow-lg p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Briefcase className="w-5 h-5" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-foreground/60 mt-2 md:mt-0">
                  <Calendar className="w-5 h-5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;