import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

// allow orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// render the scene
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// lighting
const light = new THREE.AmbientLight(0x505050, 1.5); // soft white light
scene.add(light);

const light1 = new THREE.DirectionalLight(0xbbbbff, 1);
light1.position.set(6, 6, 1);
scene.add(light1);

// helpers
const gridHelper = new THREE.GridHelper(50, 50);
//scene.add(gridHelper);

const helper = new THREE.DirectionalLightHelper(light1, 2);
//scene.add(helper);


// basic ground of the scene
const grass = new THREE.TextureLoader().load(' /assets/textures/grass.jpg');

const geometry = new THREE.PlaneGeometry(20, 20);
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
material.map = grass;
const plane = new THREE.Mesh(geometry, material);
// use doubleside otherwise only one side will be rendered
plane.material.side = THREE.DoubleSide;
plane.rotation.x = Math.PI / 2;
plane.position.y = 0;
scene.add(plane);
camera.position.z = 5;
camera.position.y = 20;
camera.lookAt(plane.position);


// start of house
const wall = new THREE.TextureLoader().load(' /assets/textures/wall.jpg');


// back wall
const backWallGeometry = new THREE.BoxGeometry(5, 4, 0.2);
const backWallMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
backWallMaterial.map = wall;
const backWall = new THREE.Mesh(backWallGeometry, backWallMaterial);
backWall.position.z = -5;
backWall.position.y = 2.01;
scene.add(backWall);

// left wall
const leftWallGeometry = new THREE.BoxGeometry(0.2, 4, 5);
const leftWallMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
leftWallMaterial.map = wall;
const leftWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial);
leftWall.position.x = -2.5;
leftWall.position.y = 2.01;
leftWall.position.z = -2.6;
scene.add(leftWall);

// right wall
const rightWallGeometry = new THREE.BoxGeometry(0.2, 4, 5);
const rightWallMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
rightWallMaterial.map = wall;
const rightWall = new THREE.Mesh(rightWallGeometry, rightWallMaterial);
rightWall.position.x = 2.5;
rightWall.position.y = 2.01;
rightWall.position.z = -2.6;
scene.add(rightWall);

// front wall
const frontWallGeometry = new THREE.BoxGeometry(5, 4, 0.2);
const frontWallMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
frontWallMaterial.map = wall;
const frontWall = new THREE.Mesh(frontWallGeometry, frontWallMaterial);
frontWall.position.z = -0.2;
frontWall.position.y = 2.01;
scene.add(frontWall);

// roof
const roofTexture = new THREE.TextureLoader().load(' /assets/textures/roof.jpg');
const roofGeometry = new THREE.ConeGeometry(4.5, 2, 4);
const roofMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
roofMaterial.map = roofTexture;
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.position.y = 5;
roof.position.z = -2.6;
roof.rotation.y = 0.8;
scene.add(roof);

// door 
const doorGeometry = new THREE.BoxGeometry(1, 2, 0.2);
const doorMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.z = -0.19;
door.position.y = 1.01;
scene.add(door);

// window for name
const text = new THREE.TextureLoader().load('/assets/textures/NameCard.png');

const windowGeometry = new THREE.BoxGeometry(1, 1, 0.2);
const windowMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
windowMaterial.map = text;
const textWindow = new THREE.Mesh(windowGeometry, windowMaterial);
textWindow.position.z = -0.19;
textWindow.position.y = 2.8;
scene.add(textWindow);

// duck

let duck1, duck2, duck3, duck4, duck5;
const addDuck = (x, z, i) => {
  const gltfLoader = new GLTFLoader();
  gltfLoader.load('/assets/models/duckwithflippers2.gltf', (gltf) => {
    switch (i) {
      case 1:
        duck1 = gltf.scene;
        duck1.position.set(x, 1, z);
        duck1.scale.set(0.15, 0.15, 0.15);
        scene.add(duck1);
        break;
      case 2:
        duck2 = gltf.scene;
        duck2.position.set(x, 1, z);
        duck2.scale.set(0.15, 0.15, 0.15);
        scene.add(duck2);
        break;
      case 3:
        duck3 = gltf.scene;
        duck3.position.set(x, 1, z);
        duck3.scale.set(0.15, 0.15, 0.15);
        scene.add(duck3);
        break;
      case 4:
        duck4 = gltf.scene;
        duck4.position.set(x, 1, z);
        duck4.scale.set(0.15, 0.15, 0.15);
        scene.add(duck4);
        break;
      case 5:
        duck5 = gltf.scene;
        duck5.position.set(x, 1, z);
        duck5.scale.set(0.15, 0.15, 0.15);
        scene.add(duck5);
        break;
    }
    });
};

for (let i = 0; i < 5; i++) {

  let sign = Math.random() < 0.5 ? -1 : 1;
  let x = Math.floor(Math.random() * 10 * sign);
  sign = Math.random() < 0.5 ? -1 : 1;
  let z = Math.floor(Math.random() * 10 * sign);

  addDuck(x, z, i + 1);



}


// animate certain things      
function animate() {
  requestAnimationFrame(animate);
  duck1.rotation.y += 0.1;
  duck2.rotation.y += 0.1;
  duck3.rotation.y += 0.1;
  duck4.rotation.y += 0.1;
  duck5.rotation.y += 0.1;

  renderer.render(scene, camera);
};

console.log(scene);
animate();