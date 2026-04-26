import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerBanner from "@/assets/header-banner.jpeg";

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

interface NavHotspotProps {
  to: string;
  label: string;
  style: React.CSSProperties;
  subItems?: SubItem[];
  isActive: boolean;
}

function NavHotspot({ to, label, style, subItems, isActive }: NavHotspotProps) {
  const [open, setOpen] = useState(false);
  const hasSubMenu = !!subItems && subItems.length > 0;
  return (
    <div
      className="absolute"
      style={style}
      onMouseEnter={() => hasSubMenu && setOpen(true)}
      onMouseLeave={() => hasSubMenu && setOpen(false)}
    >
      <Link
        to={to}
        aria-label={label}
        aria-current={isActive ? "page" : undefined}
        className="block w-full h-full"
      />
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
    <div className="w-full relative">
      <img
        src={headerBanner}
        alt="Windows — Home, Download, Discover Windows"
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

      {/* Nav items */}
      <NavHotspot
        to="/"
        label="Home"
        isActive={location.pathname === "/"}
        style={{ left: "9%", top: "73%", width: "7.2%", height: "22%" }}
      />
      <NavHotspot
        to="/download"
        label="Download"
        subItems={downloadSubMenu}
        isActive={location.pathname.startsWith("/download")}
        style={{ left: "16.6%", top: "73%", width: "8.2%", height: "22%" }}
      />
      <NavHotspot
        to="/discover"
        label="Discover Windows"
        subItems={discoverSubMenu}
        isActive={location.pathname.startsWith("/discover")}
        style={{ left: "25%", top: "73%", width: "13.4%", height: "22%" }}
      />
    </div>
  );
};

export default Header;
