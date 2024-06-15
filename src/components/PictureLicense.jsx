import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useTexture } from "@react-three/drei";

const licensePictures = [
  "/assets/images/DB_trim.png",
  "/assets/images/NW_trim.png",
  "/assets/images/PM_trim.png",
  "/assets/images/BOKI_trim.png",
  "/assets/images/AWS_clf.png",
]


licensePictures.forEach((pictureImage) => {
  useTexture.preload(pictureImage);
});

export function PictureLicense(props) {

  const texture = useTexture(licensePictures[props.pictureIndex]);

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

