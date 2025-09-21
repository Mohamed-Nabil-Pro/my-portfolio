import heroBanner1 from "../assets/hero-banner1.png";
import { LuDownload } from "react-icons/lu";



const Hero = () => {
  return (
    <section className="pt-28 md:pt-36 " id="home">
      <div className="container mx-auto px-4 md:px-8 xl:max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide mb-5">
                <img
                  src={heroBanner1}
                  className=" md:hidden  size-10 rounded-full object-cover"
                  
                  alt="My Photo"
                />
                <span className="relative w-2 h-2 bg-emerald-400 rounded-full">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                </span>
                <p>Available for work</p>
            </div>
          <h2 className="md:text-5xl  text-4xl leading-tight font-semibold md:text-[55px] md:leading-[1.15] bg-gradient-to-r from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent mb-8 md:mb-10">Building Scalable Modern Websites for the Future</h2>
          <div className="flex items-center gap-3 ">
            <button type="button" className="flex items-center gap-3 h-11 bg-zinc-300 text-zinc-950 hover:bg-zinc-100  px-6 font-semibold rounded-full">Download CV <span><LuDownload/></span></button>
            <button type="button" className="flex items-center gap-3 h-11 bg-zinc-300 text-zinc-950 hover:bg-zinc-100 active:bg-zinc-400 px-11 font-semibold rounded-full">Contact Me</button>
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
