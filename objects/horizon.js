import * as THREE from "three";

const geometry = new THREE.BoxGeometry(5, 0.7, 2000);
const material = new THREE.MeshBasicMaterial({
  color: 0x2aeaeb,
  side: THREE.DoubleSide,
});

const horizon = new THREE.Mesh(geometry, material);

horizon.name = "vaporwave_horizon";

horizon.position.x = 75
horizon.position.y = 2

export default horizon;
