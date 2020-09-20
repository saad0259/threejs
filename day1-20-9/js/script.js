var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

var scene = new THREE.Scene();

var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

var points = [];
//points.push( new THREE.Vector3( - 10, 5, 0 ) );

points.push( new THREE.Vector3( 2.5, 0, 0 ) );
points.push( new THREE.Vector3( 2.5, 5, 0 ) );
points.push( new THREE.Vector3( - 7.5, 5, 0 ) );
points.push( new THREE.Vector3( -7.5, -5, 0 ) );
points.push( new THREE.Vector3( 2.5, -5, 0 ) );
points.push( new THREE.Vector3( 2.5, -15, 0 ) );
points.push( new THREE.Vector3( -7.5, -15, 0 ) );
points.push( new THREE.Vector3( -7.5, -10, 0 ) );


var geometry = new THREE.BufferGeometry().setFromPoints( points );

var line = new THREE.Line( geometry, material );

scene.add( line );
var animate = function () {
    requestAnimationFrame( animate );


    line.rotation.y += 0.1;
    //line.rotation.x+= 0;

    renderer.render( scene, camera );
};
animate();