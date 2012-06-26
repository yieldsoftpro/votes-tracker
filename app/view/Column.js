Ext.define('voting-charts.view.Column', {
    id:'columnChart',
    extend:'Ext.chart.Chart',
    xtype:'column',
    config:{
        insetPadding:0,
        animate:{
            easing:'elasticIn',
            duration:100
        },
        store:window.dataStore,
        axes:[
            {
                type:'Numeric',
                position:'left',
                fields:'data',
                minimum:0,
                maximum:1000,
            },

        ],
        series:[
            {
                type:'column',
                axis:'left',
                yField:'data',
                renderer:function (sprite, record, attr, index, store) {
                    return Ext.apply(attr, {
                        width:settlerRelativeCoordinates.setValue(0, 4),
                        x:settlerRelativeCoordinates.setValue(0, 44),
                    });
                }
            }
        ]
    }

})