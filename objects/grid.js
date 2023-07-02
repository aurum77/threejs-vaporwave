import * as THREE from "three";

const size = 900;
const divs = 200;

const color = new THREE.Color(0xfd3dff);

const grid = new THREE.GridHelper(size, divs, color, color);

grid.name = "vaporwave_grid";

export default grid;
