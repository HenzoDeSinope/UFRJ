import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
  buttonText: string
  buttonLink: string
}

export function HeroSection({ title, subtitle, description, buttonText, buttonLink }: HeroSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">{title}</h1>
            {subtitle && <p className="text-xl font-medium md:text-2xl">{subtitle}</p>}
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">{description}</p>
          </div>
          <div className="space-x-4">
            <Link href={buttonLink}>
              <Button variant="secondary" size="lg">
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
