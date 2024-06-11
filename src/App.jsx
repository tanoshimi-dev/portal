import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";

import { Suspense } from "react";
import { useProgress } from "@react-three/drei";

import { Menu } from "./components/Menu";

const CubeLoader = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

const LoadingScreen = () => {
  const { progress } = useProgress();

  return (
    <div className="loading-screen">
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">3D Web Agency</h1>
        <p>Loading... ({parseInt(progress)}%)</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ position: [.125, 4.25, 4.25], fov: 40 }}>
        <ScrollControls pages={10} >
          <OrbitControls />
          <Experience />
        </ScrollControls>

          {/*
          { <OrbitControls />
          <Experience /> 
           */}

        <ambientLight intensity={1} />
        <Environment preset="sunset" />
      
      </Canvas>
      <Menu />
    </>
  );
}

export default App;
