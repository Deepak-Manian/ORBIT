import { Icon } from "../common/Icon";
import { Starburst, StickerBadge } from "../common/Doodles";

export function BYOASection() {
  const providers = [
    {
      name: "Google Gemini",
      status: "Connected · Verified",
      color: "#718CFF",
      tag: "Multimodal Long Context",
      models: "Gemini 2.5 Pro / Flash",
      tilt: "-3deg",
    },
    {
      name: "Groq",
      status: "Ready to connect",
      color: "#FF633D",
      tag: "Ultra-Fast Inference",
      models: "Llama 3.3 70B Versatile",
      tilt: "2deg",
    },
    {
      name: "OpenRouter",
      status: "Ready to connect",
      color: "#DDA7F5",
      tag: "Unified 100+ Models",
      models: "Claude 3.7 / DeepSeek R1",
      tilt: "-2deg",
    },
    {
      name: "Mistral AI",
      status: "Ready to connect",
      color: "#175C4A",
      tag: "European Privacy-First",
      models: "Mistral Large 2 / Codestral",
      tilt: "3deg",
    },
    {
      name: "Local Ollama",
      status: "Airgapped Offline",
      color: "#080808",
      tag: "100% Private Hardware",
      models: "Qwen 2.5 / DeepSeek R1",
      tilt: "-1deg",
    },
  ];

  return (
    <section
      id="byoa"
      className="relative py-28 px-6 md:px-12 bg-[var(--cream)] text-[var(--black)] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-[var(--black)]/5 border border-[var(--black)]/10 text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
            <span className="text-[var(--orange)]">06</span> / bring your own ai
          </span>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-[var(--black)]">
              your intelligence.
              <br />
              <span className="font-serif italic font-normal text-[var(--orange)]">
                your rules.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-base md:text-lg text-[var(--muted)] leading-relaxed">
              Why should a career tool lock you into a single proprietary model or inflate token
              costs? Connect your own authorized account or API key, set spending limits, and pick
              which model powers each agent.
            </p>
          </div>
        </div>

        {/* Tilted Provider Stack Cards (Truus design pattern) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {providers.map((p) => (
            <div
              key={p.name}
              className="p-5 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] flex flex-col justify-between transition-transform duration-200 hover:scale-105 hover:rotate-0"
              style={{ transform: `rotate(${p.tilt})` }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-8 h-8 rounded-lg font-display font-black text-sm text-[var(--black)] grid place-items-center"
                    style={{ background: p.color }}
                  >
                    {p.name[0]}
                  </div>
                  <Icon name="zap" size={14} className="text-[var(--muted)]" />
                </div>
                <h3 className="font-display font-bold text-base text-[var(--black)] mb-1">
                  {p.name}
                </h3>
                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--cream)] text-[var(--black)] border border-[var(--line)] mb-3">
                  {p.tag}
                </span>
                <p className="text-xs text-[var(--muted)] font-mono">{p.models}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--line)] flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-700">{p.status}</span>
                <Icon name="arrow" size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* BYOA Guarantees Box */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-display font-bold text-sm text-[var(--black)]">
                <Icon name="shield" size={18} className="text-emerald-600" />
                <span>Zero Shared Keys</span>
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Your API keys and credentials are stored strictly in your browser or local keychain.
                We never funnel your requests through a shared hidden quota pool.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-display font-bold text-sm text-[var(--black)]">
                <Icon name="sliders" size={18} className="text-[var(--orange)]" />
                <span>Application-Level Limits</span>
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Set strict monthly spending caps (e.g. ₹2,000/month). Agents automatically pause and
                ask for confirmation before initiating cost-intensive tasks.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-display font-bold text-sm text-[var(--black)]">
                <Icon name="check-circle" size={18} className="text-[var(--blue)]" />
                <span>Useful Without AI</span>
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                If every AI provider is disconnected or offline, search, saved jobs, application
                tracking, notes, and salary benchmarks continue working smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
