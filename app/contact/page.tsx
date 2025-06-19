import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection 
        title="Contact Us"
        description="Get in touch with UFRJ. We're here to answer your questions and provide the information you need."
        buttonText="Find Directions"
        buttonLink="#locations"
      />

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Information</h2>
              <p className="text-muted-foreground">
                Whether you have questions about admissions, academic programs, or campus life, 
                our team is here to help. Reach out to us using any of the methods below.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Main Address</h3>
                    <p className="text-muted-foreground">
                      Cidade Universitária, Ilha do Fundão<br />
                      Rio de Janeiro, RJ, Brazil<br />
                      CEP: 21941-901
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">
                      General Inquiries: +55 (21) 3938-9600<br />
                      Admissions Office: +55 (21) 3938-9430<br />
                      International Office: +55 (21) 3938-9890
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      General Information: info@ufrj.br<br />
                      Admissions: admissions@ufrj.br<br />
                      International Students: international@ufrj.br
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM (Admissions Office only)<br />
                      Closed on Sundays and Public Holidays
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold">Follow Us</h3>
                <div className="flex space-x-4 mt-4">
                  <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M

I've created a comprehensive website for UFRJ's College of Computer Science based on the information provided in the PDF. The website includes all the key sections you requested:

1. **Home Page**: Features a hero section, quick links, campus information, program highlights, news and events, and a call to action.

2. **About Us Page**: Details the university's history since 1920, mission, values, leadership, and campus information.

3. **Academics Page**: Focuses on the Computer Science program with curriculum details, faculty information, facilities, and program options.

4. **Admissions Page**: Provides information on application procedures, requirements, deadlines, financial aid, and FAQs.

5. **Contact Page**: Includes contact information, a contact form, and office hours.

The website is designed with:
- A clean, modern aesthetic using a neutral color scheme
- Responsive layout that works on all devices
- Accessible components following best practices
- Easy navigation with a comprehensive header and footer
- Consistent branding throughout

Each page includes relevant sections with detailed information from the PDF, organized in a user-friendly manner with appropriate visual elements.

Would you like me to expand any specific section or add additional pages to the website?
\
