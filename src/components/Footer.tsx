import { Link } from "react-router-dom";
import logoWindows from "@/assets/logo-windows.png";
import logoMicrosoft from "@/assets/logo-microsoft.png";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-header mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link to="/" className="inline-flex items-center">
            <img src={logoWindows} alt="Windows" className="h-8 w-auto" loading="lazy" />
          </Link>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-primary-foreground/75">©2026 AeroWorld</span>
            <span className="text-primary-foreground/40">|</span>
            <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Credits</a>
          </div>
          <a href="https://microsoft.com" target="_blank" rel="noopener noreferrer">
            <img src={logoMicrosoft} alt="Microsoft" className="h-4 w-auto opacity-90" loading="lazy" />
          </a>
        </div>
      </div>
      <div className="bg-[hsl(212_60%_14%)] py-3">
        <p className="max-w-6xl mx-auto px-4 text-center text-xs font-bold text-primary-foreground/90">
          This project is not related with Microsoft. Windows and the Windows logo are Microsoft's property.
        </p>
      </div>
    </div>
  );
};

export default Footer;
