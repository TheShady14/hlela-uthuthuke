import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PlaceholderImage } from "@/components/brand/placeholder-image";
import { SectionHeading } from "@/components/brand/section-heading";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { CONTACT } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact | Hlela Uthuthuke",
  description:
    "Get in touch with Hlela Uthuthuke Development Management to discuss your property development or advisory requirements.",
};

const DETAILS = [
  {
    icon: MapPin,
    label: "Address",
    value: CONTACT.address,
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* compact page header band */}
        <section className="pt-20">
          <div className="relative aspect-[21/9] max-h-[30vh] w-full">
            <PlaceholderImage
              path="/images/why-hlela-band.jpg"
              label="Contact header band"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-12">
            <SectionHeading eyebrow="Contact" title="Get in Touch" />
          </div>
        </section>

        {/* two-column layout */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
          <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-[2fr_3fr] lg:gap-16">
            {/* details column — appears after the form on tablet/mobile */}
            <div className="order-2 lg:order-1">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Whether you&apos;re assessing a new opportunity or ready to
                package a development for funding, we&apos;d be glad to hear
                from you. Reach us using the details below or send a message and
                we&apos;ll respond promptly.
              </p>

              <div className="mt-8 space-y-4">
                {DETAILS.map((detail) => {
                  const Icon = detail.icon;
                  const content = (
                    <span className="flex items-center gap-3 py-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {detail.label}
                        </span>
                        <span className="block text-sm font-medium text-foreground">
                          {detail.value}
                        </span>
                      </span>
                    </span>
                  );
                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="block rounded-md transition-colors hover:text-maroon"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={detail.label}>{content}</div>
                  );
                })}
              </div>

              {/* embedded Google Map */}
              <div className="mt-8 overflow-hidden rounded-lg border border-border">
                <iframe
                  title="Map showing 542 Karee Drive, Bassonia Estate, 2190"
                  src={CONTACT.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-video w-full"
                />
              </div>
            </div>

            {/* form column — appears first on tablet/mobile */}
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
