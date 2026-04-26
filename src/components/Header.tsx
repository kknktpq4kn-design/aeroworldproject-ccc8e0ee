import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  label: string;
  to: string;
  subItems?: SubItem[];
  isActive: boolean;
}

function NavItem({ label, to, subItems, isActive }: NavItemProps) {
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
        className={`px-4 py-3 text-sm inline-block transition-colors ${
          isActive
            ? "text-primary-foreground font-semibold bg-[hsl(212_55%_32%)]"
            : "text-primary-foreground/85 hover:text-primary-foreground hover:bg-[hsl(212_55%_32%)]"
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
  return (
    <div className="w-full bg-gradient-header">
      {/* Top utility bar */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-end items-center py-1.5 text-xs gap-2">
          <span className="text-primary-foreground/80">United States</span>
          <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Change</a>
          <span className="text-primary-foreground/40">|</span>
          <a href="#" className="text-[hsl(45_100%_70%)] hover:underline">Other projects</a>
        </div>
      </div>

      {/* Logo */}
      <div className="max-w-6xl mx-auto px-4 pb-1 pt-2">
        <Link to="/" className="inline-flex items-center">
          <img src={logoWindows} alt="Windows" className="h-9 w-auto drop-shadow" />
        </Link>
      </div>

      {/* Navigation */}
      <div className="border-t border-[hsl(212_60%_10%)] bg-gradient-nav">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center">
            <NavItem label="Home" to="/" isActive={location.pathname === "/"} />
            <NavItem
              label="Download"
              to="/download"
              subItems={downloadSubMenu}
              isActive={location.pathname.startsWith("/download")}
            />
            <NavItem
              label="Discover Windows"
              to="/discover"
              subItems={discoverSubMenu}
              isActive={location.pathname.startsWith("/discover")}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
