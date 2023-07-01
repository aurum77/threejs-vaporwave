import * as THREE from "three";

const geometry = new THREE.SphereGeometry(15, 64, 64);
const material = new THREE.MeshBasicMaterial({ color: 0xffd34e });
const sun = new THREE.Mesh(geometry, material);

sun.position.x = 10;
sun.position.y = 30;

export default sun;
