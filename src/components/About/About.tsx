import "./About.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#about", {
      scrollTrigger: {
        trigger: "#about-card",
        toggleActions: "restart none none none",
        start: "top+=25% bottom",
      },
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
    });
  }, []);

  const aboutContent = (
    <div className="aboutme">
      <p>
        <span className="bold">The Engineering Side</span>
        <br />
        I am a Full-Stack Software Engineer with a passion for building tools that solve actual problems. Over the past 6 years, I have worked across the stack, ranging from architecting .NET microservices and Go APIs to optimizing complex dashboards for better performance. I enjoy the challenge of taking a slow or complex system and making it fast, secure, and easy to use.
      </p>
      <p>
        <span className="bold">The Creative Side</span>
        <br />
        Outside of my professional work, I spend a lot of time exploring the intersection of code and 3D design. This led me to develop projects like Brandcraft, where I used Three.js to bridge the gap between 3D modeling and web interactivity. I love the process of bringing static ideas to life in a browser, from perfecting turntable animations to applying custom decals to 3D models.
      </p>
      <p>
        <span className="bold">The Foundation</span>
        <br />
        I hold a Master’s in Computer Science from Purdue University with a 4.0 GPA, which provides a strong technical lens for my engineering work. My approach focuses on writing clean, intentional code that lasts, particularly when I am provisioning infrastructure with Azure Bicep or implementing rate-limiting algorithms for an API.
      </p>
    </div>
  );

  return (
    <section id="about">
      <h1 className="section-title">About</h1>
      <div>
        <div className="card about-card" id="about-card">
          <div className="__img_wrapper">
            <img src={`/profile.webp`} alt="Profile" />
          </div>
          <div className="__content_wrapper">
            {aboutContent}
          </div>
        </div>
      </div>
    </section>
  );
};
