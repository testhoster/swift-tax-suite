import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Building, Globe, ArrowRight, Calculator, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import individualTaxImage from "@/assets/individual-tax.jpg";
import businessTaxImage from "@/assets/business-tax.jpg";
import internationalTaxImage from "@/assets/international-tax.jpg";

const Services = () => {
  const services = [
    {
      id: "individual",
      title: "Individual Tax Filing",
      description: "Comprehensive personal tax preparation with maximum refund guarantee. We handle Form 1040-NR, 1040-SR, and 1040-EZ.",
      image: individualTaxImage,
      icon: Users,
      price: "Contact for Pricing",
      features: [
        "Form 1040-NR for Non-Residents",
        "Form 1040-SR for Seniors",
        "Form 1040-EZ Simple Returns",
        "All 50 US states coverage",
        "2 business days turnaround",
        "Maximum refund guarantee"
      ],
      includes: [
        "Federal and state returns",
        "Direct deposit setup",
        "Year-round support",
        "Tax planning consultation"
      ]
    },
    {
      id: "business",
      title: "Business Tax Filing",
      description: "Complete business tax solutions for corporations and partnerships. Form 1120, 1120S, and 1065 expertise.",
      image: businessTaxImage,
      icon: Building,
      price: "Contact for Pricing",
      features: [
        "Form 1120 for C-Corporations",
        "Form 1120S for S-Corporations", 
        "Form 1065 for Partnerships",
        "All 50 US states coverage",
        "2 business days turnaround",
        "Tax planning strategies"
      ],
      includes: [
        "Federal and state business returns",
        "Schedule K-1 preparation",
        "Sales tax compliance",
        "Payroll tax services"
      ]
    },
    {
      id: "incorporation",
      title: "Incorporation Tax Services",
      description: "Expert incorporation tax setup and compliance services for new businesses.",
      image: internationalTaxImage,
      icon: Globe,
      price: "Contact for Pricing",
      features: [
        "Business entity setup",
        "Tax structure optimization",
        "Compliance guidance",
        "All 50 US states coverage",
        "2 business days turnaround",
        "Ongoing support"
      ],
      includes: [
        "Entity selection consultation",
        "Initial tax registration",
        "EIN application assistance",
        "First-year tax planning"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Tax Amendment Services",
      description: "Correct and optimize your previous tax returns",
      features: ["Form 1040X preparation", "Error corrections", "Missed deductions recovery", "Refund maximization"]
    },
    {
      title: "Audit Representation",
      description: "Professional representation before the IRS",
      features: ["IRS correspondence", "Audit preparation", "Document organization", "Settlement negotiation"]
    },
    {
      title: "Tax Planning & Consultation",
      description: "Strategic tax planning for future years",
      features: ["Year-round planning", "Estimated tax payments", "Retirement planning", "Investment strategies"]
    },
    {
      title: "Bookkeeping Services",
      description: "Complete bookkeeping and accounting support",
      features: ["Monthly bookkeeping", "Financial statements", "Payroll processing", "Tax preparation support"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Calculator,
      title: "Maximum Refund Guarantee",
      description: "We guarantee to find every deduction and credit you're entitled to, or we'll refund our fee."
    },
    {
      icon: FileText,
      title: "Certified Professionals",
      description: "All returns are prepared and reviewed by IRS-certified tax professionals with years of experience."
    },
    {
      icon: Clock,
      title: "Fast & Accurate Service",
      description: "Quick turnaround times without sacrificing accuracy. All returns completed within 2 business days."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
              💼 Professional Tax Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Our Tax Services
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
              Comprehensive tax solutions for individuals, businesses, and international clients. 
              Expert preparation with maximum refund guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional tax preparation services tailored to your specific needs.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="overflow-hidden border-0 shadow-large">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <Badge className="bg-accent text-accent-foreground px-3 py-1">
                      {service.price}
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Includes:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.includes.map((item, iIndex) => (
                        <div key={iIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button variant="professional" size="lg">
                        Get Quote
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                    <Link to="/knowledge-center">
                      <Button variant="outline" size="lg">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tax support services to meet all your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-4 inline-block">
                    <Button variant="outline" className="w-full">
                      Request Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Credence Taxfiling?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference professional tax services make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Choose the service that's right for you and let our experts handle the rest. 
            Maximum refund guarantee included with every service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Get Free Quote
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="lg" className="text-lg px-8 py-6 text-primary-foreground hover:bg-white/10">
                Client Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;