import { Card, CardContent } from "@/components/ui/card"
import { FOUNDERS } from "@/data/founders"

export default function FoundersSection() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-center text-3xl font-bold tracking-tight">
        Founding Team
      </h2>

      <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
        {FOUNDERS.map((founder) => (
          <Card key={founder.id} className="text-center">
            <CardContent className="pt-6">
              <img
                src={import.meta.env.BASE_URL + founder.image}
                alt={founder.name}
                className="mx-auto h-28 w-28 rounded-full border-2 border-primary/40 object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold">{founder.name}</h3>
              <p className="text-sm font-medium text-gradient-accent">
                {founder.role}
              </p>
              <ul className="mt-4 space-y-1.5 text-left text-sm text-muted-foreground">
                {founder.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
