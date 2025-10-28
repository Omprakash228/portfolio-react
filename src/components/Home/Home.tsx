import { TextDecrypt } from "../../shared/TextDecrypt";
import { Background } from "../Background/Background";
import Logo from "./Logo/Logo";
import { SideNav } from "./Sidenav/Sidenav";
import "./Home.css";
import { Socials } from "../Socials/Socials";
import { Resume } from "./Resume/Resume";

export default function Home() {
  return (
    <>
      <Background />
      <Logo />
      <SideNav />
      <Socials />
      <Resume />
      <div className="main-content">
        <div className="name">
          <TextDecrypt text="Omprakash Narayanan Lakshmanan" />
        </div>
        <div className="jobs">
          <TextDecrypt text="Web Developer and" />
          <TextDecrypt text="3d Artist" />
        </div>
      </div>
    </>
  );
}
