import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
  Microscope,
  FlaskRoundIcon as Flask,
  Stethoscope,
  Scale,
  Landmark,
  Palette,
  GraduationCap,
} from "lucide-react"

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Academics"
        description="Explore our comprehensive academic programs designed to provide students with the knowledge and skills needed for success in their chosen fields."
        buttonText="View Departments"
        buttonLink="#departments"
      />

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Academic Excellence</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Academic Approach</h2>
              <p className="text-muted-foreground">
                At UFRJ, we are committed to providing a comprehensive education that combines theoretical knowledge
                with practical experience. Our academic programs are designed to foster critical thinking, creativity,
                and innovation, preparing students for successful careers and meaningful contributions to society.
              </p>
              <p className="text-muted-foreground">
                Our faculty members are leaders in their fields, conducting cutting-edge research and bringing their
                expertise into the classroom. We offer a wide range of undergraduate and graduate programs across
                various disciplines, allowing students to pursue their passions and develop specialized skills.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="UFRJ Academics"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="departments" className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Departments</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                UFRJ is home to numerous departments and schools across various disciplines, each offering specialized
                programs and research opportunities.
              </p>
            </div>
          </div>

          <Tabs defaultValue="science" className="mt-8">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="science">Sciences</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="humanities">Humanities</TabsTrigger>
            </TabsList>
            <TabsContent value="science" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Computer Science</CardTitle>
                    <CardDescription>Institute of Mathematics</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs focused on algorithms, data structures, artificial intelligence, software engineering,
                      and other areas of computing.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/computer-science" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Microscope className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Physics</CardTitle>
                    <CardDescription>Institute of Physics</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs covering theoretical and experimental physics, astrophysics, nuclear physics, and more.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/physics" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Flask className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Chemistry</CardTitle>
                    <CardDescription>Institute of Chemistry</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs in organic, inorganic, physical, and analytical chemistry, as well as biochemistry.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/chemistry" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="engineering" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Electrical Engineering</CardTitle>
                    <CardDescription>Polytechnic School</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs in power systems, electronics, telecommunications, control systems, and more.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/electrical-engineering" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Mechanical Engineering</CardTitle>
                    <CardDescription>Polytechnic School</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs in thermodynamics, fluid mechanics, materials science, manufacturing, and more.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/mechanical-engineering" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Network className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Civil Engineering</CardTitle>
                    <CardDescription>Polytechnic School</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs in structural engineering, transportation, geotechnical engineering, and more.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/civil-engineering" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="health" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Stethoscope className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Medicine</CardTitle>
                    <CardDescription>School of Medicine</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs in general medicine, specializations, and medical research.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/medicine" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Nursing</CardTitle>
                    <CardDescription>School of Nursing</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs in nursing practice, healthcare management, and specialized nursing fields.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/nursing" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <BrainCircuit className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Psychology</CardTitle>
                    <CardDescription>Institute of Psychology</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs in clinical psychology, cognitive psychology, social psychology, and more.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/psychology" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="humanities" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Scale className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Law</CardTitle>
                    <CardDescription>School of Law</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs in civil law, criminal law, constitutional law, international law, and more.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/law" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Landmark className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>History</CardTitle>
                    <CardDescription>Institute of History</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs in Brazilian history, world history, historiography, and specialized historical periods.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/history" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Fine Arts</CardTitle>
                    <CardDescription>School of Fine Arts</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Programs in painting, sculpture, design, art history, and other visual arts.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/academics/fine-arts" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Link href="/academics/departments">
              <Button>View All Departments</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="UFRJ Research"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Research Excellence</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Research at UFRJ</h2>
              <p className="text-muted-foreground">
                Research is a cornerstone of UFRJ's academic mission. Our faculty and students are engaged in
                cutting-edge research across various disciplines, contributing to advancements in science, technology,
                healthcare, and society.
              </p>
              <p className="text-muted-foreground">
                UFRJ houses numerous research centers and laboratories equipped with state-of-the-art facilities. We
                foster a collaborative research environment, encouraging interdisciplinary projects and partnerships
                with industry, government, and other academic institutions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/research">
                  <Button>Explore Research</Button>
                </Link>
                <Link href="/research/centers">
                  <Button variant="outline">Research Centers</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Degree Programs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                UFRJ offers a wide range of undergraduate and graduate programs to meet diverse academic interests and
                career goals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Undergraduate Programs</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Our bachelor's degree programs provide a solid foundation in various disciplines, combining
                  theoretical knowledge with practical skills. Students can choose from over 100 undergraduate programs
                  across different fields.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Bachelor of Science (B.Sc.)</li>
                  <li>• Bachelor of Arts (B.A.)</li>
                  <li>• Bachelor of Engineering (B.Eng.)</li>
                  <li>• Bachelor of Laws (LL.B.)</li>
                  <li>• And many more...</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/academics/undergraduate" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Undergraduate Programs
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Graduate Programs</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Our master's and doctoral programs offer advanced study and research opportunities for students
                  seeking to deepen their knowledge and make significant contributions to their fields.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Master of Science (M.Sc.)</li>
                  <li>• Master of Arts (M.A.)</li>
                  <li>• Master of Business Administration (MBA)</li>
                  <li>• Doctor of Philosophy (Ph.D.)</li>
                  <li>• Professional doctorates</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/academics/graduate" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Graduate Programs
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Continuing Education</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Our continuing education programs provide opportunities for lifelong learning and professional
                  development. These programs are designed for working professionals, alumni, and community members
                  seeking to enhance their skills or explore new areas.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Certificate programs</li>
                  <li>• Professional development courses</li>
                  <li>• Workshops and seminars</li>
                  <li>• Online courses</li>
                  <li>• Language programs</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/academics/continuing-education" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Continuing Education
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">International</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Global Opportunities</h2>
              <p className="text-muted-foreground">
                UFRJ is committed to providing students with global perspectives and international experiences. We offer
                various study abroad programs, exchange opportunities, and international partnerships that allow
                students to expand their horizons and develop cross-cultural competencies.
              </p>
              <p className="text-muted-foreground">
                Our international collaborations extend to research partnerships, joint degree programs, and faculty
                exchanges with prestigious institutions around the world. These initiatives enrich our academic
                community and contribute to our global impact.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/academics/international">
                  <Button>International Programs</Button>
                </Link>
                <Link href="/academics/exchange">
                  <Button variant="outline">Exchange Opportunities</Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="International Programs"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Academic Resources</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                UFRJ provides a wealth of resources to support student success and academic excellence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our extensive library system includes specialized collections, digital resources, study spaces, and
                  expert librarians to support research and learning.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/academics/libraries" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Libraries
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Laboratories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  State-of-the-art laboratories across various disciplines provide hands-on learning experiences and
                  support cutting-edge research.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/academics/laboratories" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Laboratories
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Academic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tutoring services, writing centers, academic advising, and other support programs help students excel
                  in their studies.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/academics/support" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Support Services
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Technology Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Computer labs, software licenses, high-speed internet, and technical support services enhance the
                  learning experience.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/academics/technology" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Technology
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Explore Our Programs?</h2>
              <p className="text-muted-foreground md:text-xl">
                Discover the academic opportunities that await you at UFRJ. Whether you're interested in undergraduate
                studies, graduate programs, or continuing education, we have options to help you achieve your goals.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/academics/programs">
                  <Button size="lg">Browse All Programs</Button>
                </Link>
                <Link href="/admissions">
                  <Button variant="outline" size="lg">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="UFRJ Students"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
