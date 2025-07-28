import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, Code } from 'lucide-react';
import digitalHuman from '@/assets/digital-human.png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-secondary/5 overflow-hidden pt-32 scroll-mt-32"
    >
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-foreground">Transforming Your Ideas</span>
                <span className="block gradient-text">into Smart Digital Solutions</span>
              </h1>

              <p className="text-2xl sm:text-3xl text-muted-foreground font-light max-w-4xl mx-auto">
                Building Tomorrow's Tech, Today!
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At PseudoClan, we're a next-gen team of IT experts crafting tailored solutions that automate,
              integrate, and elevate your business. From automation to digital transformation — PseudoClan
              helps small and mid-sized businesses thrive in a connected world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-secondary hover:from-secondary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg group shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 hover:bg-secondary/5">
                View Our Work
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-lg">Lightning Fast</h3>
                <p className="text-muted-foreground text-center text-sm">Rapid development and deployment</p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-lg">Goal-Oriented</h3>
                <p className="text-muted-foreground text-center text-sm">Focused on your business objectives</p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary rounded-xl flex items-center justify-center">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-lg">Custom Built</h3>
                <p className="text-muted-foreground text-center text-sm">Tailored solutions for your needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
