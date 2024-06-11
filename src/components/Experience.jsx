//import { Fish } from "./Fish";
import { Laptop } from "./Laptop";
import { useEffect, useRef, useState } from "react";

import { GuitarMan } from "./GuitarMan";
import { WebConfiguration } from "./WebConfiguration";
import { ApiConfiguration } from "./ApiConfiguration";
import { UserLogin } from "./UserLogin";

import { Text } from "@react-three/drei";
import { SectionTitle } from "./SectionTitle";
import { OrbitControls, Html, useScroll, Scroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { License } from "./License";
import { config } from "../config";

const SECTIONS_DISTANCE = 10;


export const Experience = () => {
  
 
  const [section, setSection] = useState(config.sections[0]);
  const sceneContainer = useRef();
  const scrollData = useScroll();

  // useFrame(() => {
  //   sceneContainer.current.position.z =
  //     -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
  //   sceneContainer.current.position.x = 0;

  //   setSection(
  //     config.sections[Math.round(scrollData.offset * (scrollData.pages - 1))]
  //   );
  // });

  useEffect(() => {
    const handleHashChange = () => {
      const sectionIndex = config.sections.indexOf(
        window.location.hash.replace("#", "")
      );
      if (sectionIndex !== -1) {
        scrollData.el.scrollTo(
          0,
          (sectionIndex / (config.sections.length - 1)) *
            (scrollData.el.scrollHeight - scrollData.el.clientHeight)
        );
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
      
        <group>
          
          <License scale={[0.35,0.35,0.35]} position={[0.35, 1.0, 2.5]}/>
          
          {/* HOME */}
          <group >
            <SectionTitle position-x={0.5}>HOME</SectionTitle>
            <WebConfiguration scale={[0.35,0.35,0.35]} position={[0.35, -1.0, 1.5]}/>
            
            <Html occlude position={[2, 0.5, 0]}>
              <div className="label">
                <div className="label__price">できること</div>
                <div className="label__name">プログラム</div>
              </div>
            </Html>

          </group>
          {/* SKILLS */}
          <group position-y={SECTIONS_DISTANCE}>
            <SectionTitle position-x={0.5}>SKILLS</SectionTitle>
            <ApiConfiguration scale={[0.35,0.35,0.35]} position={[0.35, -3.0, 1.5]}/> 

            <Html occlude position={[2, 0.5, 0]}>
              <div className="label">
                <div className="label__price">スキル</div>
                <div className="label__name">開発</div>
              </div>
            </Html>          
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

      {/* <Html position={[0, 0, 0]} style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <div className="label">
              <div className="label__price">設計</div>
              <div className="label__name">開発</div>
            </div>
          </Html> */}

    </>
  );
};
