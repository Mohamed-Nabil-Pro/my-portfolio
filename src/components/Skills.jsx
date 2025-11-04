// Using direct paths to public folder
const images = {
  html: "/HTML5.png",
  css: "/CSS3.png",
  js: "/JavaScript.png",
  react: "/React.png",
  tailwind: "/Tailwind-CSS.png",
  bootstrap: "/Bootstrap.png",
  github: "/GitHub.png",
  figma: "/Figma.png",
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto px-4 md:px-8 xl:max-w-6xl pt-20">
        <h2 className="bg-gradient-to-r from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent text-4xl md:text-5xl font-semibold leading-tight">
          Essential Tools I use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 ">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4  gap-8">
          <div className="flex items-center gap-3 ring-2 ring-zinc-50/10 p-3 rounded-2xl hover:scale-105 hover:ring-sky-400 hover:bg-zinc-800 active:bg-zinc-800 active:scale-105 active:ring-sky-400 cursor-pointer transition-transform">
            <img src={images.html} alt="HTML5" className="size-8" />
            <div>
              <h3>HTML5</h3>
              <p className="text-sm text-zinc-400">data structure</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ring-2 ring-zinc-50/10 p-3 rounded-2xl hover:scale-105 hover:ring-sky-400 hover:bg-zinc-800 active:bg-zinc-800 active:scale-105 active:ring-sky-400 cursor-pointer transition-transform">
            <img src={images.css} alt="CSS3" className="size-8" />
            <div>
              <h3>CSS3</h3>
              <p className="text-sm text-zinc-400">User Interface</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ring-2 ring-zinc-50/10 p-3 rounded-2xl hover:scale-105 hover:ring-sky-400 hover:bg-zinc-800 active:bg-zinc-800 active:scale-105 active:ring-sky-400 cursor-pointer transition-transform">
            <img src={images.js} alt="JavaScript" className="size-8" />
            <div>
              <h3>JavaScript</h3>
              <p className="text-sm text-zinc-400">Interaction</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ring-2 ring-zinc-50/10 p-3 rounded-2xl hover:scale-105 hover:ring-sky-400 hover:bg-zinc-800 active:bg-zinc-800 active:scale-105 active:ring-sky-400 cursor-pointer transition-transform">
            <img src={images.tailwind} alt="Tailwind CSS" className="size-8" />
            <div>
              <h3>Tailwind CSS</h3>
              <p className="text-sm text-zinc-400">User Interface</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ring-2 ring-zinc-50/10 p-3 rounded-2xl hover:scale-105 hover:ring-sky-400 hover:bg-zinc-800 active:bg-zinc-800 active:scale-105 active:ring-sky-400 cursor-pointer transition-transform">
            <img src={images.bootstrap} alt="Bootstrap" className="size-8" />
            <div>
              <h3>Bootstrap</h3>
              <p className="text-sm text-zinc-400">User Interface</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ring-2 ring-zinc-50/10 p-3 rounded-2xl hover:scale-105 hover:ring-sky-400 hover:bg-zinc-800 active:bg-zinc-800 active:scale-105 active:ring-sky-400 cursor-pointer transition-transform">
            <img src={images.react} alt="React" className="size-8" />
            <div>
              <h3>React</h3>
              <p className="text-sm text-zinc-400">Framework</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ring-2 ring-zinc-50/10 p-3 rounded-2xl hover:scale-105 hover:ring-sky-400 hover:bg-zinc-800 active:bg-zinc-800 active:scale-105 active:ring-sky-400 cursor-pointer transition-transform">
            <img
              src={images.github}
              alt="GitHub"
              className="size-8 bg-white rounded-full"
            />
            <div>
              <h3>GitHub</h3>
              <p className="text-sm text-zinc-400">Version Control</p>
            </div>
          </div>

          <div className="flex items-center gap-3 ring-2 ring-zinc-50/10 p-3 rounded-2xl hover:scale-105 hover:ring-sky-400 hover:bg-zinc-800 active:bg-zinc-800 active:scale-105 active:ring-sky-400 cursor-pointer transition-transform">
            <img src={images.figma} alt="Figma" className="size-8" />
            <div>
              <h3>Figma</h3>
              <p className="text-sm text-zinc-400">Design Tool</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
