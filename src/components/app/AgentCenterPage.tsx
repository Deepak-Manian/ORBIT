import { useState } from "react";
import { AgentInfo, AppPage, ChatMessage } from "../../types";
import { mockAgents } from "../../mock/agents";
import { mockJobs } from "../../mock/jobs";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";
import { StickerBadge } from "../common/Doodles";

interface AgentCenterPageProps {
  onNavigate: (page: AppPage, param?: string) => void;
  initialAgentId?: string;
}

export function AgentCenterPage({ onNavigate, initialAgentId = "orbit" }: AgentCenterPageProps) {
  const [selectedAgentId, setSelectedAgentId] = useState(initialAgentId);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-1",
      sender: "agent",
      agentId: "orbit",
      agentName: "ORBIT",
      text: "Hello Naina! I'm ORBIT, your career conductor. Scout found 3 new verified roles today, Lens identified strong systems alignment for Linear, and Track is monitoring your follow-up with Razorpay. How can the team support your career moves today?",
      timestamp: "9:42 AM",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const selectedAgent = mockAgents.find((a) => a.id === selectedAgentId) || mockAgents[0];

  const agentActionPrompts: Record<string, string[]> = {
    orbit: [
      "Synthesize my top career priorities for this week",
      "Which role has the highest leadership trajectory?",
      "Audit all pending application follow-ups",
    ],
    scout: [
      "Find fintech roles in Bengaluru paying above ₹40L",
      "Check verified career portals for remote design systems roles",
      "Scan for roles matching Figma tokens and variables",
    ],
    lens: [
      "Analyze my resume against the Linear Senior Designer role",
      "What are my top 3 proof-of-work achievements?",
      "Highlight the exact skill gaps for Principal Designer tier",
    ],
    draft: [
      "Draft a warm introduction to the Linear design lead",
      "Tailor my Razorpay bullet points for consumer scale",
      "Write a follow-up email for my referral application",
    ],
    track: [
      "When is my next application follow-up due?",
      "Summarize my pipeline conversion stats",
      "Remind me to check on CRED round 2 interview",
    ],
    coach: [
      "Simulate a tough behavioral interview question for CRED",
      "How do I structure my 0→1 design leadership case study?",
      "Give me feedback on my answer about handling engineering pushback",
    ],
    signal: [
      "What is the median compensation for Staff Designers in India?",
      "Which design skills are seeing hiring surges this quarter?",
      "Compare salary bands between remote and Bengaluru scale-ups",
    ],
    sentinel: [
      "Verify if this job posting is authentic or a ghost listing",
      "Check recruiter legitimacy and company domain age",
      "Review my privacy settings before applying",
    ],
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText("");
    setIsTyping(true);

    // Contextual simulated response
    setTimeout(() => {
      let replyText = "";
      let cards: ChatMessage["cards"] = undefined;

      if (selectedAgent.id === "scout") {
        replyText = `Scout scanned verified career feeds. I found 3 high-signal listings that match your criteria with zero agency spam:`;
        cards = [
          {
            type: "job",
            title: "Senior Product Designer · Linear",
            subtitle: "Remote · ₹42L – ₹58L · 94% Match",
            actionLabel: "View Role",
            payload: "linear-senior-designer",
          },
          {
            type: "job",
            title: "Design Lead · Razorpay",
            subtitle: "Bengaluru · ₹38L – ₹52L · 89% Match",
            actionLabel: "View Role",
            payload: "razorpay-design-lead",
          },
        ];
      } else if (selectedAgent.id === "lens") {
        replyText = `Lens analyzed your profile against active role requirements. Your Blade 2.0 design system work provides direct evidence for 94% of Linear's criteria. One actionable gap: add a Principle/Rive motion prototype.`;
      } else if (selectedAgent.id === "draft") {
        replyText = `Draft prepared a personalized application note for ${mockJobs[0].company}. It highlights your systems experience without robotic clichés. Ready for your review in Job Details.`;
      } else if (selectedAgent.id === "coach") {
        replyText = `Coach question: "Walk me through how you balanced speed versus craft when shipping the Razorpay merchant onboarding flow." Take 60 seconds to structure your answer using STAR (Situation, Task, Action, Result).`;
      } else if (selectedAgent.id === "signal") {
        replyText = `Signal market briefing: Staff/Lead Product Design compensation in Bengaluru is currently averaging ₹38L–₹52L base, with top 10% packages touching ₹65L+ with equity. Design systems expertise commands a 16% market premium.`;
      } else if (selectedAgent.id === "sentinel") {
        replyText = `Sentinel verification report: All 8 curated listings currently in your workspace are authentic direct company listings with verified domains and zero fee-charging flags.`;
      } else {
        replyText = `ORBIT orchestrated synthesis: I delegated your request to ${mockAgents[1].name} and ${mockAgents[2].name}. Your highest-leverage priority today is preparing for Thursday's CRED interview with Coach.`;
      }

      const agentReply: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: "agent",
        agentId: selectedAgent.id,
        agentName: selectedAgent.name,
        text: replyText,
        cards,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, agentReply]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[var(--black)]">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--orange)]">
            ORBIT AGENT CENTER · COORDINATED MULTI-AGENT ARCHITECTURE
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[var(--black)] tracking-tight mt-1">
            Your career team,{" "}
            <span className="font-serif italic font-normal text-[var(--orange)]">
              always in sync.
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full bg-white border border-[var(--black)] text-xs font-mono font-bold text-emerald-800 shadow-[2px_2px_0px_var(--black)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>8 Specialists Online</span>
          </span>
          <Button variant="outline" size="sm" icon="key" onClick={() => onNavigate("ai-settings")}>
            BYOA Settings
          </Button>
        </div>
      </div>

      {/* Main 3-Column Agent Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (3 cols): Agent Directory */}
        <div className="lg:col-span-3 p-4 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--line)]">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
              AGENT DIRECTORY
            </span>
            <span className="text-[10px] font-mono text-[var(--muted)]">8 AGENTS</span>
          </div>

          <div className="space-y-1.5">
            {mockAgents.map((agent) => {
              const isSelected = agent.id === selectedAgentId;
              return (
                <button
                  key={agent.id}
                  type="button"
                  onClick={() => setSelectedAgentId(agent.id)}
                  className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer border ${
                    isSelected
                      ? "bg-[var(--cream)] border-[var(--black)] shadow-[2px_2px_0px_var(--black)] translate-x-1"
                      : "border-transparent hover:bg-[var(--cream)]/60 text-[var(--black)]"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="w-7 h-7 rounded-lg font-display font-black text-xs text-[var(--black)] grid place-items-center shrink-0 shadow-xs"
                      style={{
                        background:
                          agent.color === "orange"
                            ? "#FF633D"
                            : agent.color === "blue"
                              ? "#718CFF"
                              : agent.color === "lavender"
                                ? "#DDA7F5"
                                : agent.color === "green"
                                  ? "#175C4A"
                                  : "#FFFFFF",
                      }}
                    >
                      {agent.avatarChar}
                    </span>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-xs text-[var(--black)] truncate">
                        {agent.name}
                      </div>
                      <div className="text-[10px] text-[var(--muted)] truncate">{agent.role}</div>
                    </div>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Column (6 cols): Active Agent Interactive Chat & Workspace */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] flex flex-col min-h-[580px]">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[var(--line)]">
            <div className="flex items-center gap-3">
              <span
                className="w-10 h-10 rounded-xl text-[var(--black)] font-display font-black text-base grid place-items-center shadow-xs"
                style={{
                  background:
                    selectedAgent.color === "orange"
                      ? "#FF633D"
                      : selectedAgent.color === "blue"
                        ? "#718CFF"
                        : selectedAgent.color === "lavender"
                          ? "#DDA7F5"
                          : selectedAgent.color === "green"
                            ? "#175C4A"
                            : "#FFFFFF",
                }}
              >
                {selectedAgent.avatarChar}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-lg text-[var(--black)]">
                    {selectedAgent.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-[var(--cream)] text-[10px] font-mono font-bold text-[var(--muted)] border border-[var(--line)]">
                    {selectedAgent.codename}
                  </span>
                </div>
                <div className="text-xs text-[var(--muted)]">{selectedAgent.tagline}</div>
              </div>
            </div>

            <Button
              variant="pill"
              size="sm"
              icon="external-link"
              onClick={() => onNavigate("agent-detail", selectedAgent.id)}
            >
              Full Workspace
            </Button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 py-4 space-y-4 overflow-y-auto max-h-[360px] pr-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 text-xs md:text-sm font-body ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "agent" && (
                  <div
                    className="w-7 h-7 rounded-full text-[var(--black)] font-display font-black text-xs grid place-items-center shrink-0 shadow-xs mt-1"
                    style={{
                      background:
                        selectedAgent.color === "orange"
                          ? "#FF633D"
                          : selectedAgent.color === "blue"
                            ? "#718CFF"
                            : selectedAgent.color === "lavender"
                              ? "#DDA7F5"
                              : selectedAgent.color === "green"
                                ? "#175C4A"
                                : "#FFFFFF",
                    }}
                  >
                    {selectedAgent.avatarChar}
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl space-y-2 ${
                    msg.sender === "user"
                      ? "bg-[var(--black)] text-white"
                      : "bg-[var(--cream)] text-[var(--black)] border border-[var(--line)]"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>

                  {/* Render Structured Result Cards if present */}
                  {msg.cards && (
                    <div className="space-y-2 pt-2 border-t border-[var(--black)]/10">
                      {msg.cards.map((card) => (
                        <div
                          key={card.title}
                          className="p-3 rounded-xl bg-white border border-[var(--line)] flex items-center justify-between gap-3 shadow-xs"
                        >
                          <div>
                            <div className="font-bold text-xs text-[var(--black)]">
                              {card.title}
                            </div>
                            <div className="text-[11px] text-[var(--muted)]">{card.subtitle}</div>
                          </div>
                          {card.payload && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onNavigate("job-detail", card.payload)}
                            >
                              {card.actionLabel || "View"}
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <span className="text-[10px] font-mono opacity-50 block text-right">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)] p-2">
                <span className="w-2 h-2 rounded-full bg-[var(--orange)] animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-[var(--blue)] animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[var(--lavender)] animate-bounce [animation-delay:0.4s]" />
                <span>{selectedAgent.name} is synthesizing...</span>
              </div>
            )}
          </div>

          {/* Quick Action Prompt Chips */}
          <div className="pt-2 border-t border-[var(--line)] mb-3">
            <span className="text-[10px] font-mono uppercase text-[var(--muted)] block mb-1.5">
              SUGGESTED ACTIONS FOR {selectedAgent.name.toUpperCase()}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(agentActionPrompts[selectedAgent.id] || []).map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 rounded-full bg-[var(--cream)] hover:bg-white text-[11px] text-[var(--black)] border border-[var(--line)] hover:border-[var(--black)] transition-all cursor-pointer font-medium text-left truncate max-w-full"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 pt-2 border-t border-[var(--line)]"
          >
            <input
              type="text"
              placeholder={`Ask ${selectedAgent.name} for career intelligence...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 p-2.5 rounded-xl border border-[var(--line)] bg-[var(--cream)] text-xs md:text-sm outline-none focus:border-[var(--black)] text-[var(--black)] placeholder:text-[var(--muted)]"
            />
            <Button type="submit" variant="primary" size="md" icon="send">
              Send
            </Button>
          </form>
        </div>

        {/* Right Column (3 cols): Tasks & Human Approval Queue */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="p-4 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[var(--line)]">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                HUMAN APPROVAL QUEUE
              </span>
              <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[10px] font-bold">
                1 PENDING
              </span>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 space-y-2 text-xs">
              <div className="font-bold text-amber-950 flex items-center gap-1.5">
                <Icon name="spark" size={14} className="text-amber-700" />
                <span>Tailored Resume Ready</span>
              </div>
              <p className="text-amber-800 text-[11px] leading-snug">
                Draft customized your systems achievements for Linear Senior Product Designer.
              </p>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => onNavigate("job-detail", "linear-senior-designer")}
              >
                Review & Approve
              </Button>
            </div>

            {/* Active Background Tasks */}
            <div className="pt-2 border-t border-[var(--line)] space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)] block">
                ACTIVE AGENT TASKS
              </span>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] space-y-1">
                  <div className="flex justify-between font-bold text-[var(--black)]">
                    <span>Scout Discovery Engine</span>
                    <span className="font-mono text-emerald-700">Running</span>
                  </div>
                  <div className="text-[11px] text-[var(--muted)]">
                    Monitoring 14 company career portals
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] space-y-1">
                  <div className="flex justify-between font-bold text-[var(--black)]">
                    <span>Signal Market Pulse</span>
                    <span className="font-mono text-emerald-700">Running</span>
                  </div>
                  <div className="text-[11px] text-[var(--muted)]">
                    Aggregating Q4 Bengaluru compensation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
