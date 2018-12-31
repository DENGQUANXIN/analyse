/**
 * 人口分布 图表配置
 */
export var population = {
    title: {
      text: '2017西藏各地区人口',
      x: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    dataRange: {
      min: 0,
      max: 75,
      x: '90%',
      y: 'bottom',
      text: ['高', '低'],
      calculable: true
    },
    roamController: {
      show: true,
      x: 'right',
      mapTypeControl: {
        '西藏': true
      }
    },
    series: [{
      name: '人口数量(万人)',
      type: 'map',
      mapType: '西藏',
      roam: false,
      itemStyle: {
        normal: {
          label: {
            show: true
          }
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      data: [{
        name: '阿里地区',
        value: 9
      }, {
        name: '那曲地区',
        value: 19
      }, {
        name: '日喀则市',
        value: 70
      }, {
        name: '山南市',
        value: 32
      }, {
        name: '林芝市',
        value: 19
      }, {
        name: '昌都市',
        value: 65
      }, {
        name: '拉萨市',
        value: 55
      }]
    }]
  }