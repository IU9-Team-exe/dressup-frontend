"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ARViewer() {
    return (
        <div style={{ width: "100%", height: "500px" }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 5, 5]} />
                <OrbitControls />
            </Canvas>
        </div>
    );
}
