import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calculator, FileText, Shield, Users, TrendingUp, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-bg.jpg";
import individualTaxImage from "@/assets/individual-tax.jpg";
import businessTaxImage from "@/assets/business-tax.jpg";
import internationalTaxImage from "@/assets/international-tax.jpg";

const Home = () => {
  const features = [
    { icon: Calculator, title: "Maximum Refunds", description: "We guarantee to find every deduction and credit you're entitled to" },
    { icon: Shield, title: "100% Secure", description: "Your financial data is protected with bank-level security" },
    { icon: FileText, title: "Expert Review", description: "Every return is reviewed by our certified tax professionals" },
    { icon: Users, title: "Personalized Service", description: "Dedicated support from filing to refund" }
  ];

  const services = [
    {
      title: "Individual Tax Filing",
      description: "Personal tax returns with maximum refund guarantee. We handle W-2s, 1099s, and complex deductions.",
      image: individualTaxImage,
      link: "/services/individual",
      features: ["Maximum refund guarantee", "All income types", "Deduction optimization"]
    },
    {
      title: "Business Tax Filing", 
      description: "Complete business tax solutions for corporations, partnerships, and sole proprietorships.",
      image: businessTaxImage,
      link: "/services/business",
      features: ["All business entities", "Quarterly estimates", "Tax planning"]
    },
    {
      title: "International Tax Returns",
      description: "Expert handling of international tax compliance, FBAR, and foreign income reporting.",
      image: internationalTaxImage,
      link: "/services/international", 
      features: ["FBAR filing", "Foreign income", "Treaty benefits"]
    }
  ];

  const stats = [
    { number: "500+", label: "Tax Returns Filed" },
    { number: "98.5%", label: "Client Satisfaction" },
    { number: "2 Days", label: "Turnaround Time" },
    { number: "All States", label: "USA Coverage" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
              🎯 Maximum Refund Guarantee
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              File Your Taxes,
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Maximize Your Refunds</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Experience a hassle-free way to file your U.S. tax returns with 100% refund guarantee. 
              We ensure a streamlined process for maximized refunds within a short timeframe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Get Your Tax Estimate
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Client Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Credence Taxfiling?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine expert knowledge with cutting-edge technology to deliver the best tax filing experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tax solutions for individuals, businesses, and international clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-medium hover:shadow-large transition-smooth group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="professional" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Maximize Your Tax Refund?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don't leave money on the table. Our certified tax professionals are ready to help you get every deduction you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Get Free Consultation
                <Phone className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="lg" className="text-lg px-8 py-6 text-primary-foreground hover:bg-white/10">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;