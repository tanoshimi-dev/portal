import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";

import { Suspense } from "react";
import { useProgress } from "@react-three/drei";

import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { color } from "three/examples/jsm/nodes/Nodes.js";

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
      {/* <LoadingScreen /> */}
      <Canvas camera={{ position: [.125, 4.25, 4.25], fov: 40 }} style={{backgroundColor: '#f0fff0'}} >
        <ScrollControls pages={5} >
          <OrbitControls 
            maxPolarAngle={Math.PI / 2} // Prevent the camera from going below the ground
            minPolarAngle={Math.PI / 3} // Prevent the camera from going too high
            maxAzimuthAngle={Math.PI / 4} // Limit left/right rotation
            minAzimuthAngle={-Math.PI / 4} // Limit left/right rotation
            maxDistance={10} // Limit how far out the camera can zoom
            minDistance={2} // Limit how close the camera can zoom
          />
          <Experience />
        </ScrollControls>
        <ambientLight intensity={1} />
        <Environment preset="sunset" />



      
      </Canvas>
      <Menu />
      <Footer />
    </>
  );
}

export default App;
