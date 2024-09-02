import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground flex flex-col sm:flex-row items-center justify-between py-4 px-6">
        <div className="flex items-center gap-4">
          <CloudIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Cloud Summit</h1>
        </div>
        <nav className="flex items-center gap-4 mt-4 sm:mt-0">
          <Link
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Schedule
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Speakers
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Sponsors
          </Link>
          <Link
            href="#"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Team
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Cloud Summit 2023
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join us for a day of inspiring talks, hands-on workshops, and
                  networking with the top cloud experts in the industry.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Register Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="1200"
              height="300"
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover object-center"
            />
          </div>
        </section>
        <section id="schedule" className="bg-muted py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Conference Schedule
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Check out the schedule for the upcoming Cloud Summit.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                        <ClockIcon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="font-semibold">9:00 AM - 10:00 AM</div>
                    </div>
                    <h3 className="text-lg font-bold">Keynote Address</h3>
                    <p className="text-muted-foreground">
                      Join us for the opening keynote address to kick off the
                      conference.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                        <ClockIcon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="font-semibold">10:30 AM - 12:00 PM</div>
                    </div>
                    <h3 className="text-lg font-bold">
                      Breakout Sessions: Cloud Fundamentals
                    </h3>
                    <p className="text-muted-foreground">
                      Learn the basics of cloud computing and how to get
                      started.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                        <ClockIcon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="font-semibold">1:30 PM - 3:00 PM</div>
                    </div>
                    <h3 className="text-lg font-bold">
                      Panel Discussion: Cloud Adoption Strategies
                    </h3>
                    <p className="text-muted-foreground">
                      Hear from industry experts on effective cloud adoption
                      strategies.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                        <ClockIcon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="font-semibold">3:30 PM - 5:00 PM</div>
                    </div>
                    <h3 className="text-lg font-bold">
                      Workshops: Containerization and Orchestration
                    </h3>
                    <p className="text-muted-foreground">
                      Get hands-on experience with container technologies and
                      orchestration.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                        <ClockIcon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="font-semibold">5:30 PM - 7:00 PM</div>
                    </div>
                    <h3 className="text-lg font-bold">Networking Reception</h3>
                    <p className="text-muted-foreground">Join us for drinks</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                        <ClockIcon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="font-semibold">7:30 PM - 9:00 PM</div>
                    </div>
                    <h3 className="text-lg font-bold">Closing Remarks</h3>
                    <p className="text-muted-foreground">
                      Wrap up the day with closing remarks and a look ahead to
                      next year.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="speakers" className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Featured Speakers
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Meet the industry experts speaking at Cloud Summit.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="space-y-4 text-center">
                    <img
                      src="/placeholder.svg"
                      width={120}
                      height={120}
                      alt="Speaker"
                      className="rounded-full mx-auto"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">John Doe</h3>
                      <p className="text-muted-foreground">
                        Cloud Architect, Acme Inc.
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      John is a seasoned cloud architect with over 10 years of
                      experience helping organizations migrate to the cloud.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-4 text-center">
                    <img
                      src="/placeholder.svg"
                      width={120}
                      height={120}
                      alt="Speaker"
                      className="rounded-full mx-auto"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">Jane Smith</h3>
                      <p className="text-muted-foreground">
                        DevOps Engineer, Globex Inc.
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      Jane is a DevOps expert who has helped teams streamline
                      their cloud-based workflows.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-4 text-center">
                    <img
                      src="/placeholder.svg"
                      width={120}
                      height={120}
                      alt="Speaker"
                      className="rounded-full mx-auto"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">Michael Johnson</h3>
                      <p className="text-muted-foreground">
                        Cloud Security Specialist, Initech
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      Michael is an expert in cloud security and will share best
                      practices for securing your cloud infrastructure.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-4 text-center">
                    <img
                      src="/placeholder.svg"
                      width={120}
                      height={120}
                      alt="Speaker"
                      className="rounded-full mx-auto"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">Emily Chen</h3>
                      <p className="text-muted-foreground">
                        Cloud Data Architect, Stark Industries
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      Emily is a cloud data expert who will discuss strategies
                      for building scalable data pipelines in the cloud.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-4 text-center">
                    <img
                      src="/placeholder.svg"
                      width={120}
                      height={120}
                      alt="Speaker"
                      className="rounded-full mx-auto"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">David Lee</h3>
                      <p className="text-muted-foreground">
                        Cloud Infrastructure Architect, Stark Industries
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      David is an expert in cloud infrastructure and will share
                      his insights on building resilient and scalable cloud
                      environments.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="space-y-4 text-center">
                    <img
                      src="/placeholder.svg"
                      width={120}
                      height={120}
                      alt="Speaker"
                      className="rounded-full mx-auto"
                      style={{ aspectRatio: "120/120", objectFit: "cover" }}
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold">Sarah Kim</h3>
                      <p className="text-muted-foreground">
                        Cloud Evangelist, Globex Inc.
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      Sarah is a cloud evangelist who will share her passion for
                      the cloud and inspire attendees to embrace cloud
                      technologies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="sponsors" className="bg-muted py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Sponsors
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Thank you to our sponsors for making this event possible.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={75}
                  alt="Sponsor Logo"
                  className="mx-auto object-contain"
                  style={{ aspectRatio: "150/75", objectFit: "cover" }}
                />
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={75}
                  alt="Sponsor Logo"
                  className="mx-auto object-contain"
                  style={{ aspectRatio: "150/75", objectFit: "cover" }}
                />
                <img
                  src="/placeholder.svg"
                  width={150}
                  height={75}
                  alt="Sponsor Logo"
                  style={{ aspectRatio: "150/75", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}
