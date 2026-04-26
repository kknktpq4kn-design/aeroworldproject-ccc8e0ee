import { Link } from "react-router-dom";
import footerBanner from "@/assets/footer-banner.jpeg";

const Footer = () => {
  return (
    <div className="w-full mt-12 relative">
      <img
        src={footerBanner}
        alt="©2026 AeroWorld — This project is not related with Microsoft."
        className="w-full h-auto block"
      />
      {/* Clickable overlays for logo, credits and microsoft link */}
      <Link
        to="/"
        aria-label="Home"
        className="absolute top-[18%] left-[12%] w-[14%] h-[40%]"
      />
      <a
        href="#"
        aria-label="Credits"
        className="absolute top-[28%] left-1/2 -translate-x-1/2 ml-[60px] w-[80px] h-[24px]"
      />
      <a
        href="https://microsoft.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Microsoft"
        className="absolute top-[24%] right-[8%] w-[10%] h-[28%]"
      />
    </div>
  );
};

export default Footer;
