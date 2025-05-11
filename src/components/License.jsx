import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Plane } from '@react-three/drei';

export const License = (props) => {
  const texture = useLoader(TextureLoader, '/assets/images/DB_trim.png');
  
  return (
  <Plane args={[1, 1]}>
    <meshBasicMaterial attach="material" map={texture} />
  </Plane>
  );

};