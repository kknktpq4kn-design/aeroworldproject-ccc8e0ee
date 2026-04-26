import Layout from "@/components/Layout";

type Row = { label: string; value: string };

const minimumSpecs: Row[] = [
  { label: "CPU", value: "1 GHz 64-bit processor (Intel Core 2 Duo or AMD Athlon 64 X2)" },
  { label: "RAM", value: "2 GB" },
  { label: "Storage", value: "20 GB free disk space" },
  { label: "GPU", value: "DirectX 9 compatible with WDDM 1.0 driver" },
  { label: "Display", value: "800×600 resolution" },
  { label: "Drive", value: "USB drive (8 GB+) or DVD for installation" },
];

const recommendedSpecs: Row[] = [
  { label: "CPU", value: "Intel Core i3 / AMD Ryzen 3 or better" },
  { label: "RAM", value: "4 GB or more" },
  { label: "Storage", value: "40 GB free disk space (SSD preferred)" },
  { label: "GPU", value: "DirectX 11 compatible GPU with 512 MB VRAM" },
  { label: "Display", value: "1280×720 or higher" },
  { label: "Drive", value: "USB drive (8 GB+) or DVD for installation" },
];

const SpecCard = ({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle: string;
  rows: Row[];
}) => (
  <div className="rounded-sm bg-white/70 ring-1 ring-[hsl(205_50%_82%)] shadow-aero p-6">
    <h2 className="text-2xl font-semibold text-[hsl(var(--link))] mb-1">{title}</h2>
    <p className="text-sm italic text-foreground/70 mb-5">{subtitle}</p>
    <dl className="divide-y divide-[hsl(205_40%_88%)]">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className={`grid grid-cols-[90px_1fr] gap-4 py-3 ${
            i % 2 === 0 ? "bg-[hsl(205_70%_96%)]" : ""
          } px-2 -mx-2 rounded-sm`}
        >
          <dt className="font-bold text-foreground">{r.label}</dt>
          <dd className="text-sm text-foreground/85 leading-relaxed">{r.value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const Specs = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          Recommended specifications
        </h1>
        <p className="text-foreground/80 mb-8">
          Windows 7.1 is designed to run on any PC from 2010 onwards. Below are the
          minimum and recommended requirements.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpecCard
            title="Minimum"
            subtitle="A PC from around 2010 or newer should work fine."
            rows={minimumSpecs}
          />
          <SpecCard
            title="Recommended"
            subtitle="For the best Aero Glass experience."
            rows={recommendedSpecs}
          />
        </div>

        <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent my-8" />

        <p className="text-sm text-foreground/70">
          * Windows 7.1 is a standalone OS — install it directly on your PC or in a
          virtual machine.
        </p>
      </div>
    </Layout>
  );
};

export default Specs;
