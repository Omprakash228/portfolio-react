import { Suspense, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import "./ThreeProjects.css";
import { MdClose } from "react-icons/md";

export type Project = {
  id: string;
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
      id: "445ea9d3-d0b3-4f2e-a9d7-ee54ad01f2f4",
      alter: "Clock",
      thumbnail: 'clock/clock_thumbnail.webp',
    },
    {
      id: "a60b07ec-57b1-4df5-87d2-59b22fd02446",
      alter: "Bug",
      thumbnail: 'bug/bug_thumbnail.webp',
    },
    {
      id: "96eccd6f-97ac-4f19-b7ec-33df9a23d225",
      alter: "Captain America",
      thumbnail: 'ca/ca_thumbnail.webp'
    },
    {
      id: "8bac0a18-39bb-4cdd-a85e-0d40529f92f1",
      alter: "Rolex",
      thumbnail: 'rolex/rolex_thumbnail.webp'
    },
    {
      id: "007c3d68-176d-45b3-94d5-601ffe391266",
      alter: "Newton Cradle",
      thumbnail: 'newtoncradle/newtoncradle_thumbnail.webp'
    },
    {
      id: "bfdbe39b-89fd-4bc9-9412-ae17dd6759eb",
      alter: "Kinetic Toy",
      thumbnail: 'kinetictoy/kinetictoy_thumbnail.webp'
    },
    {
      id: "15458c0a-c8bf-4267-9e8f-9663afcb62f5",
      alter: "Guitar",
      thumbnail: 'guitar/guitar_thumbnail.webp'
    },
    {
      id: "0f27c39c-91f0-432c-8bd5-603905128943",
      alter: "Mjolnir",
      thumbnail: 'mjolnir/mjolnir_thumbnail.webp'
    },
    {
      id: "fb81f3a4-73a6-454d-a964-a82dcc305f11",
      alter: "Bells",
      thumbnail: 'bells/bells_thumbnail.webp'
    },
    {
      id: "2b3bec6c-0049-41e2-8721-ae5b720df392",
      alter: "Snooker",
      thumbnail: 'snooker/snooker_thumbnail.webp'
    },
    {
      id: "d9e5921d-bc2a-484c-a3a0-41f84625c634",
      alter: "Paperboat",
      thumbnail: 'paperboat/paperboat_thumbnail.webp'
    },
    {
      id: "978417ae-8f77-40fe-bf9b-4b3a2c594142",
      alter: "Pencilballet",
      thumbnail: 'pencilballet/pencilballet_thumbnail.webp'
    },
    {
      id: "245a1895-7131-4cb7-a6eb-880f8aa39da4",
      alter: "WallE",
      thumbnail: 'walle/walle_thumbnail.webp'
    },
    {
      id: "1e9f54b1-1b08-456d-964d-70e7caaeabc5",
      alter: "Robin",
      thumbnail: 'robin/robin_thumbnail.webp'
    },
    {
      id: "9b2490a8-17d2-4a09-b4fb-b85bd1e82335",
      alter: "Windmill",
      thumbnail: 'windmill/windmill_thumbnail.webp'
    },
    {
      id: "06d2c696-db98-476e-a2b6-85cab13e4506",
      alter: "Radio",
      thumbnail: 'radio/radio_thumbnail.webp'
    },
    {
      id: "52c5bcd6-f390-43ec-a6ec-7363ddc1a142",
      alter: "Halloween",
      thumbnail: 'halloween/halloween_thumbnail.webp'
    },
    {
      id: "874fa2eb-60ee-449a-aacb-8b0f58d09ced",
      alter: "Chess",
      thumbnail: 'chess/chess_thumbnail.webp'
    },
    {
      id: "3bdbddfe-e3dc-4a2a-92b8-60d61d076b63",
      alter: "FloatingHouses",
      thumbnail: 'floatinghouses/floatinghouses_thumbnail.webp'
    }
  ];

  const imageMap: ImageMap = {
    Clock: {
      solid: 'clock/clock_solid.webp',
      render: 'clock/clock_render.webp'
    },
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
          <div className="overlay" onClick={() => hideModal()}></div>
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
