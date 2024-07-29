import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link";
import { HamburgerMenuIcon, LightningBoltIcon, TimerIcon } from "@radix-ui/react-icons";
import Panda from "@/public/Designer.jpeg"
import Logo from "@/components/Logo";
import Auth from "@/components/Auth";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default function Home() {
  const {userId}=auth()
  if (userId) {
    redirect("/dashboard")
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
     <Logo/>
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-primary-foreground border-transparent px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 hover:border-white border-2
          hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}
        >
          <Auth/>
        </Link>
      </nav>
      <button className="md:hidden">
        <HamburgerMenuIcon className="h-6 w-6" />
      </button>
    </header>
    <main className="flex-1">
      <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Effortless Social Media Content Generation</h1>
            <p className="text-lg md:text-xl">
              Our AI-powered content generator takes the hassle out of creating engaging social media posts. Boost
              your online presence with personalized, high-performing content.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Sign Up Now
            </Link>
          </div>
          <Image src={Panda} width={600} height={400} alt="AI Content Generator" className="mx-auto" />
        </div>
      </section>
      <section id="features" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Discover how our AI-powered content generator can transform your social media strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <LightningBoltIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold mt-4">Personalized Content</h3>
              <p className="text-muted-foreground mt-2">
                Our AI analyzes your brand, audience, and goals to generate content tailored to your needs.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <LightningBoltIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold mt-4">Increased Engagement</h3>
              <p className="text-muted-foreground mt-2">
                Boost your social media engagement with our high-performing, attention-grabbing content.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <TimerIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold mt-4">Time-Saving</h3>
              <p className="text-muted-foreground mt-2">
                Spend less time creating content and more time connecting with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="examples" className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">See Our AI-Generated Content</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Check out some examples of the high-quality content our platform can produce.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Image src="/placeholder.svg" width={300} height={200} alt="Example Content" className="rounded-lg" />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold">Engaging Instagram Post</h3>
                  <p className="text-muted-foreground mt-2">
                    Visually striking and on-brand content to boost your social media presence.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Image src="/placeholder.svg" width={300} height={200} alt="Example Content" className="rounded-lg" />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold">Captivating Twitter Thread</h3>
                  <p className="text-muted-foreground mt-2">
                    Engaging, shareable content that drives conversations and interactions.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Image src="/placeholder.svg" width={300} height={200} alt="Example Content" className="rounded-lg" />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold">Attention-Grabbing LinkedIn Post</h3>
                  <p className="text-muted-foreground mt-2">
                    Professional, thought-provoking content to showcase your expertise.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Hear from businesses that have transformed their social media with our AI-powered content generator.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">Sarah Chen</h3>
                    <p className="text-muted-foreground">CEO, Acme Corp</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  Using the AI Content Generator has been a game-changer\n for our social media strategy. The
                  personalized, engaging\n content has helped us connect with our audience and drive\n real results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">Marketing Manager, Widgets Inc</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  The AI Content Generator has saved us so much time and\n effort in creating social media content.
                  The quality of\n the posts is outstanding, and our engagement has\n skyrocketed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">Lisa Martinez</h3>
                    <p className="text-muted-foreground">Social Media Manager, Acme Inc</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4">
                  I am amazed by the quality and effectiveness of the\n content generated by this platform. It is a
                  {"must-have"} tool\n for any business looking to improve their social media\n presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">&copy; 2024 AI Content Generator</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  </div>
  );
}
