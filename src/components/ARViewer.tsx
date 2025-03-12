"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ARViewer() {
    return (
        <div style={{ width: "100%", height: "500px" }}>
            <Canvas>
                {/* Пример базовой сцены */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 5, 5]} />
                <OrbitControls />
                {/* Здесь можно загрузить 3D-модель, например, <Model /> */}
            </Canvas>
        </div>
    );
}
