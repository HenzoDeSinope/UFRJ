import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { Users, Utensils, Home, Dumbbell, Music, Heart, BookOpen, Palette } from "lucide-react"

export default function StudentLifePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Student Life"
        description="Discover the vibrant and diverse student experience at UFRJ, where academic excellence meets a rich campus life."
        buttonText="Explore Student Organizations"
        buttonLink="#organizations"
      />

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Campus Life</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Life at UFRJ</h2>
              <p className="text-muted-foreground">
                At UFRJ, student life extends far beyond the classroom. Our vibrant campus community offers countless
                opportunities for personal growth, social connection, and cultural enrichment. From student organizations
                and athletics to arts and community service, there's something for everyone to explore and enjoy.
              </p>
              <p className="text-muted-foreground">
                Our four campuses each have their own unique character and amenities, providing diverse environments for
                living, learning, and recreation. Whether you're interested in sports, arts, activism, or academic clubs,
                you'll find a community of like-minded peers and supportive resources to help you thrive.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="UFRJ Campus Life"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="organizations" className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Student Organizations</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With over 100 student organizations, UFRJ offers endless opportunities to pursue your interests, develop
                leadership skills, and build lasting friendships.
              </p>
            </div>
          </div>

          <Tabs defaultValue="academic" className="mt-8">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="service">Service</TabsTrigger>
              <TabsTrigger value="recreational">Recreational</TabsTrigger>
            </TabsList>
            <TabsContent value="academic" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Engineering Student Society</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      A student-led organization that organizes academic events, workshops, and competitions for
                      engineering students.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/engineering-society" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Computer Science Club</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      A community of students passionate about computing, programming, and technology. The club hosts
                      hackathons, coding competitions, and tech talks.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/cs-club" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Pre-Med Association</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      An organization for students interested in medical careers, offering mentorship, shadowing
                      opportunities, and preparation for medical school applications.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/pre-med" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="cultural" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Music className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>UFRJ Choir</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      A student choir that performs classical, popular, and traditional Brazilian music at university
                      events and community concerts.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/choir" className="w-full">
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
                    <CardTitle>Theater Group</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      A student-run theater company that produces plays and performances throughout the academic year,
                      open to students from all disciplines.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/theater" className="w-full">
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
                    <CardTitle>Cultural Diversity Association</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      An organization dedicated to celebrating and promoting cultural diversity through events,
                      workshops, and community engagement.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/cultural-diversity" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="service" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Volunteer Corps</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      A student-led organization that coordinates volunteer opportunities in local communities, focusing
                      on education, health, and environmental initiatives.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/volunteer-corps" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Environmental Action Group</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      A group dedicated to promoting sustainability on campus and in the broader community through
                      education, advocacy, and hands-on projects.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/environmental-action" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Community Outreach Initiative</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      An organization that connects students with local schools and community centers to provide
                      tutoring, mentorship, and educational programs.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/community-outreach" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="recreational" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Soccer Club</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      A recreational and competitive soccer club open to students of all skill levels, with
                      opportunities to participate in intramural and intercollegiate competitions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/soccer-club" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Hiking and Outdoor Adventure Club</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      A group that organizes hiking trips, camping excursions, and outdoor activities, taking advantage
                      of Rio de Janeiro's beautiful natural surroundings.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/hiking-club" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Chess Club</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      A club for chess enthusiasts of all levels, offering regular meetings, tournaments, and
                      opportunities to learn and improve chess skills.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/chess-club" className="w-full">
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
            <Link href="/student-life/organizations">
              <Button>View All Organizations</Button>
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
                alt="UFRJ Athletics"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Athletics & Recreation</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sports & Fitness</h2>
              <p className="text-muted-foreground">
                UFRJ offers a wide range of athletic and recreational opportunities for students of all interests and
                abilities. From competitive intercollegiate sports to intramural leagues and fitness classes, there are
                many ways to stay active and healthy.
              </p>
              <p className="text-muted-foreground">
                Our athletic facilities include gymnasiums, swimming pools, tennis courts, soccer fields, and fitness
                centers across our campuses. Students can participate in organized sports, join fitness classes, or
                simply enjoy recreational activities with friends.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/student-life/athletics">
                  <Button>Athletic Programs</Button>
                </Link>
                <Link href="/student-life/recreation">
                  <Button variant="outline">Recreational Activities</Button>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Campus Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                UFRJ provides a comprehensive range of services to support student well-being and success.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Housing</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  UFRJ offers on-campus housing options for eligible students, with priority given to those with
                  financial need and those from outside Rio de Janeiro. Our housing office also provides resources and
                  assistance for students seeking off-campus accommodations.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• On-campus residence halls</li>
                  <li>• Off-campus housing resources</li>
                  <li>• Roommate matching services</li>
                  <li>• Housing advising</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/student-life/housing" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Housing Information
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Dining</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Our campuses feature a variety of dining options, including cafeterias, restaurants, and cafes. The
                  university's dining services are committed to providing nutritious, affordable meals with options to
                  accommodate various dietary needs and preferences.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• University cafeterias</li>
                  <li>• Campus restaurants and cafes</li>
                  <li>• Meal plans</li>
                  <li>• Special dietary accommodations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/student-life/dining" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Dining Information
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  UFRJ is committed to supporting the physical and mental health of our students. We offer
                  comprehensive health services, counseling, and wellness programs to help students maintain a healthy
                  balance in their academic and personal lives.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Student health center</li>
                  <li>• Counseling services</li>
                  <li>• Mental health resources</li>
                  <li>• Wellness programs and workshops</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/student-life/health" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Health & Wellness Resources
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
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Support Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Student Support</h2>
              <p className="text-muted-foreground">
                UFRJ provides a wide range of support services to help students navigate their academic journey and
                personal development. Our dedicated staff and resources are available to assist students with academic
                challenges, career planning, personal concerns, and more.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Academic Advising</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Guidance on course selection, academic planning, and degree requirements.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Tutoring Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Free tutoring in various subjects to help students succeed in their courses.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Career Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Career counseling, job search assistance, resume workshops, and internship opportunities.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Accessibility Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Support and accommodations for students with disabilities to ensure equal access to education.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                <Link href="/student-life/support">
                  <Button>Explore Support Services</Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Student Support Services"
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
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Campus Events</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    UFRJ hosts a wide variety of events throughout the year, from academic lectures and cultural
                    performances to social gatherings and traditions.
                  </p>
                </div>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Welcome Week</CardTitle>
                    <CardDescription>August</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      A week of activities, events, and information sessions to welcome new students to UFRJ and help them
                      acclimate to university life.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/events/welcome-week" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
    
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Cultural Festival</CardTitle>
                    <CardDescription>October</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      An annual celebration of arts and culture featuring performances, exhibitions, workshops, and
                      activities showcasing the diverse talents of the UFRJ community.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/events/cultural-festival" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
                      </section>
                    </div>
                );
        }