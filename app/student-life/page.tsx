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
        title="Vida Estudantil"
        description="Descubra a experiência estudantil vibrante e diversificada na UFRJ, onde a excelência acadêmica encontra uma rica vida no campus."
        buttonText="Explorar Organizações Estudantis"
        buttonLink="#organizations"
      />

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Vida no Campus</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Vida na UFRJ</h2>
              <p className="text-muted-foreground">
                Na UFRJ, a vida estudantil vai muito além da sala de aula. Nossa comunidade vibrante oferece inúmeras
                oportunidades para crescimento pessoal, conexão social e enriquecimento cultural. Desde organizações
                estudantis e esportes até artes e serviço comunitário, há algo para todos explorarem e aproveitarem.
              </p>
              <p className="text-muted-foreground">
                Nossos quatro campi têm cada um seu caráter único e comodidades, proporcionando ambientes diversos para
                viver, aprender e recrear. Seja você interessado em esportes, artes, ativismo ou clubes acadêmicos,
                encontrará uma comunidade de pares com ideias semelhantes e recursos de apoio para ajudá-lo a prosperar.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Vida no Campus da UFRJ"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Organizações Estudantis</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Com mais de 100 organizações estudantis, a UFRJ oferece infinitas oportunidades para perseguir seus
                interesses, desenvolver habilidades de liderança e construir amizades duradouras.
              </p>
            </div>
          </div>

          <Tabs defaultValue="academic" className="mt-8">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="academic">Acadêmicas</TabsTrigger>
              <TabsTrigger value="cultural">Culturais</TabsTrigger>
              <TabsTrigger value="service">Serviço</TabsTrigger>
              <TabsTrigger value="recreational">Recreativas</TabsTrigger>
            </TabsList>
            <TabsContent value="academic" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Sociedade de Estudantes de Engenharia</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Uma organização liderada por estudantes que organiza eventos acadêmicos, workshops e competições
                      para estudantes de engenharia.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/engineering-society" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Clube de Ciência da Computação</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Uma comunidade de estudantes apaixonados por computação, programação e tecnologia. O clube
                      organiza hackathons, competições de programação e palestras técnicas.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/cs-club" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Associação Pré-Medicina</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Uma organização para estudantes interessados em carreiras médicas, oferecendo mentoria,
                      oportunidades de observação e preparação para candidaturas à faculdade de medicina.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/pre-med" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
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
                    <CardTitle>Coral da UFRJ</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Um coral estudantil que apresenta música clássica, popular e tradicional brasileira em eventos
                      universitários e concertos comunitários.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/choir" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Grupo de Teatro</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Uma companhia de teatro dirigida por estudantes que produz peças e apresentações durante o ano
                      acadêmico, aberta a estudantes de todas as disciplinas.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/theater" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Associação de Diversidade Cultural</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Uma organização dedicada a celebrar e promover a diversidade cultural através de eventos,
                      workshops e engajamento comunitário.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/cultural-diversity" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
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
                    <CardTitle>Corpo de Voluntários</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Uma organização liderada por estudantes que coordena oportunidades de voluntariado em comunidades
                      locais, focando em iniciativas de educação, saúde e meio ambiente.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/volunteer-corps" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Grupo de Ação Ambiental</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Um grupo dedicado a promover sustentabilidade no campus e na comunidade mais ampla através de
                      educação, advocacia e projetos práticos.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/environmental-action" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Iniciativa de Extensão Comunitária</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Uma organização que conecta estudantes com escolas locais e centros comunitários para fornecer
                      tutoria, mentoria e programas educacionais.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/community-outreach" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
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
                    <CardTitle>Clube de Futebol</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Um clube de futebol recreativo e competitivo aberto a estudantes de todos os níveis de habilidade,
                      com oportunidades de participar em competições intramurais e intercolegiais.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/soccer-club" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Clube de Trilha e Aventura</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Um grupo que organiza trilhas, excursões de camping e atividades ao ar livre, aproveitando os
                      belos arredores naturais do Rio de Janeiro.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/hiking-club" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Clube de Xadrez</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Um clube para entusiastas do xadrez de todos os níveis, oferecendo reuniões regulares, torneios e
                      oportunidades para aprender e melhorar as habilidades no xadrez.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/student-life/organizations/chess-club" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Saiba Mais
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Link href="/student-life/organizations">
              <Button>Ver Todas as Organizações</Button>
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
                alt="Esportes da UFRJ"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Esportes & Recreação</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Esportes & Fitness</h2>
              <p className="text-muted-foreground">
                A UFRJ oferece uma ampla gama de oportunidades esportivas e recreativas para estudantes de todos os
                interesses e habilidades. Desde esportes intercolegiais competitivos até ligas intramurais e aulas de
                fitness, há muitas maneiras de se manter ativo e saudável.
              </p>
              <p className="text-muted-foreground">
                Nossas instalações esportivas incluem ginásios, piscinas, quadras de tênis, campos de futebol e centros
                de fitness em nossos campi. Os estudantes podem participar de esportes organizados, participar de aulas
                de fitness ou simplesmente desfrutar de atividades recreativas com amigos.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/student-life/athletics">
                  <Button>Programas Esportivos</Button>
                </Link>
                <Link href="/student-life/recreation">
                  <Button variant="outline">Atividades Recreativas</Button>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Serviços do Campus</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A UFRJ oferece uma gama abrangente de serviços para apoiar o bem-estar e sucesso dos estudantes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Moradia</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  A UFRJ oferece opções de moradia no campus para estudantes elegíveis, com prioridade dada àqueles com
                  necessidade financeira e àqueles de fora do Rio de Janeiro. Nosso escritório de moradia também fornece
                  recursos e assistência para estudantes que procuram acomodações fora do campus.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Residências no campus</li>
                  <li>• Recursos de moradia fora do campus</li>
                  <li>• Serviços de compatibilidade de colegas de quarto</li>
                  <li>• Aconselhamento sobre moradia</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/student-life/housing" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Informações sobre Moradia
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Alimentação</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Nossos campi apresentam uma variedade de opções de alimentação, incluindo refeitórios, restaurantes e
                  cafés. Os serviços de alimentação da universidade estão comprometidos em fornecer refeições nutritivas
                  e acessíveis com opções para acomodar várias necessidades e preferências dietéticas.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Refeitórios universitários</li>
                  <li>• Restaurantes e cafés do campus</li>
                  <li>• Planos de refeição</li>
                  <li>• Acomodações dietéticas especiais</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/student-life/dining" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Informações sobre Alimentação
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Saúde & Bem-estar</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  A UFRJ está comprometida em apoiar a saúde física e mental de nossos estudantes. Oferecemos serviços
                  de saúde abrangentes, aconselhamento e programas de bem-estar para ajudar os estudantes a manter um
                  equilíbrio saudável em suas vidas acadêmicas e pessoais.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• Centro de saúde estudantil</li>
                  <li>• Serviços de aconselhamento</li>
                  <li>• Recursos de saúde mental</li>
                  <li>• Programas e workshops de bem-estar</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/student-life/health" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Recursos de Saúde & Bem-estar
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
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Serviços de Apoio</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Apoio ao Estudante</h2>
              <p className="text-muted-foreground">
                A UFRJ oferece uma ampla gama de serviços de apoio para ajudar os estudantes a navegar em sua jornada
                acadêmica e desenvolvimento pessoal. Nossa equipe dedicada e recursos estão disponíveis para auxiliar os
                estudantes com desafios acadêmicos, planejamento de carreira, preocupações pessoais e muito mais.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Orientação Acadêmica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Orientação sobre seleção de cursos, planejamento acadêmico e requisitos de graduação.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Serviços de Tutoria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Tutoria gratuita em várias disciplinas para ajudar os estudantes a ter sucesso em seus cursos.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Serviços de Carreira</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Aconselhamento de carreira, assistência na busca de emprego, workshops de currículo e
                      oportunidades de estágio.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Serviços de Acessibilidade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Apoio e acomodações para estudantes com deficiências para garantir acesso igual à educação.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                <Link href="/student-life/support">
                  <Button>Explorar Serviços de Apoio</Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Serviços de Apoio ao Estudante"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Eventos do Campus</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A UFRJ organiza uma grande variedade de eventos durante o ano, desde palestras acadêmicas e
                apresentações culturais até encontros sociais e tradições.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Semana de Boas-Vindas</CardTitle>
                <CardDescription>Agosto</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Uma semana de atividades, eventos e sessões informativas para dar as boas-vindas aos novos estudantes
                  da UFRJ e ajudá-los a se aclimatarem à vida universitária.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/student-life/events/welcome-week" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Saiba Mais
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Festival Cultural</CardTitle>
                <CardDescription>Outubro</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Uma celebração anual de artes e cultura com apresentações, exposições, workshops e atividades que
                  mostram os diversos talentos da comunidade UFRJ.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/student-life/events/cultural-festival" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Saiba Mais
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Feira de Primavera</CardTitle>
                <CardDescription>Setembro</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Uma feira animada com comida, jogos, música e estandes de organizações estudantis, reunindo a
                  comunidade do campus a cada primavera.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/student-life/events/spring-fair" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Saiba Mais
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
