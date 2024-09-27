import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, MessageSquare, ShieldCheck } from "lucide-react";

export default function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link className="flex items-center justify-center" href="#">
          <Database className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-semibold">DatabaseAI</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Sign In
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto max-w-5xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Transform Your Ideas into Databases with Natural Language
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Describe your database in plain English, and our AI will
                  create it for you instantly.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <MessageSquare className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Natural Language Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Describe your databases in plain language, and watch as our
                    AI transforms your words into fully-functional database
                    schemas.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <ShieldCheck className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Personalized Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Each user gets their own isolated database environment,
                    ensuring data security and privacy for all your projects.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <Database className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Intuitive Query Interface</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Run SQL queries with ease using our user-friendly interface,
                    designed for both beginners and experienced developers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-500 dark:text-gray-400">
                    "This platform has revolutionized how I create and manage
                    databases. The natural language interface is a
                    game-changer!"
                  </p>
                  <p className="font-semibold mt-4">
                    - Alex Johnson, Software Developer
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-500 dark:text-gray-400">
                    "As a startup founder, this tool has saved me countless
                    hours. It's like having a database expert on call 24/7."
                  </p>
                  <p className="font-semibold mt-4">
                    - Sarah Lee, Tech Entrepreneur
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between items-center border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 DatabaseAI Inc. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
