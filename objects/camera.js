import * as THREE from "three";

const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  1,
  500
);

camera.position.set(-90, 3, 0);
camera.lookAt(0, 1, 0);

export default camera;
