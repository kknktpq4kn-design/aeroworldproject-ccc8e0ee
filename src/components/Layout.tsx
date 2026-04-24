import { NavLink, Link } from "react-router-dom";
import { ReactNode } from "react";
import logoWindows from "@/assets/logo-windows.png";
import logoMicrosoft from "@/assets/logo-microsoft.png";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/download", label: "Download", end: false },
  { to: "/discover", label: "Discover Windows", end: false },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top utility bar */}
      <div className="bg-gradient-header text-primary-foreground/85 text-xs">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex justify-end items-center gap-2">
          <span>United States</span>
          <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Change</a>
          <span className="opacity-60">|</span>
          <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Other projects</a>
        </div>
      </div>

      {/* Header with logo */}
      <header className="bg-gradient-header">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center">
            <img src={logoWindows} alt="Windows" className="h-9 w-auto drop-shadow" />
          </Link>
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-gradient-nav border-y border-[hsl(212_60%_10%)]">
        <div className="max-w-6xl mx-auto px-4 flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-5 py-3 text-sm text-primary-foreground transition-colors hover:bg-[hsl(212_55%_32%)] ${
                  isActive ? "bg-[hsl(212_55%_32%)] font-semibold" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-header text-primary-foreground/85 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <Link to="/" className="inline-flex items-center">
            <img src={logoWindows} alt="Windows" className="h-6 w-auto" loading="lazy" />
          </Link>
          <p>
            ©2026 AeroWorld <span className="opacity-60 mx-2">|</span>{" "}
            <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Credits</a>
          </p>
          <img src={logoMicrosoft} alt="Microsoft" className="h-4 w-auto opacity-90" loading="lazy" />
        </div>
        <div className="bg-[hsl(212_60%_14%)] py-3">
          <p className="max-w-6xl mx-auto px-4 text-center text-xs text-primary-foreground/90">
            This project is not related with Microsoft. Windows and the Windows logo are Microsoft's property.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
