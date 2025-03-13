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

  const projects = [
    {
      id: 1,
      title: "Torq Sports",
      role: "Software Engineering Intern",
      description: `Automated the collection and processing of data from over 5,000 colleges to provide insights 
                    like tuition, GPA, and athletic divisions for athletes and recruiters. Built Python scripts to 
                    pipeline data extraction and integration, reducing manual effort and improving real-time 
                    accuracy. Designed efficient systems to store and manage data, ensuring reliability and 
                    scalability for the platform's users.`,
      image: "/03_12_2025_X-Design.jpeg",
      techStack: [
        "Python",
        "PostgreSQL",
        "AWS RDS",
        "Selenium",
        "BeautifulSoup",
        "spaCy",
      ],
    },
    {
      id: 2,
      title: "Spartan Compass",
      role: "Full-Stack Developer",
      description: `Built a full-stack web app enabling for SJSU students to select courses and view 
                    professor ratings, improving course selection decisions. Optimized backend with Next.js, 
                    PostgreSQL, and Drizzle ORM, reducing query. Designed a responsive UI with 
                    Shadcn and Tailwind CSS, integrating Google OAuth for secure authentication. 
                    Collaborated with SJSU students using GitHub for code reviews and workflow efficiency.`,
      image: "/Screenshot 2025-03-12 at 11.10.56 PM.png",
      techStack: [
        "Next.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Drizzle ORM",
        "Google OAuth",
        "Docker",
        "Redis"
      ],
      codeLink: "https://github.com/SCE-Development/spartan-compass",
      //demoLink: "#",
    },
    {
      id: 3,
      title: "MyFantasy: Nba Fantasy Sports Manager",
      role: "Full-Stack Developer",
      description: `Built an NBA Fantasy Stats web application that delivers real-time and historical player 
                    insights through a dynamic React frontend, a robust Spring Boot backend, and automated 
                    data scraping. Users can search for customized player stats and receive personalized 
                    updates and news for their fantasy rosters.`,
      image: "/myfantasy.png",
      techStack: ["React.js", "Tailwind CSS", "Java", "Spring Boot", "PostgreSQL", "Python"],
      codeLink: "https://github.com/Ryandj11/myFantasy",
      //demoLink: "#",
    },
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
              Projects/Experience
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
          <section className="bg-[linear-gradient(to_bottom,#fffbf7_0%,#fffbf7_80%,#D3EEFF_100%)] bg-cover w-full min-w-full flex items-center min-h-[calc(100vh-4rem)] py-24 sm:py-32">
            <div className="ml-32 flex flex-col-reverse md:flex-row items-start justify-center gap-8 w-full">
              <div className="space-y-6 md:w-1/2 flex flex-col items-start text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black">
                  Hi, I'm Ryan Johnson
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-black">
                  CS@SJSU
                </h2>
                <div className="flex flex-col items-start">
                  <p className="text-black text-2xl md:text-3xl max-w-[600px]">
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
                    <Button
                      className="text-base text-black"
                      variant="outline"
                      asChild
                    >
                      <Link href="#contact">Contact me</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <Link
                    href="https://github.com/Ryandj11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-primary transition-colors"
                  >
                    <Github className="h-8 w-8" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ryan-johnson-997ab5328/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-8 w-8" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:ryanjohnson1105@gmail.com"
                    className="text-black hover:text-primary transition-colors"
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
        <section
          id="about"
          className="bg-[linear-gradient(to_bottom,#D3EEFF_0%,#D3EEFF_80%,#fffbf7_100%)] bg-cover w-full min-w-full py-16 sm:py-24"
        >
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-lg">
                  Hi, I'm Ryan, full-stack developer with a passion to craft
                  innovative solutions that are impactful and solve real-world
                  problems.
                </p>
                <p className="text-lg">
                  My journey as a full-stack developer has been defined by a
                  passion for building applications that are both efficient and
                  impactful. Through diverse projects, I've gained experience in
                  creating seamless integrations between front-end and back-end
                  systems, optimizing performance, and ensuring scalability. I
                  enjoy working with technologies like React.js, Next.js,
                  Node.js, PostgreSQL, and Spring Boot to bring ideas to life
                  and solve complex challenges. Each project has been an
                  opportunity to push the boundaries of what's possible while
                  delivering solutions that make a meaningful difference.
                </p>
                <p className="text-lg">
                  When I'm not coding, I enjoy spending time with friends and
                  family, producing music, playing the guitar, hooping on the
                  basketball court, or catching up on my favorite sports.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-center">
                    Frontend
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>HTML</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-center">
                    Backend
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-center">Tools</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Git & GitHub</li>
                    <li>AWS</li>
                    <li>Vercel</li>
                    <li>Docker</li>
                    <li>Figma</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2 text-center">
                    Languages
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Java</li>
                    <li>Python</li>
                    <li>Javascript/Typescript</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="bg-[linear-gradient(to_bottom,#fffbf7_0%,#fffbf7_80%,#D3EEFF_100%)] bg-cover w-full py-16 sm:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Projects/Experiences
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-background border rounded-lg overflow-hidden transition-all hover:shadow-md"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} logo`}
                      width={600}
                      height={400}
                      className="object-contain w-45 h-45 transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <h2 className="text-xl mb-2">{project.role}</h2>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.codeLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.codeLink}
                            className="flex items-center"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )} 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Experience Section */}
        {/*}
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
        */}
        {/* Contact Section */}
        <section id="contact" className="bg-[linear-gradient(to_bottom,#D3EEFF_0%,#fffbf7_100%)] bg-cover w-full py-16 sm:py-24">
          <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-black text-lg font-medium mb-8">
              Feel free to reach out if you’re interested in collaborating on projects, have any opportunities, or just want to connect!
            </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Email Box */}
          <a
            href="mailto:ryanjohnson1105@gmail.com"
            className="bg-background p-6 rounded-lg border flex flex-col items-center hover:shadow-lg transition-shadow"
          >
          <Mail className="h-8 w-8 mb-4 text-primary" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ryanjohnson1105@gmail.com
          </p>
        </a>
        {/* GitHub Box */}
        <a
          href="https://github.com/Ryandj11"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background p-6 rounded-lg border flex flex-col items-center hover:shadow-lg transition-shadow"
        >
          <Github className="h-8 w-8 mb-4 text-primary" />
            <h3 className="font-bold mb-2">GitHub</h3>
            <p className="text-muted-foreground hover:text-primary transition-colors">
              @Ryandj11
            </p>
        </a>

        {/* LinkedIn Box */}
        <a
          href="https://www.linkedin.com/in/ryan-johnson-997ab5328/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background p-6 rounded-lg border flex flex-col items-center hover:shadow-lg transition-shadow"
        >
          <Linkedin className="h-8 w-8 mb-4 text-primary" />
            <h3 className="font-bold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground hover:text-primary transition-colors">
              Ryan Johnson
            </p>
        </a>
        </div>
        </div>
        </div>
    </section>

      </main>
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ryan Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
