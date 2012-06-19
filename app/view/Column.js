Ext.define('voting-charts.view.Column', {
    extend:'Ext.chart.Chart',
    xtype:'column',
    config:{
        insetPadding:20,
        animate:{
            easing:'elasticIn',
            duration:100
        },
        store:window.dataStore,
        axes:[
            {
                type:'Numeric',
                position:'left',
                title:'Data',
                fields:'data',
                minimum:0,
                maximum:5000,
                majorTickSteps:10
            },


            {
                type:'Category',
                position:'bottom',
                title:'The value',
                fields:['errorMsg']
            }


        ],
        series:[
            {
                type:'column',
                axis:'left',
                xField:'errorMsg',
                yField:'data',
                renderer:function (sprite, record, attr, index, store) {
                    return Ext.apply(attr, {
                        width:settlerRelativeCoordinates.setValue(0, 7),
                        x:settlerRelativeCoordinates.setValue(0, 40)
                    });
                }
            }
        ]
    }

})