import { ABOUT_TEXT, TAGLINE } from "@/data/founders"

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-gradient-orange">
          {TAGLINE}
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          {ABOUT_TEXT}
        </p>
      </div>
    </section>
  )
}
