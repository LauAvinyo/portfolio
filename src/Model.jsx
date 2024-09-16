import {Html, Text, useGLTF, Float, PresentationControls} from '@react-three/drei' 
import Portfolio from './Portfolio'

export default function Computer()
{
    const computer = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")
    return <>
        <PresentationControls 
            global
            rotation={ [0.13, 0.1, 0]}
            polar={[0-0.4, 0.2]}
            azimuth = {[-1, 0.5]}
            config={{mass:2, tension:400}}
            snap={{mass:4, tension:400}}
        > 
            <Float rotationIntensity={0.4}>
                <rectAreaLight 
                    width={2.5}
                    height={1.56}
                    intensity={65}
                    color={"#90ddf0"}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                <primitive object={computer.scene} position-y={-1.2}>
                    <Portfolio />
                </primitive>
                <Text
                    position={[1.5, 0.75, 0.5]}
                    rotation-y={-1.5}
                    font="./pt-sans-v17-latin-regular.woff"
                    // font="monospace"
                    maxWidth={2}
                    fontSize={0.2}
                >Hi there! I am Lau! Currently working on my new portfolio... Meanwhile here you got a summary</Text>
            </Float>
        </PresentationControls>
    </>
}