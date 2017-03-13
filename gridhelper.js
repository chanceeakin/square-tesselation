if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.')
}

AFRAME.registerComponent('trongrid', {
  schema: {
    size: {default: 10},
    divisions: {default: 10},
    colorCenterLine: {default: '#000000'},
    colorGrid: {default: '#000000'}
  },
  init: function () {
    var scene = this.el.object3D
    var data = this.data
    /* populates the three.js layer with registered data or defaults from schema. */

    var geometry = new THREE.GridHelper(data.size, data.divisions, data.colorCenterLine, data.colorGrid)
    scene.add(geometry)
  },
  remove: function () {
    var scene = this.el.object3D
    scene.remove(scene.getObjectByName('trongrid'))
  }
})
