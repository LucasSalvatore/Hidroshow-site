import { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";

// One-accent palette: a cyan/teal monochrome ramp (deep → bright Tap) so the
// four size tiers read as a single accent with depth, never a rainbow.
const TAP_RAMP = ["hsl(198, 42%, 42%)", "hsl(194, 56%, 47%)", "hsl(192, 66%, 52%)", "hsl(190, 72%, 60%)"];
const GRID_MAIN = "hsl(192, 60%, 40%)";
const GRID_SUB = "hsl(198, 30%, 20%)";
const STAGE_BG = "bg-[hsl(198,45%,9%)]";

function StationModel({ position = [0, 0, 0] as [number, number, number], color = TAP_RAMP[2], scale: modelScale = 1 }) {
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
      <meshStandardMaterial color={color} metalness={0.35} roughness={0.35} />
    </mesh>
  );
}

function ComparisonScene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} color={TAP_RAMP[3]} />
      <group position={[-4.5, 0, 0]}><StationModel color={TAP_RAMP[0]} scale={0.6} /></group>
      <group position={[-1.5, 0, 0]}><StationModel color={TAP_RAMP[1]} scale={0.8} /></group>
      <group position={[1.5, 0, 0]}><StationModel color={TAP_RAMP[2]} scale={1} /></group>
      <group position={[4.5, 0, 0]}><StationModel color={TAP_RAMP[3]} scale={1.25} /></group>
      <OrbitControls enablePan={false} minDistance={4} maxDistance={16} autoRotate autoRotateSpeed={0.5} />
      <gridHelper args={[20, 20, GRID_MAIN, GRID_SUB]} position={[0, -2.8, 0]} />
    </>
  );
}

export default function StationViewer() {
  const venues = [
    { tier: "01", size: "Compact", tank: "200–400 L", capacity: "Up to 5K", stations: "1–2 stations", dims: "620 × 360 × 1100 mm" },
    { tier: "02", size: "Standard", tank: "350 L", capacity: "5K–20K", stations: "3–5 stations", dims: "700 × 410 × 1260 mm" },
    { tier: "03", size: "Pro", tank: "500 L", capacity: "20K–50K", stations: "6–10 stations", dims: "780 × 455 × 1425 mm" },
    { tier: "04", size: "Mega", tank: "750 L", capacity: "50K–80K+", stations: "10–16 stations", dims: "920 × 520 × 1600 mm" },
  ];

  return (
    <div>
      {/* Single detail view */}
      <div className="mb-6">
        <span className="badge-label badge-on-dark mb-4 inline-block">INTERACTIVE · 3D MODEL</span>
        <h3 className="heading-display text-2xl md:text-3xl text-[hsl(var(--reservoir-foreground))]">Explore the station</h3>
        <p className="font-mono-num text-[11px] tracking-[0.18em] uppercase mt-2" style={{ color: "hsl(38 24% 92% / 0.55)" }}>
          Drag to rotate · scroll to zoom
        </p>
      </div>

      <div className={`overflow-hidden border ${STAGE_BG}`} style={{ borderRadius: 3, borderColor: "hsl(var(--tap) / 0.25)", height: 420 }}>
        <Canvas camera={{ position: [5, 3, 5], fov: 45 }} shadows>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <directionalLight position={[-5, 5, -5]} intensity={0.35} color={TAP_RAMP[3]} />
            <Center><StationModel scale={1.2} /></Center>
            <OrbitControls enablePan={false} minDistance={2} maxDistance={10} autoRotate autoRotateSpeed={1} />
            <gridHelper args={[10, 10, GRID_MAIN, GRID_SUB]} position={[0, -1.8, 0]} />
          </Suspense>
        </Canvas>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {[["780", "mm", "Width"], ["455", "mm", "Depth"], ["1425", "mm", "Height"], ["500", "L", "Capacity"]].map(([val, unit, label]) => (
          <div key={label} className="card-dark p-4" style={{ borderRadius: 3 }}>
            <div className="flex items-baseline gap-1">
              <span className="font-mono-num tabular-nums text-2xl md:text-3xl font-semibold text-[hsl(var(--reservoir-foreground))]">{val}</span>
              <span className="font-mono-num text-xs text-[hsl(var(--tap))]">{unit}</span>
            </div>
            <p className="font-mono-num text-[10px] uppercase tracking-widest mt-1" style={{ color: "hsl(38 24% 92% / 0.55)" }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Size comparison */}
      <div className="mt-16 mb-6">
        <span className="badge-label badge-on-dark mb-4 inline-block">SCALABLE FLEET</span>
        <h3 className="heading-display text-2xl md:text-3xl text-[hsl(var(--reservoir-foreground))]">Four sizes, shown to scale</h3>
        <p className="font-mono-num text-[11px] tracking-[0.18em] uppercase mt-2" style={{ color: "hsl(38 24% 92% / 0.55)" }}>
          One station type · sized to the venue
        </p>
      </div>

      <div className={`overflow-hidden border ${STAGE_BG}`} style={{ borderRadius: 3, borderColor: "hsl(var(--tap) / 0.25)", height: 450 }}>
        <Canvas camera={{ position: [0, 4, 12], fov: 40 }} shadows>
          <Suspense fallback={null}>
            <ComparisonScene />
          </Suspense>
        </Canvas>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {venues.map(v => (
          <div key={v.size} className="card-dark p-5" style={{ borderRadius: 3 }}>
            <div className="flex items-baseline justify-between mb-3">
              <span className="font-mono-num text-2xl font-semibold text-[hsl(var(--tap))] tabular-nums">{v.tier}</span>
              <span className="font-mono-num text-[10px] uppercase tracking-[0.2em]" style={{ color: "hsl(38 24% 92% / 0.5)" }}>{v.tank}</span>
            </div>
            <h4 className="heading-display text-base text-[hsl(var(--reservoir-foreground))]">{v.size}</h4>
            <div className="gauge-ticks gauge-ticks-on-dark my-3" />
            <p className="font-mono-num text-[11px] tracking-[0.12em]" style={{ color: "hsl(38 24% 92% / 0.7)" }}>{v.capacity} attendees</p>
            <p className="font-mono-num text-[11px] tracking-[0.12em]" style={{ color: "hsl(38 24% 92% / 0.7)" }}>{v.stations}</p>
            <p className="font-mono-num text-[10px] tracking-[0.1em] mt-2" style={{ color: "hsl(38 24% 92% / 0.45)" }}>{v.dims}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
