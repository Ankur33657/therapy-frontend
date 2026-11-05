
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Brain,
  HeartHandshake,
  Users,
  MessageCircleHeart,
  Sparkles,
  ShieldCheck,
  Search,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const services = [
  {
    id: 1,
    title: "Individual Therapy",
    description:
      "One-on-one sessions to help you understand emotions, overcome challenges, and build healthier habits.",
    icon: Brain,
    category: "Therapy",
    duration: "45–60 min",
    features: ["Personalized sessions", "Emotional support"],
  },
  {
    id: 2,
    title: "Couples Counseling",
    description:
      "Strengthen relationships through better communication, mutual understanding, and guided conversations.",
    icon: HeartHandshake,
    category: "Counseling",
    duration: "60 min",
    features: ["Relationship guidance", "Communication support"],
  },
  {
    id: 3,
    title: "Family Counseling",
    description:
      "Create healthier family relationships by addressing conflicts and improving communication.",
    icon: Users,
    category: "Counseling",
    duration: "60 min",
    features: ["Family guidance", "Conflict resolution"],
  },
  {
    id: 4,
    title: "Stress Management",
    description:
      "Learn practical techniques to manage everyday stress and develop a healthier work-life balance.",
    icon: Sparkles,
    category: "Wellness",
    duration: "45 min",
    features: ["Relaxation techniques", "Stress awareness"],
  },
  {
    id: 5,
    title: "Emotional Wellness",
    description:
      "Explore your emotions and develop skills to improve emotional awareness and resilience.",
    icon: MessageCircleHeart,
    category: "Wellness",
    duration: "45 min",
    features: ["Emotional awareness", "Self-development"],
  },
  {
    id: 6,
    title: "Mental Health Assessment",
    description:
      "Discuss your concerns with a qualified professional and explore appropriate next steps.",
    icon: ShieldCheck,
    category: "Assessment",
    duration: "30–45 min",
    features: ["Initial consultation", "Guided recommendations"],
  },
];

const categories = ["All", "Therapy", "Counseling", "Wellness", "Assessment"];

const UserService = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" ||
      service.category === selectedCategory;

    const matchesSearch =
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 py-20 sm:py-28">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <HeartHandshake className="mr-2 h-4 w-4" />
            Your Wellness Matters
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Care That Understands
            <span className="text-primary"> You.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Explore our mental wellness services designed to support your
            emotional well-being, personal growth, and healthier relationships.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button  size="lg">
             Get Started
            </Button>

            <Button  variant="outline" size="lg">
              <Link href="/user/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 px-5 py-20">
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                What We Offer
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Explore Our Services
              </h2>

              <p className="mt-3 max-w-xl text-muted-foreground">
                Find the right kind of support for your mental and emotional
                well-being.
              </p>
            </div>

            <Badge variant="outline" className="w-fit px-4 py-2">
              {filteredServices.length} Services Available
            </Badge>
          </div>

          {/* Search and Filters */}
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-11 pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Service Cards */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => {
                const Icon = service.icon;

                return (
                  <Card
                    key={service.id}
                    className="group w-full max-w-md overflow-hidden border-border/70 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
                  >
                    <CardHeader className="pb-3">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon size={28} />
                        </div>

                        <Badge variant="secondary">
                          {service.category}
                        </Badge>
                      </div>

                      <CardTitle className="text-xl">
                        {service.title}
                      </CardTitle>

                      <CardDescription className="min-h-16 leading-7">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center gap-2 border-y border-border py-4 text-sm text-muted-foreground">
                        <Clock size={16} className="text-primary" />
                        <span>{service.duration}</span>
                      </div>

                      <div className="mt-4 space-y-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2
                              size={16}
                              className="shrink-0 text-primary"
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button  className="w-full">
                       
                          Explore Service
                         
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border py-16 text-center">
              <Search className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
              <h3 className="text-lg font-semibold">No services found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try another search term or category.
              </p>
              <Button
                variant="outline"
                className="mt-5"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

     
    </main>
  );
};

export default UserService;
