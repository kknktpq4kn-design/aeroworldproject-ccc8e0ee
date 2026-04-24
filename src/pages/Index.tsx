import heroImg from "@/assets/hero-aero.jpg";
import logoWindows from "@/assets/logo-windows.png";
import logoMicrosoft from "@/assets/logo-microsoft.png";
import logoDiscord from "@/assets/logo-discord.jpg";
import featThemes from "@/assets/feat-themes.jpg";
import featGadgets from "@/assets/feat-gadgets.jpg";
import featInstaller from "@/assets/feat-installer.jpg";
import featUpdates from "@/assets/feat-updates.jpg";
import featMarketplace from "@/assets/feat-marketplace.jpg";
import featHardware from "@/assets/feat-hardware.jpg";
import featSupport from "@/assets/feat-support.jpg";

const features = [
  {
    img: featThemes,
    title: "Temi e wallpaper",
    body: "Windows 7.1 include i temi Aero originali e i wallpaper iconici di Windows XP, Vista e 7.",
  },
  {
    img: featGadgets,
    title: "Gadgets desktop",
    body: "I gadget originali del desktop tornano al loro posto, esattamente come li ricordi.",
  },
  {
    img: featInstaller,
    title: "Installer semplice",
    body: "L'installazione è guidata in puro stile Windows — pronta in pochi minuti.",
  },
  {
    img: featUpdates,
    title: "Aggiornamenti continui",
    body: "Ogni nuova versione viene pubblicata qui. Windows 7.1 è un progetto vivo, in costante evoluzione.",
  },
  {
    img: featMarketplace,
    title: "Windows Marketplace",
    body: "Il Marketplace integrato nella mod ti permette di scaricare programmi utili direttamente dal sistema.",
  },
  {
    img: featHardware,
    title: "Hardware moderno",
    body: "A differenza del Windows 7 originale, Windows 7.1 supporta anche l'hardware più recente.",
    link: { label: "Specifiche consigliate", href: "#specs" },
  },
  {
    img: featSupport,
    title: "Supporto",
    body: "Per qualsiasi problema con il sito o la mod, puoi contattarci direttamente sul nostro server Discord.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top utility bar */}
      <div className="bg-gradient-header text-primary-foreground/80 text-xs">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between gap-2">
          <img src={logoMicrosoft} alt="Microsoft" className="h-3 w-auto opacity-90" />
          <div className="flex items-center gap-2">
            <span>Italia</span>
            <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Cambia</a>
            <span>|</span>
            <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Altri progetti</a>
          </div>
        </div>
      </div>

      {/* Header with logo */}
      <header className="bg-gradient-header">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <a href="/" className="inline-flex items-center">
            <img src={logoWindows} alt="Windows 7.1" className="h-8 w-auto drop-shadow" />
          </a>
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-gradient-nav border-y border-[hsl(212_60%_10%)]">
        <div className="max-w-6xl mx-auto px-4 flex">
          {["Home", "Download", "Scopri Windows"].map((label, i) => (
            <a
              key={label}
              href="#"
              className={`px-5 py-3 text-sm text-primary-foreground transition-colors hover:bg-[hsl(212_55%_32%)] ${
                i === 0 ? "bg-[hsl(212_55%_32%)] font-semibold" : ""
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Hero */}
          <section className="rounded-md overflow-hidden shadow-aero ring-1 ring-[hsl(205_60%_75%)] relative">
            <img
              src={heroImg}
              alt="Presentiamo Windows 7.1"
              width={1600}
              height={640}
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-14 max-w-[55%] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                <p className="text-2xl md:text-4xl font-light italic mb-3" style={{ fontFamily: "'Segoe Script', 'Lucida Handwriting', cursive" }}>
                  Presentiamo
                </p>
                <h1 className="text-4xl md:text-6xl font-light italic leading-none" style={{ fontFamily: "'Segoe Script', 'Lucida Handwriting', cursive" }}>
                  Windows 7.1
                </h1>
                <p className="hidden md:block mt-4 text-sm leading-relaxed max-w-md text-white/95">
                  Dimentica le mod moderne e gli skin di Windows 10. Vivi l'autentica esperienza
                  Windows 7, rinforzata per il 2026. Codice pulito, zero telemetria, sicurezza
                  aggiornata — il vero mondo Aero che amavi, pienamente compatibile con il web di oggi.
                </p>
              </div>
            </div>
          </section>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-8 mt-10">
            {/* Features */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-1">Cosa offre Windows 7.1</h2>
              <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent mb-6" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f) => (
                  <article
                    key={f.title}
                    className="bg-gradient-card rounded-md shadow-aero ring-1 ring-[hsl(205_40%_82%)] overflow-hidden hover:shadow-glow transition-shadow duration-300"
                  >
                    <div className="aspect-[4/3] bg-white overflow-hidden">
                      <img
                        src={f.img}
                        alt={f.title}
                        loading="lazy"
                        width={768}
                        height={512}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-[hsl(var(--link))] font-semibold text-base mb-2">
                        {f.title}
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {f.body}
                        {f.link && (
                          <>
                            {" "}
                            <a href={f.link.href} className="aero-link">
                              {f.link.label}
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Sidebar */}
            <aside>
              <h2 className="text-xl font-semibold text-primary mb-1">Addons</h2>
              <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent mb-4" />
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="aero-link">Windows Live Essentials</a>
                </li>
                <li>
                  <a href="#" className="aero-link">Aero Glass Pack</a>
                </li>
                <li>
                  <a href="#" className="aero-link">Classic Gadgets</a>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-gradient-card rounded-md shadow-aero ring-1 ring-[hsl(205_40%_82%)]">
                <div className="bg-[hsl(235_86%_57%)] rounded p-3 mb-3 flex items-center justify-center">
                  <img src={logoDiscord} alt="Discord" className="h-7 w-auto" />
                </div>
                <p className="text-xs text-foreground/75 mb-3">
                  Unisciti alla community per supporto, anteprime e novità.
                </p>
                <a
                  href="#"
                  className="inline-block w-full text-center text-sm py-2 px-3 rounded bg-gradient-to-b from-[hsl(235_86%_62%)] to-[hsl(235_86%_50%)] text-white shadow-aero hover:from-[hsl(235_90%_66%)] hover:to-[hsl(235_90%_54%)] transition-colors"
                >
                  Entra nel server
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-header text-primary-foreground/80 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <a href="/" className="inline-flex items-center">
            <img src={logoWindows} alt="Windows 7.1" className="h-5 w-auto" loading="lazy" />
          </a>
          <p>
            ©2026 Windows 7.1 Project |{" "}
            <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Crediti</a>
          </p>
          <p className="text-[10px] max-w-md text-center md:text-right opacity-75">
            Progetto non ufficiale e non affiliato con Microsoft. Windows e il logo Windows sono
            marchi di proprietà di Microsoft.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
