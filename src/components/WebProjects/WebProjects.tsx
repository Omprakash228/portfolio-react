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
      title: "Shortly",
      description: `A high-performance URL management system built with a focus on system security and API resilience. I implemented a robust rate-limiting layer to prevent service abuse and ensure high availability under heavy traffic. The project demonstrates my ability to build production-ready backends in Go that handle rapid data redirection while maintaining strict control over resource consumption.`,
      alter: "Shortly - URL shortener",
      imageName: "shortly.webp",
      tech: ["Go", "Gin Framework", "Redis", "PostgreSQL", "Next.js"],
      link1: "https://short-ly-delta.vercel.app/",
      link2: "https://github.com/Omprakash228/shortly-be",
    },
    {
      id: 2,
      title: "BrandCraft",
      description: `A 3D customization platform built to simplify the process of product branding. The tool allows users to upload custom decals and view them on 3D models in real-time with smooth turntable animations. It addresses the technical challenge of mapping 2D textures onto 3D assets directly within a web interface.`,
      alter: "BrandCraft",
      imageName: "brand-craft.webp",
      tech: ["React", "Three.js (R3F)"],
      link1: "https://brand-craft.vercel.app/",
      link2: null,
    },
    {
      id: 3,
      title: "Tumbleweed",
      description: `A specialized digital marketing platform built for the agricultural industry and retail supply partners. The application enables users to schedule social media campaigns, manage content calendars, and organize multi-location brand assets within a unified workspace. It streamlines the connection between suppliers and local retailers by allowing global posts to be shared and customized across entire distribution networks.`,
      alter: "Tumbleweed",
      imageName: "tumbleweed.webp",
      tech: ["Next.js", "NestJS", "Supabase", "Stripe API"],
      link1: "https://app.tumbleweed.digital/",
      link2: null,
    },
    {
      id: 4,
      title: "Sign Language Detector",
      description: `An interactive translation tool that uses computer vision to bridge the communication gap for the hearing impaired. I engineered a real-time pipeline in Python that captures hand gestures via webcam and translates them into text using a custom-trained TensorFlow model.`,
      alter: "Sign Language Detector",
      imageName: "sign_language_detector.webp",
      tech: ["Python", "TensorFlow", "Computer Vision", "OpenCV"],
      link1: null,
      link2: "https://github.com/Omprakash228/SignLanguageDetection",
    },
    {
      id: 5,
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
