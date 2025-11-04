import travel from "../assets/travel.png";
import restaurant from "../assets/restaurant.png";
import eCommerce from "../assets/E-commerce.png";
import landing from "../assets/landing.png";
import { GoArrowUpRight } from "react-icons/go";

const works = [
  {
    imgSrc: travel,
    title: "Travel Website",
    tags: ["HTML", "CSS", "JS"],
    projectLink: "https://travel-website-five-rho.vercel.app/",
  },
  {
    imgSrc: restaurant,
    title: "Restaurant Website",
    tags: ["HTML", "CSS", "JS"],
    projectLink: "https://restaurant-website-livid-ten.vercel.app/",
  },
  {
    imgSrc: eCommerce,
    title: "E-commerce Website",
    tags: ["HTML", "CSS", "JS", "API"],
    projectLink: "https://e-commerce-website-kappa-mocha.vercel.app/",
  },
  {
    imgSrc: landing,
    title: "Landing Page Website",
    tags: ["REACT", "TAILWIND CSS", "API"],
    projectLink: "https://modern-landing-page-brown-six.vercel.app/",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="container mx-auto px-4 md:px-8 xl:max-w-6xl pt-20"
    >
      <div>
        <h2 className="mb-8 bg-gradient-to-r from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent text-4xl md:text-5xl font-semibold leading-tight">
          My portfolio highlights
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <a
              href={work.projectLink}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 active:scale-105 hover:bg-zinc-700/50 active:bg-zinc-800/80 p-4 bg-zinc-800/50 rounded-2xl transition-all duration-300"
            >
              <img
                src={work.imgSrc}
                alt={work.title}
                className="w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] object-cover rounded-2xl"
              />
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-lg font-semibold">{work.title}</h3>
                  <div>
                    {work.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-zinc-400 h-8 bg-zinc-50/5 flex-row items-center justify-center px-3 py-1 mr-2 rounded-lg inline-flex mt-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-sky-400 shrink-0 self-center">
                  <GoArrowUpRight className="text-zinc-950 w-6 h-6" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
