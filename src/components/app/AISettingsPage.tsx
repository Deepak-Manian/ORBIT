import { useState } from "react";
import { AISettingsState, AIProvider, AppPage } from "../../types";
import { Icon } from "../common/Icon";
import { Button } from "../common/Button";
import { Starburst, StickerBadge } from "../common/Doodles";

interface AISettingsPageProps {
  settings: AISettingsState;
  onUpdateSettings: (updated: Partial<AISettingsState>) => void;
  onNavigate: (page: AppPage, param?: string) => void;
}

export function AISettingsPage({ settings, onUpdateSettings, onNavigate }: AISettingsPageProps) {
  const [activeTab, setActiveTab] = useState<"providers" | "models" | "limits" | "privacy">(
    "providers",
  );
  const [connectingProvider, setConnectingProvider] = useState<AIProvider | null>(null);
  const [apiKeyInput, setApiKeyInput] = useState("");
  const [selectedDefaultModel, setSelectedDefaultModel] = useState(
    settings.providers.find((p) => p.id === settings.activeProviderId)?.defaultModel ||
      "Gemini 2.5 Pro",
  );
  const [monthlyLimit, setMonthlyLimit] = useState(settings.monthlySpendingLimitInr);

  const handleOpenConnectModal = (provider: AIProvider) => {
    setConnectingProvider(provider);
    setApiKeyInput("");
  };

  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!connectingProvider || !apiKeyInput.trim()) return;

    const maskedKey = `${apiKeyInput.trim().slice(0, 6)}••••••••••••${apiKeyInput.trim().slice(-4)}`;
    const updatedProviders = settings.providers.map((p) =>
      p.id === connectingProvider.id
        ? {
            ...p,
            connected: true,
            apiKeyMasked: maskedKey,
            badge: "Connected · Verified",
          }
        : p,
    );

    onUpdateSettings({
      providers: updatedProviders,
      activeProviderId: connectingProvider.id,
    });

    setConnectingProvider(null);
    setApiKeyInput("");
  };

  const handleDisconnectProvider = (providerId: string) => {
    const updatedProviders = settings.providers.map((p) =>
      p.id === providerId
        ? {
            ...p,
            connected: false,
            apiKeyMasked: undefined,
            badge: "Ready to connect",
          }
        : p,
    );

    onUpdateSettings({
      providers: updatedProviders,
      activeProviderId:
        providerId === settings.activeProviderId ? "gemini" : settings.activeProviderId,
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[var(--black)]">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--orange)]">
            AI WORKSPACE & BYOA CONTROLS
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-[var(--black)] tracking-tight mt-1">
            Your intelligence.{" "}
            <span className="font-serif italic font-normal text-[var(--orange)]">
              Your control.
            </span>
          </h1>
        </div>
        <StickerBadge color="lime" rotate="2deg">
          100% BYOA Architecture
        </StickerBadge>
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex items-center gap-2 border-b-2 border-[var(--black)] pb-2 overflow-x-auto">
        {[
          { id: "providers", label: "01 Provider Connections", icon: "zap" },
          { id: "models", label: "02 Model Preferences", icon: "bot" },
          { id: "limits", label: "03 Spending & Limits", icon: "sliders" },
          { id: "privacy", label: "04 Privacy & Approvals", icon: "shield" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl font-body text-xs md:text-sm font-bold tracking-tight transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-[var(--orange)] text-[var(--black)] shadow-[2px_2px_0px_var(--black)] border border-[var(--black)]"
                : "text-[var(--muted)] hover:text-[var(--black)] hover:bg-[var(--cream)]"
            }`}
          >
            <Icon name={tab.icon as any} size={15} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab 1: Provider Connections */}
      {activeTab === "providers" && (
        <div className="space-y-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div>
                <h3 className="font-display font-bold text-xl text-[var(--black)]">
                  Supported AI Providers
                </h3>
                <p className="text-xs text-[var(--muted)]">
                  Connect your own official account or API key. We never borrow keys or share
                  quotas.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {settings.providers.map((provider) => (
                <div
                  key={provider.id}
                  className={`p-5 rounded-2xl border-2 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    provider.connected
                      ? "bg-white border-[var(--black)] shadow-[3px_3px_0px_var(--black)]"
                      : "bg-[var(--cream)]/60 border-[var(--line)]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl text-[var(--black)] font-display font-black text-xl grid place-items-center shrink-0 shadow-sm border border-[var(--black)]"
                      style={{ background: provider.color }}
                    >
                      {provider.name[0]}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-bold text-base text-[var(--black)]">
                          {provider.name}
                        </h4>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            provider.connected
                              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                              : "bg-neutral-200 text-neutral-700"
                          }`}
                        >
                          {provider.badge}
                        </span>
                        {provider.id === settings.activeProviderId && (
                          <span className="px-2 py-0.5 rounded-full bg-[var(--orange)] text-white text-[10px] font-mono font-bold">
                            PRIMARY
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[var(--muted)] leading-relaxed max-w-xl">
                        {provider.description}
                      </p>
                      {provider.apiKeyMasked && (
                        <div className="text-[11px] font-mono text-[var(--muted)]">
                          Key:{" "}
                          <code className="bg-neutral-100 px-1 py-0.5 rounded text-[var(--black)]">
                            {provider.apiKeyMasked}
                          </code>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {provider.connected ? (
                      <>
                        {provider.id !== settings.activeProviderId && (
                          <Button
                            variant="pill"
                            size="sm"
                            onClick={() => onUpdateSettings({ activeProviderId: provider.id })}
                          >
                            Set as Primary
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDisconnectProvider(provider.id)}
                        >
                          Disconnect
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="primary"
                        size="sm"
                        icon="key"
                        onClick={() => handleOpenConnectModal(provider)}
                      >
                        Connect Key
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[var(--muted)] pt-3 border-t border-[var(--line)]">
              <strong>Notice:</strong> Consumer chat subscriptions (e.g. Gemini Advanced or ChatGPT
              Plus) do not automatically include programmatic API access. You must generate an
              official developer API key.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Model Preferences */}
      {activeTab === "models" && (
        <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-6">
          <div className="pb-3 border-b border-[var(--line)]">
            <h3 className="font-display font-bold text-xl text-[var(--black)]">
              Model Selection & Task Routing
            </h3>
            <p className="text-xs text-[var(--muted)]">
              Specify how agents select models for different operational workloads.
            </p>
          </div>

          <div className="space-y-4 max-w-xl">
            <div className="space-y-1">
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--black)] block">
                GLOBAL DEFAULT MODEL
              </label>
              <select
                value={selectedDefaultModel}
                onChange={(e) => {
                  setSelectedDefaultModel(e.target.value);
                  onUpdateSettings({ autoSelectBestModel: false });
                }}
                className="w-full p-3 rounded-xl border-2 border-[var(--black)] bg-[var(--cream)] font-mono text-xs font-bold outline-none cursor-pointer"
              >
                <option value="Gemini 2.5 Pro">
                  Google Gemini 2.5 Pro (Recommended for reasoning)
                </option>
                <option value="Gemini 2.5 Flash">Google Gemini 2.5 Flash (Ultra-fast)</option>
                <option value="Claude 3.7 Sonnet">Claude 3.7 Sonnet (via OpenRouter)</option>
                <option value="Llama 3.3 70B">Llama 3.3 70B (via Groq)</option>
                <option value="Local Ollama">Local Ollama (Offline)</option>
              </select>
            </div>

            <div className="pt-4 border-t border-[var(--line)] space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--black)] block">
                SPECIALIZED TASK-LEVEL MAPPING
              </span>

              {[
                { task: "Research & Job Intelligence (Scout & Signal)", model: "Gemini 2.5 Pro" },
                { task: "Narrative & Outreach Drafting (Draft)", model: "Gemini 2.5 Flash" },
                { task: "Skill & Resume Auditing (Lens)", model: "Gemini 2.5 Pro" },
                { task: "Real-time Interview Simulation (Coach)", model: "Gemini 2.5 Pro" },
              ].map((mapping) => (
                <div
                  key={mapping.task}
                  className="p-3 rounded-xl bg-[var(--cream)] border border-[var(--line)] flex items-center justify-between text-xs"
                >
                  <span className="font-bold text-[var(--black)]">{mapping.task}</span>
                  <span className="font-mono px-2 py-1 rounded bg-white border border-[var(--line)]">
                    {mapping.model}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Spending & Limits */}
      {activeTab === "limits" && (
        <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-6">
          <div className="pb-3 border-b border-[var(--line)]">
            <h3 className="font-display font-bold text-xl text-[var(--black)]">
              Application-Level Limits & Quota
            </h3>
            <p className="text-xs text-[var(--muted)]">
              Keep full control over token costs. Agents halt and notify you before approaching
              ceilings.
            </p>
          </div>

          <div className="space-y-6 max-w-xl">
            {/* Monthly Limit Bar */}
            <div className="p-5 rounded-xl bg-[var(--cream)] border border-[var(--line)] space-y-3">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span>ESTIMATED SPEND THIS MONTH</span>
                <span className="text-[var(--orange)]">
                  ₹{settings.currentSpendingInr} / ₹{monthlyLimit}
                </span>
              </div>
              <div className="h-3 rounded-full bg-white border border-[var(--line)] overflow-hidden">
                <div
                  className="h-full bg-[var(--orange)] rounded-full"
                  style={{ width: `${(settings.currentSpendingInr / monthlyLimit) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-[var(--muted)] font-mono">
                <span>62% of ceiling consumed</span>
                <span>₹{monthlyLimit - settings.currentSpendingInr} remaining</span>
              </div>
            </div>

            {/* Slider to adjust limit */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold">
                <label>ADJUST MONTHLY CEILING</label>
                <span className="text-emerald-700">₹{monthlyLimit} INR</span>
              </div>
              <input
                type="range"
                min={500}
                max={5000}
                step={250}
                value={monthlyLimit}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setMonthlyLimit(val);
                  onUpdateSettings({ monthlySpendingLimitInr: val });
                }}
                className="w-full cursor-pointer accent-[var(--orange)]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[var(--muted)]">
                <span>₹500 / mo</span>
                <span>₹2,500 / mo</span>
                <span>₹5,000 / mo</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Privacy & Approvals */}
      {activeTab === "privacy" && (
        <div className="p-6 md:p-8 rounded-2xl bg-white border-2 border-[var(--black)] shadow-[4px_4px_0px_var(--black)] space-y-6">
          <div className="pb-3 border-b border-[var(--line)]">
            <h3 className="font-display font-bold text-xl text-[var(--black)]">
              Privacy Controls & Approvals
            </h3>
            <p className="text-xs text-[var(--muted)]">
              Strict boundaries around your data, resumes, and communications.
            </p>
          </div>

          <div className="space-y-4 max-w-xl">
            {[
              {
                id: "approval",
                title: "Require explicit human approval for applications & outreach",
                desc: "No agent will ever auto-submit a resume, dispatch an email, or message a recruiter without your direct approval click.",
                active: settings.requireApprovalBeforeSend,
                toggle: () =>
                  onUpdateSettings({
                    requireApprovalBeforeSend: !settings.requireApprovalBeforeSend,
                  }),
              },
              {
                id: "context",
                title: "Share career profile context with specialized agents",
                desc: "Allows Scout and Lens to read your verified skills and past roles to compute match percentages.",
                active: settings.shareProfileContext,
                toggle: () =>
                  onUpdateSettings({
                    shareProfileContext: !settings.shareProfileContext,
                  }),
              },
              {
                id: "telemetry",
                title: "Allow anonymous prompt quality telemetry",
                desc: "Share de-identified accuracy feedback to help improve the open-source ORBIT prompt library.",
                active: settings.anonymousImprovementData,
                toggle: () =>
                  onUpdateSettings({
                    anonymousImprovementData: !settings.anonymousImprovementData,
                  }),
              },
            ].map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-[var(--cream)] border border-[var(--line)] flex items-start justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="font-bold text-xs text-[var(--black)]">{item.title}</div>
                  <p className="text-[11px] text-[var(--muted)] leading-relaxed">{item.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={item.toggle}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 border ${
                    item.active
                      ? "bg-emerald-600 border-emerald-700"
                      : "bg-neutral-300 border-neutral-400"
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                      item.active ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Connect API Key Modal */}
      {connectingProvider && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleSaveApiKey}
            className="bg-white rounded-3xl border-2 border-[var(--black)] shadow-[8px_8px_0px_var(--black)] max-w-md w-full p-6 md:p-8 space-y-5 animate-scaleUp"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl text-[var(--black)] font-display font-black text-lg grid place-items-center"
                  style={{ background: connectingProvider.color }}
                >
                  {connectingProvider.name[0]}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--black)]">
                    Connect {connectingProvider.name}
                  </h3>
                  <span className="text-[11px] font-mono text-[var(--muted)]">
                    Direct Client BYOA Key
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setConnectingProvider(null)}
                className="p-1 rounded-lg hover:bg-[var(--cream)]"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <div className="space-y-3 text-xs font-body">
              <p className="text-[var(--muted)] leading-relaxed">
                Enter your official {connectingProvider.name} API key. It is saved in your local
                browser session and never stored on any central server.
              </p>

              <div>
                <label className="block font-bold text-[var(--black)] mb-1 uppercase font-mono">
                  API Key
                </label>
                <input
                  type="password"
                  required
                  placeholder="Paste key (e.g. AIzaSy... or gsk_...)"
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[var(--black)] bg-[var(--cream)] text-sm font-mono outline-none"
                  autoFocus
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--line)]">
              <Button variant="ghost" size="sm" onClick={() => setConnectingProvider(null)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="md" icon="check">
                Verify & Save
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
