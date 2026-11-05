
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Brain,
  Sparkles,
  Star,
  Users,
  MessageCircleHeart,
  CalendarCheck,
  CheckCircle2,
  Quote,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Mental Wellness",
    description:
      "Understand your emotions, build resilience, and develop a healthier mindset.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Counseling",
    description:
      "A supportive space where you can express yourself and explore your feelings.",
  },
  {
    icon: Sparkles,
    title: "Self-care Guidance",
    description:
      "Discover healthy habits and practical ways to bring balance into your life.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "TherapyCare Member",
    initials: "PS",
    rating: 5,
    review:
      "The experience made me feel heard and understood. I really appreciate having a supportive space where I can focus on my well-being.",
  },
  {
    name: "Rahul Mehta",
    role: "TherapyCare Member",
    initials: "RM",
    rating: 5,
    review:
      "I found the platform easy to use and the overall experience welcoming. It encouraged me to take my mental wellness more seriously.",
  },
  {
    name: "Ananya Verma",
    role: "TherapyCare Member",
    initials: "AV",
    rating: 5,
    review:
      "I love the focus on self-care and personal growth. The resources helped me become more mindful of my everyday habits.",
  },
];

const benefits = [
  "A welcoming and supportive environment",
  "Personalized wellness guidance",
  "Easy access to helpful resources",
  "A focus on your individual journey",
];

const HomePage = () => {
  return (
    <main className="overflow-hidden bg-background text-foreground">

      {/* ================= HERO SECTION ================= */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28 lg:pt-28">

        {/* Background decorations */}
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#F87171]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Hero Content */}
          <div className="flex flex-col items-start">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles size={16} />
              Your journey to a healthier mind starts here
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Your Mind Deserves
              <span className="block text-primary">
                Care & Attention.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Life can be challenging, but you don't have to navigate
              everything alone. Take a step towards emotional well-being,
              personal growth, and a happier you.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">

              <Link
                href="/user/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/user/service"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-7 py-4 text-sm font-semibold transition hover:border-primary hover:text-primary"
              >
                Explore Services
                <ArrowUpRight size={17} />
              </Link>

            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-border pt-7">

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold">Your Privacy</p>
                  <p className="text-xs text-muted-foreground">Matters to us</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F87171]/10 text-[#F87171]">
                  <Heart size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold">Your Well-being</p>
                  <p className="text-xs text-muted-foreground">Comes first</p>
                </div>
              </div>

            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#F87171]/10 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/15 blur-2xl" />

            <div className="relative rounded-[2rem] border border-border bg-gradient-to-br from-primary/10 via-background to-[#F87171]/10 p-5 shadow-2xl shadow-primary/10 sm:p-8">

              <div className="flex min-h-[370px] flex-col justify-between rounded-[1.5rem] bg-card p-6 shadow-sm sm:min-h-[420px] sm:p-8">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      A little reminder
                    </p>
                    <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                      Take a breath.
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F87171]/10 text-[#F87171]">
                    <Heart size={25} />
                  </div>
                </div>

                <div className="flex flex-col items-center py-8 text-center">
                  <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-primary/5 sm:h-56 sm:w-56">
                    <div className="absolute inset-4 rounded-full border border-primary/15" />
                    <div className="absolute inset-8 rounded-full border border-primary/20" />

                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/20 sm:h-32 sm:w-32">
                      <HeartHandshake size={55} strokeWidth={1.5} />
                    </div>

                    <Sparkles className="absolute right-5 top-8 text-[#F87171]" size={24} />
                    <Heart className="absolute bottom-8 left-5 fill-[#F87171] text-[#F87171]" size={21} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    You matter.
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                    Give yourself the same care and kindness you give others.
                  </p>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-primary/5 px-4 py-3">
                  <span className="text-sm font-medium">
                    Your wellness journey
                  </span>
                  <span className="text-sm font-bold text-primary">
                    Starts today
                  </span>
                </div>

              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:-left-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F87171]/10 text-[#F87171]">
                <MessageCircleHeart size={23} />
              </div>
              <div>
                <p className="text-sm font-bold">You are not alone</p>
                <p className="text-xs text-muted-foreground">
                  We are here to support you
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTRO STRIP ================= */}
      <section className="border-y border-border bg-muted/40 px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 text-center sm:grid-cols-3">

          <div className="flex items-center justify-center gap-3">
            <HeartHandshake className="text-primary" size={25} />
            <span className="text-sm font-semibold sm:text-base">
              Compassionate Support
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="text-[#F87171]" size={25} />
            <span className="text-sm font-semibold sm:text-base">
              Privacy-conscious Experience
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Sparkles className="text-primary" size={25} />
            <span className="text-sm font-semibold sm:text-base">
              Focus on Personal Growth
            </span>
          </div>

        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              What We Offer
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Support for Every Step
              <span className="text-primary"> of Your Journey</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Explore ways to understand yourself better and build
              habits that support your mental well-being.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    index === 1
                      ? "bg-[#F87171]/10 text-[#F87171]"
                      : "bg-primary/10 text-primary"
                  }`}>
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  <Link
                    href="/user/service"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              );
            })}

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/user/service"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              View All Services
              <ArrowUpRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#142D4E] px-5 py-20 text-white sm:px-8 lg:py-24 rounded-lg">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F87171]">
              Why TherapyCare
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              A Safe Space to
              <span className="block text-[#F87171]">
                Be Yourself.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[#B8C7DA] sm:text-base">
              We believe everyone deserves a space where their feelings
              are respected and their well-being is valued. Our goal is
              to make mental wellness more approachable.
            </p>

            <div className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F87171]/15 text-[#F87171]">
                    <CheckCircle2 size={17} />
                  </div>

                  <span className="text-sm font-medium text-[#E2EAF4] sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/user/about"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
            >
              Discover Our Story
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-7">
              <HeartHandshake className="text-[#F87171]" size={32} />
              <h3 className="mt-6 text-lg font-bold">
                Empathy First
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#B8C7DA]">
                Every journey deserves understanding and compassion.
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-7">
              <ShieldCheck className="text-[#F87171]" size={32} />
              <h3 className="mt-6 text-lg font-bold">
                Privacy Matters
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#B8C7DA]">
                We value your privacy and encourage a safe experience.
              </p>
            </div>

            <div className="-mt-10 rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-7">
              <Brain className="text-[#F87171]" size={32} />
              <h3 className="mt-6 text-lg font-bold">
                Mindful Growth
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#B8C7DA]">
                Small steps can help create meaningful changes.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-7">
              <Users className="text-[#F87171]" size={32} />
              <h3 className="mt-6 text-lg font-bold">
                You Come First
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#B8C7DA]">
                Your needs and individual experiences matter.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Kind Words
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Stories That
              <span className="text-primary"> Inspire Us.</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Every wellness journey is unique. Here are some sample
              experiences that reflect the welcoming environment
              we aim to create.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Quote
                  size={36}
                  className="absolute right-7 top-7 text-primary/10"
                />

                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={17}
                      className="fill-current"
                    />
                  ))}
                </div>

                <p className="mt-7 flex-1 text-sm leading-8 text-muted-foreground">
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {testimonial.initials}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>

                  <div className="ml-auto text-[#2563EB]">
                    <CheckCircle2 size={19} />
                  </div>

                </div>
              </div>
            ))}

          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Illustrative testimonials for UI demonstration. Replace with
            genuine, permission-based customer feedback before publishing.
          </p>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 pb-20 sm:px-8 lg:pb-24">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[#142D4E] px-6 py-14 text-center text-white shadow-xl sm:px-12 sm:py-20">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#F87171]/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <CalendarCheck size={28} className="text-[#F87171]" />
            </div>

            <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
              Make Yourself a Priority.
            </h2>

            <p className="mt-5 text-sm leading-8 text-blue-100 sm:text-base">
              Your mental well-being deserves attention. Take that first
              step today and start building a healthier relationship
              with yourself.
            </p>

            <Link
              href="/user/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#142D4E] shadow-lg transition-all hover:-translate-y-1 hover:bg-[#DBEAFE]"
            >
              Get Started Today
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;
