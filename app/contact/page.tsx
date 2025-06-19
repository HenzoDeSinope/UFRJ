import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Textarea } from "@/components/ui/textarea"
import { HeroSection } from "@/components/hero-section"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Contato"
        description="Entre em contato com a UFRJ. Estamos aqui para responder suas perguntas e fornecer as informações que você precisa."
        buttonText="Encontrar Direções"
        buttonLink="#locations"
      />

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Entre em Contato</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Informações de Contato</h2>
              <p className="text-muted-foreground">
                Seja para questões sobre admissões, programas acadêmicos ou vida no campus, nossa equipe está aqui para
                ajudar. Entre em contato conosco usando qualquer um dos métodos abaixo.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Endereço Principal</h3>
                    <p className="text-muted-foreground">
                      Cidade Universitária, Ilha do Fundão
                      <br />
                      Rio de Janeiro, RJ, Brasil
                      <br />
                      CEP: 21941-901
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <p className="text-muted-foreground">
                      Informações Gerais: +55 (21) 3938-9600
                      <br />
                      Escritório de Admissões: +55 (21) 3938-9430
                      <br />
                      Escritório Internacional: +55 (21) 3938-9890
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      Informações Gerais: info@ufrj.br
                      <br />
                      Admissões: admissions@ufrj.br
                      <br />
                      Estudantes Internacionais: international@ufrj.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda - Sexta: 8:00 - 18:00
                      <br />
                      Sábado: 9:00 - 13:00 (Apenas Escritório de Admissões)
                      <br />
                      Fechado aos domingos e feriados
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Envie uma Mensagem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        Nome
                      </label>
                      <Input id="firstName" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Sobrenome
                      </label>
                      <Input id="lastName" placeholder="Seu sobrenome" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto
                    </label>
                    <Input id="subject" placeholder="Assunto da sua mensagem" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea id="message" placeholder="Escreva sua mensagem aqui..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nossos Campi</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A UFRJ possui quatro campi principais. Encontre informações de contato específicas para cada
                localização.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Cidade Universitária</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Ilha do Fundão, Rio de Janeiro
                </p>
                <p className="text-sm text-muted-foreground">
                  <Phone className="inline h-4 w-4 mr-1" />
                  (21) 3938-9600
                </p>
                <p className="text-sm text-muted-foreground">
                  <Mail className="inline h-4 w-4 mr-1" />
                  fundao@ufrj.br
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Praia Vermelha</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Urca, Rio de Janeiro
                </p>
                <p className="text-sm text-muted-foreground">
                  <Phone className="inline h-4 w-4 mr-1" />
                  (21) 3938-5000
                </p>
                <p className="text-sm text-muted-foreground">
                  <Mail className="inline h-4 w-4 mr-1" />
                  praiav@ufrj.br
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Macaé</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Macaé, RJ
                </p>
                <p className="text-sm text-muted-foreground">
                  <Phone className="inline h-4 w-4 mr-1" />
                  (22) 2796-3000
                </p>
                <p className="text-sm text-muted-foreground">
                  <Mail className="inline h-4 w-4 mr-1" />
                  macae@ufrj.br
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Duque de Caxias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Duque de Caxias, RJ
                </p>
                <p className="text-sm text-muted-foreground">
                  <Phone className="inline h-4 w-4 mr-1" />
                  (21) 2679-9200
                </p>
                <p className="text-sm text-muted-foreground">
                  <Mail className="inline h-4 w-4 mr-1" />
                  caxias@ufrj.br
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Siga-nos nas Redes Sociais</h2>
              <p className="text-muted-foreground">
                Mantenha-se conectado com a UFRJ através de nossas redes sociais para as últimas notícias, eventos e
                atualizações da universidade.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" aria-label="Facebook">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" aria-label="Twitter">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Button>
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" aria-label="Instagram">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" aria-label="LinkedIn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" aria-label="YouTube">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center h-64 bg-muted rounded-xl">
              <div className="text-center space-y-2">
                <Mail className="h-16 w-16 text-muted-foreground mx-auto" />
                <p className="text-muted-foreground font-medium">Entre em Contato</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
