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
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  // update display width and height
  let width = window.innerWidth;
  let height = window.innerHeight;
  // update camera aspect
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  // update renderer
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);
});

render();
