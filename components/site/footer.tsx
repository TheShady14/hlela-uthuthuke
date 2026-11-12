import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/brand/linkedin-icon";
import { DotPattern } from "@/components/motion/dot-pattern";
import { ALL_SERVICES, CONTACT, NAV_LINKS } from "@/lib/site-content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary">
      <DotPattern className="opacity-[0.35] [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1fr_1.2fr] lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                aria-label="Hlela Uthuthuke home"
                className="inline-flex rounded-xl bg-logo-surface p-2 shadow-sm ring-1 ring-border"
              >
                <Image
                  src="/brand/hlela-logo.png"
                  alt="Hlela Uthuthuke Development and Planning Solutions logo"
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 260px, 240px"
                  className="h-auto w-[240px] lg:w-[260px]"
                />
              </Link>

              <p className="mt-6 max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">
                Turning property potential into successful developments across
                South Africa&apos;s public and private property sectors.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Navigate
              </h3>

              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-foreground/80 transition-colors hover:text-maroon"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Services
              </h3>

              <ul className="flex flex-col gap-3">
                {ALL_SERVICES.slice(0, 6).map((service) => (
                  <li key={service}>
                    <Link
                      href="/#services"
                      className="text-base text-foreground/80 transition-colors hover:text-maroon"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Contact
              </h3>

              <ul className="flex flex-col gap-4 text-base text-foreground/80">
                <li className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-maroon" />

                  <span className="leading-7">{CONTACT.address}</span>
                </li>

                <li className="flex items-center gap-4">
                  <Phone className="h-5 w-5 shrink-0 text-maroon" />

                  <a
                    href={CONTACT.phoneHref}
                    className="transition-colors hover:text-maroon"
                  >
                    {CONTACT.phone}
                  </a>
                </li>

                <li className="flex items-center gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-maroon" />

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="break-all transition-colors hover:text-maroon"
                  >
                    {CONTACT.email}
                  </a>
                </li>
              </ul>

              <Link
                href="/contact"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-maroon px-7 text-base font-semibold text-maroon-foreground transition-transform hover:-translate-y-0.5"
              >
                Start a conversation
              </Link>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            &copy; {year} Hlela Uthuthuke Development Management. All rights
            reserved.
          </p>

          <div className="flex items-center gap-7">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>

            <a
              href="#"
              aria-label="Hlela Uthuthuke on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-maroon hover:text-maroon"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
