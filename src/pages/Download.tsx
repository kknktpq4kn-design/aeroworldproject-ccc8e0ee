import Layout from "@/components/Layout";
import banner from "@/assets/banner-download.jpg";
import box from "@/assets/win7-box.jpg";

const Download = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Banner */}
        <section className="rounded-sm overflow-hidden shadow-aero ring-1 ring-[hsl(205_60%_75%)]">
          <img src={banner} alt="Download Windows 7 — authentic Windows 7, secure and ready for 2026." className="w-full h-auto block" />
        </section>

        <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent mt-8 mb-6" />

        <h2 className="text-xl font-semibold text-foreground mb-6">Windows 7.1 (latest)</h2>

        <article className="max-w-md">
          <div className="w-40">
            <img src={box} alt="Windows 7.1 Ultimate" className="w-full h-auto" />
          </div>
          <h3 className="text-[hsl(var(--link))] font-semibold text-base mt-3">Windows 7.1 Ultimate</h3>
          <p className="text-sm font-semibold text-foreground mt-2">Release 0.9</p>
          <a
            href="#"
            className="inline-block mt-3 text-sm font-medium py-2 px-4 rounded-sm text-foreground bg-gradient-to-b from-[hsl(45_100%_70%)] to-[hsl(40_100%_55%)] shadow-aero hover:from-[hsl(45_100%_75%)] hover:to-[hsl(40_100%_60%)] transition-colors"
          >
            Download ISO
          </a>
        </article>

        <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent mt-10" />
      </div>
    </Layout>
  );
};

export default Download;
