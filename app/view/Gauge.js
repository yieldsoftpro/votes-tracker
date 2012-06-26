Ext.define('voting-charts.view.Gauge', {
    id:'gaugeChart',
    extend:'Ext.chart.Chart',
    xtype:'gauge',
    config:{
        insetPadding:30,
        store:window.dataStore,
        axes:[
            {
                type:'gauge',
                position:'gauge',
                minimum:0,
                maximum:500,
                steps:10,
                margin:10
            }
        ],
        series:[
            {
                type:'gauge',
                field:'data',
                donut:false,
                colorSet:['#008000', '#fff']
            }
        ]
    }

})