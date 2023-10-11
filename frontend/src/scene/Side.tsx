import React, { useEffect } from "react";
import * as THREE from "three";
export default function Side(props: any) {
  let vertices2 = new Float32Array(props.coords);

  const geometry2 = new THREE.BufferGeometry();
  geometry2.setAttribute("position", new THREE.BufferAttribute(vertices2, 3));
  const material2 = new THREE.MeshBasicMaterial({
    color: props.color,
    side: THREE.DoubleSide,
  });
  const mesh2 = new THREE.Mesh(geometry2, material2);

  props.scene.add(mesh2);

  return <></>;
}
