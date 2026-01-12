import { PiFileFill } from "react-icons/pi"
import './Resume.css'

export const Resume = () => {
    return (
        <div className='resume-ctr'>
            <a className="resume-link" href='/CV_Omprakash.pdf' target="_blank">
                <PiFileFill size={"22px"} style={{ alignSelf: 'center', verticalAlign: 'middle' }} />
            </a>
            <div style={{cursor: 'default'}}>Resume</div>
        </div>
    )
}