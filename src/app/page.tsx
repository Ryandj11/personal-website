"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Mail,
  Linkedin,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const images = [
    { src: "/IMG_8108.jpeg", alt: "Ryan Johnson 1" },
    { src: "/Facetune_15-04-2023-01-22-55.jpeg", alt: "Ryan Johnson 2" },
    { src: "/IMG_8515.jpeg", alt: "Ryan Johnson 3" },
    // Add more images as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-creme flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="font-bold">
            <span className="text-3xl bg-gradient-to-r from-blue1 to-blue2 bg-clip-text text-transparent">
              RDJ
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="text-lg font-medium hover:text-primary transition-colors flex items-center"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium hover:text-primary transition-colors flex items-center"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-lg font-medium hover:text-primary transition-colors flex items-center"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:text-primary transition-colors flex items-center"
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container flex items-center min-h-[calc(100vh-4rem)] py-24 sm:py-32">
          <div className="ml-32 flex flex-col-reverse md:flex-row items-start justify-center gap-8 w-full">
            <div className="space-y-6 md:w-1/2 flex flex-col items-start text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Hi, I'm Ryan Johnson
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
                CS@SJSU
              </h2>
              <div className="flex flex-col items-start">
                <p className="text-muted-foreground text-2xl md:text-3xl max-w-[600px]">
                  Software Engineer
                </p>

                <div className="flex justify-start gap-6 mt-8">
                  <Button
                    className="text-base bg-gradient-to-r from-blue1 to-blue2"
                    asChild
                  >
                    <Link href="#projects">
                      View my work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button className="text-base" variant="outline" asChild>
                    <Link href="#contact">Contact me</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-1">
                <Link
                  href="https://github.com/Ryandj11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="h-8 w-8" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ryan-johnson-997ab5328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:hello@example.com"
                  className="hover:text-primary transition-colors"
                >
                  <Mail className="h-8 w-8" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-65 h-65 md:w-96 md:h-96">
                <div className="relative w-full h-full p-2 rounded-lg bg-gradient-to-r from-blue1 to-blue2">
                  <div className="relative w-full h-full overflow-hidden rounded-lg bg-background">
                    <Image
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      fill
                      className="object-cover transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full hover:bg-background transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full hover:bg-background transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="bg-gradient-to-b from-babyBlue via-blue to-darkBlue py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-lg">
                  I'm a passionate full-stack developer with over 5 years of
                  experience building web applications. I specialize in React,
                  Next.js, and Node.js, creating performant and accessible user
                  experiences.
                </p>
                <p className="text-lg">
                  My journey in web development started when I built my first
                  website for a local business. Since then, I've worked with
                  startups and established companies to deliver solutions that
                  meet their business needs.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me hiking, reading sci-fi
                  novels, or experimenting with new technologies.
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
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div
                  key={project}
                  className="group bg-background border rounded-lg overflow-hidden transition-all hover:shadow-md"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={`/project${project}.jpg`}
                      alt={`Project ${project}`}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Project {project}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      A modern web application built with React, Next.js, and
                      Tailwind CSS. Features include authentication, real-time
                      updates, and responsive design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        React
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Next.js
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Tailwind
                      </span>
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
            <h2 className="text-3xl font-bold mb-12 text-center">
              Work Experience
            </h2>
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
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary/20"
                >
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
            <Link
              href="mailto:hello@example.com"
              className="hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
