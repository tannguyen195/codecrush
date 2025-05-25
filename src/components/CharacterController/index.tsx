import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import { useRef, useState } from 'react'
import { Vector3, Group } from 'three'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { useControls } from 'leva'
import CharacterModel from './CharacterModel'
import { useAppContext } from '../../context/AppContext'

function CharacterController() {
    const [animation, setAnimation] = useState("idle");
    const { start } = useAppContext();
    const animationSet = {
        idle: 'CharacterArmature|Idle',
        walk: 'CharacterArmature|Walk',
        run: 'CharacterArmature|Run',
        jump: 'CharacterArmature|Jump',
        jumpIdle: 'CharacterArmature|Jump_Idle',
        jumpLand: 'CharacterArmature|Jump_Land',
        fall: 'CharacterArmature|Duck', // This is for falling from high sky
        action1: 'CharacterArmature|Wave',
        action2: 'CharacterArmature|Death',
        action3: 'CharacterArmature|HitReact',
        action4: 'CharacterArmature|Punch'
    }

    const container = useRef(null);
    const character = useRef(null);
    const cameraTarget = useRef<Group | null>(null);
    const cameraPosition = useRef<Group | null>(null);
    const cameraWorldPosition = useRef<Vector3 | null>(new Vector3());
    const cameraLookAtWorldPosition = useRef<Vector3 | null>(new Vector3());
    const cameraLookAt = useRef(new Vector3(0, 0, 0));
    const [, get] = useKeyboardControls();

    // const { WALK_SPEED, RUN_SPEED, ROTATION_SPEED } = useControls(
    //     "Character Control",
    //     {
    //         WALK_SPEED: { value: 0, min: 0, max: 4, step: 0.1 },
    //         RUN_SPEED: { value: 8, min: 0.2, max: 12, step: 0.1 },
    //         ROTATION_SPEED: {
    //             value: degToRad(0.5),
    //             min: degToRad(0.1),
    //             max: degToRad(5),
    //             step: degToRad(0.1),
    //         },
    //     }
    // );

    const { TARGET_X, POSITION_X, TARGET_Y, TARGET_Z, POSITION_Y, POSITION_Z } = useControls(
        " Control",
        {
            TARGET_X: { value: 4.5, min: -10, max: 20, step: .5 },
            TARGET_Y: { value: -3.5, min: -10, max: 20, step: .5 },
            TARGET_Z: { value: 18, min: -10, max: 20, step: .5 },
            POSITION_X: { value: -3.5, min: -10, max: 20, step: .5 },
            POSITION_Y: { value: 2, min: -10, max: 20, step: .5 },
            POSITION_Z: { value: -5, min: -10, max: 20, step: .5 },
        }
    );
    // const forwardPressed = useKeyboardControls<PlayControls>(state => state.forward)
    const wasForwardPressed = useRef(false);
    const wasShiftPressed = useRef(false);


    useFrame(({ camera }) => {
        const isForward = get().forward;
        const isShift = get().shift;
        // Detect key down
        if (isForward && !wasForwardPressed.current) {
            setAnimation(animationSet.walk);

            wasForwardPressed.current = true;
        }

        // Detect key up (released)
        if (!isForward && wasForwardPressed.current) {
            setAnimation(animationSet.idle);
            wasForwardPressed.current = false;
        }

        if (
            isShift
        ) {
            setAnimation(animationSet.run);
            if (!wasShiftPressed.current) {
                wasShiftPressed.current = true;
            }
        }
        if (!isShift && wasShiftPressed.current) {
            setAnimation(animationSet.walk);
            wasShiftPressed.current = false;
        }
        else if (!isForward && !isShift) {
            setAnimation(animationSet.idle);
            wasShiftPressed.current = false;
            wasForwardPressed.current = false;
        }

        if (start) {
            if (cameraPosition.current && cameraWorldPosition.current) {
                cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
                camera.position.lerp(cameraWorldPosition.current, 0.01);
            }

            if (cameraTarget.current && cameraLookAtWorldPosition.current) {
                cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
                cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.01);
                camera.lookAt(cameraLookAt.current);
            }
        }
    })

    return <RigidBody
        position={[0, 5, 0]}
        colliders={false}
        lockRotations
        onCollisionExit={(e) => {
            console.log("🚀 ~ onCollisionExit ~ e:", e)
        }}
        onCollisionEnter={(e) => {
            console.log("🚀 ~ onCollisionEnter ~ e:", e)
        }}

    >
        <group ref={container}>
            <group ref={cameraTarget}
                position-y={TARGET_Y}  // 0.5
                position-x={TARGET_X} // 0
                position-z={TARGET_Z}
            >
            </group>
            <group ref={cameraPosition}
                position-x={POSITION_X} // 0
                position-y={POSITION_Y}
                position-z={POSITION_Z} >
            </group>


            <group ref={character}>

                <CharacterModel animation={animation} />
            </group>
        </group>
        <CapsuleCollider args={[0.08, 0.15]} scale={2} />

    </RigidBody>
}

export default CharacterController;