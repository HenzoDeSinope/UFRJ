import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Building2 } from "lucide-react"

interface CampusCardProps {
  name: string
  location: string
  description: string
  imageSrc: string
}

export function CampusCard({ name, location, description }: CampusCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="flex items-center justify-center h-48 bg-muted">
        <div className="text-center space-y-2">
          <Building2 className="h-12 w-12 text-muted-foreground mx-auto" />
          <p className="text-sm text-muted-foreground font-medium">{name}</p>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{name}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-3 w-3" />
          {location}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/campus/${name.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
          <Button variant="outline" size="sm" className="w-full">
            Saiba Mais
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
