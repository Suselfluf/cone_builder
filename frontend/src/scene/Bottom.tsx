import React, { useEffect } from "react";
import * as THREE from "three";

export default function Bottom(props: any) {
  const geometry = new THREE.CircleGeometry(props.radius, props.segments);
  //   geometry.rotateX(Math.PI / 2);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide,
  });
  const circle = new THREE.Mesh(geometry, material);

  props.scene.add(circle);

  //   let vertices2 = new Float32Array(props.coords);

  //   const geometry2 = new THREE.BufferGeometry();
  //   geometry2.setAttribute("position", new THREE.BufferAttribute(vertices2, 3));
  //   const material2 = new THREE.MeshBasicMaterial({
  //     color: props.color,
  //     side: THREE.DoubleSide,
  //   });
  //   const mesh2 = new THREE.Mesh(geometry2, material2);

  //   props.scene.add(mesh2);

  return <></>;
}
