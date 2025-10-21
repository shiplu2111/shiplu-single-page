import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/me.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Photo */}
          <div className="flex justify-center mb-3">
            <div className="relative mt-16 lg:mt-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg glow">
                <img 
                  src={profilePhoto} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="gradient-text">Shiplu</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground">
            Full-Stack Web Developer (Laravel & React Specialist)
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I’m a Full-Stack Web Developer skilled in Laravel and React, creating fast, secure, and user-friendly web applications with a focus on quality and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="/MD_ENZAMAMUL_HAQUE_SHIPLU.pdf" download="MD_ENZAMAMUL_HAQUE_SHIPLU.pdf" className="gap-2">
                <Download size={20} />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-primary hover:text-primary/80 transition-colors">
            <ArrowDown size={32} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
