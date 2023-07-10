import * as THREE from "three";

const camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  1,
  500
);

camera.position.set(-90, 4.3, 0);
camera.lookAt(0, 1, 0);

camera.name = "vaporwave_camera";

export default camera;
