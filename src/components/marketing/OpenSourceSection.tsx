import { Icon } from "../common/Icon";
import { Starburst, StickerBadge } from "../common/Doodles";

export function OpenSourceSection() {
  const pillars = [
    {
      num: "01",
      title: "Open Source by Default",
      desc: "Inspect it. Fork it. Self-host it. Your career tools should earn your trust through verifiable code, not closed-box marketing claims.",
    },
    {
      num: "02",
      title: "Privacy-First Architecture",
      desc: "Your resumes, inbox tokens, and provider credentials belong to you. Zero data harvesting, zero behavioral tracking across companies.",
    },
    {
      num: "03",
      title: "Community-Shaped Intelligence",
      desc: "Built by product engineers, designers, and career switchers. Contribute prompt rubrics, company evaluation criteria, and scrapers.",
    },
    {
      num: "04",
      title: "India-First, Globally Curious",
      desc: "Deep local signal quality starting with Bengaluru, Hyderabad, and Chennai, scaling across India with multilingual readiness from day one.",
    },
  ];

  return (
    <section
      id="open"
      className="relative py-28 px-6 md:px-12 bg-[var(--black)] text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center justify-between mb-6">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold uppercase tracking-wider text-[var(--lime)]">
            08 / built in public
          </span>
          <StickerBadge color="lavender" rotate="3deg">
            MIT Licensed Core
          </StickerBadge>
        </div>

        {/* Section Headline */}
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-white mb-6 max-w-3xl">
          built for people.
          <br />
          powered by intelligence.
          <br />
          <span className="font-serif italic font-normal text-[var(--orange)]">
            open to everyone.
          </span>
        </h2>
        <p className="max-w-2xl text-base md:text-lg text-white/70 leading-relaxed mb-14">
          Finding work is one of the most personal, high-stakes decisions of your life. The code
          guiding those moves should be transparent, verifiable, and free from hidden agendas.
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="p-6 md:p-8 rounded-2xl bg-[#121214] border-2 border-white/15 hover:border-white/30 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-[var(--lime)]">{p.num}</span>
                <Starburst size={16} color="var(--orange)" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">{p.title}</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* GitHub Star Banner */}
        <div className="p-8 rounded-2xl bg-white/5 border-2 border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white text-[var(--black)] grid place-items-center shrink-0 shadow">
              <Icon name="github" size={32} />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                ORBIT Career Intelligence Repository
              </h4>
              <p className="text-xs text-white/60">
                Star the project on GitHub, report ghost job patterns, or contribute agent tools.
              </p>
            </div>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--black)] font-body font-bold text-sm shadow-[3px_3px_0px_var(--orange)] hover:bg-[var(--lime)] transition-colors shrink-0"
          >
            <span>Star on GitHub</span>
            <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
