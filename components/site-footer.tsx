import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 md:py-16 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9N1HQiUl5WKElujqOEO489ZdEH2CNa.png"
                width={40}
                height={40}
                alt="Logo da UFRJ"
              />
              <div>
                <p className="font-bold">UFRJ</p>
                <p className="text-xs text-primary-foreground/70">Universidade Federal do Rio de Janeiro</p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Produzindo, disseminando e aplicando conhecimento científico, tecnológico e cultural com excelência,
              contribuindo para o desenvolvimento sustentável e a inclusão social.
            </p>
            <div className="flex space-x-3">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Facebook"
                  className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Twitter"
                  className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Instagram"
                  className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="LinkedIn"
                  className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="YouTube"
                  className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Acadêmico
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Admissões
                  </Link>
                </li>
                <li>
                  <Link href="/student-life" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Vida Estudantil
                  </Link>
                </li>
                <li>
                  <Link href="/news-events" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Notícias & Eventos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Recursos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/library" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Biblioteca
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Pesquisa
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="/alumni" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Ex-alunos
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Acessibilidade
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Entre em Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span className="text-primary-foreground/80">
                  Cidade Universitária, Ilha do Fundão
                  <br />
                  Rio de Janeiro, RJ, Brasil
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                <span className="text-primary-foreground/80">+55 (21) 3938-9600</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0" />
                <span className="text-primary-foreground/80">contato@ufrj.br</span>
              </li>
            </ul>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Assine nossa newsletter</h4>
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Seu email"
                  className="max-w-[180px] bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  aria-label="Seu email"
                />
                <Button type="submit" size="sm" variant="secondary">
                  Assinar
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-primary-foreground/70">
              &copy; {new Date().getFullYear()} Universidade Federal do Rio de Janeiro. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-xs text-primary-foreground/70">
              <Link href="/terms" className="hover:underline">
                Termos de Serviço
              </Link>
              <Link href="/privacy" className="hover:underline">
                Política de Privacidade
              </Link>
              <Link href="/sitemap" className="hover:underline">
                Mapa do Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
