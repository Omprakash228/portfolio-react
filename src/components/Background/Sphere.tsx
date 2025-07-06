import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import VertexShader from "./VertexShader";
import FragShader from "./FragShader";
import { useMousePosition } from "./UseMousePosition";


export const Sphere = () => {
    const materialRef = useRef<any>(null);
    const sphereRef = useRef<THREE.Mesh>(null);
    const { x, y } = useMousePosition();

    const uniforms = useMemo(() => ({
        ...THREE.UniformsLib["lights"],
        diffuse: { value: new THREE.Color(0x2194ce) },
        emissive: { value: new THREE.Color(0x000000) },
        specular: { value: new THREE.Color(0x111111) },
        shininess: { value: 30 },
        opacity: { value: 1.0 },
        time: { value: 0 },
        colorB: { value: new THREE.Color(0x0000ff) },
        colorA: { value: new THREE.Color(0x74ebd5) },
    }), [])

    useFrame((state) => {
        if (!sphereRef.current) return;
        sphereRef.current.rotation.z = x.get() / 2;
        sphereRef.current.rotation.y = y.get() / 2;
        sphereRef.current.rotation.x += 0.0005;

        uniforms.time.value = state.clock.getElapsedTime();
    })
    return (
        <mesh ref={sphereRef} position={[22, 16, 0]}>
            <sphereGeometry args={[38, 128, 128]} />
            <shaderMaterial
                ref={materialRef}
                uniforms={uniforms}
                vertexShader={VertexShader}
                fragmentShader={FragShader}
                lights
            />
        </mesh>
    )
}
