import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useScrollAnimation, useMultiScrollAnimation } from "@/hooks/use-scroll-animation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const experienceItems = useMultiScrollAnimation(4);

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company Name",
      period: "2023 - Present",
      location: "City, Country",
      responsibilities: [
        "Led development of responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization techniques"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Name",
      period: "2021 - 2023",
      location: "City, Country",
      responsibilities: [
        "Developed and maintained multiple client websites using modern web technologies",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Worked with REST APIs and integrated third-party services",
        "Participated in agile development processes and sprint planning"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Startup Company Name",
      period: "2020 - 2021",
      location: "City, Country",
      responsibilities: [
        "Built reusable components and front-end libraries for future use",
        "Translated designs and wireframes into high-quality code",
        "Optimized components for maximum performance across devices",
        "Collaborated with team members using version control (Git)"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Company Name",
      period: "2019 - 2020",
      location: "City, Country",
      responsibilities: [
        "Assisted in developing and testing web applications",
        "Learned and applied HTML, CSS, JavaScript best practices",
        "Supported senior developers with bug fixes and feature implementation",
        "Gained experience with modern development tools and workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and career progression
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={experienceItems.setRef(index)}
              className={`transition-all duration-700 delay-${index * 100} ${
                experienceItems.isVisible(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <p className="font-semibold text-foreground">{exp.company}</p>
                        <span className="hidden sm:inline">•</span>
                        <p className="text-sm">{exp.period}</p>
                        <span className="hidden sm:inline">•</span>
                        <p className="text-sm">{exp.location}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
