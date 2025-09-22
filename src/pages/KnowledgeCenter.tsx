import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Calendar, User, ArrowRight, Search, Download, Calculator, FileText, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const KnowledgeCenter = () => {
  const categories = [
    { name: "Tax Basics", count: 12, icon: BookOpen },
    { name: "Deductions & Credits", count: 18, icon: Calculator },
    { name: "Business Taxes", count: 15, icon: FileText },
    { name: "Tax Planning", count: 8, icon: TrendingUp },
    { name: "IRS Updates", count: 6, icon: AlertCircle }
  ];

  const featuredArticles = [
    {
      title: "2024 Tax Deductions You Don't Want to Miss",
      excerpt: "Discover the most commonly overlooked tax deductions that could save you thousands on your 2024 tax return.",
      category: "Deductions & Credits",
      readTime: "8 min read",
      date: "March 15, 2024",
      author: "Sarah Johnson, CPA",
      featured: true
    },
    {
      title: "New Tax Law Changes for 2024",
      excerpt: "Stay updated on the latest tax law changes that could affect your 2024 tax filing and planning strategies.",
      category: "IRS Updates",
      readTime: "12 min read",
      date: "March 10, 2024",
      author: "Michael Chen, CPA",
      featured: true
    },
    {
      title: "Small Business Tax Planning Strategies",
      excerpt: "Essential tax planning tips for small business owners to minimize tax liability and maximize deductions.",
      category: "Business Taxes",
      readTime: "15 min read",
      date: "March 8, 2024",
      author: "Emily Rodriguez, EA",
      featured: true
    }
  ];

  const recentArticles = [
    {
      title: "Understanding the Child Tax Credit for 2024",
      excerpt: "Everything you need to know about claiming the Child Tax Credit on your 2024 tax return.",
      category: "Tax Basics",
      readTime: "6 min read",
      date: "March 12, 2024"
    },
    {
      title: "Quarterly Tax Payments: A Complete Guide",
      excerpt: "When and how to make quarterly estimated tax payments to avoid penalties.",
      category: "Tax Planning",
      readTime: "10 min read",
      date: "March 5, 2024"
    },
    {
      title: "Home Office Deduction Rules",
      excerpt: "Maximize your home office deduction with these IRS-approved strategies and requirements.",
      category: "Deductions & Credits",
      readTime: "7 min read",
      date: "March 1, 2024"
    },
    {
      title: "Self-Employment Tax Explained",
      excerpt: "Understanding self-employment tax calculations and how to minimize your tax burden.",
      category: "Business Taxes",
      readTime: "9 min read",
      date: "February 28, 2024"
    },
    {
      title: "IRS Audit Red Flags to Avoid",
      excerpt: "Learn which tax return items most commonly trigger IRS audits and how to avoid them.",
      category: "Tax Basics",
      readTime: "11 min read",
      date: "February 25, 2024"
    },
    {
      title: "Retirement Account Tax Benefits",
      excerpt: "Maximize your retirement savings with these tax-advantaged account strategies.",
      category: "Tax Planning",
      readTime: "13 min read",
      date: "February 22, 2024"
    }
  ];

  const resources = [
    {
      title: "2024 Tax Calendar",
      description: "Important tax dates and deadlines for 2024",
      type: "PDF Download",
      icon: Calendar
    },
    {
      title: "Tax Organizer Checklist", 
      description: "Complete checklist of documents needed for tax preparation",
      type: "PDF Download",
      icon: FileText
    },
    {
      title: "Business Expense Categories",
      description: "Comprehensive list of deductible business expenses",
      type: "PDF Download",
      icon: Calculator
    },
    {
      title: "Tax Planning Worksheet",
      description: "Year-end tax planning strategies and calculations",
      type: "PDF Download", 
      icon: TrendingUp
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
              📚 Tax Knowledge Center
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tax Knowledge Center
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
              Your comprehensive resource for tax information, tips, and strategies. 
              Stay informed with expert insights from our certified tax professionals.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search tax topics..."
                  className="pl-10 h-12 bg-background/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
                />
                <Button size="sm" className="absolute right-1 top-1 bottom-1 bg-secondary text-secondary-foreground">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="text-center cursor-pointer hover:shadow-medium transition-smooth border-0">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{category.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-smooth cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-primary transition-smooth">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4 justify-between">
                    Read More
                    <ArrowRight size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles & Resources */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Recent Articles */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
              <div className="space-y-6">
                {recentArticles.map((article, index) => (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-smooth mb-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={14} />
                          {article.date}
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight size={14} className="ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  View All Articles
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Free Resources</h2>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                          <resource.icon className="w-5 h-5 text-secondary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-sm mb-1">
                            {resource.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            {resource.description}
                          </p>
                          <Button variant="ghost" size="sm" className="p-0 h-auto text-xs">
                            <Download size={12} className="mr-1" />
                            {resource.type}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Newsletter Signup */}
              <Card className="mt-8 border-0 shadow-medium bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Get the latest tax tips and updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Enter your email" 
                      className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
                    />
                    <Button variant="secondary" className="w-full">
                      Subscribe Now
                    </Button>
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
            Need Personalized Tax Advice?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our certified tax professionals are ready to provide personalized advice 
            for your specific tax situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Get Expert Advice
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

export default KnowledgeCenter;