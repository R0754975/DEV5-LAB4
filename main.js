import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

// allow orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// render the scene
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// lighting
const light = new THREE.AmbientLight( 0x505050, 5 ); // soft white light
scene.add( light );

const light1 = new THREE.DirectionalLight( 0xbbbbff, 1 );
light1.position.set( 3, 3, 1 );
scene.add( light1 );

// helpers
const gridHelper = new THREE.GridHelper( 50, 50 );
scene.add( gridHelper ); 

const helper = new THREE.DirectionalLightHelper( light1 , 2);
scene.add( helper );


// basic ground of the scene
const geometry = new THREE.PlaneGeometry( 20, 20 );
			const material = new THREE.MeshLambertMaterial( { color: 0x00FF00 } );
			const plane = new THREE.Mesh( geometry, material );
      // use doubleside otherwise only one side will be rendered
      plane.material.side = THREE.DoubleSide;
      plane.rotation.x = Math.PI / 2;
      plane.position.y = 0;
			scene.add( plane );
      camera.position.z = 5;
      camera.position.y = 20;
      camera.lookAt(plane.position);


// start of house

// back wall
const backWallGeometry = new THREE.BoxGeometry( 5, 4, 0.2);
const backWallMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const backWall = new THREE.Mesh( backWallGeometry, backWallMaterial );
backWall.position.z = -5;
backWall.position.y = 2.01;
scene.add( backWall );

// left wall
const leftWallGeometry = new THREE.BoxGeometry( 0.2, 4, 5);
const leftWallMaterial = new THREE.MeshLambertMaterial( { color: 0xA020F0 } );
const leftWall = new THREE.Mesh( leftWallGeometry, leftWallMaterial );
leftWall.position.x = -2.5;
leftWall.position.y = 2.01;
leftWall.position.z = -2.6;
scene.add( leftWall );

// right wall
const rightWallGeometry = new THREE.BoxGeometry( 0.2, 4, 5);
const rightWallMaterial = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
const rightWall = new THREE.Mesh( rightWallGeometry, rightWallMaterial );
rightWall.position.x = 2.5;
rightWall.position.y = 2.01;
rightWall.position.z = -2.6;
scene.add( rightWall );

// front wall
const frontWallGeometry = new THREE.BoxGeometry( 5, 4, 0.2);
const frontWallMaterial = new THREE.MeshLambertMaterial( { color: 0x0000FF } );
const frontWall = new THREE.Mesh( frontWallGeometry, frontWallMaterial );
frontWall.position.z = -0.2;
frontWall.position.y = 2.01;
scene.add( frontWall );

// roof
const roofGeometry = new THREE.ConeGeometry( 4, 2, 4 );
const roofMaterial = new THREE.MeshLambertMaterial( { color: 0x00FFFF } );
const roof = new THREE.Mesh( roofGeometry, roofMaterial );
roof.position.y = 5;
roof.position.z = -2.6;
roof.rotation.y = 0.8;
scene.add( roof );

// door 
const doorGeometry = new THREE.BoxGeometry( 1, 2, 0.2);
const doorMaterial = new THREE.MeshLambertMaterial( { color: 0x000000 } );
const door = new THREE.Mesh( doorGeometry, doorMaterial );
door.position.z = -0.19;
door.position.y = 1.01;
scene.add( door );

// window for name
const windowGeometry = new THREE.BoxGeometry( 1, 1, 0.2);
const windowMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const textWindow = new THREE.Mesh( windowGeometry, windowMaterial );
textWindow.position.z = -0.19;
textWindow.position.y = 2.8;
scene.add( textWindow );




// animate certain things      
function animate() {
				requestAnimationFrame( animate );


				renderer.render( scene, camera );
};


animate();