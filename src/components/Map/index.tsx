import { Outlines, Sparkles, useGLTF, useKeyboardControls } from "@react-three/drei";
import { StreetLight } from "./StreetLight";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sky } from "./Sky";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { DoubleSide } from "three";
import * as THREE from "three";
import { useAppContext } from "../../context/AppContext";

const rotationEuler = new THREE.Euler(0, 0, 0);
const quaternion = new THREE.Quaternion();
function Map() {
    const { nodes, materials } = useGLTF("/models/paris.glb")
    const { playerColor, changeRandomColor } = useAppContext();

    const [, get] = useKeyboardControls();
    const wasForwardPressed = useRef(false);
    const mapRef = useRef<THREE.Group>(null);
    const mRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        const isForward = get().forward;
        const isShift = get().shift;
        if (!mapRef.current) return;
        if (isForward) {
            if (isShift) {
                mapRef.current.rotation.x -= 0.01; // smooth rotation per second

            }
            else
                mapRef.current.rotation.x -= 0.0025; // smooth rotation per second
            wasForwardPressed.current = true;
        }
        if (!isForward && wasForwardPressed.current) {
            wasForwardPressed.current = false;
        }
    })
    const rigidRef = useRef<RapierRigidBody>(null);
    useFrame(() => {
        const isForward = get().forward;
        const isShift = get().shift;
        if (!rigidRef.current) return;
        if (isForward) {
            if (isShift) {
                // Rotate around Y-axis
                rotationEuler.x -= 0.01; // smooth rotation per second
            }
            else
                rotationEuler.x -= 0.0025; // smooth rotation per second
            wasForwardPressed.current = true;
            quaternion.setFromEuler(rotationEuler);
            rigidRef.current.setNextKinematicRotation?.(quaternion);
        }

    });


    return (
        <>
            <Sky />
            <RigidBody type="fixed" colliders="hull" >
                <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow >
                    <planeGeometry args={[1, 1]} />
                    <meshToonMaterial color="red" side={DoubleSide} opacity={0} transparent />
                </mesh>
            </RigidBody>
            <group position={[0, -18.14, 0]} ref={mRef} >
                <RigidBody
                    sensor
                    ref={rigidRef}
                    canSleep={false}
                    type="kinematicPosition"
                    colliders="trimesh"
                    position={[0, 9.07, 0]}
                    onIntersectionEnter={(e) => {
                        changeRandomColor();
                        console.log("Intersection detected with the red box!", e);
                    }}
                >
                    <mesh
                        position={[0, 9.07, 4]}
                    >
                        <torusGeometry args={[.2, .1, 16, 28]} />
                        <meshToonMaterial color={playerColor} />
                        <Outlines thickness={5} color="black" />
                        <Sparkles
                            size={4}
                            speed={0.5}
                            count={10}
                            color={"yellow"}
                        />
                    </mesh>
                </RigidBody >
            </group>
            <group dispose={null} position={[0, -9.07, 0]} castShadow receiveShadow ref={mapRef}>

                <group rotation={[1.473, 0, 0]}>
                    <mesh geometry={(nodes.Icosphere001 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials['Material.001'] as THREE.MeshToonMaterial).map} color={(materials['Material.001'] as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />

                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_1 as THREE.Mesh).geometry} >
                        <meshToonMaterial map={(materials['Material.003'] as THREE.MeshToonMaterial).map} color={(materials['Material.003'] as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />

                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_2 as THREE.Mesh).geometry} >
                        <meshToonMaterial map={(materials['Material.002'] as THREE.MeshToonMaterial).map} color={(materials['Material.002'] as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_3 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials.M_Cnsw_11_N_UniqueBuilding_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_N_UniqueBuilding_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_4 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials.M_Cnsw_11_Nature_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_Nature_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_5 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials.M_Cnsw_11_N_Obj_002_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_N_Obj_002_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_6 as THREE.Mesh).geometry} >
                        <meshToonMaterial map={(materials.M_Cnsw_11_kanban_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_kanban_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_7 as THREE.Mesh).geometry} >
                        <meshToonMaterial map={(materials.M_Cnsw_11_N_Obj_006_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_N_Obj_006_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_8 as THREE.Mesh).geometry} >
                        <meshToonMaterial map={(materials.M_Cnsw_11_RoadSide_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_RoadSide_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_9 as THREE.Mesh).geometry} >
                        <meshToonMaterial map={(materials.M_Cnsw_11_N_Obj_008_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_N_Obj_008_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_10 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials.M_Cnsw_11_Textures01_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_Textures01_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_11 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials.M_Cnsw_11_N_Building_002_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_N_Building_002_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_12 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials.M_Cnsw_11_gaisenmon_tex_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_gaisenmon_tex_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_13 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials.M_Cnsw_11_N_Obj_001_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_N_Obj_001_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_14 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials.M_Cnsw_11_N_Effel_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_N_Effel_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_15 as THREE.Mesh).geometry} >
                        <meshToonMaterial map={(materials.M_Cnsw_11_N_Obj_004_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_N_Obj_004_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_16 as THREE.Mesh).geometry} >
                        <meshToonMaterial map={(materials.M_Cnsw_11_F_BlindBuilding_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_F_BlindBuilding_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_17 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials.M_Cnsw_11_N_Building_003_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_N_Building_003_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_18 as THREE.Mesh).geometry}  >
                        <meshToonMaterial map={(materials.M_FenceSilver_1 as THREE.MeshToonMaterial).map} color={(materials.M_FenceSilver_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                    <mesh geometry={(nodes.Icosphere001_19 as THREE.Mesh).geometry} >
                        <meshToonMaterial map={(materials.M_Cnsw_11_N_Obj_010_1 as THREE.MeshToonMaterial).map} color={(materials.M_Cnsw_11_N_Obj_010_1 as THREE.MeshToonMaterial).color} />
                        <Outlines thickness={5} color="black" />
                    </mesh>
                </group>
                <StreetLight />

            </group>


        </>

    );
}

export default Map;