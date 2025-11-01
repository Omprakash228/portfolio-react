import { useGSAP } from "@gsap/react";
import "./Experience.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Experience = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#experience', {
      scrollTrigger: {
        trigger: '.work-card',
        toggleActions: 'restart none none none',
        start: 'top bottom',
      },
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out',
    })
  }, []);
  
  return (
    <>
      <section id="experience">
        <h1 className="section-title">Experience</h1>
        <div>
          <div className="card work-card">
            <div className="work-experience">
              <div className="work-title-ctr">
                <div className="work-title">Software Engineer II</div>
                <div className="company"><span className="bold">Medpace</span> - Cincinnati, OH</div>
              </div>
              <div className="duration">Jul 2023 - Oct 2025</div>
              <div className="work-description">
                <li>Built scalable .NET Core applications on Azure, leveraging Cosmos DB to streamline data collection. Collaborated across teams throughout the full SDLC, delivering production-ready solutions.</li>
              </div>
            </div>
            <div className="work-experience">
              <div className="work-title-ctr">
                <div className="work-title">Senior Software Developer</div>
                <div className="company"><span className="bold">Propel Technology Group Inc.,</span> - Chennai, India</div>
              </div>
              <div className="duration">July 2020 - December 2021</div>
              <div className="work-description">
                <li>Built RESTful APIs and Microservices using .NET Core and GraphQL, maintained front-end code, and implemented secure file upload and two-factor authentication features. Led code reviews and improved client-side application flexibility.</li>
              </div>
            </div>
            <div className="work-experience">
              <div className="work-title-ctr">
                <div className="work-title">Software Engineer</div>
                <div className="company"><span className="bold">Orion Innovation</span> - Chennai, India</div>
              </div>
              <div className="duration">June 2017 - May 2020</div>
              <div className="work-description">
                <li>Developed and maintained a responsive Angular web application, optimized performance using AOT compilation and lazy loading, and integrated security features. Mentored junior developers, improving team skill levels and code quality.</li>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};
