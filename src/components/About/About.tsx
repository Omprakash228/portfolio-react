import "./About.css";
import { TextDecrypt } from "../../shared/TextDecrypt";


export const About = () => {
    const greetings = "Hello there!";
    const aboutme = `I'm Omprakash Narayanan Lakshmanan, a full-stack software developer with over 6 years of professional experience building robust, scalable, and cloud-native applications. 
  I specialize in creating clean, high-performance web solutions and also have a strong creative side — I develop interactive 3D experiences for the web and create 3D assets in Blender as a hobby. 
  I have professional experience in the following technologies.

  <span class="bold">Languages & Frameworks</span>: .NET Core, C#, Angular, React, JavaScript, HTML/CSS
  <span class="bold">Cloud & DevOps</span>: Azure, AWS (S3), Bicep, GitHub Actions, CI/CD
  <span class="bold">3D & Frontend</span>: Three.js, Blender 

  I bring together technical depth and creative thinking — whether you're building a fast, secure web application or want to add a visually compelling 3D layer to your product. 
  I'm detail-oriented, easy to work with, and focused on delivering solutions that are not just functional, but user-friendly.`;

    return (
        <section id="about">
            <h1 className="section-title">About</h1>
            <div>
                <div className="card">
                    <div className="__img_wrapper">
                        <img src={`/profile.webp`} alt='Profile' />
                    </div>
                    <div className="__content_wrapper">
                        <div className="title card-title">
                            <TextDecrypt text={`${greetings}`} />
                        </div>
                        <p className="aboutme" dangerouslySetInnerHTML={{__html: aboutme}}></p>
                    </div>
                </div>
            </div>
        </section>
    );
};
