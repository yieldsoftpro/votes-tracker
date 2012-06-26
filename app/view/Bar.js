Ext.define('voting-charts.view.Bar', {
    id:'barChart',
    extend:'Ext.chart.Chart',
    xtype:'bar',
    config:{
        animate:{
            easing:'elasticIn',
            duration:10
        },
        store:window.dataStore,
        insetPadding:10,
        axes:[
            {
                type:'Numeric',
                position:'bottom',
                fields:'data',
                title:'',
                minimum:0,
                maximum:1000,
            }
        ],

        series:[
            {
                type:'bar',
                axis:'bottom',
                yField:'data',
                yPadding:100,
                renderer:function (sprite, record, attr, index, store) {
                    return Ext.apply(attr, {
                        height:settlerRelativeCoordinates.setValue(4, 0),
                        y:settlerRelativeCoordinates.setValue(40,0)
                    });
                }
            }
        ]

    }

})