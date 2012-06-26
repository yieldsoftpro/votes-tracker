Ext.define("voting-charts.view.Main", {
    id:'mainview',
    extend:'Ext.Panel',
    xtype:'mainview',
    requires:[
        'voting-charts.view.Charts',
        'voting-charts.view.Login',
    ],

    config:{
        layout:'card',

        items:[
            {
                xtype:'login',
                flex:1,
                style:{background:'#000000'}
            },
            {
                xtype:'charts',
                flex:2
            }

        ]
    }
}); 