import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8341760666"],
      description: "Monday - Saturday: 9 AM - 6 PM IST"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hr@credence.com"],
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["101, 1st Floor, A Block, Ameena Complex", "Opp Survey of India, Metro Pillar C-904", "Uppal, Hyderabad 500039, Telangana"],
      description: "By appointment only"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 10 AM - 4 PM"],
      description: "Extended hours during tax season"
    }
  ];

  const serviceTypes = [
    "Individual Tax Filing",
    "Business Tax Filing", 
    "International Tax Returns",
    "Tax Amendment Services",
    "Audit Representation",
    "Tax Planning & Consultation",
    "Bookkeeping Services",
    "Other"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
              Ready to maximize your tax refund? Contact our certified tax professionals 
              today for a free consultation and personalized tax strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-medium hover:shadow-large transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {info.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-foreground font-medium">
                      {detail}
                    </p>
                  ))}
                  <p className="text-muted-foreground text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-large border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Your Free Tax Consultation</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 2 hours with a 
                    personalized quote and tax strategy recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="taxSituation">Tax Situation</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Describe your tax situation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="simple">Simple (W-2 only)</SelectItem>
                          <SelectItem value="moderate">Moderate (Multiple income sources)</SelectItem>
                          <SelectItem value="complex">Complex (Business, investments, etc.)</SelectItem>
                          <SelectItem value="amended">Need to amend previous returns</SelectItem>
                          <SelectItem value="irs-notice">Received IRS notice</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your tax situation, any specific concerns, or questions you have..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="consent" className="mt-1" />
                        <Label htmlFor="consent" className="text-sm leading-relaxed">
                          I consent to being contacted about tax services via phone, email, or text message. 
                          Message and data rates may apply.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="newsletter" className="mt-1" />
                        <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                          I'd like to receive tax tips, updates, and seasonal reminders via email.
                        </Label>
                      </div>
                    </div>

                    <Button variant="professional" size="lg" className="w-full" type="submit">
                      <MessageSquare className="mr-2" size={18} />
                      Get My Free Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & FAQ */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                  <CardDescription>
                    Need immediate assistance? Try these options.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start h-12">
                    <Calendar className="mr-3" size={18} />
                    Schedule Appointment
                    <ArrowRight className="ml-auto" size={16} />
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start h-12" asChild>
                    <a href="tel:+918341760666">
                      <Phone className="mr-3" size={18} />
                      Call Now: +91 8341760666
                      <ArrowRight className="ml-auto" size={16} />
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start h-12">
                    <MessageSquare className="mr-3" size={18} />
                    Live Chat Support
                    <ArrowRight className="ml-auto" size={16} />
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">How quickly can you complete my tax return?</h4>
                    <p className="text-sm text-muted-foreground">
                      All returns are completed within 2 business days. We ensure quick turnaround without sacrificing accuracy.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Do you offer a maximum refund guarantee?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! We guarantee to find every deduction and credit you're entitled to, or we'll refund our service fee.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">What if I receive an IRS notice?</h4>
                    <p className="text-sm text-muted-foreground">
                      All our clients receive free audit support. We'll represent you and handle all IRS correspondence.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Can you help with previous year amendments?</h4>
                    <p className="text-sm text-muted-foreground">
                      Absolutely! We can amend returns from the past 3 years to recover missed deductions and credits.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait - Tax Deadlines Approach Fast
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            The earlier you start, the more time we have to maximize your refund. 
            Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="tel:+918341760666">
                <Phone className="mr-2" size={20} />
                Call +91 8341760666
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="text-lg px-8 py-6 text-primary-foreground hover:bg-white/10" asChild>
              <a href="mailto:hr@credence.com">
                <Mail className="mr-2" size={20} />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;