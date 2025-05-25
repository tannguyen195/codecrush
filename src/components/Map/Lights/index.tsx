import { Sparkles } from "@react-three/drei";

function PointLight({
    position,

}: {
    position: [number, number, number];

}) {
    return (
        <>
            {/* <pointLight
                position={position.length === 3 ? position : [0, 0, 0]}
                castShadow
                intensity={3}
                distance={10}
                decay={2}
                color="yellow" /> */}
            <Sparkles
                position={position.length === 3 ? position : [0, 0, 0]}
                size={6}
                scale={[1, 1, 1]}
                speed={0.5}
                count={10}
                color="yellow"
            />
        </>
    );
}

function Lights() {
    // const lightPosition: [number, number, number][] = [
    //     [2.137, 10.853, 0.671],
    //     [-2.571, 1.486, 10.524],
    //     [2.62, -0.761, 10.678],
    //     [-2.275, 7.025, 8.028],
    //     [2.334, 6.354, 8.607],
    //     [2.146, 10.901, 0.674],
    //     [-1.952, 10.897, -1.324],
    //     [2.06, 10.56, -2.764],
    //     [-2.334, 7.279, -8.359],
    //     [2.252, 5.179, -9.574],
    //     [-2.347, -6.46, -8.788],
    //     [-2.117, -10.007, -4.48],
    //     [2.189, -10.135, -4.218],
    //     [-2.056, -9.803, 4.684],
    //     [2.121, -9.763, 4.83],
    //     [-1.534, 3.776, 11.306],
    //     [1.573, 3.94, 11.244]
    // ]
    return (
        <>
            <PointLight position={[0, 8.301, 0]} />
            <PointLight position={[2.137, 10.853, 0.671]} />
            <PointLight position={[-2.571, 1.486, 10.524]} />
            <PointLight position={[2.62, -0.761, 10.678]} />
            <PointLight position={[-2.275, 7.025, 8.028]} />
            <PointLight position={[2.334, 6.354, 8.607]} />
            <PointLight position={[2.146, 10.901, 0.674]} />
            <PointLight position={[-1.952, 10.897, -1.324]} />
            <PointLight position={[2.06, 10.56, -2.764]} />
            <PointLight position={[-2.334, 7.279, -8.359]} />
            <PointLight position={[2.252, 5.179, -9.574]} />
            <PointLight position={[-2.347, -6.46, -8.788]} />
            <PointLight position={[-2.117, -10.007, -4.48]} />
            <PointLight position={[2.189, -10.135, -4.218]} />
            <PointLight position={[-2.056, -9.803, 4.684]} />
            <PointLight position={[2.121, -9.763, 4.83]} />
            <PointLight position={[-1.534, 3.776, 11.306]} />
            <PointLight position={[1.573, 3.94, 11.244]} />



        </>
    );
}

export default Lights;

