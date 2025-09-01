import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 2]} />
      <Sphere args={[1, 100, 200]} scale={2.0}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.5}
          speed={1.5}
        />
      </Sphere>
    </Canvas>
  );
};

export default AnimatedSphere;