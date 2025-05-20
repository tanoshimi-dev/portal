import { Text3D } from "@react-three/drei";

export const SectionTitle = ({ children, ...props }) => {
  return (
    <Text3D font={"assets/RocknRoll_One/RocknRollOne_Regular.json"} size={0.3} {...props}>
      {children}
      <meshStandardMaterial color="silver" />
    </Text3D>
  );
};