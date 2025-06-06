/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/streetLight.glb 
*/

import { Outlines, useGLTF } from '@react-three/drei'
import Lights from '../Lights'
import { useAppContext } from '../../../context/AppContext'
import * as THREE from 'three'

export function StreetLight() {
    const { nodes, materials } = useGLTF('/models/streetLight.glb')
    const { theme, playerColor } = useAppContext()
    const lights = [
        {
            position: [-1.912, 5.73, 6.532] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane016_1 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane016_2 as THREE.Mesh).geometry,
        },
        {
            position: [-1.865, 5.989, -6.887] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane016 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane016_2 as THREE.Mesh).geometry
        },
        {
            position: [1.773, 8.928, 0.536] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane019_1 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane019_2 as THREE.Mesh).geometry
        },
        {
            position: [-1.589, 8.922, -1.185] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane020_1 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane020_2 as THREE.Mesh).geometry
        },
        {
            position: [1.961, 5.208, 6.996] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane021_1 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane021_2 as THREE.Mesh).geometry
        },
        {
            position: [-2.117, 1.204, 8.584] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane022_1 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane022_2 as THREE.Mesh).geometry
        },
        {
            position: [2.268, -0.617, 8.702] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane023 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane023_1 as THREE.Mesh).geometry
        },
        {
            position: [1.797, 4.376, -7.786] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane024 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane024_1 as THREE.Mesh).geometry
        },
        {
            position: [1.713, 8.632, -2.304] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane028 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane028_1 as THREE.Mesh).geometry
        },
        {
            position: [-1.892, -5.261, -7.237] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane035 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane035_1 as THREE.Mesh).geometry
        },
        {
            position: [-1.743, -8.273, -3.531] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane036 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane036_1 as THREE.Mesh).geometry
        },
        {
            position: [1.816, -8.258, -3.595] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane040 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane040_1 as THREE.Mesh).geometry
        },
        {
            position: [1.691, -8.014, 3.931] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane097 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane097_1 as THREE.Mesh).geometry
        },
        {
            position: [-1.601, -8.045, 3.817] as [number, number, number],
            rotation: [1.494, 0, 0],
            geometry: (nodes.Plane098 as THREE.Mesh).geometry,
            material: materials.body,
            bulbGeometry: (nodes.Plane098_1 as THREE.Mesh).geometry
        },
        {
            position: [2.057, 3.118, 8.363] as [number, number, number],
            rotation: [-0.397, 0, 0],
            geometry: (nodes.Plane032_1 as THREE.Mesh).geometry,
            material: materials.M_Cnsw_11_N_Obj_001_1,
            bulbGeometry: (nodes.Plane032_2 as THREE.Mesh).geometry
        },
        {
            position: [-2.082, 2.882, 8.455] as [number, number, number],
            rotation: [-0.397, 0, 0],
            geometry: (nodes.Plane034_1 as THREE.Mesh).geometry,
            material: materials.M_Cnsw_11_N_Obj_001_1,
            bulbGeometry: (nodes.Plane034_2 as THREE.Mesh).geometry
        }
    ]
    return (
        <group dispose={null}>
            {
                lights.map((light, index) => (
                    <group
                        key={index}
                        position={light.position}
                        rotation={light.rotation as [number, number, number]}
                    >
                        <mesh geometry={light.geometry}  >
                            <meshToonMaterial
                                color={(light.material as THREE.MeshToonMaterial).color}
                                map={(light.material as THREE.MeshToonMaterial).map}
                            />
                            <Outlines thickness={2} />
                        </mesh>
                        <mesh geometry={light.bulbGeometry} material={materials.bulb} >
                            <meshStandardMaterial
                                emissive={playerColor}
                                emissiveIntensity={theme === "light" ? 0.5 : 5}
                                color={playerColor}
                                transparent
                                opacity={0.8}
                                toneMapped={false}
                            />
                        </mesh>
                    </group>
                ))
            }


            <Lights />

        </group>
    )
}

useGLTF.preload('/streetLight.glb')
