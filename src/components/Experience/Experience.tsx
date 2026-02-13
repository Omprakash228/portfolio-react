import { useGSAP } from "@gsap/react";
import "./Experience.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface TimelineItem {
  id: string;
  type: "education" | "work";
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
  gpa?: string;
}

export const Experience = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timelineItems = document.querySelectorAll(".timeline-item");
    
    timelineItems.forEach((item) => {
      const isMobile = window.innerWidth <= 768;
      const isLeft = item.classList.contains("timeline-item-left");
      
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          toggleActions: "restart none none none",
          start: "top 80%",
        },
        x: isMobile ? -30 : (isLeft ? -50 : 50),
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
      });
    });

    // Re-run animations on window resize for responsive behavior
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const timelineData: TimelineItem[] = [
    {
      id: "work-3",
      type: "work",
      title: "Software Engineer II",
      organization: "Medpace",
      location: "Cincinnati, US",
      startDate: "Jul 2023",
      endDate: "Oct 2025",
      details: [
        "Architected self-service questionnaire engines and internal tools using Angular and .NET on Azure. Reduced dashboard load times from 50s to 3s (94% improvement) through backend refactoring and SQL tuning. Owned full lifecycle from requirements to launch, using Bicep for Azure infrastructure and Adobe Sign for document workflows.",
      ],
    },
    {
      id: "edu-2",
      type: "education",
      title: "Master of Science in Computer Science",
      organization: "Purdue University",
      location: "Fort Wayne",
      startDate: "Jan 2022",
      endDate: "May 2023",
      details: [
        "Coursework: Software Engineering, Heuristic Problem Solving, Algorithm Design and Implementation, Machine Learning, Computer Vision, Cryptography, Software Testing.",
      ],
      gpa: "4.0/4.0",
    },
    {
      id: "work-2",
      type: "work",
      title: "Senior Software Developer",
      organization: "Propel Technology Group",
      location: "Chennai, India",
      startDate: "July 2020",
      endDate: "December 2021",
      details: [
        "Built .NET Core/MassTransit microservices for PCTEL ingesting high-frequency XML telemetry via Azure Service Bus (99.9% persistence). Delivered GraphQL APIs and an S3 tool with resumable uploads and 2FA for field engineering teams.",
      ],
    },
    {
      id: "work-1",
      type: "work",
      title: "Software Developer",
      organization: "Orion Innovation",
      location: "Chennai, India",
      startDate: "July 2017",
      endDate: "May 2020",
      details: [
        "Developed a document-routing engine for Deloitte with Angular and .NET to automate international travel compliance. Achieved 4x faster load times via AOT and lazy loading; mentored 10+ junior developers in Angular and clean code.",
      ],
    },
    {
      id: "edu-1",
      type: "education",
      title: "Bachelor's in Electronics and Communication Engineering",
      organization: "Anna University",
      location: "Chennai",
      startDate: "Aug 2013",
      endDate: "May 2017",
      details: [],
      gpa: "8.29/10",
    },
  ];

  return (
    <section id="journey">
      <h1 className="section-title">Career Journey</h1>
      <div className="timeline-container">
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          {timelineData.map((item) => (
            <div
              key={item.id}
              className={`timeline-item ${
                item.type === "education" ? "timeline-item-left" : "timeline-item-right"
              }`}
            >
              <div className="timeline-node"></div>
              <div className={`timeline-content ${item.type === "education" ? "education-card" : "work-card"}`}>
                <div className="timeline-date">
                  {item.startDate} - {item.endDate}
                </div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-organization">
                  <span className="bold">{item.organization}</span> - {item.location}
                </div>
                {item.gpa && (
                  <div className="timeline-gpa">GPA: {item.gpa}</div>
                )}
                {item.details.length > 0 && (
                  <div className="timeline-details">
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="timeline-detail-item">
                        {detail}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
