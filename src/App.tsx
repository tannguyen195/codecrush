
import { Suspense, useMemo } from 'react';
import './App.css'
import { KeyboardControls, PerspectiveCamera, type KeyboardControlsEntry } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import CharacterController from './components/CharacterController';
import Map from './components/Map';
import Environment from './components/Environment';
import { AppProvider, useAppContext } from './context/AppContext';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Leva, useControls } from 'leva';
import StartMenu from './components/StartMenu';
import MusicPlayer from './components/MusicPlayer';
import { Moon, Sun } from 'lucide-react';
import { isMobile } from 'react-device-detect';
import MobileJoyStick from './components/MobileJoyStick';



function App() {
  const PlayControls = {
    forward: 'forward',
    back: 'backward',
    left: 'leftward',
    right: 'rightward',
    jump: 'jump',
    run: 'shift',
  } as const;

  type PlayControls = typeof PlayControls[keyof typeof PlayControls];

  const map = useMemo<KeyboardControlsEntry<PlayControls>[]>(() => [
    { name: PlayControls.forward, keys: ['ArrowUp', 'KeyW'] },
    { name: PlayControls.back, keys: ['ArrowDown', 'KeyS'] },
    { name: PlayControls.left, keys: ['ArrowLeft', 'KeyA'] },
    { name: PlayControls.right, keys: ['ArrowRight', 'KeyD'] },
    { name: PlayControls.jump, keys: ['Space'] },
    { name: PlayControls.run, keys: ["Shift"] },
  ], [])

  return (
    <AppProvider>
      <KeyboardControls map={map}>
        <div className="h-screen" id="canvas">
          {
            isMobile && <MobileJoyStick />
          }
          <div className="bg-gray-800 p-4 rounded-xl absolute top-4 right-4 z-10  gap-2 flex flex-col items-start">
            <div className='flex gap-2'>
              <Controller />
              <MusicPlayer />
            </div>
            <kbd>
              <span >W: Walk</span>
              <br />
              <span >Shift: Sprint</span>

            </kbd>
          </div>
          <StartMenu />
          <Canvas shadows
            style={{
              touchAction: "none",
            }}>
            <EffectComposer>
              <Bloom intensity={5} />
            </EffectComposer>
            {/* <OrbitControls /> */}
            <Environment />
            <CameraSetting />
            <Suspense >
              <Physics timeStep="vary" debug>
                <Map />
                <CharacterController />
              </Physics>
            </Suspense>
          </Canvas>

          <Leva hidden />
        </div >
      </KeyboardControls >
    </AppProvider >
  );

}

function Controller() {
  const { toggleTheme, theme } = useAppContext();
  return (
    <div className="  z-10 flex gap-2">
      <button onClick={toggleTheme}>
        {
          theme === 'dark' ? (
            <Moon className={`w-6 h-6 text-yellow-400`} />
          ) : (
            <Sun className={`w-6 h-6 text-yellow-400`} />
          )
        }

      </button>
    </div>
  );
}

function CameraSetting() {
  const { TARGET_X, POSITION_X, TARGET_Y, TARGET_Z, POSITION_Y, POSITION_Z } = useControls(
    " camera",
    {
      TARGET_X: { value: 4.5, min: -100, max: 100, step: .5 },
      TARGET_Y: { value: -5, min: -100, max: 100, step: .5 },
      TARGET_Z: { value: 23, min: -100, max: 100, step: .5 },
      POSITION_X: { value: 42, min: -100, max: 100, step: .5 },
      POSITION_Y: { value: 5, min: -100, max: 100, step: .5 },
      POSITION_Z: { value: 41, min: -100, max: 100, step: .5 },
    }
  );
  const { start } = useAppContext();
  // useFrame(({ camera }) => {
  //   camera.position.set(POSITION_X, POSITION_Y, POSITION_Z);
  //   camera.lookAt(TARGET_X, TARGET_Y, TARGET_Z);
  // });

  const { camera } = useThree();

  useFrame(() => {
    if (!start) {
      camera.position.set(POSITION_X, POSITION_Y, POSITION_Z);
      camera.lookAt(TARGET_X, TARGET_Y, TARGET_Z);
    }
  });

  return <PerspectiveCamera
    makeDefault
    near={0.1}
    fov={isMobile ? 70 : 40}
    far={1000}
  />;
}


export default App
