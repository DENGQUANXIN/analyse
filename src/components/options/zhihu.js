import echarts from 'echarts'
/**
 * 性别分布 图表配置
 */
var genderOptions = {
  type: 'pie',
  radius: [30, 100],
  roseType: 'area',
}
export var gender = {
  title: [{
    text: '政治类文章 评论者性别分布',
    x: '25%',
    textAlign: 'center'
  }, {
    text: '文化类文章 评论者性别分布',
    x: '75%',
    textAlign: 'center'
  }, {
    text: '社会类文章 评论者性别分布',
    x: '25%',
    y: '55%',
    textAlign: 'center'
  }, {
    text: '文章作者性别分布',
    x: '75%',
    y: '55%',
    textAlign: 'center'
  }],
  calculable: true,
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series: [{
    name: '性别分布',
    center: ['25%', '27%'],
    data: [{
        value: 335,
        name: '男'
      },
      {
        value: 310,
        name: '女'
      },
      {
        value: 274,
        name: '其他(未填写)'
      }
    ].sort(function (a, b) {
      return a.value - b.value;
    }),
    ...genderOptions
  }, {
    name: '性别分布',
    center: ['75%', '27%'],
    data: [{
        value: 335,
        name: '男'
      },
      {
        value: 310,
        name: '女'
      },
      {
        value: 274,
        name: '其他(未填写)'
      }
    ].sort(function (a, b) {
      return a.value - b.value;
    }),
    ...genderOptions
  }, {
    name: '性别分布',
    center: ['25%', '80%'],
    data: [{
        value: 335,
        name: '男'
      },
      {
        value: 310,
        name: '女'
      },
      {
        value: 274,
        name: '其他(未填写)'
      }
    ].sort(function (a, b) {
      return a.value - b.value;
    }),
    ...genderOptions
  }, {
    name: '作者性别分布',
    center: ['75%', '80%'],
    data: [{
        value: 335,
        name: '男'
      },
      {
        value: 310,
        name: '女'
      },
      {
        value: 274,
        name: '其他(未填写)'
      }
    ].sort(function (a, b) {
      return a.value - b.value;
    }),
    ...genderOptions
  }]
}

/**
 * 行业分布 图表配置
 */
export var industry = {
  tooltip: {
    trigger: 'axis'
  },
  dataZoom: [{ // 这个dataZoom组件，默认控制x轴。
    type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
    start: 10, // 左边在 10% 的位置。
    end: 60 // 右边在 60% 的位置。
  }, { // 这个dataZoom组件，也控制x轴。
    type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
    start: 10, // 左边在 10% 的位置。
    end: 60 // 右边在 60% 的位置。
  }],
  xAxis: [{
    type: 'category',
    data: [0, 0, 1, 2, 1, 2, 1, 2, 5, 5, 7, 4, 4, 8, 12, 345, 396, 346, 307, 253, 206, 156, 110, 80, 52, 31, 26, 16, 12, 11, 10, 8, 9, 9, 13, 13, 14, 14, 10, 11, 12, 15, 13, 13, 10, 15, 45, 110, 181, 269, 359, 479, 571, 665, 735, 797, 856, 885, 902, 909, 917, 920, 917, 917, 898, 884, 869, 851, 828, 805, 763, 726, 684, 665, 635, 614, 598, 590, 562, 544, 549, 550, 561, 577, 599, 617, 645, 667, 688, 726, 750, 777, 790, 832, 852, 878, 877, 878, 875, 870, 851, 842, 825, 812, 773, 732, 697, 648, 609, 561, 509, 465, 430, 385, 331, 288, 245, 181, 0]
  }],
  yAxis: [{
    type: 'value',
    name: '数量',
    min: 0,
    max: 1000
  }],
  series: [{
    name: '数量',
    type: 'bar',
    data: [0, 0, 1, 2, 1, 2, 1, 2, 5, 5, 7, 4, 4, 8, 12, 345, 396, 346, 307, 253, 206, 156, 110, 80, 52, 31, 26, 16, 12, 11, 10, 8, 9, 9, 13, 13, 14, 14, 10, 11, 12, 15, 13, 13, 10, 15, 45, 110, 181, 269, 359, 479, 571, 665, 735, 797, 856, 885, 902, 909, 917, 920, 917, 917, 898, 884, 869, 851, 828, 805, 763, 726, 684, 665, 635, 614, 598, 590, 562, 544, 549, 550, 561, 577, 599, 617, 645, 667, 688, 726, 750, 777, 790, 832, 852, 878, 877, 878, 875, 870, 851, 842, 825, 812, 773, 732, 697, 648, 609, 561, 509, 465, 430, 385, 331, 288, 245, 181, 0]
  }]
}

/**
 * 文章类别 图表配置
 */
export var classfication = {
  backgroundColor:'#fff',
  legend: {
      orient: 'vertical',
      right: '20',
      y: 'center',
      x: '80%',
      icon: 'circle',
      textStyle: {
          color: '#196FD9'
      },
      data: ['政治', '文化', '社会'],
      formatter: function(name) {
          var oa = classfication.series[0].data;
          var num = oa[0].value + oa[1].value + oa[2].value;
          for (var i = 0; i < classfication.series[0].data.length; i++) {
              if (name == oa[i].name) {
                  return name + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
              }
          }
      }
  },
  series: [{
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['50%', '70%'],
      roseType: 'radius',
      startAngle: 100,
      color: ['#FF4F64', '#2271DD', '#FF9D1B'],
      label: {
          normal: {
              show: false
          }
      },
      labelLine: {
          normal: {
              show: false
          },

      },
      data: [{
          value: 700,
          name: '政治',

      }, {
          value: 500,
          name: '文化',
      }, {
          value: 1000,
          name: '社会',

      }]
  }, {
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['45%', '46%'],
      label: {
          show: false,
      },
      data: [{
          value: 0,
          itemStyle: {
              normal: {
                  color: '#1C365E'
              }
          }
      }]
  }, {
      name: '',
      type: 'pie',
      clockWise: true,
      hoverAnimation: false,
      radius: [0, '43%'],
      label: {
          normal: {
              position: 'center'
          }
      },
      data: [{
          value: 0,
          itemStyle: {
              normal: {
                  color: '#43AFF1'
              }
          },
          label: {
              normal: {
                  formatter: '文章分类',
                  textStyle: {
                      color: '#000',
                      fontSize: 25,
                      fontWeight: 'bold'
                  }
              }
          }
      }]
  }]
}

/**
 * 情感分析 图表配置
 */
var placeHolderStyle = {
  normal: {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    color: "rgba(0,0,0,0)",
    borderWidth: 0
  },
  emphasis: {
    color: "rgba(0,0,0,0)",
    borderWidth: 0
  }
}

var dataStyle = {
  normal: {
    formatter: function (c) {
      return (c.data.value * 4 / 3).toFixed(1) + "%";
    },
    position: 'center',
    show: true,
    textStyle: {
      fontSize: '28',
      fontWeight: 'normal',
    }
  }
}

export var sentiment = {
  title: [{
    text: '情感分析',
    x: 'center',
    y: '40',
    textStyle: {
      fontSize: 20
    }
  }, {
    text: '正面评论',
    left: '29.8%',
    top: '60%',
    textAlign: 'center',
    textStyle: {
      fontWeight: 'normal',
      fontSize: '20',
      textAlign: 'center',
    },
  }, {
    text: '负面评论',
    left: '70%',
    top: '60%',
    textAlign: 'center',
    textStyle: {
      fontWeight: 'normal',
      fontSize: '20',
      textAlign: 'center',
    },
  }],
  series: [{
      type: 'pie',
      radius: ['32%', '51%'],
      center: ['30%', '50%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
          value: 56.3 * 3 / 4,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#99da69'
              }, {
                offset: 1,
                color: '#01babc'
              }]),
            }
          },
          label: dataStyle,
        }, {
          value: 43.7,
          itemStyle: placeHolderStyle,
        },

      ]
    },
    {
      type: 'pie',
      radius: ['31%', '51%'],
      center: ['70%', '50%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
          value: 43.7 * 3 / 4,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#9f3edd'
              }, {
                offset: 1,
                color: '#4897f6'
              }]),
            }
          },
          label: dataStyle,
        }, {
          value: 56.3,
          itemStyle: placeHolderStyle,
        },

      ]
    },

    //外圈的边框
    {
      // name: '总人数',
      type: 'pie',
      hoverAnimation: false, //鼠标经过的特效
      radius: ['51%', '53%'],
      center: ['30%', '50%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
          value: 75,
          itemStyle: {
            normal: {
              color: '#00FF99',
            }
          },
        }, {
          value: 25,
          itemStyle: placeHolderStyle,
        },

      ]
    },
    {
      type: 'pie',
      hoverAnimation: false,
      radius: ['51%', '53%'],
      center: ['70%', '50%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [{
          value: 75,
          itemStyle: {
            normal: {
              color: '#6600CC',
            }
          },
        }, {
          value: 25,
          itemStyle: placeHolderStyle,
        },

      ]
    },
  ]
};
