import { Link } from "react-router-dom";
import footerBanner from "@/assets/footer-banner.jpeg";

const Footer = () => {
  return (
    <div className="w-full mt-12 relative">
      <img
        src={footerBanner}
        alt="©2026 AeroWorld — This project is not related with Microsoft."
        className="w-full h-auto block select-none"
        draggable={false}
      />

      {/* Windows logo */}
      <Link
        to="/"
        aria-label="Home"
        className="absolute"
        style={{ left: "9.4%", top: "23%", width: "11.5%", height: "30%" }}
      />

      {/* Credits */}
      <a
        href="#"
        aria-label="Credits"
        className="absolute"
        style={{ left: "57%", top: "28%", width: "7.2%", height: "16%" }}
      />

      {/* Microsoft logo */}
      <a
        href="https://microsoft.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Microsoft"
        className="absolute"
        style={{ left: "88.5%", top: "28%", width: "8%", height: "18%" }}
      />
    </div>
  );
};

export default Footer;
