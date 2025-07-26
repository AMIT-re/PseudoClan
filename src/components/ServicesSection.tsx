import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  Brain, 
  TrendingUp, 
  Gamepad2, 
  Bot,
  Cloud,
  Shield,
  Palette,
  BarChart3,
  Cog,
  Zap,
  ArrowRight,
  Star
} from 'lucide-react';
import workflowAutomation from '@/assets/workflow-automation.png';
import teamBuilding from '@/assets/team-building.png';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices",
      features: ["React/Next.js", "Node.js/Express", "Database Design", "API Development"],
      popular: true
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and ML algorithms",
      features: ["Custom AI Models", "Data Analytics", "Automation", "Predictive Analysis"],
      popular: true
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics"]
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Engaging games for web, mobile, and desktop platforms",
      features: ["Unity/Unreal", "2D/3D Games", "Multiplayer", "Game Design"]
    },
    {
      icon: Bot,
      title: "Fintech Solutions",
      description: "Secure financial technology solutions for modern businesses",
      features: ["Payment Systems", "Blockchain", "Security", "Compliance"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: ["AWS/Azure", "DevOps", "Microservices", "Scalability"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-primary/5 px-4 py-2">
              Our Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From concept to deployment, we offer end-to-end services to transform your business 
              with cutting-edge technology solutions tailored to your specific needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
            {services.map((service, index) => (
              <Card key={index} className={`group relative bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${service.popular ? 'ring-2 ring-primary/20' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" size="sm" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Automation Spotlight */}
          <div className="bg-gradient-to-r from-primary/5 via-background to-secondary/5 rounded-3xl p-8 lg:p-16 border border-border/30 mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6 text-secondary border-secondary/30 bg-secondary/5">
                  Featured Service
                </Badge>
                <h3 className="text-4xl font-bold mb-6">
                  <span className="gradient-text">AI-Powered Workflow Automation</span>
                </h3>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transform your business operations with intelligent automation solutions. Our AI-driven 
                  workflows reduce manual tasks, improve efficiency, and enable your team to focus on 
                  strategic initiatives that drive growth.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: Cog, title: "Process Optimization" },
                    { icon: Zap, title: "Real-time Analytics" },
                    { icon: BarChart3, title: "Performance Tracking" },
                    { icon: Brain, title: "Smart Decision Making" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border/30">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <item.icon className="text-white" size={16} />
                      </div>
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white group">
                  Learn More About AI Solutions
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-60"></div>
                <img 
                  src={workflowAutomation} 
                  alt="AI Workflow Automation" 
                  className="relative z-10 w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Team Building Section */}
          <div className="bg-gradient-to-l from-primary/5 via-background to-secondary/5 rounded-3xl p-8 lg:p-16 border border-border/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-60"></div>
                <img 
                  src={teamBuilding} 
                  alt="Team Collaboration" 
                  className="relative z-10 w-full rounded-3xl shadow-2xl"
                />
              </div>
              <div className="lg:order-2">
                <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-primary/5">
                  Our Approach
                </Badge>
                <h3 className="text-4xl font-bold mb-6">
                  <span className="gradient-text">Collaborative Team Building</span>
                </h3>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We believe in building strong partnerships with our clients. Our collaborative approach 
                  ensures that your team is involved throughout the development process, creating solutions 
                  that truly meet your business objectives.
                </p>
                <div className="space-y-6 mb-8">
                  {[
                    { title: "Regular Communication", desc: "Weekly standups and progress reports" },
                    { title: "Agile Development", desc: "Iterative approach with continuous feedback" },
                    { title: "Knowledge Transfer", desc: "Training and documentation for your team" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 border border-border/30">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="lg" className="border-2 hover:bg-primary/5 group">
                  Discover Our Process
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;