import "./About.css";
import { TextDecrypt } from "../../shared/TextDecrypt";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#about', {
      scrollTrigger: {
        trigger: '#about-card',
        toggleActions: 'restart none none none',
        start: 'top+=25% bottom',
      },
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
    })
  }, []);

  const greetings = "Hello there!";
  const intro = `I’m a full-stack software engineer with 6+ years of experience building scalable, high-performance web applications. I enjoy writing efficient, maintainable software and tackling complex problems across the full stack.  I also have a strong creative side, I develop interactive 3D experiences for the web and create 3D assets in Blender as a hobby. I’m passionate about delivering production-ready applications that create real impact.`;
  const outro = `I bring together technical depth and creative thinking, whether you're building a fast, secure web application or want to add a visually compelling 3D layer to your product. I'm detail-oriented, easy to work with, and focused on delivering solutions that are not just functional, but user-friendly.`;

  return (
    <section id="about">
      <h1 className="section-title">About</h1>
      <div>
        <div className="card" id="about-card">
          <div className="__img_wrapper">
            <img src={`/profile.webp`} alt="Profile" />
          </div>
          <div className="__content_wrapper">
            <div className="title card-title">
              <TextDecrypt text={`${greetings}`} />
            </div>
            <div className="aboutme">
              <p>{intro}</p>
              <p>{outro}</p>
              <div className="skills">
                <div className="skill-header">Skills</div>
                <div>
                  <span className="bold">Languages</span>: JavaScript,
                  TypeScript, C#, GraphQL, SQL, C++
                </div>
                <div>
                  <span className="bold">Frameworks</span>: Angular, .NET Core,
                  Entity Framework, Node.js
                </div>
                <div>
                  <span className="bold">DevOps and Cloud</span>: Microsoft
                  Azure, Bicep, AWS, Docker, Github Actions
                </div>
                <div>
                  <span className="bold">Databases</span>: Microsoft SQL
                  Servicer, Azure Cosmos DB
                </div>
                <div>
                  <span className="bold">Concepts</span>: REST APIs,
                  Microservices, Scalable architecture, State management,
                  Infrastructure as Code(IaC)
                </div>
                <div>
                  <span className="bold">3D</span>: Three.js, Blender
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
