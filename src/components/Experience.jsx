//import { Fish } from "./Fish";
//import { Laptop } from "./Laptop";
import { useEffect, useRef, useState, useMemo } from "react";

import { GuitarMan } from "./GuitarMan";
import { WebConfiguration } from "./WebConfiguration";
import { ApiConfiguration } from "./ApiConfiguration";
import { PictureFrame } from "./PictureFrame";
import { PictureLicense } from "./PictureLicense";
import { UserLogin } from "./UserLogin";


import { Text } from "@react-three/drei";
import { SectionTitle } from "./SectionTitle";
import { Sparkles, Sky, Cloud, Center, OrbitControls, Html, useScroll, Scroll } from "@react-three/drei";
import { extend, useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three';

import { License } from "./License";
import { config } from "../config";

const SECTIONS_DISTANCE = 5;


export const Experience = () => {
  
 
  const [section, setSection] = useState(config.sections[0]);
  const sceneContainer = useRef();
  const scrollData = useScroll();

  // const [sectionIndex, setSectionIndex] = useState(0);
  const [licenseIndex, setLicenseIndex] = useState(0);
  
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
      

      console.log(`sectionIndex = ${sectionIndex}`);
      console.log(`section.length = ${config.sections.length}`);
      console.log(`scrollData.el.scrollHeight = ${scrollData.el.scrollHeight}`);
      console.log(`scrollData.el.clientHeight = ${scrollData.el.clientHeight}`);
      console.log(`result = ${
        (sectionIndex / (config.sections.length - 1)) *
            (scrollData.el.scrollHeight - scrollData.el.clientHeight)
      }`);
      //setSectionIndex(sectionIndex);

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



  function Light() {
    const ref = useRef()
    useFrame((_) => (ref.current.rotation.x = _.clock.elapsedTime))
    return (
      <group ref={ref}>
        <rectAreaLight width={15} height={100} position={[30, 30, -10]} intensity={5} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </group>
    )
  }
  
  
  const handleLicenseClick = (index, event) => {
    event.preventDefault(); // Prevent default click behavior
    setLicenseIndex(index); // Update state as needed
  };

  return (
    <>

      <fog attach="fog" args={['lightpink', 60, 100]} />

      <ambientLight intensity={0.5} />
      <spotLight position={[50, 50, -30]} castShadow />
      <pointLight position={[-10, -10, -10]} color="orange" intensity={3} />
      <pointLight position={[0, -5, 5]} intensity={0.5} />
      <directionalLight position={[0, -5, 0]} color="orange" intensity={2} />
      <Light />

      <GuitarMan scale={[0.35,0.35,0.35]}/>
      <Text 
        font="/assets/RocknRoll_One/RocknRollOne-Regular.ttf"
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
          
           {/* TOP */}

          <group >

            <Sparkles
              size={ 4 }
              scale={ [ 14, 2, 4 ] }
              position-y={ 0.5 }
              speed={ 0.2 }
              color={ 'gold' }
              count={ 20 }
            />


          </group>

          {/* SKILLS */}

          <group >

            <Sparkles
              size={ 4 }
              scale={ [ 14, 2, 4 ] }
              position-y={ 0.5 }
              speed={ 0.2 }
              color={ 'gold' }
              count={ 20 }
            />

            <WebConfiguration scale={[0.35,0.35,0.35]} position={[-1.5, -5.0, 1.5]}/> 
            


            <Html occlude position={[1.5, -8.5, 1.5]}>
              <div className="skills" >
                <div className="label__name">実務経験があるもののみ</div>
                <div className="label__price">Frontend</div>
                <div className="label__name">
                  <ul>
                    <li>React</li>
                    <li>Vue.js</li>
                    <li>TypeScript / JavaScript</li>
                  </ul>
                </div>
                <div className="label__price">Backend</div>
                <div className="label__name">
                  <ul>
                    <li>PHP</li>
                    <li>Java</li>
                    <li>Dart</li>
                    <li>Rust</li>
                    <li>Node.js</li>
                    <li>Ruby</li>
                  </ul>
                </div>
                
              </div>
              
            </Html>

          </group>
          
          {/* PROJECTS */}
          <group position-y={SECTIONS_DISTANCE}>

          <Sparkles
              size={ 4 }
              scale={ [ 14, 2, 4 ] }
              position-y={ 0.5 }
              speed={ 0.2 }
              color={ 'gold' }
              count={ 20 }
            />

            <ApiConfiguration scale={[0.35,0.35,0.35]} position={[-1.5, -13, 1.5]}/>

            <Html occlude position={[8.0, -90.0, 1.5]}>
              <div className="skills" >
                <div className="label__name">一部</div>
                <div className="label__price">ECサイト</div>
                <div className="label__name">
                  <a href="https://tokyoworkswd.com" target="_blank">東京ワークス</a>
                </div>
                <div className="label__price">スマホアプリ</div>
                <div className="label__name">
                  <a href="https://japanavatarguide.com/" target="_blank">Japan Avator Guide</a>
                </div>
                
              </div>
              
            </Html>


          </group>

          {/* LICENSE */}
          <group position-y={-2 * SECTIONS_DISTANCE}>


            <PictureFrame scale={0.35} 
              // position={[-0.5, -3, 1.5]} 
              // rotation={[0.01, Math.PI*0.08, 1.5]}
              position-x={-1.9}
              position-y={-4}
              position-z={0.5}
              rotation-y={Math.PI + 0.2}
              rotation-z={0.15}
            />
            
            <PictureLicense 
              scale={1.3} 
              position-x={-2.06}
              position-y={-2.85}
              position-z={1}
              rotation-x={-0.28}
              rotation-y={-1.2}
              rotation-z={0.09}

              // imageUrl="https://picsum.photos/id/237/200/300"
              pictureIndex={licenseIndex}

            />
  
  
            {/* <Html occlude position={[140, -4000, 3.5]}> */}
            <Html occlude position={[12.0, -100, 20]}>
            
              <div className="skills" >
                <div className="label__price">資格</div>
                <div className="label__name">
                  <ul>
                    <li onClick={() => setLicenseIndex(0)}>データベーススペシャリスト</li>
                    <li onClick={() => setLicenseIndex(1)}>ネットワークスペシャリスト</li>
                    <li onClick={() => setLicenseIndex(2)}>プロジェクトマネージャ</li>
                    <li onClick={() => setLicenseIndex(3)}>日商簿記 2級</li>
                    <li onClick={() => setLicenseIndex(4)}>AWS CLF</li>
                  </ul>
                </div>
              </div>
              
            </Html>

          </group>
          {/* CONTACT */}
          <group position-y={-3 * SECTIONS_DISTANCE}>

            {/* <SectionTitle position-x={0.5}>CONTACT</SectionTitle> */}

            {/* <License scale={[0.35,0.35,0.35]} position={[1.0, 1.0, 1.5]}/> */}

            {/* <Html occlude position={[0, 0, 0]}>
              <div className="label" >
                <div className="label__price">３</div>
                <div className="label__name">🐈</div>
              </div>
            </Html> */}
            <UserLogin scale={[0.35,0.35,0.35]} position={[0.35, -4.5, 1.5]}/>      


           

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
