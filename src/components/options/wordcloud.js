export var politics = {
  tooltip: {
    show: true
  },
  series: [{
    name: '政治词云统计',
    type: 'wordCloud',
    autoSize: {
      enable: true,
      minSize: 14
    },
    textStyle: {
      normal: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        // Color can be a callback function or a color string
        color: function () {
          // Random color
          return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')';
        }
      },
      emphasis: {
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    data: [{
      "name": '该类型词云不存在',
      "value": 0
    }]
  }]
}
export var culture = {
  tooltip: {
    show: true
  },
  series: [{
    name: '文化词云统计',
    type: 'wordCloud',
    size: ['100%', '100%'],
    textRotation: [0, 45, 90, -45],
    textPadding: 0,
    autoSize: {
      enable: true,
      minSize: 14
    },
    textStyle: {
      normal: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        // Color can be a callback function or a color string
        color: function () {
          // Random color
          return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')';
        }
      },
      emphasis: {
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    data: [{
      "name": '该类型词云不存在',
      "value": 0
    }]
  }]
}
export var social = {
  tooltip: {
    show: true
  },
  series: [{
    name: '社会词云统计',
    type: 'wordCloud',
    size: ['100%', '100%'],
    textRotation: [0, 45, 90, -45],
    textPadding: 0,
    autoSize: {
      enable: true,
      minSize: 14
    },
    textStyle: {
      normal: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        // Color can be a callback function or a color string
        color: function () {
          // Random color
          return 'rgb(' + [
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160),
            Math.round(Math.random() * 160)
          ].join(',') + ')';
        }
      },
      emphasis: {
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    data: [{
      "name": '该类型词云不存在',
      "value": 0
    }]
  }]
}
