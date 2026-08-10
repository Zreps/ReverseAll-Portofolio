import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import foto from "../assets/2.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function CardName() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="aboutme"
      className="flex min-h-screen w-full items-center justify-center bg-transparent px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="w-full max-w-6xl rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-xl shadow-slate-200/70 backdrop-blur-sm sm:p-10 lg:p-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center lg:justify-start">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3 shadow-md">
              <img
                src={foto}
                alt="Rafi Rhamadan"
                className="h-64 w-64 rounded-[1.2rem] object-cover sm:h-72 sm:w-72"
              />
            </div>
          </div>

          <div ref={textRef} className="text-center lg:text-left">
            
            <h2 className="mb-5 text-3xl font-bold text-slate-800 sm:text-4xl">
              About Me
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-600">
              <p>
                Halo, perkenalkan saya Rafi Rhamadan atau bisa dipanggil Rep.Saya seorang web developer dengan keahlian dalam membangun aplikasi web modern menggunakan React, Vite, dan Laravel.
              </p>
              <p>
                Saya memiliki pengalaman dalam membangun aplikasi web yang responsif, interaktif,
                dan nyaman digunakan dengan teknologi modern.
              </p>
              <p>
                Saya selalu berusaha meningkatkan kemampuan, mengikuti tren terbaru, serta
                menghadirkan solusi yang kreatif dalam setiap proyek.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Web Developer
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Frontend
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                Backend
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}