import { useRef, useEffect } from 'react'

import { useAnimations, useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
   const birdRef = useRef();
   const { scene, animations} = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
      actions['Take 001'].play();

    }, []);


    useFrame(({ clock, camera }) => {
      //Update the Y position of the bird to make it fly up and down
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      //Make the bird face the camera when it comes within a certain distance
      if(birdRef.current.position.x > camera.position.x + 10) {
        //Change bird direction to backward and roatate it 180 degrees on the Y axis
        birdRef.current.rotation.y = Math.PI;
      } else if(birdRef.current.position.x < camera.position.x - 10) {
        //Change bird direction to forward and rotate it back to 0 degrees on the Y axis
        birdRef.current.rotation.y = 0;
      }

      //Update the X and Z position of the bird to make it fly forward and backward
      if(birdRef.current.rotation.y === 0) {
        //Move forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else{
        //Move backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }

    })



  return (
   <mesh 
   position={[-5, 2, 1]} 
   scale={[0.003, 0.003, 0.003]}
   ref={birdRef}>
    <primitive object={scene} />
   </mesh>
  )
}

export default Bird