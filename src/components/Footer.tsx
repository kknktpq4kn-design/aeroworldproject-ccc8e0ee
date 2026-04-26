import { Link } from "react-router-dom";
import footerBanner from "@/assets/footer-banner.jpeg";
import logoWindows from "@/assets/logo-windows.png";
import logoMicrosoft from "@/assets/logo-microsoft.png";

const Footer = () => {
  return (
    <footer className="w-full mt-12">
      {/* MOBILE footer — compact native version */}
      <div className="md:hidden bg-gradient-header">
        <div className="px-4 py-5 flex flex-col items-center gap-3 text-center">
          <Link to="/" aria-label="Home">
            <img src={logoWindows} alt="Windows" className="h-7 w-auto" loading="lazy" />
          </Link>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-primary-foreground/75">©2026 AeroWorld</span>
            <span className="text-primary-foreground/40">|</span>
            <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Credits</a>
          </div>
          <a
            href="https://microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Microsoft"
          >
            <img src={logoMicrosoft} alt="Microsoft" className="h-3.5 w-auto opacity-90" loading="lazy" />
          </a>
        </div>
        <div className="bg-[hsl(212_60%_14%)] py-3">
          <p className="px-4 text-center text-[11px] font-bold text-primary-foreground/90 leading-relaxed">
            This project is not related with Microsoft. Windows and the Windows logo are Microsoft's property.
          </p>
        </div>
      </div>

      {/* DESKTOP footer — banner image with hotspots */}
      <div className="hidden md:block w-full relative">
        <img
          src={footerBanner}
          alt="©2026 AeroWorld — This project is not related with Microsoft."
          className="w-full h-auto block select-none"
          draggable={false}
        />
        <Link
          to="/"
          aria-label="Home"
          className="absolute"
          style={{ left: "9.4%", top: "23%", width: "11.5%", height: "30%" }}
        />
        <a
          href="#"
          aria-label="Credits"
          className="absolute"
          style={{ left: "57%", top: "28%", width: "7.2%", height: "16%" }}
        />
        <a
          href="https://microsoft.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Microsoft"
          className="absolute"
          style={{ left: "88.5%", top: "28%", width: "8%", height: "18%" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
