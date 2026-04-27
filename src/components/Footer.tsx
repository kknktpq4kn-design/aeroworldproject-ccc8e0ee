import waveBg from "@/assets/r7-wave.png";
import logoWindows from "@/assets/r7-logo-windows.png";
import logoMicrosoft from "@/assets/r7-logo-microsoft.png";

const Footer = () => {
  return (
    <footer
      className="w-full mt-12"
      style={{
        backgroundColor: "hsl(205 80% 96%)",
        backgroundImage: `url(${waveBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "100% 100%",
      }}
    >
      {/* subtle top separator */}
      <div className="h-px w-full bg-[hsl(205_40%_82%)]/70" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-6 pb-3">
        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-3 items-center gap-4">
          <div className="flex items-center">
            <img src={logoWindows} alt="Windows" className="h-8 w-auto" draggable={false} />
          </div>
          <div className="text-center text-[13px] text-[hsl(215_40%_20%)]">
            © 2025 Reunion7
          </div>
          <div className="flex items-center justify-end gap-3 text-[13px]">
            <a href="#" className="text-[hsl(210_100%_38%)] hover:underline">Discord server</a>
            <a
              href="https://microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Microsoft"
              className="ml-3"
            >
              <img src={logoMicrosoft} alt="Microsoft" className="h-4 w-auto" draggable={false} />
            </a>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center gap-3 text-center">
          <img src={logoWindows} alt="Windows" className="h-7 w-auto" draggable={false} />
          <div className="text-[12px] text-[hsl(215_40%_20%)]">© 2025 Reunion7</div>
          <div className="flex items-center gap-2 text-[12px]">
            <a href="#" className="text-[hsl(210_100%_38%)] hover:underline">Discord server</a>
          </div>
          <a
            href="https://microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Microsoft"
          >
            <img src={logoMicrosoft} alt="Microsoft" className="h-3.5 w-auto" draggable={false} />
          </a>
        </div>

        {/* Disclaimer (still over the wave background) */}
        <p className="mt-3 text-center text-[12px] sm:text-[13px] font-bold text-[hsl(215_40%_15%)]">
          This project is not related with Microsoft. Windows and the Windows logo are Microsoft's property.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
