import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
// style={{background: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}

export default function HomePage({
  props,
  background,
  logo
}){

  function Circle(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Set up state for the hovered and active state

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += .003))

    console.log(mesh)

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={[1.5, 1.5, 1.5]}>
        <sphereBufferGeometry attach="geometry" args={[1.3, 20, 20]} />
        <meshBasicMaterial attach="material" color="#fff" wireframe />
      </mesh>
    )
  }

  return(
    <>
      <div className="home z-10">
        {/*<h1>Fragmiint</h1>*/}
        <img src={logo} alt="Fragmiint" />
        <div className="home-page-animation">
          <Canvas colorManagement>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Circle position={[0, 0, 0]} />
          </Canvas>
        </div>
      </div>
    </>
  )
}
