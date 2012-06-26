Ext.define('voting-charts.view.Charts', {
    extend: 'Ext.TabPanel',
    xtype: 'charts',

    requires: [
            'voting-charts.view.Gauge',
            'voting-charts.view.Bar',
            'voting-charts.view.Column'
    ],

    config: {
        title: 'content',
        tabBarPosition: 'bottom',

        items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    style: {background: '#808080'},
                    items: [
                        { ui: 'back', text: 'Change Tracker ID', id: 'backButton'}
                    ]
                },
                {
                    title: 'gauge',
                    xtype: 'gauge',
                    iconCls: 'gauge_chart',
                    style: {background: '#000000'}
                },

                {
                    title: 'bar',
                    xtype: 'bar',
                    iconCls: 'bar',
                    style: {background: '#000000'}
                },

                {
                    title: 'column',
                    xtype: 'column',
                    iconCls: 'column',
                    style: {background: '#000000'}
                }
        ]
    }
});