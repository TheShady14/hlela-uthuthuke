"use client";

import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { ALL_SERVICES } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-maroon focus-visible:ring-2 focus-visible:ring-maroon/30";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

function RequiredMark() {
  return (
    <span className="text-maroon" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("fullName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent");

    if (!fullName || !email || !message) {
      setStatus("error");
      setError("Please complete all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setError("Please accept the privacy consent to continue.");
      return;
    }

    setStatus("submitting");
    try {
      // Placeholder submission — wire up to an email/CRM endpoint later.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-border bg-card p-10 text-center lg:p-12">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-maroon/10 text-maroon">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold">
          Thank you for reaching out
        </h3>
        <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
          We&apos;ve received your enquiry and a member of the HLELA team will
          be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:bg-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-sm border border-border bg-card p-8 lg:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name
            <RequiredMark />
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Jane Dlamini"
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organisation"
            className={inputClass}
            placeholder="Company name"
          />
        </div>

        <div>
          <label htmlFor="jobTitle" className={labelClass}>
            Job Title
          </label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            autoComplete="organisation-title"
            className={inputClass}
            placeholder="Your role"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
            <RequiredMark />
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="jane@example.co.za"
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+27 00 000 0000"
          />
        </div>

        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            className={inputClass}
            placeholder="South Africa"
            defaultValue="South Africa"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className={labelClass}>
            Service Required
          </label>
          <select
            id="service"
            name="service"
            className={cn(inputClass, "appearance-none")}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service&hellip;
            </option>
            {ALL_SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
            <RequiredMark />
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={cn(inputClass, "resize-y")}
            placeholder="Tell us about your development or enquiry."
          />
        </div>

        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <input
              type="checkbox"
              name="consent"
              className="mt-1 h-4 w-4 shrink-0 rounded border-input accent-maroon"
            />
            <span>
              I consent to Hlela Uthuthuke storing and processing my details in
              order to respond to my enquiry.
              <RequiredMark />
            </span>
          </label>
        </div>
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="mt-6 flex items-center gap-2 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-maroon px-8 text-base font-semibold text-maroon-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending&hellip;
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
