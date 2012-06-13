Ext.define('voting-charts.view.Gauge', {
    extend: 'Ext.chart.Chart',
    xtype: 'gauge',
    config: {
        insetPadding: 30,
        animate: {
            easing: 'elasticIn'
            //duration: 1000
        },
        store: window.dataStore,
        axes: [{
            type: 'gauge',
            position: 'gauge',
            minimum: 0,
            maximum: 1000,
            steps: 10,
            margin: 10
        }],
        series: [{
            type: 'gauge',
            field: 'data',
            donut: false,
            colorSet: ['#F49D10', '#ddd']
        }]
    }

})