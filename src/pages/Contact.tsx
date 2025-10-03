import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Globe, FileText, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "john.security@email.com",
    description: "Best for formal inquiries and detailed discussions",
    action: "Send Email",
    href: "mailto:john.security@email.com"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/johnsecurity",
    description: "Professional networking and quick messages",
    action: "View Profile",
    href: "https://linkedin.com"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/johnsecurity",
    description: "Code samples and security tools",
    action: "View Projects",
    href: "https://github.com"
  },
];

const availability = [
  "Web Application Security Assessments",
  "Penetration Testing",
  "Security Code Review",
  "Bug Bounty Programs",
  "Security Consulting",
  "Training & Workshops",
];

const Contact = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="text-lg text-muted-foreground">
          Let's discuss how I can help secure your applications
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid gap-6 md:grid-cols-3">
        {contactMethods.map((method, idx) => (
          <Card key={idx} className="shadow-card transition-smooth hover:shadow-hover">
            <CardHeader>
              <method.icon className="mb-2 h-8 w-8 text-primary" />
              <CardTitle className="text-lg">{method.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm font-mono text-muted-foreground break-all">
                {method.value}
              </p>
              <p className="text-xs text-muted-foreground">
                {method.description}
              </p>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => window.open(method.href, '_blank')}
              >
                {method.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Availability */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-accent" />
            Services Available
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {availability.map((service, idx) => (
              <Badge key={idx} variant="secondary" className="px-3 py-1">
                {service}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Response Time */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-card transition-smooth hover:shadow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5 text-primary" />
              Response Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I typically respond to inquiries within <span className="font-semibold text-primary">24-48 hours</span>.
              For urgent security matters, please mark your subject line with [URGENT].
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card transition-smooth hover:shadow-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Globe className="h-5 w-5 text-accent" />
              Location & Availability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Available for <span className="font-semibold text-accent">remote work worldwide</span>. 
              Flexible with time zones and can accommodate international clients.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Card */}
      <Card className="border-2 border-primary/20 bg-gradient-card shadow-card">
        <CardContent className="p-8 text-center">
          <h3 className="mb-3 text-2xl font-bold">Ready to Strengthen Your Security?</h3>
          <p className="mb-6 text-muted-foreground">
            Let's work together to identify and fix vulnerabilities before they become problems.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2" onClick={() => window.open('mailto:john.security@email.com', '_blank')}>
              <Mail className="h-4 w-4" />
              Send Email
            </Button>
            <Button size="lg" variant="outline" className="gap-2" onClick={() => window.open('https://linkedin.com', '_blank')}>
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
