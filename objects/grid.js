import * as THREE from "three";

const size = 90000;
const divs = 20000;

const color = new THREE.Color(0xfd3dff);

const grid = new THREE.GridHelper(size, divs, color, color);

grid.name = "vaporwave_grid"

setInterval(() => {
  grid.position.x -= .02;
}, 1);

export default grid;
