import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Sidenav.css'

export const SideNav = () => {
    useGSAP(() => {
        gsap.from('nav a', {
            duration: 1,
            y: -50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out'
        });
    }, []);

    return (
        <nav>
            <a href="#">
                About
            </a>
            {/* <a href="#about">
                About
            </a> */}
            <a href="#journey">
                Career Journey
            </a>
            <a href="#web-projects">
                Web Projects
            </a>
            <a href="#3d-projects">
                3D Projects
            </a>
        </nav>
    );
};