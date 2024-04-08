import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'

import CanvasLoader from '../Loader';


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1}
    floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffsetpolygonOffsetFactor={-5}
          flatShading
        />
        
        <Decal //this is for the icon inside the polygons   if you want to change any icon of the ball then go to technologies in idex js and change
          position={[0, 0, 1]} 
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading // this is for mirroring the icons
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return(
    <Canvas
    frameloop = "demand"
    gl = {{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false}
      />
      <Ball imgUrl={icon} />
      </Suspense>  
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas