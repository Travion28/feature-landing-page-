const features = [
  {
    icon: "🤖",
    title: "Always-On Agent Team",
    description: "A structured multi-agent team — Lead, Workers, Guardian, and QA — that persists beyond any session. Your code gets worked on 24/7.",
  },
  {
    icon: "🔄",
    title: "Cross-Device Sync",
    description: "Start a task in VS Code, monitor progress from your phone, and approve changes from your tablet. One team, every device.",
  },
  {
    icon: "📣",
    title: "Ambient Communication",
    description: "Agents proactively reach out via push notifications, SMS, or voice calls when they need your input or hit a decision point.",
  },
  {
    icon: "🧩",
    title: "Model Agnostic",
    description: "Works with Claude, GPT-4, Gemini, or your own local models via a clean adapter pattern. Mix models per agent role for cost efficiency.",
  },
  {
    icon: "✨",
    title: "Premium UX",
    description: "Glassmorphic design, spatial audio, haptic feedback, and smooth animations. Not another CLI tool — a first-class product experience.",
  },
  {
    icon: "📊",
    title: "Structured Progress",
    description: "Task graph visualization, rich todos, and periodic check-ins. See exactly what your team is doing, not raw output streams.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/[0.08] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 font-medium">
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Beyond the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              coding session
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Chorus isn&apos;t a chatbot or autocomplete. It&apos;s a persistent team of specialized agents 
            built for async, ambient development.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
