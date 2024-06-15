import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export function PictureLicense(props) {

  const texture = useLoader(TextureLoader, props.imageUrl);

  return (
    <group {...props} dispose={null}>
      <mesh position={props.position} rotation={props.rotation} >
        <boxGeometry 
          args={[0.01]} 
        />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  )
}
