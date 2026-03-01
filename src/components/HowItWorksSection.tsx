const steps = [
  {
    number: "01",
    title: "Define Your Goal",
    description: "Open VS Code, activate a Chorus team, and describe what you want to build in plain language. No DSL required.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Team Gets to Work",
    description: "The Lead Agent decomposes the goal into tasks. Workers execute in parallel. Guardian validates every change against your spec.",
    icon: "⚡",
  },
  {
    number: "03",
    title: "Stay in the Loop",
    description: "Receive push notifications, SMS updates, or even a phone call if agents hit a blocker or need a decision from you.",
    icon: "📡",
  },
  {
    number: "04",
    title: "Review & Ship",
    description: "Accept or reject changes from anywhere — your phone, the web app, or back in VS Code. Your choice, your workflow.",
    icon: "🚀",
  },
];

const comparisonData = [
  { feature: "Persists after session ends", chorus: true, typical: false },
  { feature: "Cross-device access", chorus: true, typical: false },
  { feature: "Proactive notifications", chorus: true, typical: false },
  { feature: "Multi-agent parallelism", chorus: true, typical: false },
  { feature: "Model agnostic", chorus: true, typical: false },
  { feature: "Mobile review & approval", chorus: true, typical: false },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/[0.08] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 font-medium">
            How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Set it up,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              go live your life
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Four simple steps to an always-on development team that works while you sleep.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="step-connector hidden lg:block absolute top-8 h-px bg-gradient-to-r from-purple-500/40 to-transparent z-10 -translate-y-1/2" />
              )}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-mono font-bold text-purple-500/40">{step.number}</span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-bold text-white">Chorus vs. typical AI coding tools</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-gray-400 font-medium text-sm">Feature</th>
                  <th className="text-center p-4 text-purple-300 font-semibold text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
                      Chorus
                    </div>
                  </th>
                  <th className="text-center p-4 text-gray-400 font-medium text-sm">Typical AI Tools</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="p-4 text-gray-300 text-sm">{row.feature}</td>
                    <td className="p-4 text-center">
                      <span className="text-purple-400 text-lg">✓</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-red-400/60 text-lg">✗</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
