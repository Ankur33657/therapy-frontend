
import Link from "next/link";
import {
  HeartHandshake,
  Brain,
  ShieldCheck,
  Users,
  Heart,
  Target,
  Eye,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HandHeart,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We approach every individual with empathy, kindness, and genuine care.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentiality",
    description:
      "Your privacy matters. We provide a safe and confidential environment.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "We believe everyone deserves access to support without judgment.",
  },
  {
    icon: Brain,
    title: "Professional Care",
    description:
      "We encourage evidence-based approaches and continuous learning.",
  },
];

const benefits = [
  "Personalized mental wellness support",
  "A safe and judgment-free environment",
  "Confidential conversations",
  "Flexible support options",
  "Compassionate and professional guidance",
];

const UserAbout = () => {
  return (
    <main className="overflow-hidden bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative px-5 py-20 sm:py-28">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <HeartHandshake size={17} />
              About TherapyCare
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Mental Wellness,
              <span className="text-primary"> Our Priority.</span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              We believe that mental wellness is an essential part of a
              healthy and fulfilling life. Our goal is to make seeking
              emotional support easier, more comfortable, and accessible
              to everyone.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/user/service"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-border px-6 py-3 font-semibold transition hover:bg-muted"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-5 shadow-xl sm:p-8">
              <div className="flex aspect-[5/4] items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/20">
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-background shadow-lg">
                    <HeartHandshake
                      size={60}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">
                    You Are Not Alone
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Every journey deserves care and understanding.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-primary/5 p-4">
                <Sparkles className="shrink-0 text-primary" size={24} />
                <p className="text-sm font-medium">
                  Small steps today can create meaningful changes tomorrow.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-muted/40 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Supporting You Every Step of the Way
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              We are committed to creating a supportive space where
              individuals can prioritize their mental and emotional well-being.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 leading-8 text-muted-foreground">
                To make mental wellness support approachable and accessible
                by encouraging open conversations, reducing stigma, and
                helping people find the support they need.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 leading-8 text-muted-foreground">
                To build a world where mental health receives the same
                importance as physical health, and everyone feels comfortable
                seeking help without fear or judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              What We Believe
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-bold">{value.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/40 px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Why TherapyCare
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Place Where Your Well-being Comes First
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              Taking the first step toward better mental wellness can feel
              difficult. We aim to make that journey easier through
              understanding, guidance, and a supportive experience.
            </p>

            <div className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2
                    className="shrink-0 text-primary"
                    size={21}
                  />
                  <span className="text-sm font-medium sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl sm:p-12">
            <HandHeart size={48} />

            <h3 className="mt-8 text-3xl font-bold">
              Your Journey Matters.
            </h3>

            <p className="mt-5 leading-8 text-primary-foreground/80">
              There is no perfect timeline for healing or personal growth.
              Every step forward matters, and every person deserves to be
              heard, understood, and supported.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 font-semibold text-foreground transition hover:opacity-90"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-primary/20 bg-primary/5 px-6 py-14 text-center sm:px-12">
          <HeartHandshake
            size={42}
            className="mx-auto text-primary"
          />

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            You Deserve to Feel Better.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
            Your mental wellness journey starts with one small step.
            Let us help you take it.
          </p>

          <Link
            href="/user/service"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Discover Our Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default UserAbout;
