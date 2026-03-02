export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/[0.08] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Beta badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm">
              <span className="w-2 h-2 rounded-full bg-purple-400 pulse-dot" />
              <span className="text-purple-300 font-medium">Now in Beta</span>
              <span className="text-gray-500">·</span>
              <span className="text-gray-400">VS Code Extension</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-white">Your AI team</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-300 bg-clip-text text-transparent text-glow">
                  that never
                </span>
                <br />
                <span className="text-white">clocks out</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Chorus is a persistent, cross-device multi-agent coding team. Define a goal, 
                close your laptop, and let your AI team keep building — they&apos;ll text you when 
                they need input.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold hover:from-purple-500 hover:to-violet-400 transition-all duration-200 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5"
              >
                Get Early Access
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/30 transition-all duration-200"
              >
                See How It Works →
              </a>
            </div>

            {/* Comparison snippet */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="text-red-400">✗</span>
                <span>Every other tool: session ends → work stops</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-purple-400">✓</span>
                <span>
                  <span className="text-purple-300 font-medium">Chorus:</span> close laptop → agents keep working → you get a text
                </span>
              </div>
            </div>
          </div>

          {/* Right: Agent status card */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl glow-purple">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-gray-500 ml-2 font-mono">chorus — agent-team · my-saas-app</span>
              </div>

              {/* Agent rows */}
              <div className="space-y-3">
                {[
                  { role: "Lead Agent", task: "Decomposing: auth system refactor", status: "working", color: "purple" },
                  { role: "Worker 1", task: "Implementing JWT middleware", status: "working", color: "blue" },
                  { role: "Worker 2", task: "Writing unit tests for auth", status: "working", color: "blue" },
                  { role: "Guardian", task: "Validating changes against spec", status: "watching", color: "yellow" },
                  { role: "QA Agent", task: "Idle — waiting for PR", status: "idle", color: "gray" },
                ].map((agent) => (
                  <div key={agent.role} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      agent.status === "working" ? "bg-purple-400 pulse-dot" :
                      agent.status === "watching" ? "bg-yellow-400 pulse-dot" :
                      "bg-gray-600"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-300">{agent.role}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded text-[10px] ${
                          agent.status === "working" ? "bg-purple-500/20 text-purple-300" :
                          agent.status === "watching" ? "bg-yellow-500/20 text-yellow-300" :
                          "bg-gray-700/50 text-gray-500"
                        }`}>{agent.status}</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate mt-0.5 font-mono">{agent.task}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span>3 agents active · 2h 14m running</span>
                </div>
                <div className="text-xs text-purple-400 font-mono">📱 SMS sent</div>
              </div>
            </div>

            {/* Floating notification card */}
            <div className="absolute -bottom-6 -right-6 bg-white/[0.08] backdrop-blur-sm border border-white/15 rounded-xl p-3 shadow-xl max-w-[200px]">
              <div className="flex items-start gap-2">
                <div className="text-lg">📱</div>
                <div>
                  <p className="text-xs font-semibold text-white">Chorus Team</p>
                  <p className="text-xs text-gray-400 mt-0.5">Worker 1 needs approval on auth changes. Review?</p>
                  <div className="flex gap-2 mt-2">
                    <button className="text-xs px-2 py-0.5 rounded bg-purple-600/50 text-purple-200">Approve</button>
                    <button className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-300">Review</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
