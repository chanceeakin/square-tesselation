if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.')
}

AFRAME.registerComponent('squaretessel', {
  schema: {
    width: {default: 5},
    height: {default: 5},
    widthSegments: {default: 32},
    heightSegments: {default: 32},
    color: {type: 'string', default: '0x000000'},
    xrotation: {default: 90}
  },
  init: function () {
    var scene = this.el.object3D
    var data = this.data
    console.log(data)
    /* populates the three.js layer with registered data or defaults from schema. */

    var geometry = new THREE.PlaneGeometry(data.width, data.height, data.widthSegments, data.heightSegments)
    var material = new THREE.MeshBasicMaterial({color: data.color, side: THREE.DoubleSide})
    var plane = new THREE.Mesh(geometry, material)
    plane.rotation.x = data.xrotation
    scene.add(plane)
  },
  remove: function () {
    var scene = this.el.object3D
    scene.remove(scene.getObjectByName('squaretessel'))
  }
})
