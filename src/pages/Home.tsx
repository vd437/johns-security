import { Shield, Code, Terminal, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-8 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                John
              </h1>
              <p className="text-xl text-muted-foreground">Senior Web Security Researcher</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="px-3 py-1">
              <Lock className="mr-1 h-3 w-3" />
              Security Expert
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Code className="mr-1 h-3 w-3" />
              Full-Stack Developer
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Terminal className="mr-1 h-3 w-3" />
              Python Specialist
            </Badge>
          </div>
        </div>

        <Card className="shadow-card transition-smooth hover:shadow-hover">
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Professional Summary</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Expert Web Application Security Researcher with extensive expertise in high-level 
              programming languages and comprehensive web vulnerability assessment. Specialized in 
              identifying critical security flaws across diverse technology stacks, from frontend 
              interfaces to backend infrastructure.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Quick Stats */}
      <section className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-card transition-smooth hover:shadow-hover">
          <CardContent className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">10+</div>
            <p className="text-sm text-muted-foreground">Programming Languages</p>
          </CardContent>
        </Card>
        <Card className="shadow-card transition-smooth hover:shadow-hover">
          <CardContent className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-accent">15+</div>
            <p className="text-sm text-muted-foreground">Vulnerability Types</p>
          </CardContent>
        </Card>
        <Card className="shadow-card transition-smooth hover:shadow-hover">
          <CardContent className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">100%</div>
            <p className="text-sm text-muted-foreground">Coverage Testing</p>
          </CardContent>
        </Card>
      </section>

      {/* Core Competencies */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Core Competencies</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="shadow-card transition-smooth hover:shadow-hover">
            <CardContent className="p-6">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                <Shield className="h-5 w-5 text-primary" />
                Security Research
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Advanced web vulnerability assessment</li>
                <li>• API security testing (REST, GraphQL)</li>
                <li>• Cloud security (AWS, Azure, GCP)</li>
                <li>• Business logic flaw identification</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card transition-smooth hover:shadow-hover">
            <CardContent className="p-6">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                <Code className="h-5 w-5 text-accent" />
                Development
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom security tool development</li>
                <li>• Full-stack web applications</li>
                <li>• Automation & scripting</li>
                <li>• Code review & analysis</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Specializations */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Areas of Expertise</h2>
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold text-primary">Attack Vectors</h3>
                <div className="flex flex-wrap gap-2">
                  {["SQL Injection", "XSS", "SSRF", "CSRF", "XXE", "IDOR", "RCE"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-accent">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "C", "React", "Node.js", "Django", "Flask"].map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;
