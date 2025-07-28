import { Badge } from '@/components/ui/badge';
import { Lightbulb, Users, Rocket, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-secondary border-secondary/30 bg-secondary/5 px-4 py-2">
              About PseudoClan
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              <span className="gradient-text">Innovate. Integrate. Accelerate.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are a forward-thinking IT company that bridges the gap between cutting-edge technology 
              and practical business solutions, empowering businesses through digital transformation.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card/80 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Innovation First</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                We stay ahead of the curve, constantly exploring new technologies to deliver 
                cutting-edge solutions that give our clients a competitive advantage.
              </p>
            </div>

            <div className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card/80 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Client-Centric</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Every project begins with understanding our clients' unique needs. We build lasting 
                partnerships through transparent communication and exceptional service.
              </p>
            </div>

            <div className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-card/80 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Growth Driven</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                We create scalable solutions that grow with your business, ensuring long-term 
                success and sustainable digital transformation.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-secondary/5 via-background to-secondary/5 rounded-3xl p-8 lg:p-16 border border-border/30">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-8">
                  Why Choose <span className="gradient-text">PseudoClan?</span>
                </h3>
                <div className="space-y-6">
                  {[
                    { title: "Expert Team", desc: "Seasoned professionals with diverse technical expertise" },
                    { title: "Proven Track Record", desc: "Successfully delivered 100+ projects across various industries" },
                    { title: "End-to-End Solutions", desc: "From concept to deployment and ongoing support" },
                    { title: "Agile Methodology", desc: "Flexible, iterative approach ensuring quality delivery" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-secondary to-secondary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckCircle className="text-white" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/30">
                  <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/30">
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/30">
                  <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/30">
                  <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;