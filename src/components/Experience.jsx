//import { Fish } from "./Fish";
import { Laptop } from "./Laptop";
import { GuitarMan } from "./GuitarMan";
import { WebConfiguration } from "./WebConfiguration";
import { ApiConfiguration } from "./ApiConfiguration";
import { UserLogin } from "./UserLogin";

import { Text } from "@react-three/drei";
import { SectionTitle } from "./SectionTitle";
import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Scroll } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";




const SECTIONS_DISTANCE = 10;


export const Experience = () => {
  
  // const sceneContainer = useRef();
  // const scrollData = useScroll();
  // const lastScroll = useRef(0);
  // useFrame(() => {
  //   const scrollDelta = scrollData.offset - lastScroll.current;
  //   if (Math.abs(scrollDelta) > 0.00001) {
  //     setAnimation("Walking");
  //   } else {
  //     setAnimation("Idle");
  //   }
  //   lastScroll.current = scrollData.offset;
  // });

  return (
    <>
      <GuitarMan scale={[0.35,0.35,0.35]}/>
      {/* <Laptop scale={[0.015,0.015,0.015]}/> */}

      <Text 
        font="/assets/RocknRoll_One/RocknRollOne-Regular.ttf"
        // font="/assets/Noto_Sans_JP/NotoSansJP-VariableFont_wght.ttf"
        // font="/assets/Mochiy_Pop_P_One/MochiyPopPOne-Regular.ttf"
        // font="/assets/M_PLUS_1/MPLUS1-SemiBold.ttf"
        scale={[-0.5, 0.5, 0.5]} 
        position={[0.15, 0.15, 0.5]}
        rotation={[0.0, Math.PI, 270]}
        color="silver" // Default is white
        anchorX="center" // Anchor point x (default is "center")
        anchorY="middle" //           
      >
        {`たのしみdev`}
      </Text>

      <Scroll>

      <group >
        {/* HOME */}
        <group >
          <SectionTitle position-x={0.5}>HOME</SectionTitle>
          <WebConfiguration scale={[0.35,0.35,0.35]} position={[0.35, -1.0, 1.5]}/>      
        </group>
        {/* SKILLS */}
        <group position-y={SECTIONS_DISTANCE}>
          <SectionTitle position-x={0.5}>SKILLS</SectionTitle>
          <ApiConfiguration scale={[0.35,0.35,0.35]} position={[0.35, -3.0, 1.5]}/>      
        </group>
        {/* PROJECTS */}
        <group position-y={-2 * SECTIONS_DISTANCE}>
          <SectionTitle position-x={0.5}>PROJECTS</SectionTitle>
          <UserLogin scale={[0.35,0.35,0.35]} position={[0.35, -4.5, 1.5]}/>      
        </group>
        {/* CONTACT */}
        <group position-y={-3 * SECTIONS_DISTANCE}>
          <SectionTitle position-x={0.5}>CONTACT</SectionTitle>
        </group>
      </group>
      </Scroll>

    </>
  );
};
