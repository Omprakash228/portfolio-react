import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import "./Background.css";
import { Environment } from "@react-three/drei";
import { Sphere } from "./Sphere";
import { Suspense } from "react";

export const Background = () => {
    const rgbBackground = "17 17 17";


    return (
        <div id="background">
            <Canvas
                camera={{ fov: 55, position: [0, 0, 52] }}
                gl={{ powerPreference: "high-performance" }}
                style={{ height: "100vh", width: "100vw", background: rgbBackground }}
            >
                <ambientLight
                    intensity={0.3}
                    color={'#fff'}
                />
                <directionalLight
                    position={[100, 100, 200]}
                    intensity={2.6}
                    color={'#fff'}
                />
                <Environment background={true} near={1} far={1000} resolution={256} environmentIntensity={1}>
                    <mesh scale={100}>
                        <sphereGeometry args={[1, 64, 64]} />
                        <meshBasicMaterial color={'#111'} side={THREE.BackSide} />
                    </mesh>
                </Environment>
                <Suspense >
                    <Sphere />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Background;
