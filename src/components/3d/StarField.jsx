import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StarField = ({ count = 2000 }) => {
    const mesh = useRef();

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, [count]);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y -= delta * 0.05;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#00F0FF"
                transparent
                opacity={0.6}
                sizeAttenuation={true}
            />
        </points>
    );
};

export default StarField;
