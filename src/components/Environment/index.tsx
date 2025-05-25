import { SoftShadows } from "@react-three/drei";
import { useControls } from "leva";
import { useRef, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import * as THREE from "three";
import gsap from "gsap";

function Environment() {
    const { theme, start } = useAppContext();
    const isLight = theme === "light";
    console.log("🚀 ~ Environment ~ isLight:", isLight)

    const dirLightRef = useRef<THREE.DirectionalLight>(null);
    const ambientRef = useRef<THREE.AmbientLight>(null);
    const hemiRef = useRef<THREE.HemisphereLight>(null);
    const bg = useRef<THREE.Color>(new THREE.Color('#87CEEB'));

    const lightConfig = {
        visible: true,
        position: { x: 20, y: 27, z: -10 },
        castShadow: true,
        receiveShadow: true,
        intensity: 0.5,
        rotation: { x: 0, y: 0, z: 0 },
    };

    const directionalCtl = useControls("Directional Light", lightConfig);

    useEffect(() => {

        if (bg.current) {
            gsap.to(bg.current, {
                duration: 1,
                r: isLight ? 0.529 : 0.2,
                g: isLight ? 0.808 : 0.1,
                b: isLight ? 0.922 : 0.4,
            });
        }

        if (ambientRef.current) {
            gsap.to(ambientRef.current.color, {
                duration: 1,
                r: isLight ? 0.79 : 0.45,
                g: isLight ? 0.92 : 0.46,
                b: isLight ? 1.0 : 0.71,
            });
            gsap.to(ambientRef.current, {
                duration: 1,
                intensity: isLight ? 1 : 0,
            });
        }

        if (dirLightRef.current) {
            gsap.to(dirLightRef.current.color, {
                duration: 1,
                r: isLight ? 1 : 0.09,
                g: isLight ? 1 : 0.09,
                b: isLight ? 1 : 0.09,
            });
            gsap.to(dirLightRef.current, {
                duration: 1,
                intensity: isLight ? 1 : 0.1,
            });
        }

        if (hemiRef.current) {
            gsap.to(hemiRef.current, {
                duration: 1,
                intensity: directionalCtl.intensity,
            });
        }
    }, [isLight, directionalCtl.intensity]);

    return (
        <>
            <color ref={bg} attach="background" args={['#5409DA']} />
            {
               start && theme !== "dark" &&
                <fog attach="fog" args={["white", 10, 60]} />

            }
            <group>

                <ambientLight ref={ambientRef} intensity={1} color={'#ffffff'} />

                <directionalLight
                    ref={dirLightRef}
                    castShadow
                    position={[
                        directionalCtl.position.x,
                        directionalCtl.position.y,
                        directionalCtl.position.z,
                    ]}
                    intensity={1}
                    color={'#ffffff'}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />


                <hemisphereLight
                    ref={hemiRef}
                    position={[
                        directionalCtl.position.x,
                        directionalCtl.position.y,
                        directionalCtl.position.z,
                    ]}
                    intensity={directionalCtl.intensity}
                    color={'#ffffff'}
                />

                <SoftShadows />
            </group>
        </>
    );
}

export default Environment;
