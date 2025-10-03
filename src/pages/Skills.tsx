import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Shield, Database, Terminal, Globe, Lock } from "lucide-react";

const skillCategories = [
  {
    title: "Web Technologies",
    icon: Globe,
    color: "text-primary",
    skills: [
      { name: "HTML5/CSS3", level: "Expert" },
      { name: "JavaScript/TypeScript", level: "Expert" },
      { name: "React/Angular/Vue", level: "Advanced" },
      { name: "Node.js", level: "Expert" },
      { name: "WebSockets", level: "Advanced" },
    ],
    description: "DOM-based attacks, UI redressing, framework vulnerabilities"
  },
  {
    title: "Backend Technologies",
    icon: Code2,
    color: "text-accent",
    skills: [
      { name: "Python/Django/Flask", level: "Expert" },
      { name: "PHP/Laravel", level: "Advanced" },
      { name: "Java/Spring", level: "Advanced" },
      { name: "FastAPI", level: "Expert" },
    ],
    description: "Backend security, ORM injection, server-side vulnerabilities"
  },
  {
    title: "Python Security",
    icon: Terminal,
    color: "text-primary",
    skills: [
      { name: "Web Framework Security", level: "Expert" },
      { name: "API Security Testing", level: "Expert" },
      { name: "Security Tool Development", level: "Expert" },
      { name: "Automation Scripts", level: "Expert" },
    ],
    description: "Custom scanners, payload generators, automated testing frameworks"
  },
  {
    title: "C Language & Systems",
    icon: Terminal,
    color: "text-accent",
    skills: [
      { name: "Memory Corruption", level: "Advanced" },
      { name: "System Security", level: "Advanced" },
      { name: "Network Programming", level: "Advanced" },
      { name: "Legacy Systems", level: "Advanced" },
    ],
    description: "Buffer overflows, heap exploitation, protocol implementation"
  },
  {
    title: "Web Vulnerabilities",
    icon: Shield,
    color: "text-primary",
    skills: [
      { name: "SQL Injection (All variants)", level: "Expert" },
      { name: "Cross-Site Scripting (XSS)", level: "Expert" },
      { name: "SSRF", level: "Expert" },
      { name: "CSRF", level: "Expert" },
      { name: "XXE", level: "Expert" },
      { name: "Authentication Bypass", level: "Expert" },
    ],
    description: "Union-based, blind, NoSQL, DOM-based, mutation XSS, cloud metadata access"
  },
  {
    title: "Advanced Security",
    icon: Lock,
    color: "text-accent",
    skills: [
      { name: "Web Cache Poisoning", level: "Advanced" },
      { name: "HTTP Request Smuggling", level: "Advanced" },
      { name: "SSTI", level: "Advanced" },
      { name: "Business Logic Flaws", level: "Expert" },
      { name: "API Security", level: "Expert" },
    ],
    description: "REST/GraphQL abuse, OAuth flaws, JWT manipulation, privilege escalation"
  },
];

const tools = [
  { category: "Custom Development", items: ["Python Security Scripts", "Burp Extensions", "Automated Recon Tools", "Custom Fuzzers"] },
  { category: "Industry Tools", items: ["Burp Suite Professional", "OWASP ZAP", "SQLMap", "Metasploit"] },
  { category: "Cloud Platforms", items: ["AWS", "Azure", "GCP", "Container Security"] },
];

const Skills = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Technical Skills</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive expertise across web technologies, security research, and development
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, idx) => (
          <Card key={idx} className="shadow-card transition-smooth hover:shadow-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <category.icon className={`h-5 w-5 ${category.color}`} />
                {category.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <Badge variant="secondary">{skill.level}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tools & Technologies */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Tools & Technologies</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {tools.map((toolCategory, idx) => (
            <Card key={idx} className="shadow-card transition-smooth hover:shadow-hover">
              <CardHeader>
                <CardTitle className="text-lg">{toolCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {toolCategory.items.map((item, itemIdx) => (
                    <Badge key={itemIdx} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Security Assessment Methodology
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">1</span>
              <span>Reconnaissance & Technology Stack Identification</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">2</span>
              <span>Automated Vulnerability Scanning & Manual Verification</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">3</span>
              <span>Business Logic Analysis & Abuse Case Development</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">4</span>
              <span>Authentication & Session Management Testing</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">5</span>
              <span>Data Validation & Input Handling Assessment</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">6</span>
              <span>Security Headers & Client-Side Security Review</span>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
