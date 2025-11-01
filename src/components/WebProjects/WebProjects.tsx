import "./WebProjects.css";
import { TextDecrypt } from "../../shared/TextDecrypt";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const WebProjects = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          toggleActions: "restart none none none",
          start: "top bottom",
        },
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      });
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Brand Craft",
      description: `A web-based 3D configurator that lets users overlay logos, textures, and layered effects (decal, engraving, emboss) on product models in real time. 
      It’s designed for e-commerce, branding, and visual prototyping use cases. 
      Supports turntable animation, layered image uploads, and custom export resolution.`,
      alter: "Brand Craft",
      imageName: "brand-craft.webp",
      tech: ["React", "Three.js (R3F)", "Zustand"],
      link1: "https://brand-craft.vercel.app/",
      link2: null,
    },
    {
      id: 2,
      title: "MapMate",
      description: `A live location-sharing app where users can join private groups and see each other’s real-time positions on a map. 
      Built for simplicity, privacy, and clarity—without the clutter of social apps. Uses Supabase for auth and real-time syncing.`,
      alter: "MapMate",
      imageName: "map-mate.webp",
      tech: ["React", "Supabase", "SignalR"],
      link1: null,
      link2: "https://github.com/Omprakash228/MapMate",
    },
    {
      id: 3,
      title: "Shortly",
      description: `A lightweight and efficient URL shortening service built with a custom backend and database architecture. 
      It features unique short code generation, redirection logic, and basic analytics-ready structure. 
      Designed for fast link resolution, clean UX, and extensibility for user-based link management or tracking.`,
      alter: "Shortly",
      imageName: "shortly.webp",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Supabase auth"],
      link1: null,
      link2: "https://github.com/Omprakash228/url-shortener",
    },
    {
      id: 4,
      title: "Flappy",
      description: `A fun remake of the original Flappy Bird using p5.js, focusing on physics, timing, and arcade-style polish. 
      Great for showcasing creative coding and game logic fundamentals like gravity, collision detection, and game state management`,
      alter: "Flappy",
      imageName: "flappy.webp",
      tech: ["p5.js", "Google firebase"],
      link1: "https://omprakash228.github.io/flappybird-clone/",
      link2: "https://github.com/Omprakash228/flappybird-clone",
    },
  ];

  return (
    <section id="web-projects">
      <h1 className="section-title">Web Projects</h1>
      <div>
        {projects.map((project) => (
          <div className="card project-card" key={project.id}>
            <div className="__img_wrapper">
              <img
                src={`/webprojects/${project.imageName}`}
                alt={project.alter}
              />
            </div>
            <div className="__content_wrapper">
              <h3 className="title card-title">
                <TextDecrypt text={project.title} />
              </h3>
              <p className="description">{project.description}</p>
              <p className="tech">
                <span className="bold">Tech-stack</span>:{" "}
                {project.tech.join(", ")}
              </p>
              <div className="links">
                {project.link1 !== null && (
                  <a href={project.link1} target="_blank" rel="noreferrer">
                    Visit
                  </a>
                )}
                {project.link2 !== null && (
                  <a href={project.link2} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
