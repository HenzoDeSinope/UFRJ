import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  category: string
  href: string
}

export function NewsCard({ title, date, excerpt, category, href }: NewsCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{category}</Badge>
          <CardDescription className="flex items-center">
            <CalendarDays className="mr-1 h-3 w-3" />
            {date}
          </CardDescription>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link href={href} className="w-full">
          <Button variant="outline" size="sm" className="w-full">
            Leia Mais
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
