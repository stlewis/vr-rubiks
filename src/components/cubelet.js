AFRAME.registerComponent('cubelet', {
  schema: {
    cubeIndex: { default: 0 },
    top:   { default: '#808080' },
    left:  { default: '#808080' },
    back:  { default: '#808080' },
    down:  { default: '#808080' },
    front: { default: '#808080' },
    right: { default: '#808080' }
  },

  init: function() {
    var mesh = this.el.getObject3D('mesh')
    var geom = mesh.geometry.clone();

    mesh.material.vertexColors = THREE.FaceColors;
    mesh.geometry = geom

    right_a = geom.faces[0] // Right side
    right_b = geom.faces[1]

    left_a = geom.faces[2] // Left side
    left_b = geom.faces[3]

    top_a = geom.faces[4] // top
    top_b = geom.faces[5]

    bottom_a = geom.faces[6]
    bottom_b = geom.faces[7] // bottom

    front_a = geom.faces[8] // front
    front_b = geom.faces[9]

    back_a = geom.faces[10] // back
    back_b = geom.faces[11]


    top_a.color.setStyle(this.data.top)
    top_b.color.setStyle(this.data.top)

    bottom_a.color.setStyle(this.data.bottom)
    bottom_b.color.setStyle(this.data.bottom)

    left_a.color.setStyle(this.data.left)
    left_b.color.setStyle(this.data.left)

    right_a.color.setStyle(this.data.right)
    right_b.color.setStyle(this.data.right)

    back_a.color.setStyle(this.data.back)
    back_b.color.setStyle(this.data.back)

    front_a.color.setStyle(this.data.front)
    front_b.color.setStyle(this.data.front)

    geom.colorsNeedUpdate = true;
  }

})
