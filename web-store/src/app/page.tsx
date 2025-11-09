"use client";

import { useState } from "react";

type CurrencyCode = "USD" | "EUR" | "BTC" | "ETH" | "ADA";

type CurrencyOption = {
  code: CurrencyCode;
  label: string;
  symbol: string;
  rate: number;
};

const baseUsdPrice = 59.99;

const currencyOptions: CurrencyOption[] = [
  { code: "USD", label: "US Dollar", symbol: "$", rate: 1 },
  { code: "EUR", label: "Euro", symbol: "€", rate: 0.93 },
  { code: "BTC", label: "Bitcoin", symbol: "₿", rate: 1 / 68000 },
  { code: "ETH", label: "Ethereum", symbol: "Ξ", rate: 1 / 3200 },
  { code: "ADA", label: "Cardano", symbol: "₳", rate: 1 / 0.44 },
];

const game = {
  title: "ECLIPSE // FRACTURE",
  tagline: "Rogue-lite tactical strike shooter",
  description:
    "Lead an elite synthwave unit across shattered orbital cities. Transition seamlessly between tactical planning and hyper-kinetic gunplay as you fracture enemy timelines.",
  mode: "Solo & 3-player co-op",
  release: "March 18, 2027",
  developer: "Axiom Shift",
  publisher: "Nebula Works",
  platforms: "PC · Steam Deck Verified",
  tags: ["Tactical", "Rogue-lite", "Co-op", "Sci-Fi", "Shooter"],
  features: [
    {
      title: "Adaptive enemy squads",
      description:
        "Commanders learn from your tactics, forcing counter-strategies every run for endlessly fresh encounters.",
    },
    {
      title: "Phase-synced combat",
      description:
        "Slow time to plan, fast-forward to execute flawless takedowns. Split decisions ripple across alternate timelines.",
    },
    {
      title: "Deep squad progression",
      description:
        "Unlock bio-mods, experimental weapon cores, and synergy perks that transform your playstyle every season.",
    },
  ],
  requirements: {
    minimum: {
      OS: "Windows 10 64-bit",
      Processor: "Intel i5-9600K · AMD Ryzen 5 3600",
      Memory: "12 GB RAM",
      Graphics: "NVIDIA GTX 1660 · AMD RX 5600",
      Storage: "60 GB SSD space",
    },
    recommended: {
      OS: "Windows 11 64-bit",
      Processor: "Intel i7-12700K · AMD Ryzen 7 5800X",
      Memory: "16 GB RAM",
      Graphics: "NVIDIA RTX 3070 · AMD RX 6800",
      Storage: "60 GB NVMe SSD",
    },
  },
  community: {
    rating: "4.8 / 5",
    reviews: "12,486 reviews",
    online: "89,420 players online",
    trend: 82,
  },
};

const requirementOrder = ["OS", "Processor", "Memory", "Graphics", "Storage"];

const formatPrice = (value: number, code: CurrencyCode) => {
  if (code === "BTC") return value.toFixed(5);
  if (code === "ETH") return value.toFixed(4);
  if (code === "ADA") return value.toFixed(2);
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export default function Home() {
  const [activeCurrency, setActiveCurrency] = useState<CurrencyCode>("USD");
  const prices = currencyOptions.map((option) => ({
    ...option,
    value: baseUsdPrice * option.rate,
  }));
  const selectedPrice =
    prices.find((price) => price.code === activeCurrency) ?? prices[0];

  return (
    <div className="relative min-h-screen overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/15 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,25,40,0.65)_0%,_rgba(5,6,13,0.9)_55%,_rgba(3,3,8,1)_100%)]" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pt-10 text-white lg:px-12">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="rounded-full border border-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              Nebula
            </span>
            <span className="text-sm text-white/50">
              Storefront build · Inspired by Steam
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/60">
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/60 hover:bg-cyan-400/10">
              Library
            </button>
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/60 hover:bg-cyan-400/10">
              Community
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/60 bg-cyan-500/20 px-4 py-2 text-cyan-50 transition hover:border-cyan-300 hover:bg-cyan-400/25">
              <SparkIcon />
              Daily Drops
            </button>
          </div>
        </nav>

        <section className="grid gap-10 lg:grid-cols-[1.9fr_1fr]">
          <div className="space-y-10">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-10 shadow-[0_45px_85px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(4,217,255,0.35),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(255,91,60,0.3),transparent_60%),linear-gradient(140deg,rgba(14,22,35,0.9)_0%,rgba(6,9,18,0.95)_55%,rgba(4,7,14,0.98)_100%)]" />
              <div className="relative z-10 flex flex-col gap-10 lg:flex-row">
                <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-[#0c1221]/80">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(4,217,255,0.45),transparent_60%),radial-gradient(circle_at_80%_35%,rgba(255,91,60,0.45),transparent_65%),linear-gradient(150deg,#090e1a_0%,#0a1428_50%,#070912_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_45%,rgba(255,255,255,0)_55%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] mix-blend-screen" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#06070d] via-[#06070d]/60 to-transparent px-6 pb-6 pt-12 text-xs font-medium uppercase tracking-[0.4em] text-white/70">
                    <span>Orbital Sector VII</span>
                    <span>Steam // Ultra</span>
                  </div>
                </div>

                <div className="flex max-w-xl flex-1 flex-col justify-between gap-8">
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/70">
                        Featured
                      </span>
                      <span className="text-sm text-white/50">
                        {game.tags.join(" · ")}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        {game.title}
                      </h1>
                      <p className="text-lg text-white/70">{game.tagline}</p>
                    </div>

                    <p className="max-w-xl text-sm leading-relaxed text-white/60">
                      {game.description}
                    </p>
                  </div>

                  <div className="grid gap-4 text-sm text-white/60 sm:grid-cols-2">
                    <InfoTile label="Mode" value={game.mode} />
                    <InfoTile label="Release" value={game.release} />
                    <InfoTile label="Developer" value={game.developer} />
                    <InfoTile label="Publisher" value={game.publisher} />
                    <InfoTile label="Platforms" value={game.platforms} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    What you&apos;ll love
                  </h2>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200/80">
                    <SparkIcon />
                    Highlights
                  </div>
                </div>
                <ul className="mt-6 space-y-5 text-sm text-white/70">
                  {game.features.map((feature) => (
                    <li
                      key={feature.title}
                      className="group relative rounded-2xl border border-white/5 bg-white/[0.04] p-5 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
                    >
                      <span className="text-base font-medium text-white">
                        {feature.title}
                      </span>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-white/60">
                        {feature.description}
                      </p>
                      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-400/0 opacity-0 transition group-hover:border-cyan-400/40 group-hover:opacity-100" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h2 className="text-lg font-semibold text-white">
                  System requirements
                </h2>
                <div className="mt-6 grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                    Minimum
                  </h3>
                  <div className="space-y-3">
                    {requirementOrder.map((key) => (
                      <RequirementRow
                        key={`min-${key}`}
                        label={key}
                        value={game.requirements.minimum[key as keyof typeof game.requirements.minimum]}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                    Recommended
                  </h3>
                  <div className="space-y-3">
                    {requirementOrder.map((key) => (
                      <RequirementRow
                        key={`rec-${key}`}
                        label={key}
                        value={game.requirements.recommended[key as keyof typeof game.requirements.recommended]}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <h2 className="text-lg font-semibold text-white">
                Choose your currency
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Displayed values update live. Crypto estimates refresh hourly.
              </p>

              <div className="mt-6 grid gap-3">
                {prices.map((option) => {
                  const isActive = option.code === selectedPrice.code;
                  return (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => setActiveCurrency(option.code)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                        isActive
                          ? "border-cyan-400/70 bg-cyan-500/15 shadow-[0_18px_35px_rgba(0,255,255,0.12)]"
                          : "border-white/10 bg-white/5 hover:border-cyan-300/50 hover:bg-cyan-400/10"
                      }`}
                    >
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {option.symbol}
                          {formatPrice(option.value, option.code)}
                        </p>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                          {option.label}
                        </p>
                      </div>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${
                          isActive
                            ? "border-cyan-400/60 text-cyan-100"
                            : "border-white/10 text-white/40"
                        }`}
                      >
                        {option.code}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[26px] bg-gradient-to-br from-cyan-500/30 via-indigo-500/20 to-purple-500/20 p-[1px]">
                <div className="rounded-[25px] bg-[#05060d]/95 p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                    Selected offer
                  </div>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    {selectedPrice.symbol}
                    {formatPrice(selectedPrice.value, selectedPrice.code)}
                    <span className="ml-2 text-base font-medium text-white/60">
                      {selectedPrice.code}
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-white/50">
                    Includes all future content drops & season passes.
                  </p>
                  <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:from-cyan-300 hover:via-cyan-200 hover:to-emerald-200">
                    <CartIcon />
                    Purchase now
                  </button>
                  <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-white">
                    <WishlistIcon />
                    Add to wishlist
                  </button>
                  <p className="mt-3 text-[0.7rem] uppercase tracking-[0.3em] text-white/40">
                    Instant activation · Secure checkout
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white">
                Community signals
              </h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between text-white/70">
                  <dt className="uppercase tracking-[0.35em]">Rating</dt>
                  <dd className="text-base font-semibold text-white">
                    {game.community.rating}
                  </dd>
                </div>
                <div className="flex items-center justify-between text-white/70">
                  <dt className="uppercase tracking-[0.35em]">Reviews</dt>
                  <dd className="text-base font-semibold text-white">
                    {game.community.reviews}
                  </dd>
                </div>
                <div className="flex items-center justify-between text-white/70">
                  <dt className="uppercase tracking-[0.35em]">Online now</dt>
                  <dd className="text-base font-semibold text-white">
                    {game.community.online}
                  </dd>
                </div>
              </dl>
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                  <span>Trending</span>
                  <span>{game.community.trend}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
                    style={{ width: `${game.community.trend}%` }}
                  />
                </div>
                <p className="mt-3 text-xs text-white/50">
                  Trending score is based on wishlists, concurrent players, and
                  feature adoption over the last 24 hours.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

function InfoTile({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/50">
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-white">{value}</div>
    </div>
  );
}

function RequirementRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-white/5 bg-white/[0.04] px-4 py-3">
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/50">
        {label}
      </span>
      <span className="text-sm text-white/70">{value}</span>
    </div>
  );
}

function SparkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-cyan-200"
    >
      <path
        d="M10 1.5L11.9 6.8L17.5 7.3L13.2 11L14.5 16.5L10 13.6L5.5 16.5L6.8 11L2.5 7.3L8.1 6.8L10 1.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      className="text-slate-900"
    >
      <path
        d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.6H9.4a2 2 0 0 1-2-1.6L6 4H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="10.5"
        cy="19"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="17.5"
        cy="19"
        r="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function WishlistIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      className="text-white/70"
    >
      <path
        d="M12 20.5l-1.45-1.32C6.4 15.36 3 12.28 3 8.5A4.5 4.5 0 0 1 7.5 4c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 19.5 4 4.5 4.5 0 0 1 24 8.5c0 3.78-3.4 6.86-7.55 10.68L12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
