import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Award, CheckCircle, TrendingUp } from "lucide-react";

const vulnerabilities = [
  {
    type: "SQL Injection in Auth System",
    technologies: "PostgreSQL, MySQL",
    impact: "P1 - Critical",
    severity: "critical"
  },
  {
    type: "SSRF to Cloud Metadata",
    technologies: "AWS, Azure, GCP",
    impact: "P1 - Critical",
    severity: "critical"
  },
  {
    type: "JWT Implementation Flaws",
    technologies: "Node.js, Python",
    impact: "P1 - Critical",
    severity: "critical"
  },
  {
    type: "Business Logic Bypass",
    technologies: "E-commerce Platforms",
    impact: "P2 - High",
    severity: "high"
  },
];

const researchAreas = [
  "Protocol-Level Security: HTTP/2, HTTP/3, WebSocket security",
  "Cloud-Native Security: Container, serverless, and microservices",
  "Progressive Web App (PWA) Security: Service workers, cache security",
  "Single Page Application (SPA) Security: Client-side routing, state management",
];

const differentiators = [
  {
    title: "Full-Stack Security Perspective",
    points: [
      "End-to-end web application security understanding",
      "Ability to trace vulnerabilities across frontend and backend",
      "Experience with both modern and legacy web technologies",
      "Business impact analysis for web vulnerabilities",
    ]
  },
  {
    title: "Quality Deliverables",
    points: [
      "Detailed technical reports with reproducible proof-of-concept",
      "Context-aware risk assessment specific to web applications",
      "Actionable remediation guidance for development teams",
      "Follow-up support and verification testing",
    ]
  },
];

const Experience = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Experience & Achievements</h1>
        <p className="text-lg text-muted-foreground">
          Notable security discoveries and professional accomplishments
        </p>
      </div>

      {/* Critical Findings */}
      <section className="space-y-4">
        <h2 className="flex items-center gap-2 text-3xl font-bold">
          <AlertCircle className="h-7 w-7 text-primary" />
          Critical Vulnerability Findings
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {vulnerabilities.map((vuln, idx) => (
            <Card key={idx} className={`shadow-card transition-smooth hover:shadow-hover ${
              vuln.severity === 'critical' ? 'border-l-4 border-l-destructive' : 'border-l-4 border-l-primary'
            }`}>
              <CardHeader>
                <CardTitle className="text-lg">{vuln.type}</CardTitle>
                <Badge 
                  variant={vuln.severity === 'critical' ? 'destructive' : 'default'}
                  className="w-fit"
                >
                  {vuln.impact}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Technologies:</span> {vuln.technologies}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advanced Research */}
      <section className="space-y-4">
        <h2 className="flex items-center gap-2 text-3xl font-bold">
          <TrendingUp className="h-7 w-7 text-accent" />
          Advanced Research Areas
        </h2>
        <Card className="shadow-card">
          <CardContent className="p-6">
            <ul className="space-y-3">
              {researchAreas.map((area, idx) => (
                <li key={idx} className="flex gap-3 text-muted-foreground">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Professional Differentiation */}
      <section className="space-y-4">
        <h2 className="flex items-center gap-2 text-3xl font-bold">
          <Award className="h-7 w-7 text-primary" />
          Professional Differentiation
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((section, idx) => (
            <Card key={idx} className="shadow-card transition-smooth hover:shadow-hover">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Offered */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Services & Engagement</h2>
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold text-primary">Available For</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Web Application Security Assessments</li>
                  <li>• API Security Testing</li>
                  <li>• Code Review Services</li>
                  <li>• Bug Bounty Programs</li>
                  <li>• Security Research Collaboration</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-accent">Value Proposition</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Deep understanding from implementation to exploitation</li>
                  <li>• Identify complex vulnerability chains</li>
                  <li>• Custom tool development for specific stacks</li>
                  <li>• Comprehensive business impact analysis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quote */}
      <Card className="border-l-4 border-l-primary shadow-card">
        <CardContent className="p-6">
          <blockquote className="italic text-lg text-muted-foreground">
            "Web security is about understanding not just how attacks work, but how web 
            technologies are built and where they break under pressure."
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
