import * as THREE from "three";
import grid from "./objects/grid";
import camera from "./objects/camera";
import scene from "./objects/scene";
import sun from "./objects/sun";
import fog from "./objects/fog";
import bloomPass from "./effects/bloomPass";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(grid);
scene.add(sun);

scene.fog = fog;

const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);

composer.addPass(renderPass);
composer.addPass(bloomPass);

renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 1.2;

function render() {
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
