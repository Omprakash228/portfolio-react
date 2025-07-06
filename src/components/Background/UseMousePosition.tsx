import { useMotionValue, useSpring } from "motion/react"
import { useEffect } from "react";

export const useMousePosition = () => {
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const springMouse = {
        x: useSpring(mousePosition.x, {stiffness: 20, damping: 20, mass: 50, velocity: 0.01}),
        y: useSpring(mousePosition.y, {stiffness: 20, damping: 20, mass: 50, velocity: 0.01})
    }

    const getMousePosition = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        mousePosition.x.set(clientX / window.innerWidth );
        mousePosition.y.set(clientY / window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('mousemove', getMousePosition);
        return () => {
            window.removeEventListener('mousemove', getMousePosition);
        }
    }, []);

    return { x: springMouse.x, y: springMouse.y }
}