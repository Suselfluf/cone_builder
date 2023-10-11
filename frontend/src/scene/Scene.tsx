import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Side from "./Side";
import Bottom from "./Bottom";

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
      {props.coords.map(
        (
          trian: any,
          index: number // working
        ) => (
          <>
            <Side
              scene={scene}
              color="red"
              coords={[
                0, // x
                0, // y
                props.height, // z  A
                trian[0][0], // P
                trian[0][1],
                0, // vertex 2
                trian[1][0], // P(i)
                trian[1][1],
                0, // vertex 3
              ]}
              renderer={renderer}
              camera={camera}
            ></Side>
            <Side
              scene={scene}
              color="red"
              coords={[
                0, // x
                0, // y
                props.height, // z  A
                trian[2][0], // P
                trian[2][1],
                0, // vertex 2
                trian[1][0], // P(i)
                trian[1][1],
                0, // vertex 3
              ]}
              renderer={renderer}
              camera={camera}
            ></Side>
          </>
        )
      )}
      <Bottom
        segments={props.segments}
        scene={scene}
        radius={props.radius}
      ></Bottom>
      ;
    </>
  );
}
