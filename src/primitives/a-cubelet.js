var extendDeep = AFRAME.utils.extendDeep;
var meshMixin  = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('a-cubelet', extendDeep({}, meshMixin, {
  defaultComponents: {
    geometry: { primitive: 'box', buffer: false },
    material: { vertexColors: 'face' },
    cubelet: {
        cubeIndex: 0,
        top:   'grey',
        left:  'grey',
        back:  'grey',
        down:  'grey',
        front: 'grey',
        right: 'grey'
    }
  },

  mappings: {
    top: 'cubelet.top',
    bottom: 'cubelet.bottom',
    right: 'cubelet.right',
    left: 'cubelet.left',
    back: 'cubelet.back',
    front: 'cubelet.front',
    width: 'geometry.width',
    height: 'geometry.height',
    depth: 'geometry.depth'
  }
}));
