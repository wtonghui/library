import {
  Lightbulb,
  BarChart3,
  History,
  Star,
  Edit3,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/10">
    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">
      {label}
    </p>
    <p className="text-3xl font-headline font-extrabold text-primary">
      {value}
    </p>
  </div>
);

const ReviewCard = ({
  type,
  time,
  title,
  description,
  icon: Icon,
  color,
}: any) => (
  <div
    className="group bg-surface-container-lowest p-6 rounded-2xl ghost-shadow border-l-4 transition-all"
    style={{ borderLeftColor: color }}
  >
    <div className="flex justify-between items-start mb-4">
      <span
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{ color }}
      >
        {type} • {time}
      </span>
      <Icon
        size={18}
        className="text-outline-variant group-hover:text-on-surface transition-colors"
      />
    </div>
    <h5 className="font-headline font-bold text-md mb-2 text-on-surface">
      {title}
    </h5>
    <p className="text-sm text-on-surface-variant leading-relaxed">
      {description}
    </p>
  </div>
);

const Dashboard = () => {
  return (
    <div
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      className="space-y-8 max-w-7xl mx-auto"
    >
      {/* Hero Insight */}
      <section className="relative overflow-hidden rounded-2xl p-8 ai-glow-bg text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold mb-4 uppercase tracking-wider">
              <Lightbulb size={12} />
              Knowledge Gap Insight
            </div>
            <h3 className="text-2xl font-bold font-headline leading-tight">
              You've added 5 articles on AI Ethics, but haven't explored "Policy
              Frameworks" yet.
            </h3>
            <p className="mt-2 text-white/80 font-medium text-sm">
              Your research path shows a high concentration in conceptual
              theory. Would you like a curated summary of current EU Policy
              drafts?
            </p>
          </div>
          <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform shrink-0">
            Explore Frameworks
          </button>
        </div>
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Left: Stats & Review */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <section className="bg-surface-container-lowest rounded-2xl p-6 ghost-shadow">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-headline font-bold text-lg">
                Knowledge Stats
              </h4>
              <BarChart3 size={20} className="text-outline" />
            </div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <StatCard label="Total Documents" value="1,248" />
              <StatCard label="Word Count" value="482k" />
              <StatCard label="Citations" value="892" />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">
                Core Topic Clusters
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Digital Ethics",
                  "Cognitive Psychology",
                  "Neural Networks",
                  "Heuristics",
                  "SaaS Architecture",
                ].map((tag, i) => (
                  <span
                    key={tag}
                    className={
                      i < 3
                        ? "px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-full text-[10px] font-bold"
                        : "px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-full text-[10px] font-bold"
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-headline font-bold text-lg">Daily Review</h4>
              <button className="text-primary text-xs font-bold hover:underline">
                Refresh Highlights
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ReviewCard
                type="Synthesis"
                time="3 Months Ago"
                icon={History}
                color="#4441cc"
                title="The Feynman Technique in Digital Notes"
                description="You noted that explaining complex code to a 'rubber duck' AI improved retention by 40%. Still applying this?"
              />
              <ReviewCard
                type="Highlight"
                time="1 Year Ago"
                icon={Star}
                color="#8718ba"
                title="Antifragility of Knowledge"
                description="Nassim Taleb's core thesis on how information thrives under volatility. Relevant to your recent AI Ethics query."
              />
              <ReviewCard
                type="Note"
                time="Last Month"
                icon={Edit3}
                color="#005ab3"
                title="UI Layering Principles"
                description="'Surface over borders.' Remember to use background shifts instead of lines for a premium editorial look."
              />
              <ReviewCard
                type="Contradiction"
                time="New"
                icon={ShieldAlert}
                color="#ba1a1a"
                title="Web3 Adoption Rates"
                description="You have two sources from 2024 with conflicting growth projections (12% vs 45%). Want to re-evaluate?"
              />
            </div>
          </section>
        </div>

        {/* Right: Activity */}
        <div className="col-span-12 lg:col-span-4">
          <section className="bg-surface-container-low rounded-2xl p-6 h-full flex flex-col ghost-shadow">
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-headline font-bold text-lg">
                Recent Activity
              </h4>
              <History size={20} className="text-outline" />
            </div>
            <div className="space-y-8 flex-1">
              {[
                {
                  time: "2 hours ago",
                  title: "New Source Added",
                  desc: '"The Impact of LLMs on Software Engineering Labor Markets"',
                  color: "#4441cc",
                },
                {
                  time: "Yesterday",
                  title: "Complex Query Processed",
                  desc: '"Synthesize the relationship between stoicism and design."',
                  color: "#8718ba",
                },
                {
                  time: "2 days ago",
                  title: "Auto-Archived Duplicate",
                  desc: 'Removed redundancy in the "Modernism" folder.',
                  color: "#005ab3",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative pl-8 pb-8 border-l border-outline-variant/30 last:border-0"
                >
                  <div
                    className="absolute -left-1.5 top-0 w-3 h-3 rounded-full ring-4 ring-surface-container-low"
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="text-[10px] font-bold text-outline uppercase mb-1">
                    {item.time}
                  </p>
                  <p className="text-sm font-bold mb-1 text-on-surface">
                    {item.title}
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 bg-surface-container-highest text-on-surface font-bold rounded-xl hover:bg-surface-variant transition-colors text-sm">
              View Full Timeline
            </button>
          </section>
        </div>
      </div>

      {/* Connectivity Map */}
      <section className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/5 ghost-shadow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1">
            <h4 className="font-headline font-bold text-xl mb-4">
              Semantic Connectivity Map
            </h4>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">
              Your assistant has mapped 1,200 unique nodes of information. We've
              detected a strong emerging connection between your notes on{" "}
              <span className="text-primary font-bold">Biophilic Design</span>{" "}
              and{" "}
              <span className="text-tertiary font-bold">
                Remote Office Productivity
              </span>
              .
            </p>
            <button className="mt-6 flex items-center gap-2 text-primary font-bold group text-sm">
              Open Graph View
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
          <div className="w-full md:w-1/2 h-48 bg-surface-container-low rounded-xl relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full stroke-outline-variant stroke-1">
                <line x1="20%" y1="30%" x2="50%" y2="50%" />
                <line x1="80%" y1="20%" x2="50%" y2="50%" />
                <line x1="10%" y1="80%" x2="50%" y2="50%" />
                <line x1="90%" y1="70%" x2="50%" y2="50%" />
              </svg>
            </div>
            <div className="relative z-10 flex gap-4">
              <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/20" />
              <div className="w-6 h-6 rounded-full bg-tertiary shadow-lg shadow-tertiary/20" />
              <div className="w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/20" />
            </div>
            <div className="absolute bottom-4 right-4 text-[10px] font-bold text-outline uppercase tracking-tighter">
              AI Analysis in Progress...
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
