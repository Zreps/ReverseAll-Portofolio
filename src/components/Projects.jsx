import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import pr1 from "../assets/pr1.png";
import pr2 from "../assets/kafe.png";
import comingsoon from "../assets/pro2.webp";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Cashier-App",
    description: "Sebuah Web App untuk mengelola operasional kasir dengan efisien.",
    image: pr1,
    alt: "Cashier app preview",
    link: "/cashier",
  },
  {
    title: "RepsCafee",
    description: "Web kafe yang menampilkan menu, lokasi, dan informasi kafe dengan desain yang menarik.",
    image: pr2,
    alt: "RepsCafee app preview",
    link: "/cafe",
  },
  {
    title: "NanoSpider Lite 0.1",
    description: "Agent otomatisasi yg bisa membantu dalam mengelola tugas-tugas ringan.",
    image: comingsoon,
    alt: "NanoSpider Lite 0.1 preview",
    link: "https://github.com/Zreps",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  useGSAP(() => {
    const animations = [
      { x: -1, y: 0 },
      { x: 0, y: 90 },
      { x: 1, y: 0 },
    ];

    cardRefs.forEach((ref, index) => {
      if (!ref.current) return;

      gsap.fromTo(
        ref.current,
        { opacity: 0, ...animations[index] },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-transparent px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="w-full max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl text-white">Projects</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={cardRefs[index]}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-200/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col text-inherit no-underline"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-6 text-left">
                  <h3 className="mb-2 text-xl font-semibold text-slate-800">{project.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}