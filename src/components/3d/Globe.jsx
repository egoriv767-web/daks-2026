import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Globe = () => {
    const groupRef = useRef();
    const [hovered, setHover] = useState(false);

    // Auto-rotation and smooth mouse interaction
    useFrame((state) => {
        if (groupRef.current) {
            // Basic auto rotation
            groupRef.current.rotation.y += 0.001;

            // Mouse interaction (parallax effect)
            const { mouse } = state;
            const targetX = mouse.y * 0.2;
            const targetY = mouse.x * 0.2;

            groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
            groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Wireframe Sphere */}
            <mesh>
                <icosahedronGeometry args={[4, 2]} />
                <meshBasicMaterial
                    color="#1e293b"
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </mesh>

            {/* Vostochny Marker */}
            <mesh position={[2.5, 2.5, 2]}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color="#FF3366" />
            </mesh>

            {/* Atmosphere Glow (Optional, simple implementation) */}
            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[4, 32, 32]} />
                <meshBasicMaterial color="#00F0FF" transparent opacity={0.02} side={THREE.BackSide} />
            </mesh>
        </group>
    );
};

export default Globe;
