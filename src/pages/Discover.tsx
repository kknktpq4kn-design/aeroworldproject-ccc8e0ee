import Layout from "@/components/Layout";
import banner from "@/assets/banner-wle.jpg";
import hotmail from "@/assets/wle/hotmail.jpg";
import photos from "@/assets/wle/photos.png";
import skydrive from "@/assets/wle/skydrive.png";
import profile from "@/assets/wle/profile.png";
import calendar from "@/assets/wle/calendar.png";
import groups from "@/assets/wle/groups.jpg";
import spaces from "@/assets/wle/spaces.png";
import messenger from "@/assets/wle/messenger.jpg";
import mail from "@/assets/wle/mail.jpg";
import photoGallery from "@/assets/wle/photo-gallery.png";
import movieMaker from "@/assets/wle/movie-maker.jpg";
import writer from "@/assets/wle/writer.jpg";
import familySafety from "@/assets/wle/family-safety.jpg";
import toolbar from "@/assets/wle/toolbar.jpg";

const webApps = [
  { img: hotmail, label: "Hotmail" },
  { img: photos, label: "Photos" },
  { img: skydrive, label: "SkyDrive" },
  { img: profile, label: "Profile" },
  { img: calendar, label: "Calendar" },
  { img: groups, label: "Groups" },
  { img: spaces, label: "Spaces" },
];

const pcApps = [
  { img: messenger, label: "Messenger" },
  { img: mail, label: "Mail" },
  { img: photoGallery, label: "Photo Gallery" },
  { img: movieMaker, label: "Movie Maker" },
  { img: writer, label: "Writer" },
  { img: familySafety, label: "Family Safety" },
  { img: toolbar, label: "Toolbar" },
];

const AppGrid = ({ apps }: { apps: { img: string; label: string }[] }) => (
  <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-5 mt-6">
    {apps.map((a) => (
      <a key={a.label} href="#" className="flex flex-col items-center text-center group">
        <img src={a.img} alt={a.label} className="h-12 w-12 object-contain" loading="lazy" />
        <span className="mt-2 text-xs text-[hsl(var(--link))] group-hover:underline break-words">{a.label}</span>
      </a>
    ))}
  </div>
);

const Discover = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-light text-foreground mb-4">Windows Live</h1>

        {/* Banner */}
        <section className="rounded-sm overflow-hidden shadow-aero ring-1 ring-[hsl(205_60%_75%)] relative">
          <img src={banner} alt="Where Windows and the web come together" className="w-full h-auto block" />
        </section>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Windows Live on the web</h2>
            <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent mt-1 mb-4" />
            <p className="text-sm text-foreground/85 leading-relaxed">
              Now there's one place online where you can check your e-mail, chat with friends, and save and share your photos and files. You can also connect with other websites like Facebook, MySpace, and Flickr to make sharing even easier.
            </p>
            <AppGrid apps={webApps} />
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Windows Live on your PC</h2>
            <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent mt-1 mb-4" />
            <p className="text-sm text-foreground/85 leading-relaxed">
              Windows Live Essentials is a set of free programs that help you manage just about everything you do online. It works with Windows Live web services so you can share what you're doing or get to your stuff from nearly anywhere.
            </p>
            <AppGrid apps={pcApps} />
          </section>
        </div>

        <div className="h-px bg-gradient-to-r from-[hsl(205_70%_70%)] to-transparent mt-10" />
      </div>
    </Layout>
  );
};

export default Discover;
