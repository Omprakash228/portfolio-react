import { MdEmail } from "react-icons/md"
import './Socials.css'
import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi"

export const Socials = () => {

    return (
        <div className="socials">
            <div className="tooltip social-ctr">
                <div className="tooltiptext tooltiptext-right">omprakashnarayanan302@gmail.com</div>
                <a className="link" href="mailto:omprakashnarayanan302@gmail.com" target="_blank" >
                    <MdEmail size={"22px"} style={{ alignSelf: 'center', verticalAlign: 'middle' }} />
                </a>
            </div>
            <div className="tooltip social-ctr">
                <div className="tooltiptext tooltiptext-right">omprakash-n</div>
                <a className="link" href="https://www.linkedin.com/in/omprakash-n/" target="_blank" >
                    <PiLinkedinLogoFill size={"22px"} style={{ alignSelf: 'center', verticalAlign: 'middle' }} />
                </a>
            </div>
            <div className="tooltip social-ctr">
                <div className="tooltiptext tooltiptext-right">omprakash228</div>
                <a className="link" href="https://github.com/Omprakash228" target="_blank" >
                    <PiGithubLogoFill size={"22px"} style={{ alignSelf: 'center', verticalAlign: 'middle' }} />
                </a>
            </div>
        </div>
    )
}