import * as THREE from "three";
import grid from "./objects/grid";
import camera from "./objects/camera";
import scene from "./objects/scene";
import sun from "./objects/sun";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(grid);
scene.add(sun);

function render() {
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

animate();
