import * as THREE from "three";

const geometry = new THREE.SphereGeometry(12, 128, 128);

const material = new THREE.ShaderMaterial({
  uniforms: {
    color_bottom: {
      value: new THREE.Color(0xf4634a),
    },
    color_top: {
      value: new THREE.Color(0xffd34e),
    },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color_bottom;
    uniform vec3 color_top;
  
    varying vec2 vUv;
    
    void main() {
      
      gl_FragColor = vec4(mix(color_bottom, color_top, vUv.y), 1.0);
    }
  `,
  wireframe: false,
});

const sun = new THREE.Mesh(geometry, material);

sun.position.x = -5;
sun.position.y = 30;

export default sun;
