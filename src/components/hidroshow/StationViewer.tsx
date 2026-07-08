import { Suspense, useRef, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";
import { Store, Music, Trophy, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function StationModel({ position = [0, 0, 0] as [number, number, number], color = "hsl(217, 91%, 60%)", scale: modelScale = 1 }) {
  const geometry = useLoader(STLLoader, "/models/station.stl");

  const clonedGeometry = useMemo(() => {
    const g = geometry.clone();
    g.computeVertexNormals();
    g.center();
    return g;
  }, [geometry]);

  const baseScale = useMemo(() => {
    const box = new THREE.Box3().setFromBufferAttribute(clonedGeometry.attributes.position as THREE.BufferAttribute);
    const size = box.getSize(new THREE.Vector3());
    return 2 / Math.max(size.x, size.y, size.z);
  }, [clonedGeometry]);

  const s = baseScale * modelScale;

  return (
    <mesh
      geometry={clonedGeometry}
      position={position}
      scale={[s, s, s]}
      rotation={[-Math.PI / 2, 0, 0]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
    </mesh>
  );
}

function ComparisonScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />
      <group position={[-4.5, 0, 0]}><StationModel color="hsl(152, 69%, 45%)" scale={0.6} /></group>
      <group position={[-1.5, 0, 0]}><StationModel color="hsl(189, 94%, 43%)" scale={0.8} /></group>
      <group position={[1.5, 0, 0]}><StationModel color="hsl(217, 91%, 60%)" scale={1} /></group>
      <group position={[4.5, 0, 0]}><StationModel color="hsl(263, 70%, 50%)" scale={1.25} /></group>
      <OrbitControls enablePan={false} minDistance={4} maxDistance={16} autoRotate autoRotateSpeed={0.5} />
      <gridHelper args={[20, 20, "hsl(217,91%,60%)", "hsl(214,32%,91%)"]} position={[0, -2.8, 0]} />
    </>
  );
}

export default function StationViewer() {
  const venues: {
    Icon: LucideIcon;
    size: string;
    capacity: string;
    stations: string;
    liters: string;
    color: string;
    dims: string;
  }[] = [
    { Icon: Store, size: "Compact 200L", capacity: "Up to 5K", stations: "1–2 Stations", liters: "200–400L", color: "hsl(152, 69%, 45%)", dims: "620×360×1100mm" },
    { Icon: Music, size: "Standard 350L", capacity: "5K–20K", stations: "3–5 Stations", liters: "1,050–1,750L", color: "hsl(189, 94%, 43%)", dims: "700×410×1260mm" },
    { Icon: Trophy, size: "Pro 500L", capacity: "20K–50K", stations: "6–10 Stations", liters: "3,000–5,000L", color: "hsl(217, 91%, 60%)", dims: "780×455×1425mm" },
    { Icon: Globe, size: "Mega 750L", capacity: "50K–80K+", stations: "10–16 Stations", liters: "7,500–12,000L", color: "hsl(263, 70%, 50%)", dims: "920×520×1600mm" },
  ];

  return (
    <div className="mt-20">
      {/* Single detail view */}
      <div className="text-center mb-8">
        <span className="badge-label mb-4 inline-block">3D STATION MODEL</span>
        <h3 className="heading-section text-foreground text-2xl md:text-3xl">Explore Our Station</h3>
        <p className="text-muted-foreground text-sm mt-2">Drag to rotate • Scroll to zoom</p>
      </div>

      <div className="rounded-3xl overflow-hidden border border-border shadow-lg bg-gradient-to-b from-secondary to-background" style={{ height: 400 }}>
        <Canvas camera={{ position: [5, 3, 5], fov: 45 }} shadows>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <directionalLight position={[-5, 5, -5]} intensity={0.3} />
            <Center><StationModel scale={1.2} /></Center>
            <OrbitControls enablePan={false} minDistance={2} maxDistance={10} autoRotate autoRotateSpeed={1} />
            <gridHelper args={[10, 10, "hsl(217,91%,60%)", "hsl(214,32%,91%)"]} position={[0, -1.8, 0]} />
          </Suspense>
        </Canvas>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-6">
        {[["780mm", "Width"], ["455mm", "Depth"], ["1425mm", "Height"], ["500L", "Capacity"]].map(([val, label]) => (
          <div key={label} className="text-center p-3 rounded-xl bg-background shadow-sm border border-border">
            <p className="stat-number text-lg">{val}</p>
            <p className="text-muted-foreground text-xs">{label}</p>
          </div>
        ))}
      </div>

      {/* Size comparison */}
      <div className="mt-16 text-center mb-8">
        <span className="badge-label mb-4 inline-block">SCALABLE MODELS</span>
        <h3 className="heading-section text-foreground text-2xl md:text-3xl">Size-to-Size Comparison</h3>
        <p className="text-muted-foreground text-sm mt-2">Four station sizes for every venue type — shown to scale</p>
      </div>

      <div className="rounded-3xl overflow-hidden border border-border shadow-lg bg-gradient-to-b from-secondary to-background" style={{ height: 450 }}>
        <Canvas camera={{ position: [0, 4, 12], fov: 40 }} shadows>
          <Suspense fallback={null}>
            <ComparisonScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Venue cards with color-coded borders matching 3D models */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {venues.map((v) => (
          <div key={v.size} className="p-5 rounded-2xl bg-background shadow-sm border-2 card-hover text-center" style={{ borderColor: v.color + "40" }}>
            <span className="text-3xl">{v.icon}</span>
            <h4 className="font-display font-bold text-sm mt-2" style={{ color: v.color }}>{v.size}</h4>
            <p className="text-muted-foreground text-[10px] mt-0.5">{v.dims}</p>
            <p className="text-muted-foreground text-xs mt-1">{v.capacity}</p>
            <div className="mt-3 space-y-1">
              <span className="block px-3 py-1 rounded-full text-xs font-display font-bold" style={{ background: v.color + "15", color: v.color }}>{v.stations}</span>
              <span className="block px-3 py-1 rounded-full text-xs font-display font-bold" style={{ background: v.color + "15", color: v.color }}>{v.liters}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
