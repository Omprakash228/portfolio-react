import { Suspense, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import "./ThreeProjects.css";

export type Project = {
  id: number;
  alter: string;
  thumbnail: string;
}

export type ProjectImages = {
  solid: string;
  render: string;
}

export type ImageMap = {
  [name: string]: ProjectImages
}


export const ThreeProjects = () => {
  const [model, setModel] = useState<{ solid: string, render: string } | null>(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      alter: "Bug",
      thumbnail: 'bug/bug_thumbnail.webp',
    },
  ];

  const imageMap: ImageMap = {
    Bug: {
      solid: 'bug/bug_solid.webp',
      render: 'bug/bug_render.webp',
    },
  };

  const showModal = (project: string) => {
    setModalVisibility(true);
    setModel(imageMap[project]);
  };

  const hideModal = () => {
    setModalVisibility(false);
    setModel(null);
  };

  return (
    <section id="3d-projects">
      {modalVisibility ? (
        <Suspense>
          <div className="modal-container">
            <div
              className="close-icon icon-logo icon-close"
              onClick={() => hideModal()}
            ></div>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src={`/threeprojects/${model?.solid}`} alt="Image one" />
              }
              itemTwo={
                <ReactCompareSliderImage src={`/threeprojects/${model?.render}`} alt="Image two" />
              }
            />
          </div>
        </Suspense>
      ) : null}
      <h1 className="section-title">3D Projects</h1>
      <div className="three-main">
        <div className="img-ctr">
          {projects.map((project) => (
            <div
              className="img-card"
              key={project.id}
              onClick={() => showModal(project.alter)}
            >
              <img src={`/threeprojects/${project.thumbnail}`} alt={project.alter} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
