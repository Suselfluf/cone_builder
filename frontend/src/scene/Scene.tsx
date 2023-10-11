import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Side from "./Side";

export default function Scene(props: any) {
  const sceneRef = useRef();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  const controls = new OrbitControls(camera, renderer.domElement);

  useEffect(() => {
    return () => {
      renderer.setSize(1000, window.innerHeight - 120);

      if (sceneRef.current) {
        sceneRef.current.appendChild(renderer.domElement);
      }

      // document.body.appendChild(renderer.domElement);

      camera.position.z = 5;
      controls.update();

      const animate = () => {
        requestAnimationFrame(animate);

        // required if controls.enableDamping or controls.autoRotate are set to true
        controls.update();

        renderer.render(scene, camera);
      };
      animate();
    };
  }, []);

  return (
    <>
      <div ref={sceneRef}></div>
      <Side
        scene={scene}
        color="red"
        coords={[
          0, // x
          2, // y
          0, // z vertex 1 vershina
          1.0,
          0,
          0, // vertex 2
          -1.0,
          0,
          0, // vertex 3
        ]}
        renderer={renderer}
        camera={camera}
      ></Side>
      <Side
        scene={scene}
        color="green"
        coords={[
          0, // x
          2, // y
          0, // z vertex 1 vershina
          1.0,
          0,
          0, // vertex 2
          -1.0,
          0,
          -2, // vertex 3
        ]}
        renderer={renderer}
        camera={camera}
      ></Side>
      <Side
        scene={scene}
        color="white"
        coords={[
          0, // x
          2, // y
          0, // z vertex 1 vershina
          -1.0,
          0,
          0, // vertex 2
          -1.0,
          0,
          -2, // vertex 3
        ]}
        renderer={renderer}
        camera={camera}
      ></Side>
      ;
    </>
  );
}
