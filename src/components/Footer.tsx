import { Heart } from 'lucide-react';
import logo from '@/assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="PseudoClan" className="h-8 w-32" />
              
            </div>
            <p className="text-muted-foreground">
              Building tomorrow's tech, today. We're a next-gen IT company transforming business ideas into intelligent digital solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@pseudoclan.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: Noida</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 PseudoClan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;