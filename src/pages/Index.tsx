import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-aero.jpg";
import featGadgets from "@/assets/feat-gadgets.jpg";
import featInstaller from "@/assets/feat-installer.jpg";
import featUpdates from "@/assets/feat-updates.jpg";
import featMarketplace from "@/assets/feat-support.jpg";
import featHardware from "@/assets/feat-marketplace.jpg";
import featSupport from "@/assets/feat-hardware.jpg";

const features = [
  {
    img: featGadgets,
    title: "Gadgets and themes",
    body: "Windows 7.1 restores the original Windows 7 gadgets and Aero themes, exactly as you remember them.",
  },
  {
    img: featInstaller,
    title: "Easy installer",
    body: "The installation is simple and guided, in the classic Windows style — ready in just a few minutes.",
  },
  {
    img: featUpdates,
    title: "Ongoing updates",
    body: "Every new version is published here. Windows 7.1 is a living project, constantly evolving.",
  },
  {
    img: featMarketplace,
    title: "Windows Marketplace",
    body: (
      <>
        Windows Marketplace, developed by <strong>Tech Stuff</strong>, is built into the mod and lets you download useful programs directly from Windows 7.
      </>
    ),
  },
  {
    img: featHardware,
    title: "Modern hardware",
    body: (
      <>
        Unlike the original Windows 7, Windows 7.1 supports even the latest hardware.{" "}
        <a href="#" className="aero-link">See recommended specifications</a>
      </>
    ),
  },
  {
    img: featSupport,
    title: "Support",
    body: "For any issues with the website or the mod, you can reach us directly on our Discord server.",
  },
];

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Hero */}
        <section className="rounded-sm overflow-hidden shadow-aero ring-1 ring-[hsl(205_60%_75%)]">
          <img
            src={heroImg}
            alt="Presenting Windows 7.1"
            className="w-full h-auto block"
          />
        </section>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 mt-8">
          {/* Features */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-1">What Windows 7.1 offers</h2>
            <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent mb-6" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {features.map((f) => (
                <article key={f.title}>
                  <div className="aspect-[4/3] bg-white rounded-sm overflow-hidden shadow-aero ring-1 ring-[hsl(205_40%_82%)]">
                    <img
                      src={f.img}
                      alt={f.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-[hsl(var(--link))] font-semibold text-base mt-3 mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-foreground/85 leading-relaxed">{f.body}</p>
                </article>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent mt-8" />
          </section>

          {/* Sidebar */}
          <aside>
            <h2 className="text-xl font-semibold text-foreground mb-1">Addons</h2>
            <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent mb-4" />
            <ul className="space-y-2 text-sm list-disc list-inside marker:text-foreground/60">
              <li>
                <a href="/discover" className="aero-link">Windows Live Essentials</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
