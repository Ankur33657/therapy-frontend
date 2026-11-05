
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  PhoneCall,
  UserRound,
  Menu,
  X,
  HeartHandshake,
} from "lucide-react";

import ThemeToggle from "@/components/themeToggle";

const navLinks = [
  { name: "Home", href: "/user" },
  { name: "Services", href: "/user/service" },
  { name: "About", href: "/user/about" },
  { name: "Inspirations", href: "/user/inspiration" },
  { name: "Contact", href: "/user/contact" },
];

const DesktopNavbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check whether a navigation link is active
  const isActive = (href: string) => {
    if (href === "/user") {
      return pathname === "/user";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky z-50 mx-auto transition-all duration-300 ease-in-out ${
        isScrolled
          ? "top-1 w-[92%] max-w-6xl"
          : "top-3 w-[95%] max-w-7xl"
      }`}
    >
      <nav
        className={`relative flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/85 shadow-sm backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isScrolled ? "px-4 py-2" : "px-4 py-3 sm:px-5"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div
            className={`flex items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all duration-300 ${
              isScrolled ? "h-8 w-8" : "h-9 w-9"
            }`}
          >
            <HeartHandshake size={isScrolled ? 18 : 21} />
          </div>

          <span
            className={`font-bold tracking-tight text-foreground transition-all duration-300 ${
              isScrolled ? "text-base" : "text-lg"
            }`}
          >
            Therapy<span className="text-primary">Care</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 xl:text-base ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {link.name}

                {/* Active indicator */}
                {active && (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link
            href="/admin/login"
            className="flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            <UserRound size={17} />
            Admin Login
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
          >
            <PhoneCall size={17} />
            Contact Us
          </Link>

          <ThemeToggle />
        </div>

        {/* Mobile Actions */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition hover:bg-muted"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.name}

                    {active && (
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Buttons */}
            <div className="mt-3 flex gap-2 border-t border-border pt-3">
              <Link
                href="/admin/login"
                onClick={() => setIsOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-3 py-3 text-xs font-semibold text-primary-foreground transition hover:opacity-90 sm:text-sm"
              >
                <UserRound size={16} />
                Admin Login
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-secondary px-3 py-3 text-xs font-semibold text-secondary-foreground transition hover:opacity-90 sm:text-sm"
              >
                <PhoneCall size={16} />
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default DesktopNavbar;
