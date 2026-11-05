
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Brain,
  Sparkles,
  Sun,
  Search,
  ArrowRight,
  Clock,
  BookOpen,
  Leaf,
  Smile,
  Quote,
  HeartHandshake,
  Bookmark,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const categories = [
  "All",
  "Mental Wellness",
  "Self Care",
  "Personal Growth",
  "Mindfulness",
];

const inspirations = [
  {
    id: 1,
    title: "The Importance of Mental Wellness",
    description:
      "Understand why taking care of your mental health is just as important as taking care of your physical health.",
    category: "Mental Wellness",
    readTime: "5 min read",
    icon: Brain,
    date: "Wellness Guide",
  },
  {
    id: 2,
    title: "Make Time for Yourself",
    description:
      "Discover simple ways to prioritize yourself, create healthy boundaries, and make self-care part of your routine.",
    category: "Self Care",
    readTime: "4 min read",
    icon: Heart,
    date: "Self Care",
  },
  {
    id: 3,
    title: "Small Steps, Big Changes",
    description:
      "Learn how small and consistent habits can help you build confidence and create meaningful personal growth.",
    category: "Personal Growth",
    readTime: "6 min read",
    icon: Sparkles,
    date: "Personal Growth",
  },
  {
    id: 4,
    title: "Finding Peace in the Present",
    description:
      "Explore mindfulness techniques that can help you become more aware of the present moment.",
    category: "Mindfulness",
    readTime: "5 min read",
    icon: Sun,
    date: "Mindfulness",
  },
  {
    id: 5,
    title: "Be Kind to Yourself",
    description:
      "Learn the importance of self-compassion and how to replace negative self-talk with understanding.",
    category: "Self Care",
    readTime: "4 min read",
    icon: Smile,
    date: "Self Care",
  },
  {
    id: 6,
    title: "Creating a Positive Mindset",
    description:
      "Practical ideas to recognize positive moments and develop a healthier perspective on everyday challenges.",
    category: "Personal Growth",
    readTime: "7 min read",
    icon: Leaf,
    date: "Personal Growth",
  },
];

const UserInspiration = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [savedItems, setSavedItems] = useState<number[]>([]);

  const filteredInspirations = inspirations.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const toggleSave = (id: number) => {
    setSavedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative px-5 py-20 sm:py-28">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Sparkles className="mr-2 h-4 w-4" />
            A Little Inspiration Every Day
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Find Your Strength.
            <span className="block text-primary">
              Discover Your Peace.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Explore uplifting thoughts, mental wellness insights, and
            practical self-care ideas to support you on your journey
            toward a happier and healthier life.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              onClick={() =>
                document.getElementById("inspiration-list")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Explore Inspiration
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Link href="/user/service">
              <Button variant="outline" size="lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Quote */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-lg sm:px-12">
          <Quote className="mx-auto h-10 w-10 opacity-70" />

          <p className="mx-auto mt-6 max-w-3xl text-2xl font-semibold leading-relaxed sm:text-3xl">
            "You don't have to see the whole staircase, just take the
            first step."
          </p>

          <p className="mt-6 text-sm font-medium text-primary-foreground/75">
            A reminder to keep moving forward.
          </p>

          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-primary-foreground/50" />
        </div>
      </section>

      {/* Inspiration Categories */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Explore & Discover
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Space for Your Growth
            </h2>

            <p className="mt-4 text-muted-foreground">
              Find inspiration for every stage of your wellness journey.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Mental Wellness",
                description: "Understand your thoughts and emotions.",
                icon: Brain,
              },
              {
                title: "Self Care",
                description: "Make yourself a priority every day.",
                icon: Heart,
              },
              {
                title: "Personal Growth",
                description: "Become a better version of yourself.",
                icon: Sparkles,
              },
              {
                title: "Mindfulness",
                description: "Find calm in the present moment.",
                icon: Sun,
              },
            ].map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.title}
                  onClick={() => {
                    setSelectedCategory(category.title);
                    document.getElementById("inspiration-list")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="rounded-2xl border border-border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={25} />
                  </div>

                  <h3 className="font-bold">{category.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore <ArrowRight size={15} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section
        id="inspiration-list"
        className="bg-muted/30 px-5 py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Read & Reflect
              </span>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Inspiration for You
              </h2>

              <p className="mt-3 text-muted-foreground">
                Thoughts and ideas to help you grow, heal, and feel better.
              </p>
            </div>

            <Badge variant="outline" className="w-fit px-4 py-2">
              {filteredInspirations.length} Articles
            </Badge>
          </div>

          {/* Search */}
          <div className="mb-6 relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search inspiration..."
              className="h-11 pl-10"
            />
          </div>

          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
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

          {/* Cards */}
          {filteredInspirations.length > 0 ? (
            <div className="grid grid-cols-1 justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredInspirations.map((item) => {
                const Icon = item.icon;
                const isSaved = savedItems.includes(item.id);

                return (
                  <Card
                    key={item.id}
                    className="group w-full max-w-md overflow-hidden border-border/70 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
                  >
                    <CardHeader>
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon size={27} />
                        </div>

                        <button
                          onClick={() => toggleSave(item.id)}
                          aria-label={isSaved ? "Remove bookmark" : "Save article"}
                          className="rounded-full border border-border p-2 transition hover:bg-muted"
                        >
                          <Bookmark
                            size={18}
                            className={
                              isSaved
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                            }
                          />
                        </button>
                      </div>

                      <Badge variant="secondary" className="w-fit">
                        {item.category}
                      </Badge>

                      <CardTitle className="mt-3 text-xl leading-snug">
                        {item.title}
                      </CardTitle>

                      <CardDescription className="min-h-16 leading-7">
                        {item.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <BookOpen size={16} className="text-primary" />
                        {item.date}
                        <span>•</span>
                        <Clock size={15} />
                        {item.readTime}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border py-16 text-center">
              <Search className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
              <h3 className="text-lg font-semibold">
                No inspiration found
              </h3>
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

      {/* Bottom CTA */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-primary/20 bg-primary/5 px-6 py-14 text-center sm:px-12">
          <HeartHandshake className="mx-auto h-12 w-12 text-primary" />

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Your Journey Deserves Care.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
            Inspiration can be a starting point. If you need additional
            support, explore our services and take the next step.
          </p>

          <Link href="/user/service">
            <Button size="lg" className="mt-8">
              Find Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
};

export default UserInspiration;
