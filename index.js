import * as THREE from "three";
import grid from "./objects/grid";
import camera from "./objects/camera";
import scene from "./objects/scene";
import sun from "./objects/sun";
import fog from "./objects/fog";
import bloomPass from "./effects/bloomPass";
import rgbShiftPass from "./effects/rgbShiftPass";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const grid2 = grid.clone();

scene.add(grid);
scene.add(grid2);
scene.add(sun);

scene.fog = fog;

const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);

composer.addPass(renderPass);
composer.addPass(rgbShiftPass);
composer.addPass(bloomPass);

renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 1.2;

const clock = new THREE.Clock();

function render() {
  const elapsedTime = clock.getElapsedTime();

  grid.position.x = -((elapsedTime * 9.0) % 90) - 40;
  grid2.position.x = -((elapsedTime * 9.0) % 90) + 410;

  composer.render();
  requestAnimationFrame(render);
}

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  composer.setSize(width, height);
});

render();
