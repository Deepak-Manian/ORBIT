import { CurvedArrow, CircularStamp, Starburst } from "../common/Doodles";
import { Icon } from "../common/Icon";

export function PhilosophySection() {
  const problems = [
    {
      num: "01",
      bad: "Endless scrolling on spammy job boards",
      good: "Curated, high-signal matches with source verification and scam filtering",
    },
    {
      num: "02",
      bad: "Repeated, spray-and-pray applications into black holes",
      good: "Tailored evidence matching with human review and approval on every step",
    },
    {
      num: "03",
      bad: "Generic keyword algorithms missing real competence",
      good: "Deep skill extraction from actual case studies, GitHub commits, and projects",
    },
    {
      num: "04",
      bad: "Disconnected notes, ghosted chats, and lost follow-ups",
      good: "Automated lifecycle tracker keeping reminders and next actions in one place",
    },
    {
      num: "05",
      bad: "Invisible skill gaps with no clear path to level up",
      good: "Direct feedback showing the exact 2-3 skills that unlock higher salary bands",
    },
  ];

  return (
    <section
      id="philosophy"
      className="relative py-28 px-6 md:px-12 bg-[var(--cream)] text-[var(--black)] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--black)]/5 border border-[var(--black)]/10 text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
            <span className="text-[var(--orange)]">02</span> / the shift
          </div>
          <CircularStamp
            text="NO MORE KEYWORD SPAM · "
            centerText="✦"
            size={80}
            className="text-[var(--black)] hidden sm:inline-grid"
          />
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-[var(--black)] mb-8 max-w-4xl">
          we believe finding your next opportunity should feel{" "}
          <span className="font-serif italic font-normal text-[var(--orange)]">different.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Left Column: Thesis */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-body text-xl md:text-2xl font-medium leading-relaxed text-[var(--black)]">
              Job searching quietly devolved into an exhausting numbers game of bots applying to
              bots.
            </p>
            <p className="font-body text-base text-[var(--muted)] leading-relaxed">
              Candidates send hundreds of unread resumes. Hiring managers drown in automated spam.
              Meaningful career progression shouldn&apos;t depend on who can shout the loudest.
            </p>

            <div className="p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-3">
              <div className="flex items-center gap-2 font-display font-bold text-sm text-[var(--orange)]">
                <Starburst size={18} color="var(--orange)" />
                <span>THE ORBIT PRINCIPLE</span>
              </div>
              <p className="font-serif italic text-lg leading-snug text-[var(--black)]">
                &ldquo;Evidence before confidence. Your career tools should earn your trust, explain
                every recommendation, and leave you in total command.&rdquo;
              </p>
            </div>

            <div className="relative pt-4 hidden lg:block">
              <CurvedArrow className="w-28 h-16 text-[var(--orange)]" />
              <span className="absolute top-12 left-28 text-xs font-mono font-bold uppercase tracking-wide text-[var(--black)]">
                less noise, more signal
              </span>
            </div>
          </div>

          {/* Right Column: Comparison List */}
          <div className="lg:col-span-7 space-y-4">
            {problems.map((item) => (
              <div
                key={item.num}
                className="group p-5 rounded-2xl bg-white/70 hover:bg-white border border-[var(--line)] hover:border-[var(--black)] hover:shadow-[3px_3px_0px_var(--black)] transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-[var(--orange)] mt-0.5 shrink-0">
                    {item.num}
                  </span>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2 text-sm line-through text-[var(--muted)] font-medium">
                      <Icon name="close" size={14} className="text-red-500 shrink-0" />
                      <span>{item.bad}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base font-bold text-[var(--black)]">
                      <Icon name="check" size={16} className="text-emerald-600 shrink-0" />
                      <span>{item.good}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
