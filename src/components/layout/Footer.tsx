import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Credence Taxfiling" 
                className="h-36 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional tax filing services with guaranteed maximum refunds. 
              Experience hassle-free tax preparation with our certified experts.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin size={16} />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/individual" className="text-muted-foreground hover:text-primary transition-smooth">
                  Individual Tax Filing
                </Link>
              </li>
              <li>
                <Link to="/services/business" className="text-muted-foreground hover:text-primary transition-smooth">
                  Business Tax Filing
                </Link>
              </li>
              <li>
                <Link to="/services/international" className="text-muted-foreground hover:text-primary transition-smooth">
                  International Tax Returns
                </Link>
              </li>
              <li>
                <Link to="/services/amendments" className="text-muted-foreground hover:text-primary transition-smooth">
                  Tax Amendments
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/knowledge-center" className="text-muted-foreground hover:text-primary transition-smooth">
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-muted-foreground hover:text-primary transition-smooth">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:hr@credence.com" className="hover:text-primary transition-smooth">
                  hr@credence.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <a href="tel:+918341760666" className="hover:text-primary transition-smooth">
                  +91 8341760666
                </a>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>101, 1st Floor, A Block<br />Ameena Complex, Opp Survey of India<br />Metro Pillar C-904, Uppal<br />Hyderabad 500039, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Credence Taxfiling. CIN: U69202TS2025PTC | Reg No: 194424</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;