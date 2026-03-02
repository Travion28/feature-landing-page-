const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Get started with local agent teams",
    features: [
      "1 agent team",
      "3 workers",
      "50K tokens/day",
      "Local only",
      "VS Code extension",
      "Community support",
    ],
    cta: "Get Started Free",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For developers who build 24/7",
    features: [
      "Unlimited teams",
      "10 workers",
      "500K tokens/day",
      "Cloud sync",
      "Push notifications + SMS",
      "Mobile app access",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: "$49",
    period: "/user/month",
    description: "For teams shipping together",
    features: [
      "Everything in Pro",
      "Shared workspaces",
      "Voice call escalation",
      "Unlimited SMS",
      "Analytics dashboard",
      "Admin controls",
    ],
    cta: "Start Team Trial",
    highlighted: false,
    badge: null,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations at scale",
    features: [
      "Everything in Team",
      "SSO / SAML",
      "Audit logs",
      "On-premise option",
      "SLA guarantees",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlighted: false,
    badge: null,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/[0.08] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300 font-medium">
            Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Simple pricing,{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              powerful platform
            </span>
          </h2>
          <p className="text-lg text-gray-400">Start free. Scale when you&apos;re ready.</p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? "bg-gradient-to-b from-purple-900/40 to-violet-900/20 border-2 border-purple-500/50 shadow-xl shadow-purple-500/20"
                  : "bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white text-xs font-semibold shadow-lg shadow-purple-500/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-purple-200" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-gray-400">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-purple-400" : "text-gray-500"}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#waitlist"
                className={`block text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-purple-600 to-violet-500 text-white hover:from-purple-500 hover:to-violet-400 shadow-lg shadow-purple-500/30"
                    : "border border-white/20 text-white hover:bg-white/5 hover:border-white/30"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            💜 Cheaper than Copilot Business. More powerful than Cursor.{" "}
            <a href="#features" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
              See why →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
