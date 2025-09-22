import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/knowledge-center", label: "Knowledge Center" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-muted border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@credencetaxfiling.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail size={16} />
              info@credencetaxfiling.com
            </a>
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
            >
              <Phone size={16} />
              +1 (555) 123-4567
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link to="/contact">
              <Button variant="professional" size="sm">Get Quote</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-background shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Credence Taxfiling" 
                className="h-48 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-2 mt-4">
                    <Link to="/login">
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="professional" className="w-full">Get Quote</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;