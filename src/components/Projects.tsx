import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation, useMultiScrollAnimation } from "@/hooks/use-scroll-animation";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  const projectCards = useMultiScrollAnimation(visibleCount);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, checkout, and payment integration.",
      tags: ["React", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      tags: ["Next.js", "React", "Supabase"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with forecasts and interactive maps.",
      tags: ["React", "API Integration", "CSS"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "Custom portfolio site with smooth animations and modern design.",
      tags: ["React", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with real-time data visualization.",
      tags: ["React", "Chart.js", "REST API"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support and SEO optimization.",
      tags: ["React", "MDX", "Next.js"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Fitness Tracker",
      description: "Track workouts, nutrition, and progress with detailed analytics.",
      tags: ["React", "TypeScript", "Chart.js"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Recipe Manager",
      description: "Organize and discover recipes with smart search and meal planning features.",
      tags: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-lg text-muted-foreground text-center mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Some of my recent work showcasing my skills and creativity
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {visibleProjects.map((project, index) => (
              <Card
                key={index}
                ref={projectCards.setRef(index)}
                className={`bg-card border-border hover:border-primary/50 transition-all duration-700 hover:shadow-lg hover:shadow-primary/10 overflow-hidden group ${projectCards.isVisible(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setVisibleCount(prev => prev + 4);
                    setIsLoading(false);
                  }, 800);
                }}
                disabled={isLoading}
                className="animate-fade-in"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Loading...
                  </>
                ) : (
                  "View More Projects"
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
