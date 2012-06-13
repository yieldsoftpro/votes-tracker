Ext.define("voting-charts.view.Main", {
    extend: 'Ext.Panel',
    xtype: 'mainview',
    requires: [
            'voting-charts.view.Charts',
            'voting-charts.view.Login',
    ],

    config: {
        layout: 'card',

        items: [
        {
            xtype: 'login',
            flex: 1,
        },
        {
            xtype: 'charts',
            flex: 2,
        }

        ]
    }
}); 