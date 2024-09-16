import { ContactShadows, Environment, } from '@react-three/drei'
import Computer from './Model'

export default function Experience()
{
    return <>
        <Environment preset="city" />
        <color args={["#101A18"]} attach="background"/>
        
        <Computer />
        <ContactShadows 
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
    </>
} 