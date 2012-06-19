Ext.define('voting-charts.view.Bar', {
    id:'barChart',
    extend:'Ext.chart.Chart',
    xtype:'bar',
    config:{
        animate:{
            easing:'elasticIn',
            duration:100
        },
        store:window.dataStore,
        insetPadding:20,
        axes:[
            {
                type:'Category',
                position:'left',
                fields:['errorMsg'],
                title:'Some Data',
                grid:true
            },
            {
                type:'Numeric',
                position:'bottom',
                title:'Data',
                fields:'data',
                grid:{
                },
                minimum:0,
                maximum:500,
                majorTickSteps:10,
                label:{
                    rotate:{
                        degrees:315
                    }
                }
            }

        ],

        series:[
            {
                type:'bar',
                axis:'bottom',
                xField:'errorMsg',
                yField:'data',
                yPadding:0,
                renderer:function (sprite, record, attr, index, store) {
                    return Ext.apply(attr, {
                        height:settlerRelativeCoordinates.setValue(7, 0),
                        y:settlerRelativeCoordinates.setValue(40, 0)
                    });
                }
            }
        ]

    }

})