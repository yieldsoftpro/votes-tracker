Ext.define('voting-charts.view.Bar', {
    extend: 'Ext.chart.Chart',
    xtype: 'bar',
    config: {
        animate: {
            easing: 'elasticIn',
            duration: 100
        },
        store: window.dataStore,
        insetPadding: 20,
        axes: [{
            type: 'Category',
            position: 'left',
            fields: ['errorMsg'],
            title: 'Some Data',
            grid: true
        },
        {
            type: 'Numeric',
            position: 'bottom',
            title: 'Data',
            fields: 'data',
            grid: {
                        odd: {
                        opacity: 5,
                        fill: '#ddd',
                        stroke: '#bbb',
                        'stroke-width': 1
                       }
                   },
            minimum: 0,
            maximum: 1000,
            majorTickSteps:10,
            label: {
                     rotate: {
                     degrees: 315
                             }
                       }
        }

        ],

        series: [{
            type: 'bar',
            axis: 'bottom',
            xField: 'errorMsg',
            yField: 'data',
            yPadding: 0,
            renderer: function(sprite, record, attr, index, store) {
                                return Ext.apply(attr, {
                                    height: settlerRelativeCoordinates.setValue(7,0),
                                    y: settlerRelativeCoordinates.setValue(40,0)
                                });
                            }
        }]

    }

})