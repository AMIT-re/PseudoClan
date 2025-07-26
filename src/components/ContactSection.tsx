import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully! ✨",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@pseudoclan.com",
      description: "Send us an email anytime",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Tech Hub, Innovation City",
      description: "Come say hello at our office",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-primary/5 px-4 py-2">
              Get In Touch
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Let's Build Something <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss your project 
              and explore how PseudoClan can help you achieve your digital goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="bg-card/60 backdrop-blur-sm border-border/50 shadow-xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-bold">Send us a message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="h-12 bg-background/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="h-12 bg-background/50 border-border/50 focus:border-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-foreground">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="h-12 bg-background/50 border-border/50 focus:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your project, goals, and how we can help..."
                        rows={6}
                        className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're here to help you bring your digital vision to life. Whether you're looking 
                  to build a new application or explore AI solutions, our team is ready to collaborate.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group bg-card/60 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                          <p className="text-foreground font-medium mb-1">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;