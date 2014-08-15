console.log(111);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = CreateGeometry();
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

//cube.rotation.y += 0.5;
cube.rotation.x =  -0.1;
cube.rotation.y =  0.8;
cube.rotation.z =  0.7;
var rotation = true;

var render = function () {
	requestAnimationFrame(render);
	if(rotation)
	{

		cube.rotation.x += 0.1;
		cube.rotation.y += 0.1;
	}
	renderer.render(scene, camera);
};

render();

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
	cube.rotation.y += 0.1;
	e.preventDefault();

        // up arrow
    }
    else if (e.keyCode == '40') {
	cube.rotation.y -= 0.1;
	e.preventDefault();

        // down arrow
    }
    else if (e.keyCode == '37') {
	cube.rotation.x += 0.1;
	e.preventDefault();

        // left arrow
    }
    else if (e.keyCode == '39') {
	cube.rotation.x -= 0.1;
	e.preventDefault();

        // right arrow
    }
    else if (e.keyCode == 'Q'.charCodeAt(0)) {
	cube.rotation.z += 0.1;
	e.preventDefault();

        // right arrow
    }
    else if (e.keyCode == 'E'.charCodeAt(0)) {
	cube.rotation.z -= 0.1;
	e.preventDefault();

        // right arrow
    }
    else if (e.keyCode == ' '.charCodeAt(0)) {
	rotation = ! rotation;

        // right arrow
    }
    console.log(cube.rotation)
}




function CreateGeometry()
{
	var horizontalVertices =
		[
		1, 0,
		0, 1,
		1, 2,
		3, 2,
		4, 1,
		3, 0
		]
/*	var horizontalVertices =
		[
		0, 0,
		1, 0,
		1, 1,
		0, 1,
		]*/

	var numVertex = horizontalVertices.length/2;

	var vertices = [];
	for(var i=0; i < numVertex; i++)
		{
		vertices.push(0);
		vertices.push(horizontalVertices[2*i]);
		vertices.push(horizontalVertices[2*i + 1]);
		}
	for(var i=0; i < numVertex; i++)
		{
		vertices.push(1);
		vertices.push(horizontalVertices[2*i]);
		vertices.push(horizontalVertices[2*i + 1]);
		}
	console.log(vertices)
	var faces = [];

	if(1)
	for(var i=0; i < numVertex-2; i++)
		{
		faces.push(0);
		faces.push(i+1);
		faces.push(i+2);
		faces.push(numVertex + 0);
		faces.push(numVertex + i+1);
		faces.push(numVertex + i+2);

		faces.push(0);
		faces.push(i+2);
		faces.push(i+1);

		faces.push(numVertex + 0);
		faces.push(numVertex + i+2);
		faces.push(numVertex + i+1);
		}
	if(1)
	for(var i=0; i < numVertex-1; i++)
		{
		faces.push(i);
		faces.push(numVertex+i);
		faces.push(numVertex+i+1);
		faces.push(i);
		faces.push(numVertex+i+1);
		faces.push(i+1);

		faces.push(i);
		faces.push(numVertex+i+1);
		faces.push(numVertex+i);
		faces.push(i);
		faces.push(i+1);
		faces.push(numVertex+i+1);
		}

	faces.push(numVertex - 1);
	faces.push(2*numVertex - 1);
	faces.push(numVertex);
	faces.push(numVertex-1);
	faces.push(numVertex);
	faces.push(0);

	faces.push(numVertex - 1);
	faces.push(numVertex);
	faces.push(2*numVertex - 1);

	faces.push(numVertex-1);
	faces.push(0);
	faces.push(numVertex);

	return new THREE.PolyhedronGeometry(vertices, faces);
}

