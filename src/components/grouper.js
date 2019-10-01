
AFRAME.registerComponent('grouper', {

  init: function() {
    this.el.addEventListener('click', this.spinGroup.bind(this))
  },

  spinGroup: function(e) {
    let group = e.currentTarget
    console.log(group)

    // Let's reparent the cubelets.
    for(i = 0; i <= 8; i++) {

      let v = new THREE.Vector3();
      let selector = 'a-cubelet[cubeIndex="' + i + '"]'
      let cubelet = document.querySelector('a-cubelet[cubeIndex="' + i + '"]')

      if(group.object3D.children.length > 9){
        continue;
      }
      v.copy(cubelet.object3D.position)

      cubelet.object3D.localToWorld(v)
      group.object3D.worldToLocal(v)
      group.object3D.add(cubelet.object3D)
      cubelet.object3D.position.y = 0
      cubelet.object3D.position.z = cubelet.object3D.position.z + 3
      cubelet.object3D.position.x = cubelet.object3D.position.x - 1
    }
    // Animate the group
    let currentRotationY = group.getAttribute('rotation').y
    group.setAttribute('animation', { property: 'rotation', to: {x: 0, y: currentRotationY + 90, z: 0}, easing: 'linear' })
  }

})
