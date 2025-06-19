"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Search, Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Alternar Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9N1HQiUl5WKElujqOEO489ZdEH2CNa.png"
                    width={40}
                    height={40}
                    alt="Logo da UFRJ"
                  />
                  <span className="font-bold">UFRJ</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-8 flex flex-col space-y-4">
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Sobre Nós
                </Link>
                <Link href="/academics" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Acadêmico
                </Link>
                <Link href="/admissions" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Admissões
                </Link>
                <Link href="/student-life" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Vida Estudantil
                </Link>
                <Link href="/news-events" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Notícias & Eventos
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contato
                </Link>
              </div>
              <div className="mt-8">
                <Link href="/admissions" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Inscreva-se Agora</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9N1HQiUl5WKElujqOEO489ZdEH2CNa.png"
              width={40}
              height={40}
              alt="Logo da UFRJ"
            />
            <span className="hidden font-bold sm:inline-block">UFRJ</span>
          </Link>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Sobre Nós</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Sobre a UFRJ</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Conheça nossa história, missão e visão desde nossa fundação em 1920.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about/history" title="História">
                    Fundada em 1920 como Universidade do Rio de Janeiro
                  </ListItem>
                  <ListItem href="/about/mission" title="Missão & Valores">
                    Nosso compromisso com a excelência e inclusão social
                  </ListItem>
                  <ListItem href="/about/leadership" title="Liderança">
                    Conheça nossa administração e conselho diretor
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Acadêmico</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/academics/computer-science" title="Ciência da Computação">
                    Programa abrangente com foco em teoria e tecnologias emergentes
                  </ListItem>
                  <ListItem href="/academics/departments" title="Departamentos">
                    Explore nossos departamentos acadêmicos e centros de pesquisa
                  </ListItem>
                  <ListItem href="/academics/faculty" title="Corpo Docente">
                    Conheça nossos professores e pesquisadores distintos
                  </ListItem>
                  <ListItem href="/academics/research" title="Pesquisa">
                    Descubra nossas iniciativas de pesquisa de ponta
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Admissões</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/admissions/undergraduate" title="Graduação">
                    Processo de inscrição, requisitos e prazos
                  </ListItem>
                  <ListItem href="/admissions/graduate" title="Pós-Graduação">
                    Admissões para programas de mestrado e doutorado
                  </ListItem>
                  <ListItem href="/admissions/financial-aid" title="Auxílio Financeiro">
                    Bolsas, auxílios e outras assistências financeiras
                  </ListItem>
                  <ListItem href="/admissions/international" title="Estudantes Internacionais">
                    Informações para candidatos internacionais
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Vida Estudantil</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/student-life/campus" title="Vida no Campus">
                    Moradia, alimentação e instalações do campus
                  </ListItem>
                  <ListItem href="/student-life/activities" title="Atividades & Clubes">
                    Organizações estudantis e atividades extracurriculares
                  </ListItem>
                  <ListItem href="/student-life/resources" title="Recursos">
                    Apoio acadêmico, serviços de saúde e aconselhamento
                  </ListItem>
                  <ListItem href="/student-life/career" title="Serviços de Carreira">
                    Estágios, colocação profissional e desenvolvimento de carreira
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/news-events" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Notícias & Eventos</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contato</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Pesquisar">
            <Search className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Link href="/admissions" className="hidden md:inline-flex">
            <Button>Inscreva-se</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
