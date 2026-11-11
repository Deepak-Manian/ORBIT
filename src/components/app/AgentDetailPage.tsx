import { useState } from "react";
import { AgentInfo, AppPage } from "../../types";
import { mockAgents } from "../../mock/agents";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";
import { Starburst, StickerBadge } from "../common/Doodles";

interface AgentDetailPageProps {
  agentId: string;
  onNavigate: (page: AppPage, param?: string) => void;
}

export function AgentDetailPage({ agentId, onNavigate }: AgentDetailPageProps) {
  const agent = mockAgents.find((a) => a.id === agentId) || mockAgents[0];
  const [promptInput, setPromptInput] = useState("");
  const [outputLog, setOutputLog] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunTask = () => {
    if (!promptInput.trim()) return;
    setIsRunning(true);
    const taskText = promptInput.trim();
    setPromptInput("");

    setTimeout(() => {
      setIsRunning(false);
      setOutputLog((prev) => [
        `[${new Date().toLocaleTimeString()}] Task executed by ${agent.name} (${agent.defaultModel}): "${taskText}" -> Completed with evidence verification.`,
        ...prev,
      ]);
    }, 900);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Back Link */}
      <button
        type="button"
        onClick={() => onNavigate("agents")}
        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--muted)] hover:text-[var(--black)] transition-colors cursor-pointer"
      >
        <span>← Back to Agent Center</span>
      </button>

      {/* Agent Banner */}
      <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[var(--line)]">
          <div className="flex items-start gap-4">
            <div
              className="w-16 h-16 rounded-2xl text-[var(--black)] font-display font-black text-3xl grid place-items-center shrink-0 border-2 border-[var(--black)] shadow-sm"
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
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs uppercase font-bold text-[var(--orange)]">
                  {agent.codename}
                </span>
                <span className="text-[var(--line)]">·</span>
                <span className="text-xs text-[var(--muted)] font-mono">{agent.role}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold border border-emerald-200">
                  Online
                </span>
              </div>
              <h1 className="font-display font-black text-3xl text-[var(--black)]">{agent.name}</h1>
              <p className="text-xs md:text-sm text-[var(--muted)] mt-1 font-body">
                {agent.tagline}
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="font-mono text-xs text-[var(--muted)] block">POWERED BY</span>
            <strong className="font-display font-bold text-sm text-[var(--black)]">
              {agent.defaultModel}
            </strong>
          </div>
        </div>

        <p className="font-body text-base text-[var(--black)] leading-relaxed">
          {agent.description}
        </p>

        {/* Capabilities */}
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)] block mb-2">
            SPECIALIZED TOOLSET & CAPABILITIES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {agent.capabilities.map((cap) => (
              <div
                key={cap}
                className="p-2.5 rounded-xl bg-[var(--cream)] border border-[var(--line)] flex items-center gap-2"
              >
                <Icon name="check" size={14} className="text-emerald-600 shrink-0" />
                <span className="font-bold text-[var(--black)]">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Task Execution Playground */}
      <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
          <div className="flex items-center gap-2">
            <Icon name="zap" size={16} className="text-[var(--orange)]" />
            <h3 className="font-display font-bold text-lg text-[var(--black)]">
              Direct Task Dispatcher
            </h3>
          </div>
          <span className="text-xs font-mono text-[var(--muted)]">Target: {agent.name}</span>
        </div>

        <div className="space-y-3">
          <input
            type="text"
            placeholder={`Instruct ${agent.name} with specific role constraints or instructions...`}
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleRunTask()}
            className="w-full p-3 rounded-xl border-2 border-[var(--black)] bg-[var(--cream)] text-sm font-body outline-none"
          />
          <div className="flex justify-end">
            <Button
              variant="primary"
              size="md"
              icon="send"
              disabled={isRunning || !promptInput.trim()}
              onClick={handleRunTask}
            >
              {isRunning ? "Dispatching..." : `Execute via ${agent.name}`}
            </Button>
          </div>
        </div>

        {/* Execution Log */}
        {outputLog.length > 0 && (
          <div className="pt-4 border-t border-[var(--line)] space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--muted)] block">
              EXECUTION LOG
            </span>
            <div className="p-3 rounded-xl bg-black/90 text-emerald-400 font-mono text-xs space-y-1.5 max-h-48 overflow-y-auto">
              {outputLog.map((log, i) => (
                <div key={i} className="leading-relaxed">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
