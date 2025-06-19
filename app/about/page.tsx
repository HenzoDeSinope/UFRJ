import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { Building2, Award, GraduationCap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Sobre a UFRJ"
        description="Conheça nossa rica história, missão e valores que nos guiam desde nossa fundação em 1920."
        buttonText="Nossa Liderança"
        buttonLink="#leadership"
      />

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="history">História</TabsTrigger>
              <TabsTrigger value="mission">Missão & Valores</TabsTrigger>
              <TabsTrigger value="leadership">Liderança</TabsTrigger>
            </TabsList>
            <TabsContent value="history" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nossa História</h2>
                  <p className="text-muted-foreground">
                    A Universidade Federal do Rio de Janeiro (UFRJ) foi fundada em 7 de setembro de 1920, como
                    Universidade do Rio de Janeiro. Foi a primeira instituição universitária estabelecida pelo Governo
                    Federal no Brasil.
                  </p>
                  <p className="text-muted-foreground">
                    Inicialmente, a universidade foi criada reunindo a Escola Politécnica (engenharia), a Faculdade de
                    Medicina e a Faculdade de Direito. Ao longo das décadas, expandiu-se para incluir numerosas outras
                    escolas, institutos e centros de pesquisa.
                  </p>
                  <p className="text-muted-foreground">
                    Em 1937, a instituição foi reorganizada e renomeada como Universidade do Brasil. Recebeu seu nome
                    atual, Universidade Federal do Rio de Janeiro, em 1965.
                  </p>
                  <p className="text-muted-foreground">
                    Hoje, a UFRJ destaca-se como uma das instituições educacionais mais prestigiadas da América Latina,
                    conhecida por sua excelência em ensino, pesquisa e atividades de extensão.
                  </p>
                </div>
                <div className="flex items-center justify-center h-64 bg-muted rounded-xl">
                  <div className="text-center space-y-2">
                    <Building2 className="h-16 w-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground font-medium">Foto histórica da UFRJ</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mission" id="mission" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4 order-2 lg:order-1">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nossa Missão</h2>
                  <p className="text-muted-foreground">
                    A missão da Universidade Federal do Rio de Janeiro é produzir, disseminar e aplicar conhecimento
                    científico, tecnológico e cultural com excelência, contribuindo para o desenvolvimento sustentável e
                    a inclusão social.
                  </p>
                  <h3 className="text-xl font-bold mt-6">Nossos Valores</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Excelência:</span>
                      <span>Compromisso com os mais altos padrões em ensino, pesquisa e atividades de extensão.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Inovação:</span>
                      <span>Fomentar a criatividade e soluções pioneiras para problemas complexos.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Inclusão:</span>
                      <span>Promover a diversidade e igualdade de oportunidades para todos.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Sustentabilidade:</span>
                      <span>Compromisso com práticas ambientalmente responsáveis e desenvolvimento sustentável.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">Responsabilidade Social:</span>
                      <span>Aplicar conhecimento para beneficiar a sociedade e enfrentar desafios sociais.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center h-64 bg-muted rounded-xl order-1 lg:order-2">
                  <div className="text-center space-y-2">
                    <Award className="h-16 w-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground font-medium">Missão da UFRJ</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="leadership" id="leadership" className="mt-6">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Liderança Universitária</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    A UFRJ é liderada por uma equipe de administradores dedicados, comprometidos em manter nossa missão
                    e valores enquanto guiam a universidade em direção à excelência e inovação contínuas.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="text-center">
                      <div className="mx-auto w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
                        <GraduationCap className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <CardTitle>Prof. Dr. João Silva</CardTitle>
                      <CardDescription>Reitor</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        Professor de Física com mais de 25 anos de experiência em administração de ensino superior.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="text-center">
                      <div className="mx-auto w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
                        <GraduationCap className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <CardTitle>Profa. Dra. Maria Oliveira</CardTitle>
                      <CardDescription>Vice-Reitora</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        Professora de Química e ex-Diretora do Instituto de Química.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="text-center">
                      <div className="mx-auto w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
                        <GraduationCap className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <CardTitle>Prof. Dr. Carlos Santos</CardTitle>
                      <CardDescription>Diretor de Pesquisa</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        Professor de Engenharia com vasta experiência em administração de pesquisa e inovação.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center mt-6">
                  <Link href="/about/leadership">
                    <Button>Ver Equipe Completa de Liderança</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Reconhecimento</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Prêmios & Rankings</h2>
              <p className="text-muted-foreground">
                A UFRJ é consistentemente classificada entre as melhores universidades da América Latina e recebeu
                numerosos prêmios por sua excelência acadêmica, contribuições de pesquisa e impacto social.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Classificada entre as 5 melhores universidades do Brasil</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Top 20 na América Latina de acordo com rankings internacionais</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Reconhecida por excelência em pesquisa e inovação</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Múltiplos programas com pontuações máximas em avaliações nacionais</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center h-64 bg-background rounded-xl">
              <div className="text-center space-y-2">
                <Award className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground font-medium">Prêmios da UFRJ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nossos Campi</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A UFRJ opera em quatro campi, cada um com suas especializações e ambiente único.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex items-center justify-center h-64 bg-muted rounded-xl">
                <div className="text-center space-y-2">
                  <Building2 className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground font-medium">Campus Cidade Universitária</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Cidade Universitária (Ilha do Fundão)</h3>
                <p className="text-muted-foreground">
                  Nosso campus principal, localizado na Ilha do Fundão, abriga a maioria dos nossos programas de
                  engenharia, computação, ciências da saúde e ciências exatas. O campus possui instalações modernas de
                  pesquisa, laboratórios e extensas áreas verdes.
                </p>
                <Link href="/about/campuses/cidade-universitaria">
                  <Button variant="outline">Explorar Campus</Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h3 className="text-2xl font-bold">Praia Vermelha</h3>
                <p className="text-muted-foreground">
                  Localizado em uma área histórica do Rio de Janeiro, o campus da Praia Vermelha abriga programas de
                  comunicação, serviço social, história e psicologia. O campus é conhecido por sua bela arquitetura e
                  proximidade com pontos turísticos icônicos do Rio.
                </p>
                <Link href="/about/campuses/praia-vermelha">
                  <Button variant="outline">Explorar Campus</Button>
                </Link>
              </div>
              <div className="flex items-center justify-center h-64 bg-muted rounded-xl order-1 lg:order-2">
                <div className="text-center space-y-2">
                  <Building2 className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground font-medium">Campus Praia Vermelha</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex items-center justify-center h-64 bg-muted rounded-xl">
                <div className="text-center space-y-2">
                  <Building2 className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground font-medium">Campus Macaé</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Macaé</h3>
                <p className="text-muted-foreground">
                  Nosso campus de Macaé é especializado em programas relacionados à farmácia, enfermagem e ciências
                  ambientais. O campus desempenha um papel vital na extensão do alcance educacional da UFRJ além da área
                  metropolitana do Rio.
                </p>
                <Link href="/about/campuses/macae">
                  <Button variant="outline">Explorar Campus</Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h3 className="text-2xl font-bold">Duque de Caxias</h3>
                <p className="text-muted-foreground">
                  O campus de Duque de Caxias concentra-se em programas de formação de professores e ciências. Este
                  campus representa o compromisso da UFRJ em expandir o acesso à educação de qualidade em toda a região.
                </p>
                <Link href="/about/campuses/duque-de-caxias">
                  <Button variant="outline">Explorar Campus</Button>
                </Link>
              </div>
              <div className="flex items-center justify-center h-64 bg-muted rounded-xl order-1 lg:order-2">
                <div className="text-center space-y-2">
                  <Building2 className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground font-medium">Campus Duque de Caxias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
