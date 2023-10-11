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
  const edges = new THREE.EdgesGeometry(geometry2);
  const line = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0xffffff })
  );
  const mesh2 = new THREE.Mesh(geometry2, material2);

  props.scene.add(mesh2);
  props.scene.add(line);

  return <></>;
}
