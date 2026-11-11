export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Create your career profile",
      desc: "Turn your past roles, case studies, and GitHub repositories into a living, verifiable intelligence layer.",
    },
    {
      num: "02",
      title: "Connect your AI provider",
      desc: "Link your Google Gemini, Groq, or OpenRouter key. Or run 100% locally with Ollama. Zero shared keys.",
    },
    {
      num: "03",
      title: "Discover high-signal roles",
      desc: "Scout and Sentinel monitor verified portals, filtering out ghost listings, recruiters, and spam.",
    },
    {
      num: "04",
      title: "Specialized agents prepare",
      desc: "Lens identifies exact skill overlaps, Draft crafts authentic narratives, and Coach sets up mock interview sessions.",
    },
    {
      num: "05",
      title: "You review and approve",
      desc: "Human-in-the-loop control. No email is sent, no application submitted, and no data shared without your explicit click.",
    },
    {
      num: "06",
      title: "Track and compound momentum",
      desc: "Track keeps your pipeline organized, reminds you before momentum cools, and updates your market signal.",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[var(--orange)] text-[var(--black)] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-[var(--black)] text-white text-xs font-mono font-bold uppercase tracking-wider">
            07 / how it works
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-[var(--black)]">
            six steps.
            <br />
            <span className="font-serif italic font-normal text-white">one clearer future.</span>
          </h2>
          <p className="max-w-xl text-base md:text-lg text-[var(--black)]/80 mt-4 leading-relaxed font-medium">
            From initial onboarding to written offers: how human agency and coordinated AI combine
            into an unfair career advantage.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1 duration-200"
            >
              <div>
                <span className="font-mono text-2xl font-black text-[var(--orange)] block mb-2">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-lg text-[var(--black)] mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-[var(--muted)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-mono text-[var(--muted)]">
                <span>PHASE {step.num}</span>
                <span className="text-[var(--black)] font-bold">100% TRANSPARENT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
