import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Globe from './Globe';
import StarField from './StarField';

const Scene = () => {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 75 }}
                dpr={[1, 2]} // Handle high DPI screens
                gl={{ antialias: true, alpha: true }}
            >
                <fog attach="fog" args={['#050B14', 5, 15]} />

                <Suspense fallback={null}>
                    <group>
                        <Globe />
                        <StarField />
                    </group>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;
