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
			const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
			const plane = new THREE.Mesh( geometry, material );
      // use doubleside otherwise only one side will be rendered
      plane.material.side = THREE.DoubleSide;
      plane.rotation.x = Math.PI / 2;
			scene.add( plane );
      camera.position.z = 5;
      camera.position.y = 20;
      camera.lookAt(plane.position);


// animate certain things      
function animate() {
				requestAnimationFrame( animate );


				renderer.render( scene, camera );
};


animate();