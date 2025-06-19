import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { CheckCircle, Calendar, FileText, GraduationCap, Users } from "lucide-react"

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Admissions"
        description="Join one of Latin America's most prestigious universities and take the first step towards a world-class education."
        buttonText="Apply Now"
        buttonLink="#application-process"
      />

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Admission Overview</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community</h2>
              <p className="text-muted-foreground">
                The Federal University of Rio de Janeiro (UFRJ) welcomes applications from motivated students seeking a
                challenging and rewarding educational experience. Our admission process is designed to identify students
                who will thrive in our academic environment and contribute to our community.
              </p>
              <p className="text-muted-foreground">
                UFRJ offers various pathways for admission, with the primary route being through the National High
                School Examination (ENEM) and the Unified Selection System (SiSU). We also have special programs for
                transfer students, international applicants, and those eligible for affirmative action policies.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
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

      <section id="application-process" className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Application Process</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow these steps to apply to UFRJ's undergraduate programs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Take the ENEM Exam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Register for and take the National High School Examination (ENEM), which is typically held in November
                  each year.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem"
                  target="_blank"
                  className="w-full"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    ENEM Information
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Register with SiSU</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use your ENEM results to register with the Unified Selection System (SiSU) during the application
                  period, typically in January.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://sisu.mec.gov.br/" target="_blank" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    SiSU Portal
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Select UFRJ Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Choose UFRJ and your desired program(s) when registering with SiSU. You can select up to two program
                  options.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/academics" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Programs
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Complete Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  If selected, follow the instructions to complete your enrollment, including document submission and
                  verification.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/admissions/enrollment" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Enrollment Guide
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 bg-background rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <Calendar className="h-12 w-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Key Dates for 2023-2024 Admission</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">ENEM Registration:</span>
                      <span className="text-muted-foreground"> May 15 - June 30, 2023</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">ENEM Exam Dates:</span>
                      <span className="text-muted-foreground"> November 5 & 12, 2023</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">SiSU Registration:</span>
                      <span className="text-muted-foreground"> January 16-20, 2024</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Results Announcement:</span>
                      <span className="text-muted-foreground"> January 25, 2024</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Enrollment Period:</span>
                      <span className="text-muted-foreground"> February 1-10, 2024</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Classes Begin:</span>
                      <span className="text-muted-foreground"> March 4, 2024</span>
                    </div>
                  </li>
                </ul>
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
              <TabsTrigger value="international">International</TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Undergraduate Admissions</h2>
                  <p className="text-muted-foreground">
                    UFRJ offers a wide range of undergraduate programs across various fields of study. The primary
                    pathway for admission is through the National High School Examination (ENEM) and the Unified
                    Selection System (SiSU).
                  </p>
                  <h3 className="text-xl font-bold mt-4">Requirements:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Completion of secondary education (high school)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Valid ENEM scores from the most recent examination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Registration with SiSU during the application period</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Required documentation for enrollment if selected</span>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                    <Link href="/admissions/undergraduate/requirements">
                      <Button>Detailed Requirements</Button>
                    </Link>
                    <Link href="/academics">
                      <Button variant="outline">Explore Programs</Button>
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Undergraduate Students"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="graduate" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="relative aspect-video overflow-hidden rounded-xl order-2 lg:order-1">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Graduate Students"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 lg:order-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Graduate Admissions</h2>
                  <p className="text-muted-foreground">
                    UFRJ offers a variety of master's and doctoral programs for students seeking advanced education and
                    research opportunities. Each graduate program has its own specific admission requirements and
                    selection process.
                  </p>
                  <h3 className="text-xl font-bold mt-4">General Requirements:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Bachelor's degree from an accredited institution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Academic transcripts and curriculum vitae</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Letters of recommendation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Research proposal (for doctoral programs)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Entrance examination and/or interview</span>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                    <Link href="/admissions/graduate/requirements">
                      <Button>Detailed Requirements</Button>
                    </Link>
                    <Link href="/academics/graduate-programs">
                      <Button variant="outline">Graduate Programs</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="international" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">International Students</h2>
                  <p className="text-muted-foreground">
                    UFRJ welcomes international students from around the world. We offer various pathways for
                    international applicants, including exchange programs, full degree programs, and special admission
                    processes.
                  </p>
                  <h3 className="text-xl font-bold mt-4">Requirements:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Valid passport and appropriate visa for studying in Brazil</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Educational credentials evaluated and authenticated</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Portuguese language proficiency (for programs taught in Portuguese)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Health insurance coverage for the duration of studies</span>
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                    <Link href="/admissions/international/requirements">
                      <Button>Detailed Requirements</Button>
                    </Link>
                    <Link href="/admissions/international/exchange">
                      <Button variant="outline">Exchange Programs</Button>
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="International Students"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Financial Aid & Scholarships</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                UFRJ is committed to making education accessible to all qualified students regardless of financial
                circumstances.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Merit Scholarships</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Scholarships awarded based on academic excellence and achievement. These competitive scholarships
                  recognize outstanding students with exceptional academic records.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/admissions/financial-aid/merit-scholarships" className="w-full">
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
                <CardTitle>Need-Based Assistance</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Financial aid programs designed to support students with demonstrated financial need. These programs
                  include grants, subsidized housing, meal plans, and transportation assistance.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/admissions/financial-aid/need-based" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Research Stipends</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Opportunities for students to participate in research projects while receiving financial support.
                  These positions provide valuable experience and financial assistance simultaneously.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/admissions/financial-aid/research-stipends" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/admissions/financial-aid">
              <Button>Explore All Financial Aid Options</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about the admissions process at UFRJ.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-8 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How competitive is admission to UFRJ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Admission to UFRJ is competitive, with acceptance rates varying by program. The most sought-after
                  programs like Medicine, Engineering, and Computer Science typically have the highest cutoff scores. We
                  recommend checking the previous year's cutoff scores for the programs you're interested in to gauge
                  competitiveness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Is there an application fee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  There is no direct application fee to UFRJ when applying through SiSU. However, there is a fee to
                  register for the ENEM exam, which is required for SiSU application. Fee waivers for ENEM are available
                  for eligible low-income students.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I transfer to UFRJ from another university?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, UFRJ accepts transfer students from other accredited institutions. Transfer applications are
                  typically accepted once per year, and the process includes an evaluation of academic records and, in
                  some cases, a transfer examination. Requirements vary by department and program.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are there English-taught programs at UFRJ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most undergraduate programs at UFRJ are taught in Portuguese. However, some graduate programs and
                  research opportunities may offer courses or supervision in English. International students are
                  generally expected to have Portuguese language proficiency or to enroll in Portuguese language courses
                  upon arrival.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What housing options are available for students?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  UFRJ offers limited on-campus housing for eligible students, primarily those with financial need. Most
                  students live off-campus in nearby neighborhoods. The university's housing office can provide
                  assistance and resources for finding suitable accommodation near our campuses.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/admissions/faq">
              <Button variant="outline">View All FAQs</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Apply?</h2>
              <p className="md:text-xl">
                Take the first step towards a world-class education at UFRJ. Our admissions team is here to guide you
                through the application process.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#application-process">
                  <Button variant="secondary" size="lg">
                    Start Your Application
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground"
                  >
                    Contact Admissions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="UFRJ Campus"
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
