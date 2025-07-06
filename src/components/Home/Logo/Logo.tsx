import Resume from "../../../data/resume.json";
import './Logo.css'

export default function Logo() {

    return (
        <div className="tooltip logo-ctr">
            <div className="tooltiptext tooltiptext-left">{Resume.basics.name}</div>
            <a href={Resume.basics.url} >
                <div id="logo"></div>
            </a>
        </div>
    );
};
