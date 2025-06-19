import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CalendarDays,
  GraduationCap,
  Users,
  BookOpen,
  MapPin,
  ArrowRight,
  Building2,
  Microscope,
  Globe,
  Award,
} from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { NewsCard } from "@/components/news-card"
import { CampusCard } from "@/components/campus-card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Universidade Federal do Rio de Janeiro"
        subtitle="Excelência em Educação Desde 1920"
        description="Produzindo, disseminando e aplicando conhecimento científico, tecnológico e cultural com excelência, contribuindo para o desenvolvimento sustentável e a inclusão social."
        buttonText="Inscreva-se"
        buttonLink="/admissions"
      />

      {/* Seção de Links Rápidos */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/academics" className="group">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Acadêmico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Explore nossos programas acadêmicos abrangentes em várias disciplinas e departamentos.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm text-primary group-hover:underline flex items-center">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/admissions" className="group">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Admissões</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Conheça nosso processo de admissão, requisitos e prazos importantes para futuros estudantes.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm text-primary group-hover:underline flex items-center">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/student-life" className="group">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Vida Estudantil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Descubra atividades no campus, clubes, recursos e tudo o que torna a vida estudantil vibrante na
                    UFRJ.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm text-primary group-hover:underline flex items-center">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
            <Link href="/about" className="group">
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Sobre a UFRJ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Conheça nossa rica história desde 1920, nossa missão, valores e nosso compromisso com a excelência.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm text-primary group-hover:underline flex items-center">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Fundada em 1920</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre a UFRJ</h2>
              <p className="text-muted-foreground md:text-xl">
                A Universidade Federal do Rio de Janeiro (UFRJ) foi fundada em 7 de setembro de 1920, como Universidade
                do Rio de Janeiro. Hoje, destaca-se como uma das instituições educacionais mais prestigiadas da América
                Latina.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button>Conheça Nossa História</Button>
                </Link>
                <Link href="/about#mission">
                  <Button variant="outline">Nossa Missão</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center h-64 bg-muted rounded-xl">
              <div className="text-center space-y-2">
                <Building2 className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground font-medium">Campus da UFRJ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Campus */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Campi</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A UFRJ opera em quatro campi, cada um com suas especializações e ambiente único.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <CampusCard
              name="Cidade Universitária"
              location="Ilha do Fundão"
              description="Sede de programas de engenharia, computação, ciências da saúde e ciências exatas."
              imageSrc=""
            />
            <CampusCard
              name="Praia Vermelha"
              location="Rio de Janeiro"
              description="Abriga programas de comunicação, serviço social, história e psicologia."
              imageSrc=""
            />
            <CampusCard
              name="Macaé"
              location="Macaé"
              description="Oferece programas em farmácia, enfermagem e ciências ambientais."
              imageSrc=""
            />
            <CampusCard
              name="Duque de Caxias"
              location="Duque de Caxias"
              description="Foco em programas de formação de professores e ciências."
              imageSrc=""
            />
          </div>
        </div>
      </section>

      {/* Destaque de Programas Acadêmicos */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center h-64 bg-muted rounded-xl order-2 lg:order-1">
              <div className="text-center space-y-2">
                <Microscope className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground font-medium">Programas Acadêmicos</p>
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Programas de Excelência</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Excelência Acadêmica</h2>
              <p className="text-muted-foreground md:text-xl">
                A UFRJ oferece uma ampla gama de programas de graduação e pós-graduação em várias disciplinas. Nossos
                programas são projetados para fornecer aos alunos uma base sólida em teoria e prática, preparando-os
                para carreiras de sucesso e estudos acadêmicos avançados.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/academics">
                  <Button>Explorar Programas</Button>
                </Link>
                <Link href="/academics/departments">
                  <Button variant="outline">Ver Departamentos</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notícias e Eventos */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Notícias & Eventos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mantenha-se atualizado com os últimos acontecimentos na UFRJ.
              </p>
            </div>
          </div>

          <Tabs defaultValue="news" className="mt-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="news">Notícias</TabsTrigger>
              <TabsTrigger value="events">Próximos Eventos</TabsTrigger>
            </TabsList>
            <TabsContent value="news" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <NewsCard
                  title="UFRJ Entre as Melhores Universidades da América Latina"
                  date="10 de Maio de 2023"
                  excerpt="A Universidade Federal do Rio de Janeiro foi reconhecida como uma das melhores universidades da América Latina de acordo com rankings recentes."
                  category="Conquista"
                  href="/news/ranking"
                />
                <NewsCard
                  title="Novo Centro de Pesquisa Inaugurado no Campus Cidade Universitária"
                  date="28 de Abril de 2023"
                  excerpt="A UFRJ inaugura um centro de pesquisa de última geração para avançar estudos em desenvolvimento sustentável e energia renovável."
                  category="Pesquisa"
                  href="/news/research-center"
                />
                <NewsCard
                  title="Estudantes da UFRJ Vencem Competição Internacional"
                  date="15 de Abril de 2023"
                  excerpt="Uma equipe de estudantes de engenharia da UFRJ conquistou o primeiro lugar em uma competição internacional focada em soluções urbanas sustentáveis."
                  category="Conquista Estudantil"
                  href="/news/competition"
                />
              </div>
            </TabsContent>
            <TabsContent value="events" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Dia de Portas Abertas</CardTitle>
                    <CardDescription className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      25 de Maio de 2023 • 10:00
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Futuros estudantes são convidados a conhecer nossas instalações, encontrar professores e conhecer
                      nossos programas.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/events/open-house">
                      <Button variant="outline" size="sm">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Simpósio de Pesquisa</CardTitle>
                    <CardDescription className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      10-12 de Junho de 2023 • 9:00
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Um simpósio de três dias com palestrantes, workshops e apresentações de pesquisas.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/events/symposium">
                      <Button variant="outline" size="sm">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Série de Workshops de Verão</CardTitle>
                    <CardDescription className="flex items-center">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      5-30 de Julho de 2023 • 13:00
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Uma série de workshops cobrindo vários tópicos em artes, ciências e humanidades.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/events/workshops">
                      <Button variant="outline" size="sm">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Link href="/news-events">
              <Button variant="outline">Ver Todas as Notícias & Eventos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destaque da Vida Estudantil */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Vida no Campus</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vida Estudantil Vibrante</h2>
              <p className="text-muted-foreground md:text-xl">
                Na UFRJ, a vida estudantil vai além da sala de aula. Com mais de 100 organizações estudantis, equipes
                esportivas, eventos culturais e oportunidades de serviço comunitário, há algo para todos explorarem e
                aproveitarem.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/student-life">
                  <Button>Explorar Vida Estudantil</Button>
                </Link>
                <Link href="/student-life/organizations">
                  <Button variant="outline">Organizações Estudantis</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center h-64 bg-muted rounded-xl">
              <div className="text-center space-y-2">
                <Globe className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground font-medium">Vida Estudantil</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para se Juntar à UFRJ?
              </h2>
              <p className="md:text-xl">
                Dê o primeiro passo em direção a uma educação de classe mundial em uma das universidades mais
                prestigiadas da América Latina.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/admissions">
                  <Button variant="secondary" size="lg">
                    Inscreva-se Agora
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground"
                  >
                    Entre em Contato
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center h-64 bg-primary-foreground/10 rounded-xl">
              <div className="text-center space-y-2">
                <Award className="h-16 w-16 text-primary-foreground/70 mx-auto" />
                <p className="text-primary-foreground/70 font-medium">Excelência Acadêmica</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
