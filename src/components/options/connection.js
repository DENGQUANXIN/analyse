export var connection = {
    backgroundColor:'#fff',
    angleAxis: {
        type: 'category',
        data: [],
        z: 10,
        axisLabel: {
            fontSize: 15,
            fontWeight: 'bold'
        }
    },
    radiusAxis: {
        max:1200
    },
    polar: {
    },
    tooltip: {
        trigger: 'axis',
        formatter:'<span style="color:#25d053">{b}</span>与中心词关联强度:\n{c}',
    },
    series: [{
        type: 'bar',
        data: [],
        coordinateSystem: 'polar',
        name: '关联强度',
        color: ['#f87544'],
    }]
}