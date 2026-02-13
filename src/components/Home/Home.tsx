import { Background } from "../Background/Background";
// import Logo from "./Logo/Logo";
import { SideNav } from "./Sidenav/Sidenav";
import "./Home.css";
import { Socials } from "../Socials/Socials";
// import { Resume } from "./Resume/Resume";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiGo,
  SiDotnet,
  SiAngular,
  SiNextdotjs,
  SiNestjs,
  SiThreedotjs,
  SiDocker,
  SiGraphql,
  SiSharp,
  SiExpress,
  SiTailwindcss,
  SiAmazon,
  SiGithubactions,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiNgrx,
  SiBlender,
  SiInkscape,
  SiDavinciresolve,
} from "react-icons/si";
import type { ComponentType } from "react";
import { VscAzure } from "react-icons/vsc";
import { DiDatabase, DiMsqlServer } from "react-icons/di";
// import { TbBrandCpp } from "react-icons/tb";

type TechItem = {
  icon?: ComponentType<{ className?: string }>;
  name: string;
};

type TechCategory = {
  title: string;
  items: TechItem[];
};

export default function Home() {
  const techCategories: TechCategory[] = [
    {
      title: "Languages",
      items: [
        { icon: SiTypescript, name: "TypeScript" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiSharp, name: "C#" },
        { icon: SiGo, name: "Go" },
        { icon: SiGraphql, name: "GraphQL" },
      ],
    },
    {
      title: "Backend",
      items: [
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiNestjs, name: "NestJS" },
        { icon: SiExpress, name: "Express" },
        { icon: SiDotnet, name: ".NET Core" },
        { icon: SiGo, name: "Gin" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { icon: SiAngular, name: "Angular" },
        { icon: SiReact, name: "React" },
        { icon: SiNextdotjs, name: "Next.js" },
        { icon: SiNgrx, name: "NgRx" },
        { icon: SiThreedotjs, name: "Three.js (R3F)" },
        { icon: SiTailwindcss, name: "Tailwind CSS" },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        { icon: VscAzure, name: "Azure" },
        { icon: SiAmazon, name: "AWS" },
        { icon: SiDocker, name: "Docker" },
        { icon: SiGithubactions, name: "Github Actions" },
      ],
    },
    {
      title: "Databases",
      items: [
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: DiMsqlServer, name: "MS SQL Server" },
        { icon: DiDatabase, name: "Azure Cosmos DB" },
        { icon: SiRedis, name: "Redis" },
        { icon: SiMongodb, name: "MongoDB" },
      ],
    },
    {
      title: "Creative Tools",
      items: [
        { icon: SiBlender, name: "Blender" },
        { icon: SiDavinciresolve, name: "Davinci Resolve"},
        { icon: SiInkscape, name: "Inkscape" },
      ],
    },
  ];

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
        I hold a Master's in Computer Science from Purdue University with a 4.0 GPA, which provides a strong technical lens for my engineering work. My approach focuses on writing clean, intentional code that lasts, particularly when I am provisioning infrastructure with Azure Bicep or implementing rate-limiting algorithms for an API.
      </p>
    </div>
  );

  const technologiesSection = (
    <div className="technologies-section">
      {/* <span className="bold">Technologies</span> */}
      <div className="technologies-container">
        {techCategories.map((category) => (
          <div key={category.title} className="tech-category">
            <h3 className="tech-category-title">{category.title}</h3>
            <div className="technologies-grid">
              {category.items.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div key={tech.name} className="tech-item">
                    {IconComponent ? (
                      <IconComponent className="tech-icon" />
                    ) : (
                      <div className="tech-icon-placeholder" />
                    )}
                    <span className="tech-name">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Background />
      {/* <Logo /> */}
      <SideNav />
      <Socials />
      {/* <Resume /> */}
      <div className="main-content">
        <section id="about">
          <h1 className="section-title">About</h1>
          <div>
            <div className="card about-card" id="about-card">
              <div className="__img_wrapper">
                <div className="name">
                  <div>Omprakash Narayanan Lakshmanan</div>
                </div>
                <img src={`/profile.webp`} alt="Profile" />
              </div>
              <div className="__content_wrapper">
                {aboutContent}
              </div>
              {technologiesSection}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
