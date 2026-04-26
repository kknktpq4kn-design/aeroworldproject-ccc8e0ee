import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import headerBanner from "@/assets/header-banner.jpeg";
import logoWindows from "@/assets/logo-windows.png";

type SubItem = { label: string; to: string };

const downloadSubMenu: SubItem[] = [
  { label: "Windows 7.1", to: "/download" },
  { label: "Windows 7.1 themes", to: "#" },
  { label: "Desktop backgrounds", to: "#" },
];

const discoverSubMenu: SubItem[] = [
  { label: "Desktop", to: "#" },
  { label: "Personalize", to: "#" },
  { label: "TV and streaming", to: "#" },
  { label: "Windows Touch", to: "#" },
  { label: "More articles", to: "/discover" },
];

interface NavItemProps {
  to: string;
  label: string;
  subItems?: SubItem[];
  isActive: boolean;
}

function DesktopNavItem({ to, label, subItems, isActive }: NavItemProps) {
  const [open, setOpen] = useState(false);
  const hasSubMenu = !!subItems && subItems.length > 0;
  return (
    <div
      className="relative"
      onMouseEnter={() => hasSubMenu && setOpen(true)}
      onMouseLeave={() => hasSubMenu && setOpen(false)}
    >
      <Link
        to={to}
        aria-current={isActive ? "page" : undefined}
        className={`px-4 py-3 text-sm inline-block transition-colors ${
          isActive
            ? "text-white font-bold"
            : "text-[hsl(205_60%_75%)] hover:text-white"
        }`}
      >
        {label}
      </Link>
      {hasSubMenu && open && (
        <div className="absolute top-full left-0 z-50 bg-[hsl(212_60%_15%)] border border-[hsl(205_55%_30%)] shadow-aero min-w-[200px]">
          {subItems!.map((item, i) => (
            <React.Fragment key={i}>
              {i === subItems!.length - 1 && subItems!.length > 2 && (
                <div className="border-t border-[hsl(205_55%_30%)] mx-2" />
              )}
              <Link
                to={item.to}
                className="block px-4 py-2 text-sm text-primary-foreground/85 hover:text-primary-foreground hover:bg-[hsl(212_55%_22%)]"
              >
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", isActive: location.pathname === "/" },
    { to: "/download", label: "Download", subItems: downloadSubMenu, isActive: location.pathname.startsWith("/download") },
    { to: "/discover", label: "Discover Windows", subItems: discoverSubMenu, isActive: location.pathname.startsWith("/discover") },
  ];

  return (
    <header className="w-full">
      {/* MOBILE header — compact, native (no banner image) */}
      <div className="md:hidden bg-gradient-header">
        <div className="flex items-center justify-between px-3 py-2">
          <Link to="/" aria-label="Home" className="inline-flex items-center">
            <img src={logoWindows} alt="Windows" className="h-7 w-auto drop-shadow" />
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 text-primary-foreground rounded hover:bg-[hsl(212_55%_22%)]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="border-t border-[hsl(212_60%_10%)] bg-gradient-nav">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.to} className="border-b border-[hsl(212_60%_10%)]/40 last:border-b-0">
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-sm transition-colors ${
                      item.isActive
                        ? "text-white font-bold bg-[hsl(212_55%_22%)]"
                        : "text-[hsl(205_60%_80%)] hover:text-white hover:bg-[hsl(212_55%_22%)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="px-4 py-2 text-xs text-primary-foreground/70 flex gap-3">
                <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Change region</a>
                <span className="opacity-40">|</span>
                <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Other projects</a>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* DESKTOP header — banner image with hotspots */}
      <div className="hidden md:block w-full relative">
        <img
          src={headerBanner}
          alt="Windows"
          className="w-full h-auto block select-none"
          draggable={false}
        />

        {/* Logo */}
        <Link
          to="/"
          aria-label="Home"
          className="absolute"
          style={{ left: "9%", top: "31%", width: "12%", height: "27%" }}
        />

        {/* Top bar links */}
        <a
          href="#"
          aria-label="Change region"
          className="absolute"
          style={{ left: "74.5%", top: "11%", width: "3.8%", height: "13%" }}
        />
        <a
          href="#"
          aria-label="Other projects"
          className="absolute"
          style={{ left: "79.3%", top: "11%", width: "8.9%", height: "13%" }}
        />

        {/* Cover baked-in nav text and render real items so active state lights up */}
        <div
          className="absolute left-0 right-0 bg-[hsl(212_55%_14%)]"
          style={{ top: "70%", height: "30%" }}
        />
        <div
          className="absolute left-0 right-0 flex items-center"
          style={{ top: "70%", height: "30%", paddingLeft: "7%" }}
        >
          {navItems.map((item) => (
            <DesktopNavItem key={item.to} {...item} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
