
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  HeartHandshake,
  Send,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Headphones,
} from "lucide-react";

import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Available during business hours",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "support@therapycare.com",
    description: "We usually respond within 24 hours",
    href: "mailto:support@therapycare.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Pune, Maharashtra, India",
    description: "Contact us for appointment details",
    href: "https://maps.google.com/?q=Pune",
  },
];

const faqs = [
  {
    question: "How can I book a therapy session?",
    answer:
      "You can contact us through the form, phone, or email. Our team can help you understand the available services and booking process.",
  },
  {
    question: "Is my personal information confidential?",
    answer:
      "Your information should be handled confidentially according to our privacy policy and applicable professional requirements.",
  },
  {
    question: "Can I ask questions before booking?",
    answer:
      "Absolutely. You can contact our team with questions about services, appointments, and the support options available.",
  },
  {
    question: "What if I need immediate mental health support?",
    answer:
      "This contact form is not an emergency service. If you are in immediate danger, contact local emergency services or visit the nearest emergency department.",
  },
];

const UserContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect this handler to your backend API to send the message.
    console.log("Contact form data:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative px-5 py-20 sm:py-28">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <HeartHandshake className="mr-2 h-4 w-4" />
            We're Here for You
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Start a
            <span className="text-primary"> Conversation.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Whether you have a question, need guidance, or want to explore
            our services, we're here to listen. Reach out and take your
            first step toward better well-being.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              onClick={() =>
                document.getElementById("contact-form")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Send a Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button  variant="outline" size="lg">
              <Link href="/user/service">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;

            return (
              <Card
                key={detail.title}
                className="group border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <CardContent className="flex items-start gap-5 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold">{detail.title}</h3>

                    <a
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-2 block break-words text-sm font-medium text-primary hover:underline"
                    >
                      {detail.value}
                    </a>

                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {detail.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Contact Form and Office Hours */}
      <section className="bg-muted/30 px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.5fr_1fr]">

          {/* Contact Form */}
          <Card id="contact-form" className="scroll-mt-28 border-border/70 shadow-sm">
            <CardHeader className="p-6 sm:p-8">
              <Badge variant="secondary" className="w-fit">
                Get in Touch
              </Badge>

              <CardTitle className="mt-3 text-2xl sm:text-3xl">
                Send Us a Message
              </CardTitle>

              <p className="text-sm leading-6 text-muted-foreground">
                Fill out the form below and our team will get back to you.
              </p>
            </CardHeader>

            <CardContent className="px-6 pb-8 sm:px-8">
              {submitted ? (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />

                  <h3 className="mt-4 text-xl font-bold">
                    Message Submitted!
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Your form was accepted locally. Connect the form to
                    your backend to deliver messages to your team.
                  </p>

                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold">
                        Full Name *
                      </label>

                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold">
                        Email Address *
                      </label>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold">
                        Phone Number
                      </label>

                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold">
                        Subject *
                      </label>

                      <Select
                        value={formData.subject}
                        onValueChange={(value:any ) =>
                          setFormData({ ...formData, subject: value })
                        }
                        required
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="General Inquiry">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="Therapy Services">
                            Therapy Services
                          </SelectItem>
                          <SelectItem value="Appointment">
                            Appointment
                          </SelectItem>
                          <SelectItem value="Technical Support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="Other">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold">
                      Your Message *
                    </label>

                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <p className="text-xs leading-5 text-muted-foreground">
                    Please avoid including highly sensitive medical or
                    personal information in this general contact form.
                  </p>

                  <Button type="submit" className="w-full sm:w-auto">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Office Information */}
          <div className="space-y-6">

            <Card className="border-border/70">
              <CardContent className="p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock size={25} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Our Availability
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Contact our team during the following hours.
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex justify-between gap-3 border-b border-border pb-3">
                    <span className="text-muted-foreground">
                      Monday – Friday
                    </span>
                    <span className="font-semibold">9 AM – 6 PM</span>
                  </div>

                  <div className="flex justify-between gap-3 border-b border-border pb-3">
                    <span className="text-muted-foreground">
                      Saturday
                    </span>
                    <span className="font-semibold">10 AM – 4 PM</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-muted-foreground">
                      Sunday
                    </span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>

                <p className="mt-5 text-xs text-muted-foreground">
                  Hours are illustrative. Please confirm actual availability.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-primary text-primary-foreground">
              <CardContent className="p-6 sm:p-8">
                <Headphones size={35} />

                <h3 className="mt-5 text-2xl font-bold">
                  Need Someone to Talk To?
                </h3>

                <p className="mt-3 text-sm leading-7 text-primary-foreground/80">
                  We're here to help you understand the support options
                  available and guide you toward the right next step.
                </p>

                <a
                  href="mailto:support@therapycare.com"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
                >
                  Email Our Team
                  <ArrowRight size={16} />
                </a>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold">Connect With Us</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Follow us for wellness insights and updates.
              </p>

              <div className="mt-5 flex gap-3">
                {[FaInstagram, FaFacebook, FaLinkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={["Instagram", "Facebook", "LinkedIn"][index]}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground transition hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <Badge variant="secondary">
              <MessageCircle className="mr-2 h-4 w-4" />
              Frequently Asked Questions
            </Badge>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Have Questions?
            </h2>

            <p className="mt-3 text-muted-foreground">
              Here are some answers to help you get started.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {faq.question}

                  <span className="text-xl text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default UserContact;
