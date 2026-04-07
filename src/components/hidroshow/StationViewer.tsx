import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, useGLTF } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

function StationModel() {
  const geometry = useLoader(STLLoader, "/models/station.stl");
  const meshRef = useRef<THREE.Mesh>(null);

  geometry.computeVertexNormals();
  geometry.center();

  // Scale to fit nicely
  const box = new THREE.Box3().setFromBufferAttribute(geometry.attributes.position as THREE.BufferAttribute);
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = 3 / maxDim;

  return (
    <Center>
      <mesh ref={meshRef} geometry={geometry} scale={[scale, scale, scale]} castShadow receiveShadow>
        <meshStandardMaterial color="hsl(217, 91%, 60%)" metalness={0.3} roughness={0.4} />
      </mesh>
    </Center>
  );
}

export default function StationViewer() {
  const venues = [
    { icon: "🎪", size: "Small Venue", capacity: "Up to 5K", stations: "1–2 Stations", liters: "500–1,000L" },
    { icon: "🎵", size: "Medium Venue", capacity: "5K–30K", stations: "4–6 Stations", liters: "2,000–3,000L" },
    { icon: "🏟️", size: "Large Venue", capacity: "30K–80K+", stations: "8–12 Stations", liters: "4,000–6,000L" },
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-8">
        <span className="badge-label mb-4 inline-block">3D STATION MODEL</span>
        <h3 className="heading-section text-foreground text-2xl md:text-3xl">Explore Our Station</h3>
        <p className="text-muted-foreground text-sm mt-2">Drag to rotate • Scroll to zoom</p>
      </div>

      <div className="rounded-3xl overflow-hidden border border-border shadow-lg bg-gradient-to-b from-secondary to-background" style={{ height: 400 }}>
        <Canvas camera={{ position: [5, 3, 5], fov: 45 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <directionalLight position={[-5, 5, -5]} intensity={0.3} />
          <Suspense fallback={null}>
            <StationModel />
          </Suspense>
          <OrbitControls enablePan={false} minDistance={2} maxDistance={10} autoRotate autoRotateSpeed={1} />
          <gridHelper args={[10, 10, "hsl(217,91%,60%)", "hsl(214,32%,91%)"]} position={[0, -1.5, 0]} />
        </Canvas>
      </div>

      {/* Scalable venue cards */}
      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        {venues.map((v) => (
          <div key={v.size} className="p-5 rounded-2xl bg-background shadow-sm border border-border card-hover text-center">
            <span className="text-3xl">{v.icon}</span>
            <h4 className="font-display font-bold text-foreground text-sm mt-2">{v.size}</h4>
            <p className="text-muted-foreground text-xs mt-1">{v.capacity} attendees</p>
            <div className="mt-3 flex justify-center gap-3">
              <span className="px-3 py-1 rounded-full bg-secondary text-primary font-display font-bold text-xs">{v.stations}</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-primary font-display font-bold text-xs">{v.liters}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
