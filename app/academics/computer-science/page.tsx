import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import {
  BookOpen,
  Code,
  Database,
  Server,
  Cpu,
  Network,
  Users,
  BrainCircuit,
  GraduationCap,
  Microscope,
  Award,
} from "lucide-react"

export default function ComputerSciencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Computer Science"
        subtitle="Bachelor's Degree Program"
        description="A comprehensive program with a solid foundation in computation theory, algorithms, data structures, and emerging technologies."
        buttonText="Apply Now"
        buttonLink="/admissions"
      />

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Program Overview</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About the Program</h2>
              <p className="text-muted-foreground">
                The Computer Science program at UFRJ is offered by the Institute of Mathematics (IM-UFRJ) and forms
                professionals with a solid foundation in computation theory, algorithms, data structures, and emerging
                technologies.
              </p>
              <p className="text-muted-foreground">
                Our program emphasizes both theoretical knowledge and practical skills, preparing students for careers
                in software development, research, data science, artificial intelligence, and other technology-related
                fields.
              </p>
              <p className="text-muted-foreground">
                Students benefit from state-of-the-art laboratories, research opportunities, and a faculty composed of
                distinguished professors with expertise in various areas of computer science.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/academics/computer-science/curriculum">
                  <Button>View Curriculum</Button>
                </Link>
                <Link href="/admissions">
                  <Button variant="outline">Apply Now</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center h-64 bg-muted rounded-xl">
              <div className="text-center space-y-2">
                <Code className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground font-medium">Computer Science Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Curriculum Highlights</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our comprehensive curriculum provides students with a strong foundation in computer science theory and
                practice.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Algorithms & Data Structures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Study efficient algorithms and data organization methods essential for solving complex computational
                  problems.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Object-Oriented Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn to design and implement software using object-oriented principles and methodologies.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Database Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Explore database design, implementation, and management for efficient data storage and retrieval.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Operating Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Understand the principles and implementation of modern operating systems and resource management.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Artificial Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Study intelligent agents, machine learning, and computational approaches to problem-solving.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Computer Networks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn about network architectures, protocols, and distributed systems implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Compilers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Explore the theory and practice of programming language implementation and translation.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Software Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn methodologies for designing, developing, and maintaining large-scale software systems.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/academics/computer-science/curriculum">
              <Button>View Full Curriculum</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Faculty Highlights</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our program is led by distinguished professors with expertise in various areas of computer science.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
                  <GraduationCap className="h-16 w-16 text-muted-foreground" />
                </div>
                <CardTitle>Prof. Dr. Ana Rodrigues</CardTitle>
                <CardDescription>Artificial Intelligence & Machine Learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Leading researcher in machine learning with over 50 publications in top-tier journals and conferences.
                  CNPq Research Productivity Fellow.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
                  <GraduationCap className="h-16 w-16 text-muted-foreground" />
                </div>
                <CardTitle>Prof. Dr. Roberto Almeida</CardTitle>
                <CardDescription>Distributed Systems & Security</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Expert in distributed systems and cybersecurity with extensive industry experience. Leads
                  international research collaborations in secure computing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
                  <GraduationCap className="h-16 w-16 text-muted-foreground" />
                </div>
                <CardTitle>Prof. Dr. Carla Santos</CardTitle>
                <CardDescription>Algorithms & Computational Theory</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Renowned for contributions to algorithmic complexity theory and optimization. Recipient of multiple
                  teaching excellence awards.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/academics/computer-science/faculty">
              <Button variant="outline">View All Faculty</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Facilities</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">State-of-the-Art Infrastructure</h2>
              <p className="text-muted-foreground">
                Our Computer Science program provides students with access to modern facilities and resources to support
                their learning and research.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Multiple computer laboratories with the latest hardware and software</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Specialized laboratories for robotics and artificial intelligence research</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Collaborative coworking spaces and hackerspaces</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Comprehensive Institute of Mathematics Library</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Access to advanced computational infrastructure via UFRJ's research cluster</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center h-64 bg-background rounded-xl">
              <div className="text-center space-y-2">
                <Microscope className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground font-medium">Computer Science Facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="undergraduate" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Bachelor's Degree</h2>
                  <p className="text-muted-foreground">
                    Our Bachelor's degree in Computer Science is a comprehensive four-year program that provides
                    students with a solid foundation in computer science theory and practice.
                  </p>
                  <h3 className="text-xl font-bold mt-4">Program Details:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Duration: 4 years (8 semesters)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Credits: 3,200 hours of coursework</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Admission: Via ENEM and SiSU</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Capstone: Final year project required</span>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                    <Link href="/academics/computer-science/curriculum">
                      <Button>View Curriculum</Button>
                    </Link>
                    <Link href="/admissions/undergraduate">
                      <Button variant="outline">How to Apply</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center h-64 bg-muted rounded-xl">
                  <div className="text-center space-y-2">
                    <Users className="h-16 w-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground font-medium">Undergraduate Students</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="graduate" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex items-center justify-center h-64 bg-muted rounded-xl order-2 lg:order-1">
                  <div className="text-center space-y-2">
                    <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground font-medium">Graduate Students</p>
                  </div>
                </div>
                <div className="space-y-4 order-1 lg:order-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Graduate Programs</h2>
                  <p className="text-muted-foreground">
                    Our graduate programs in Computer Science offer advanced study and research opportunities for
                    students seeking to deepen their knowledge and contribute to the field.
                  </p>
                  <h3 className="text-xl font-bold mt-4">Available Programs:</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>
                      <p className="font-bold">Master's in Computer Science</p>
                      <p className="text-sm">
                        A two-year program focusing on advanced coursework and research culminating in a master's
                        thesis.
                      </p>
                    </li>
                    <li>
                      <p className="font-bold">Doctorate in Computer Science</p>
                      <p className="text-sm">
                        A four-year program emphasizing original research contributions to the field of computer
                        science.
                      </p>
                    </li>
                    <li>
                      <p className="font-bold">Professional Master's in Software Engineering</p>
                      <p className="text-sm">
                        A specialized program designed for working professionals seeking to advance their careers.
                      </p>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                    <Link href="/academics/computer-science/graduate">
                      <Button>Graduate Programs</Button>
                    </Link>
                    <Link href="/admissions/graduate">
                      <Button variant="outline">How to Apply</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="research" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Research Areas</h2>
                  <p className="text-muted-foreground">
                    Our faculty and students conduct cutting-edge research across various areas of computer science,
                    contributing to advancements in the field.
                  </p>
                  <h3 className="text-xl font-bold mt-4">Key Research Areas:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Artificial Intelligence and Machine Learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Computational Logic and Formal Methods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Open Source Software Development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Distributed Systems and Cloud Computing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Cybersecurity and Privacy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Computer Graphics and Vision</span>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                    <Link href="/academics/computer-science/research">
                      <Button>Research Projects</Button>
                    </Link>
                    <Link href="/academics/computer-science/publications">
                      <Button variant="outline">Publications</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center h-64 bg-muted rounded-xl">
                  <div className="text-center space-y-2">
                    <Microscope className="h-16 w-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground font-medium">Research Activities</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Student Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our graduates go on to successful careers in industry, academia, and entrepreneurship.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Award className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>Marcos Oliveira</CardTitle>
                <CardDescription>Class of 2018</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  "My education at UFRJ provided me with the skills and knowledge that helped me secure a position at
                  Google. The rigorous curriculum and supportive faculty were instrumental in my success."
                </p>
                <p className="text-sm font-medium text-center mt-4">Now: Senior Software Engineer at Google</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Award className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>Juliana Costa</CardTitle>
                <CardDescription>Class of 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  "The research opportunities at UFRJ allowed me to explore my interest in AI and machine learning,
                  which led to my current role developing cutting-edge AI solutions."
                </p>
                <p className="text-sm font-medium text-center mt-4">Now: AI Researcher at Microsoft Research</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Award className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardTitle>Rafael Santos</CardTitle>
                <CardDescription>Class of 2016</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  "My time at UFRJ gave me both technical expertise and entrepreneurial mindset. The projects and
                  mentorship I received were crucial in founding my successful tech startup."
                </p>
                <p className="text-sm font-medium text-center mt-4">Now: Founder & CEO of TechBrasil</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/academics/computer-science/alumni">
              <Button variant="outline">More Success Stories</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Join Our Program?</h2>
              <p className="text-muted-foreground md:text-xl">
                Take the first step towards a rewarding career in computer science by applying to our program.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/admissions">
                  <Button size="lg">Apply Now</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center h-64 bg-muted rounded-xl">
              <div className="text-center space-y-2">
                <Code className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground font-medium">Join Our Program</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
