import { Background } from "../Background/Background";
import Logo from "./Logo/Logo";
import { SideNav } from "./Sidenav/Sidenav";
import "./Home.css";
import { Socials } from "../Socials/Socials";
// import { Resume } from "./Resume/Resume";

export default function Home() {
  return (
    <>
      <Background />
      <Logo />
      <SideNav />
      <Socials />
      {/* <Resume /> */}
      <div className="main-content">
        <div className="name">
          <div>Omprakash Narayanan Lakshmanan</div>
        </div>
        <div className="jobs">
          <div>Web Developer and</div>
          <div>3d Artist</div>
        </div>
      </div>
    </>
  );
}
