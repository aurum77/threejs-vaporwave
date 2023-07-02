import * as THREE from "three";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

const rgbShiftPass = new ShaderPass(RGBShiftShader);

rgbShiftPass.uniforms["amount"].value = 0.001;

export default rgbShiftPass;
