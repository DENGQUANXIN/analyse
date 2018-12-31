export var connection = {
    animationEasingUpdate: 'quinticInOut',
    animationDurationUpdate: 1500,

    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 2000,
            edgeLength: [120, 10],
        },
        // 节点标记类型
        symbol: 'circle',
        symbolSize: 70,

        focusNodeAdjacency: true, // 鼠标经过节点是否突出显示
        roam: false, // 是否开启鼠标平移
        draggable: false, // 节点是否可拖拽

        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    fontSize: 12
                },
            }
        },
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#00CCCC' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00FFFF' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                opacity: 0.9,
                width: 5,
                curveness: 0
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#04f2a7',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43',
            }
        },
        // 节点分类
        categories: [{
            name: 'root',
            label: {
                formatter: '{b}',
                fontSize: 20
            },
            itemStyle: {
                color: '#132486'
            }
        }, {
            name: 'child',
            label: {
                formatter: ['{a|{c}}', '{b|{b}}'].join('\n'),
                rich: {
                    a: {
                        color: '#0ff',
                        align: 'center',
                    },
                    b: {
                        color: '#fff',
                        align: 'center',
                        lineHeight: 24
                    }
                }
            }
        }]
    }]
};

