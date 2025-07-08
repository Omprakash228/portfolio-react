import { Suspense, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import "./ThreeProjects.css";
import { MdClose } from "react-icons/md";

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
    {
      id: 2,
      alter: "Captain America",
      thumbnail: 'ca/ca_thumbnail.webp'
    },
    {
      id: 3,
      alter: "Rolex",
      thumbnail: 'rolex/rolex_thumbnail.webp'
    },
    {
      id: 4,
      alter: "Newton Cradle",
      thumbnail: 'newtoncradle/newtoncradle_thumbnail.webp'
    },
    {
      id: 5,
      alter: "Kinetic Toy",
      thumbnail: 'kinetictoy/kinetictoy_thumbnail.webp'
    },
    {
      id: 6,
      alter: "Guitar",
      thumbnail: 'guitar/guitar_thumbnail.webp'
    },
    {
      id: 7,
      alter: "Mjolnir",
      thumbnail: 'mjolnir/mjolnir_thumbnail.webp'
    },
    {
      id: 8,
      alter: "Bells",
      thumbnail: 'bells/bells_thumbnail.webp'
    },
    {
      id: 9,
      alter: "Snooker",
      thumbnail: 'snooker/snooker_thumbnail.webp'
    },
    {
      id: 10,
      alter: "Paperboat",
      thumbnail: 'paperboat/paperboat_thumbnail.webp'
    },
    {
      id: 11,
      alter: "Pencilballet",
      thumbnail: 'pencilballet/pencilballet_thumbnail.webp'
    },
    {
      id: 12,
      alter: "WallE",
      thumbnail: 'walle/walle_thumbnail.webp'
    },
    {
      id: 13,
      alter: "Robin",
      thumbnail: 'robin/robin_thumbnail.webp'
    },
    {
      id: 14,
      alter: "Windmill",
      thumbnail: 'windmill/windmill_thumbnail.webp'
    },
    {
      id: 15,
      alter: "Radio",
      thumbnail: 'radio/radio_thumbnail.webp'
    },
    {
      id: 16,
      alter: "Halloween",
      thumbnail: 'halloween/halloween_thumbnail.webp'
    },
    {
      id: 17,
      alter: "Chess",
      thumbnail: 'chess/chess_thumbnail.webp'
    },
    {
      id: 18,
      alter: "FloatingHouses",
      thumbnail: 'floatinghouses/floatinghouses_thumbnail.webp'
    }
  ];

  const imageMap: ImageMap = {
    Bug: {
      solid: 'bug/bug_solid.webp',
      render: 'bug/bug_render.webp',
    },
    'Captain America': {
      solid: 'ca/ca_solid.webp',
      render: 'ca/ca_render.webp',
    },
    Rolex: {
      solid: 'rolex/rolex_solid.webp',
      render: 'rolex/rolex_render.webp',
    },
    'Kinetic Toy': {
      solid: 'kinetictoy/kinetictoy_solid.webp',
      render: 'kinetictoy/kinetictoy_render.webp',
    },
    'Newton Cradle': {
      solid: 'newtoncradle/newtoncradle_solid.webp',
      render: 'newtoncradle/newtoncradle_render.webp',
    },
    Guitar: {
      solid: 'guitar/guitar_solid.webp',
      render: 'guitar/guitar_render.webp',
    },
    Mjolnir: {
      solid: 'mjolnir/mjolnir_solid.webp',
      render: 'mjolnir/mjolnir_render.webp',
    },
    Bells: {
      solid: 'bells/bells_solid.webp',
      render: 'bells/bells_render.webp',
    },
    Snooker: {
      solid: 'snooker/snooker_solid.webp',
      render: 'snooker/snooker_render.webp',
    },
    Paperboat: {
      solid: 'paperboat/paperboat_solid.webp',
      render: 'paperboat/paperboat_render.webp'
    },
    Pencilballet: {
      solid: 'pencilballet/pencilballet_solid.webp',
      render: 'pencilballet/pencilballet_render.webp'
    },
    WallE: {
      solid: 'walle/walle_solid.webp',
      render: 'walle/walle_render.webp'
    },
    Robin: {
      solid: 'robin/robin_solid.webp',
      render: 'robin/robin_render.webp'
    },
    Windmill: {
      solid: 'windmill/windmill_solid.webp',
      render: 'windmill/windmill_render.webp'
    },
    Radio: {
      solid: 'radio/radio_solid.webp',
      render: 'radio/radio_render.webp'
    },
    Halloween: {
      solid: 'halloween/halloween_solid.webp',
      render: 'halloween/halloween_render.webp'
    },
    Chess: {
      solid: 'chess/chess_solid.webp',
      render: 'chess/chess_render.webp'
    },
    FloatingHouses: {
      solid: 'floatinghouses/floatinghouses_solid.webp',
      render: 'floatinghouses/floatinghouses_render.webp'
    }
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

        <div className="modal-container">
          <div className="icon-ctr" onClick={() => hideModal()}>
            <MdClose className="close-icon" size={"22px"} />
          </div>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <ReactCompareSlider
              className="slider"
              itemOne={
                <ReactCompareSliderImage src={`/threeprojects/${model?.solid}`} alt="Image one" />
              }
              itemTwo={
                <ReactCompareSliderImage src={`/threeprojects/${model?.render}`} alt="Image two" />
              }
            />
          </Suspense>
        </div>
      ) : null}
      <h1 className="section-title">3D Projects</h1>
      <h6 style={{textAlign:"center"}}>(click on image to expand)</h6>
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
