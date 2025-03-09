import Link from "next/link"
import Image from "next/image"
import { Github, Mail, Linkedin, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold">
            <span className="text-xl">Ryan Johnson</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 sm:py-32">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="space-y-6 md:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I'm Ryan Johnson
                <span className="block text-primary">Software Engineer</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                I build accessible, user-friendly web applications that solve real-world problems.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#projects">
                    View my work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact me</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="John Doe"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-lg">
                  I'm a passionate full-stack developer with over 5 years of experience building web applications. I
                  specialize in React, Next.js, and Node.js, creating performant and accessible user experiences.
                </p>
                <p className="text-lg">
                  My journey in web development started when I built my first website for a local business. Since then,
                  I've worked with startups and established companies to deliver solutions that meet their business
                  needs.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new
                  technologies.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">Frontend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">Backend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">Tools</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">Other</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>CI/CD</li>
                    <li>AWS</li>
                    <li>Vercel</li>
                    <li>Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div
                  key={project}
                  className="group bg-background border rounded-lg overflow-hidden transition-all hover:shadow-md"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Project ${project}`}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                    <p className="text-muted-foreground mb-4">
                      A modern web application built with React, Next.js, and Tailwind CSS. Features include
                      authentication, real-time updates, and responsive design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">React</span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Next.js</span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Tailwind</span>
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="#" className="flex items-center">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="#" className="flex items-center">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="#">
                  View all projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-muted/50 py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
            <div className="space-y-12 max-w-3xl mx-auto">
              {[
                {
                  role: "Senior Frontend Developer",
                  company: "Tech Company",
                  period: "2021 - Present",
                  description:
                    "Led the frontend development team in building a SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
                },
                {
                  role: "Full-Stack Developer",
                  company: "Startup Inc",
                  period: "2019 - 2021",
                  description:
                    "Developed and maintained multiple web applications. Worked closely with designers and product managers to deliver high-quality user experiences.",
                },
                {
                  role: "Junior Developer",
                  company: "Web Agency",
                  period: "2017 - 2019",
                  description:
                    "Built websites and web applications for various clients. Gained experience in frontend and backend technologies.",
                },
              ].map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                    <span>{job.company}</span>
                    <span>•</span>
                    <span>{job.period}</span>
                  </div>
                  <p>{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind or want to chat? Feel free to reach out!
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-background p-6 rounded-lg border flex flex-col items-center">
                  <Mail className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-bold mb-2">Email</h3>
                  <a
                    href="mailto:hello@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
                <div className="bg-background p-6 rounded-lg border flex flex-col items-center">
                  <Github className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-bold mb-2">GitHub</h3>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @johndoe
                  </a>
                </div>
                <div className="bg-background p-6 rounded-lg border flex flex-col items-center">
                  <Linkedin className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-bold mb-2">LinkedIn</h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    John Doe
                  </a>
                </div>
              </div>
              <Button size="lg" asChild>
                <a href="mailto:hello@example.com">Send me an email</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:hello@example.com" className="hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

