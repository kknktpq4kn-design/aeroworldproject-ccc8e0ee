import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import waveBg from "@/assets/r7-wave.png";
import logoWindows from "@/assets/r7-logo-windows.jpg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/download", label: "Download" },
  { to: "/discover", label: "Discover Windows" },
  { to: "#", label: "Credits" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      className="w-full"
      style={{
        backgroundColor: "hsl(205 80% 96%)",
        backgroundImage: `url(${waveBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="w-full">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          {/* Top utility bar */}
          <div className="flex justify-end items-center pt-3 text-[12px] gap-2">
            <span className="font-bold text-[hsl(215_40%_20%)]">United States</span>
            <a href="#" className="text-[hsl(210_100%_38%)] hover:underline">Change</a>
            <span className="text-[hsl(215_20%_55%)]">|</span>
            <a href="#" className="text-[hsl(210_100%_38%)] hover:underline">Other projects</a>
          </div>

          {/* Logo row */}
          <div className="flex items-center justify-between py-3 sm:py-5">
            <Link to="/" aria-label="Home" className="inline-flex items-center">
              <img
                src={logoWindows}
                alt="Windows"
                className="h-8 sm:h-10 w-auto select-none"
                draggable={false}
              />
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded text-[hsl(215_40%_20%)] hover:bg-[hsl(205_60%_92%)]"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop nav (still inside the wave area) */}
      <nav className="hidden md:block">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <ul className="flex items-center gap-7 pb-3">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={`inline-block py-1 text-[15px] transition-colors ${
                      active
                        ? "text-[hsl(215_40%_15%)] font-semibold"
                        : "text-[hsl(210_100%_38%)] hover:underline"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* subtle separator under header */}
      <div className="h-px w-full bg-[hsl(205_40%_82%)]/70" />

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-b border-[hsl(205_40%_85%)]">
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <li key={item.label} className="border-b border-[hsl(205_40%_90%)] last:border-b-0">
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-5 py-3 text-[15px] ${
                      active
                        ? "text-[hsl(215_40%_15%)] font-semibold bg-[hsl(205_60%_96%)]"
                        : "text-[hsl(210_100%_38%)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
