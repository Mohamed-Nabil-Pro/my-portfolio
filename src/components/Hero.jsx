import heroBanner1 from "../assets/hero-banner1.png";
import heroBanner2 from "../assets/hero-banner2.png";
import { LuDownload } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="pt-28 md:pt-36 " id="home">
      <div className="container mx-auto px-4 md:px-8 xl:max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div className="relative md:hidden mb-8">
          <img
            src={heroBanner2}
            className="w-32 h-32 mx-auto rounded-full ring-4 ring-zinc-50/10 object-cover object-center"
            alt="My Photo"
          />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide mb-5">
            <span className="relative w-2 h-2 bg-emerald-400 rounded-full">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            </span>
            <p>Available for work</p>
          </div>
          <h2 className="md:text-5xl  text-4xl leading-tight font-semibold md:text-[55px] md:leading-[1.15] bg-gradient-to-r from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent mb-8 md:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex items-center gap-3 ">
            <a
              href="/Mohamed-Nabil-CV.pdf"
              download="Mohamed-Nabil-CV.pdf"
              className="flex items-center gap-3 h-11 ring-2 ring-zinc-50/10 hover:scale-105 hover:ring-sky-400 hover:bg-zinc-800 cursor-pointer transition-all px-6 font-semibold rounded-full"
            >
              Download CV{" "}
              <span>
                <LuDownload />
              </span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 h-11 ring-2 ring-zinc-50/10 hover:scale-105 hover:ring-sky-400 hover:bg-zinc-800 cursor-pointer transition-all px-11 font-semibold rounded-full"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div>
          <img
            src={heroBanner1}
            className="hidden md:block w-full h-96  rounded-3xl object-cover"
            alt="My Photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
