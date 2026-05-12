export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Incident Response,<br />
          <span className="text-[#58a6ff]">Tracked in Real-Time</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Know exactly which steps are done, who completed them, and when — so your team stays coordinated during outages without the chaos.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Start for $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No lock-in.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-14">
          {["Live WebSocket updates", "Step ownership tracking", "Timestamped audit log", "Multi-incident support", "Role-based access", "Slack notifications"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$49<span className="text-2xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Per workspace. Unlimited incidents.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited active incidents",
              "Real-time collaboration via WebSockets",
              "Full audit log with timestamps",
              "Custom checklist templates",
              "Slack &amp; PagerDuty integrations",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does real-time collaboration work?",
              a: "We use WebSockets to push checklist updates instantly to every team member viewing the same incident. No refreshing needed — when someone checks off a step, everyone sees it within milliseconds."
            },
            {
              q: "Can I create custom checklist templates?",
              a: "Yes. You can build templates for different incident types (database outage, DDoS, deployment failure, etc.) and assign them to new incidents with one click."
            },
            {
              q: "Is there a free trial?",
              a: "We offer a 14-day money-back guarantee. If IncidentTrack doesn't improve your incident response workflow, email us for a full refund — no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} IncidentTrack. All rights reserved.
      </footer>
    </main>
  );
}
