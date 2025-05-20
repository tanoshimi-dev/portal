import React, { useState, useEffect } from 'react';
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";

import { Suspense } from "react";
import { useProgress } from "@react-three/drei";

import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { color } from "three/examples/jsm/nodes/Nodes.js";
import { AutoplayButton } from "./components/AutoplayButton";


const CubeLoader = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

const LoadingScreen = () => {

  
  const { progress, active } = useProgress();


  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        {/*         
        <h1 className="loading-screen__title">お待ちください</h1>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
         */}
        <div className="loader"></div>

      </div>
    </div>
  );
};

function App() {
  



  return (
    <>
      <LoadingScreen />

      <Canvas camera={{ position: [.125, 4.25, 4.25], fov: 40 }} style={{backgroundColor: '#f0fff0'}} >
        <ScrollControls pages={5} >
          
          {/* 制限したいが、再度位置を調整する必要がある */}
          <OrbitControls 
            maxPolarAngle={Math.PI / 2} // Prevent the camera from going below the ground
            minPolarAngle={Math.PI / 3} // Prevent the camera from going too high
            maxAzimuthAngle={Math.PI / 4} // Limit left/right rotation
            minAzimuthAngle={-Math.PI / 4} // Limit left/right rotation
            maxDistance={10} // Limit how far out the camera can zoom
            minDistance={2} // Limit how close the camera can zoom
          /> 

          {/* これは、カメラの位置を変更するために使用されます 
          <OrbitControls />
          */}

          <Experience />
        </ScrollControls>
        <ambientLight intensity={1} />
        <Environment preset="sunset" />

      </Canvas>
      <Menu />
      <Footer />

      <AutoplayButton />
    </>
  );
}

export default App;
