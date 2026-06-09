const strengths = [
  {
    title: "AIを前提にした設計",
    description:
      "要件整理、構成案、原稿作成、UI改善まで、AIを制作フローに自然に組み込みます。",
  },
  {
    title: "伝わるWeb体験",
    description:
      "見た目だけでなく、誰に何を届けるかを整理して、行動につながるページにします。",
  },
  {
    title: "小さく作って育てる",
    description:
      "公開しやすい最小構成から始めて、反応を見ながら改善できる形を大切にします。",
  },
];

const processSteps = [
  "目的とターゲットを整理",
  "AIで構成とコピーを下書き",
  "Next.jsで高速に実装",
  "公開後の改善点を分析",
];

const works = [
  {
    title: "Landing Page",
    description: "AIサービスや新規事業の価値を、短い導線で伝える1ページサイト。",
  },
  {
    title: "Portfolio",
    description: "実績、スキル、問い合わせ導線をまとめた個人・小規模チーム向けサイト。",
  },
  {
    title: "Prototype",
    description: "検証したいアイデアを、素早く触れるWebプロトタイプとして形にします。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-mist text-ink">
      <section className="hero-section">
        <div className="mx-auto flex min-h-[92svh] w-full max-w-7xl flex-col justify-between px-5 py-5 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-4">
            <a className="text-sm font-bold sm:text-base" href="#top" aria-label="トップへ戻る">
              AI Web Studio
            </a>
            <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/70 sm:flex">
              <a className="transition hover:text-ocean" href="#service">
                Service
              </a>
              <a className="transition hover:text-ocean" href="#works">
                Works
              </a>
              <a className="transition hover:text-ocean" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <div id="top" className="grid gap-10 pb-12 pt-20 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-ink/15 bg-white/75 px-4 py-2 text-sm font-bold text-ocean shadow-soft backdrop-blur">
                AI × Web制作 × 事業開発
              </p>
              <h1 className="max-w-3xl text-5xl font-black leading-[1.04] sm:text-6xl lg:text-7xl">
                AIで、伝わるWebを速く美しく。
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-ink/75 sm:text-lg">
                生成AIを活用した企画・コピー・デザイン・実装で、アイデアを公開できるWeb体験へ変えるポートフォリオです。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-6 text-sm font-bold text-white transition hover:bg-ocean" href="#contact">
                  相談する
                </a>
                <a className="inline-flex min-h-12 items-center justify-center rounded-md border border-ink/20 bg-white/80 px-6 text-sm font-bold text-ink transition hover:border-ocean hover:text-ocean" href="#works">
                  制作例を見る
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 rounded-lg bg-white/82 p-4 shadow-soft backdrop-blur sm:max-w-xl lg:justify-self-end">
              <div>
                <p className="text-3xl font-black text-ocean">01</p>
                <p className="mt-2 text-xs font-bold text-ink/65">Plan</p>
              </div>
              <div>
                <p className="text-3xl font-black text-coral">02</p>
                <p className="mt-2 text-xs font-bold text-ink/65">Design</p>
              </div>
              <div>
                <p className="text-3xl font-black text-honey">03</p>
                <p className="mt-2 text-xs font-bold text-ink/65">Launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-ocean">Service</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              AIを使うからこそ、人に届く設計を丁寧に。
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-ink/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-coral">Process</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              制作はシンプルに、改善は継続しやすく。
            </h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <li key={step} className="flex min-h-28 gap-4 rounded-lg border border-ink/10 bg-mist p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="self-center text-lg font-bold">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="works" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase text-honey">Works</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                アイデアを、見える成果物へ。
              </h2>
            </div>
            <p className="max-w-md leading-7 text-ink/70">
              企画段階のメモから公開可能なページまで、目的に合わせて必要な粒度で制作します。
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {works.map((work) => (
              <article key={work.title} className="rounded-lg bg-ink p-6 text-white">
                <p className="text-sm font-bold text-honey">{work.title}</p>
                <p className="mt-6 text-lg leading-8 text-white/80">{work.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-honey">Contact</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              AIを使ったWeb制作を、まずは小さく始めませんか。
            </h2>
          </div>
          <a className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-bold text-ink transition hover:bg-honey" href="mailto:hello@example.com">
            メールで相談する
          </a>
        </div>
      </section>
    </main>
  );
}
