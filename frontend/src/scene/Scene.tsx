import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default function Scene(props: any) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();

  const controls = new OrbitControls(camera, renderer.domElement);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let vertices = new Float32Array([
    -1.0,
    -1.0,
    1.0, // vertex 1
    1.0,
    -1.0,
    1.0, // vertex 2
    1.0,
    1.0,
    1.0, // vertex 3
  ]);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  const material = new THREE.MeshBasicMaterial({ color: "red" });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  let vertices2 = new Float32Array([
    -1.0,
    -1.0,
    3.0, // vertex 1
    1.0,
    -1.0,
    1.0, // vertex 2
    1.0,
    1.0,
    1.0, // vertex 3
  ]);

  const geometry2 = new THREE.BufferGeometry();
  geometry2.setAttribute("position", new THREE.BufferAttribute(vertices2, 3));
  const material2 = new THREE.MeshBasicMaterial({ color: "green" });
  const mesh2 = new THREE.Mesh(geometry2, material2);
  scene.add(mesh2);

  camera.position.z = 5;
  controls.update();
  renderer.render(scene, camera);

  function animate() {
    requestAnimationFrame(animate);

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    renderer.render(scene, camera);
  }
  animate();

  return <div>index</div>;
}
