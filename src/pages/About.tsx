import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Shield, Target, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Accuracy First",
      description: "We ensure 100% accuracy in every tax return with our rigorous review process and certified professionals."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our priority. We provide personalized service and support throughout the entire process."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Bank-level security and complete confidentiality protect your sensitive financial information."
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "We guarantee to file your taxes on time and get you the fastest possible refund."
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "7+", label: "Years Experience" },
    { icon: CheckCircle, number: "98.5%", label: "Success Rate" },
    { icon: Shield, number: "100%", label: "Secure Filing" }
  ];

  const team = [
    {
      name: "Chandarlapati Vijayalakshmi",
      role: "Senior Client Executive",
      credentials: "EA",
      experience: "7+ years",
      description: "Expert in individual and business tax preparation with extensive client management experience."
    },
    {
      name: "Mukkala Gayathri",
      role: "Tax Specialist",
      credentials: "EA",
      experience: "5+ years",
      description: "Specializes in individual tax filing and NRI tax returns."
    },
    {
      name: "Nallagokulla Shravya",
      role: "Tax Associate",
      credentials: "EA",
      experience: "3+ years",
      description: "Focuses on business tax preparation and compliance."
    },
    {
      name: "Disha Mirchandani",
      role: "Tax Associate",
      credentials: "EA",
      experience: "3+ years",
      description: "Expert in international tax returns and FBAR filing."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
              🏆 Trusted Tax Professionals Since 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              About Credence Taxfiling
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
              We're a team of certified tax professionals dedicated to maximizing your refunds 
              and simplifying your tax experience with expert knowledge and personalized service.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Work With Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
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

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2025, Credence Taxfiling began with a simple mission: to make tax filing 
                accessible, accurate, and stress-free for everyone. With CIN U69202TS2025PTC and 
                Registration No. 194424, we are a certified tax service helping individuals and businesses across all US states.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of certified professionals combines years of experience with cutting-edge 
                technology to deliver exceptional results. We stay current with ever-changing tax 
                laws and regulations to ensure you get every deduction and credit you deserve.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">IRS Authorized e-file Provider</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Better Business Bureau A+ Rating</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Maximum Refund Guarantee</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-8 shadow-large">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To provide exceptional tax services that maximize our clients' refunds while 
                ensuring complete accuracy and compliance with all tax regulations.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most trusted and reliable tax service provider, known for our 
                integrity, expertise, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Certified professionals with decades of combined experience in tax preparation and planning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                  <div className="flex justify-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {member.credentials}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {member.experience}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
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
            Ready to Experience the Credence Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied clients who trust us with their tax preparation. 
            Let our experts maximize your refund today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="ghost" size="lg" className="text-lg px-8 py-6 text-primary-foreground hover:bg-white/10">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;