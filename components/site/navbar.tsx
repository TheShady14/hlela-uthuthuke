"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { CONTACT, NAV_LINKS } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const pathname = usePathname();
  const onHome = pathname === "/";

  /*
   * Navbar scroll state
   */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /*
   * Active section detection
   *
   * The home page uses sticky slides, so the actual section position
   * cannot reliably tell us which section is currently visible.
   *
   * The zero-height [data-slide-anchor] elements provide stable
   * positions that we can use to determine the active navigation item.
   */
  useEffect(() => {
    if (!onHome) return;

    const navIds = new Set(NAV_LINKS.map((link) => link.href.split("#")[1]));

    let frame = 0;

    const update = () => {
      frame = 0;

      const readingLine = window.innerHeight * 0.45;

      const anchors = document.querySelectorAll<HTMLElement>(
        "[data-slide-anchor]"
      );

      let current = "";

      for (const element of anchors) {
        if (element.getBoundingClientRect().top <= readingLine) {
          current = element.id;
        } else {
          break;
        }
      }

      setActive(navIds.has(current) ? current : "");
    };

    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", schedule, {
      passive: true,
    });

    window.addEventListener("resize", schedule);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [onHome]);

  /*
   * Mobile drawer behaviour
   *
   * Prevent the page behind the drawer from scrolling and allow
   * Escape to close the menu.
   */
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  /*
   * Close mobile menu when navigating to another route.
   */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "nav-light fixed inset-x-0 top-0 z-[60] border-b text-foreground transition-all duration-300",
        scrolled
          ? [
              "border-border/70",
              "bg-background/95",
              "shadow-sm",
              "backdrop-blur-xl",
            ]
          : [
              "border-transparent",
              "bg-background/90",
              "md:bg-background/70",
              "md:backdrop-blur-md",
            ]
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-12",
          scrolled ? "h-16" : "h-20"
        )}
      >
        {/* Logo */}
        <Link href="/" aria-label="Hlela Uthuthuke home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.split("#")[1];
            const isActive = onHome && active === id;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors",
                  "text-muted-foreground hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                {link.label}

                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-maroon"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            href="/contact"
            className={cn(
              "inline-flex h-11 items-center justify-center",
              "rounded-full bg-maroon px-6",
              "text-sm font-semibold text-maroon-foreground",
              "transition-all duration-200",
              "hover:-translate-y-0.5 hover:shadow-md",
              "active:translate-y-0"
            )}
          >
            Contact
          </Link>
        </div>

        {/* Mobile / tablet actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center",
              "rounded-full border border-border",
              "text-foreground",
              "transition-colors",
              "hover:bg-muted"
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Portaled to <body>: the scrolled header's backdrop-blur creates a
          containing block that would otherwise trap this fixed drawer. */}
      {mounted && createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] isolate lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className={cn(
                "fixed inset-y-0 right-0 z-[80]",
                "flex w-full max-w-md flex-col",
                "border-l border-border",
                "bg-background p-6",
                "shadow-2xl"
              )}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  aria-label="Hlela Uthuthuke home"
                  onClick={() => setOpen(false)}
                >
                  <Logo />
                </Link>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center",
                    "rounded-full border border-border",
                    "text-foreground",
                    "transition-colors",
                    "hover:bg-muted"
                  )}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav
                aria-label="Mobile navigation"
                className="mt-10 flex flex-1 flex-col justify-center gap-2"
              >
                {NAV_LINKS.map((link, index) => {
                  const id = link.href.split("#")[1];
                  const isActive = onHome && active === id;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.05 + index * 0.05,
                        duration: 0.25,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-center justify-center",
                          "rounded-xl px-5 py-4",
                          "text-center text-2xl font-semibold",
                          "transition-all duration-200",
                          isActive
                            ? "bg-muted text-maroon"
                            : "text-foreground hover:bg-muted hover:text-maroon"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer actions */}
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "inline-flex h-12 items-center justify-center",
                    "rounded-full bg-maroon",
                    "text-base font-semibold",
                    "text-maroon-foreground",
                    "transition-all duration-200",
                    "hover:-translate-y-0.5 hover:shadow-md"
                  )}
                >
                  Contact
                </Link>

                <a
                  href={CONTACT.phoneHref}
                  className={cn(
                    "inline-flex h-12 items-center justify-center gap-2",
                    "rounded-full border border-border",
                    "text-base font-medium text-foreground",
                    "transition-colors",
                    "hover:bg-muted"
                  )}
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </header>
  );
}
