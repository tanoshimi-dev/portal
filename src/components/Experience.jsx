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

import { useMobile } from "../hooks/useMobile";



const SECTIONS_DISTANCE = 5;

export const Experience = () => {
  
  const [section, setSection] = useState(config.sections[0]);
  const sceneContainer = useRef();

  const scrollData = useScroll();  
  const { isMobile } = useMobile();

  // let SECTIONS_DISTANCE = isMobile ? 12 : 5;
  // let SECTIONS_DISTANCE = 5;

  const [defaultRot, setDefaultRot] = useState(0);
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
      

      // console.log(`sectionIndex = ${sectionIndex}`);
      // console.log(`section.length = ${config.sections.length}`);
      // console.log(`scrollData.el.scrollHeight = ${scrollData.el.scrollHeight}`);
      // console.log(`scrollData.el.clientHeight = ${scrollData.el.clientHeight}`);      
      // console.log(`result = ${
      //   (sectionIndex / (config.sections.length - 1)) *
      //       (scrollData.el.scrollHeight - scrollData.el.clientHeight)
      // }`);

      //setSectionIndex(sectionIndex);
      setDefaultRot(sectionIndex);

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

      <GuitarMan 
        scale={[0.35,0.35,0.35]}
        // rotation-x={0 - (defaultRot * 0.1)}
        rotation-x={0}
        rotation-y={0}
        rotation-z={0}      
      />

      <Text 
        font="/assets/RocknRoll_One/RocknRollOne-Regular.ttf"
        scale={isMobile? [-0.25, 0.25, 0.25] : [-0.5, 0.5, 0.5]} 
        position={[0.015, 0.15, 0.5]}
        // rotation={[0.0, Math.PI, 270]}
        rotation-x={0}
        rotation-y={Math.PI}
        rotation-z={270}  
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
              size={ isMobile ? 5 : 4 }
              scale={ isMobile ?  [ 6, 4, 4 ] : [ 14, 2, 4 ] }
              position-y={ isMobile ? -0.7 : 0.5 }
              speed={ isMobile ? 0.5 : 0.2 }
              color={ 'gold' }
              count={ isMobile ? 15 : 20 }
            />
          </group>

          {/* SKILLS */}
          <group >

            {!isMobile &&
              <WebConfiguration 
                scale={0.35} 
                position-x={-1.9}
                position-y={-5.5}
                position-z={0.45}
                rotation-x={-0.4}
                rotation-y={Math.PI - 2.2}
                rotation-z={0.15}
              />
            }

            <Html occlude 
              position={isMobile? [-0.95, -9, 2] : [1, -10, 0.5]}
            >

              <div className="career career--normalsize1" >
                <div className="career__subtitle">実務経験</div>
                <div className="career__label">Frontend</div>
                <div className="career__list">
                  <ul>
                    <li>TypeScript, JavaScript</li>
                    <li>React</li>
                    <li>Vue.js</li>
                    <li>Dart</li>
                  </ul>
                </div>
                <div className="career__label">Backend</div>
                <div className="career__list">
                  <ul>
                    <li>PHP</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Node.js</li>
                    <li>Rust</li>
                  </ul>
                </div>
                <div className="career__label">Infrastructure, Tools, Web, etc</div>
                
              </div>
              
            </Html>

          </group>
          
          {/* PROJECTS */}
          <group position-y={SECTIONS_DISTANCE}>

            {!isMobile &&
              <ApiConfiguration 
                scale={0.35} 
                position-x={-1.9}
                position-y={-14.75}
                position-z={0.5}
                rotation-x={-0.6}
                rotation-y={Math.PI - 2.2}
                rotation-z={0.15}
              />
            }

            <Html occlude 
              position={isMobile? [-3.35, -55, 4] : [6, -90, 0.6]}
            >
              
              <div className="career career--bigsize" >
                
                <div className="career__subtitle">受託開発の一例です</div>
                
                <div className="career__label">ECサイト</div>
                <div className="career__link">
                  <a href="https://tokyoworkswd.com" target="_blank" rel="noopener" >卸売会社</a>
                </div>
                <div className="career__label">Webアプリ（劇場内で使用したシステム）</div>
                <div className="career__link">
                  <a href="https://prtimes.jp/main/html/rd/p/000001714.000013972.html" target="_blank" rel="noopener" >イベント会社</a>
                </div>
                <div className="career__label">スマホアプリ</div>
                <div className="career__link">
                  <a href="https://japanavatarguide.com/" target="_blank" rel="noopener" >インバウンド観光旅行会社</a>
                </div>
                <div className="career__label">LP</div>
                <div className="career__link">
                  <a href="https://bigangel.jp/" target="_blank" rel="noopener" >某アイドル</a>
                </div>
                <div className="career__label">WordPress</div>
                <div className="career__link">
                  <a href="https://studio-nagi.com/" target="_blank" rel="noopener" >レンタルスペース業者</a>
                </div>
                
                <div className="career__subtitle">個人プロジェクトの一例です</div>

                <div className="career__label">技術テキスト（作成中）</div>
                <div className="career__link">
                  <a href="https://textbook.hannari.dev" target="_blank" rel="noopener" >textbook</a>
                </div>

              </div>
              
            </Html>

          </group>

          {/* LICENSE */}
          <group position-y={-2 * SECTIONS_DISTANCE}>

            <PictureFrame scale={isMobile ? 0.3 : 0.35} 
              // position={[-0.5, -3, 1.5]} 
              // rotation={[0.01, Math.PI*0.08, 1.5]}
              position-x={isMobile ? 0.37 : -1.9}
              position-y={isMobile ? -4.8 : -4}
              position-z={isMobile ? 0.625 : 0.5}
              rotation-x={isMobile ? 0.02 : 0}
              rotation-y={isMobile ? (Math.PI - 0.21) : (Math.PI + 0.2)}
              rotation-z={isMobile ? 0.03 : 0.15}
            />
            
            <PictureLicense 
              scale={isMobile ? 1.1 : 1.3} 
              position-x={isMobile ? -0.03 : -2.06}
              position-y={isMobile ? -3.85 : -2.85}
              position-z={isMobile ? 0.9 : 1}
              rotation-x={isMobile ? -0.31 : -0.28}
              rotation-y={isMobile ? -1.6 : -1.2}
              rotation-z={isMobile ? 0.02 :0.09}
              // imageUrl="https://picsum.photos/id/237/200/300"
              pictureIndex={licenseIndex}
            />
  
            <Html 
              occlude position={isMobile ? [-3.5, -70, 15] : [5, -100, 20.25]}
            >
            
              <div className="career career--normalsize2" >
                <div className="career__subtitle">保有資格</div>

                <div className="career__label">IPA 情報処理技術者試験</div>
                <div className="career__link">
                  <a href="#" onClick={() => setLicenseIndex(0)}>データベーススペシャリスト</a>
                </div>
                <div className="career__link">
                  <a href="#" onClick={() => setLicenseIndex(1)}>ネットワークスペシャリスト</a>
                </div>
                <div className="career__link">
                  <a href="#" onClick={() => setLicenseIndex(2)}>プロジェクトマネージャ</a>
                </div>

                <div className="career__label">商工会議所の検定試験</div>
                <div className="career__link">
                  <a href="#" onClick={() => setLicenseIndex(3)}>日商簿記検定 2級</a>
                </div>
 
                <div className="career__label">その他</div>
                <div className="career__link">
                  <a href="#" onClick={() => setLicenseIndex(4)}>AWS CLF</a>
                </div>

              </div>
              
            </Html>

          </group>

          {/* CONTACT */}
          <group position-y={-3 * SECTIONS_DISTANCE}>

            {!isMobile &&
              <UserLogin scale={0.35} 
                position-x={-1.9}
                position-y={-2.3}
                position-z={0.5}
                rotation-y={Math.PI - 2.2}
                rotation-z={0.15}
              />
            }

            <Html 
              occlude position={isMobile ? [-3, -90, 28] : [7, -155, 43]}
            >
              
              <div className="career career--smallsize" >
                <div className="career__subtitle">ご連絡・ご依頼お待ちしています！</div>
                <div className="career__label">メール</div>
                <div className="career__link">
                  <a href="mailto:mtkg@tanoshimi.dev?subject=システム依頼" target="_blank" rel="noopener" >mtkg@tanoshimi.dev</a>
                </div>
                <div className="career__label">ココナラ経由</div>
                <div className="career__link">
                  <a href="https://coconala.com/users/2393040" target="_blank" rel="noopener" >ココナラからご依頼</a>
                </div>                
              </div>
              
            </Html>


          </group>

        </group>


      </Scroll>

      {/* <Html position={[0, 0, 0]} style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <div className="label">
              <div className="career__label">設計</div>
              <div className="career__link">開発</div>
            </div>
          </Html> */}

    </>
  );
};
