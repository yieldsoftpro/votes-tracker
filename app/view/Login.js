Ext.define('voting-charts.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

      requires: [
            'Ext.form.*',
            'Ext.field.*',
            'Ext.Button',
        ],

    config: {
     layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
      },
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                    },
                ]
            },
            {
                    xtype: 'button',
                    id: 'enterButton',
                    text: 'Enter',
                    ui: 'action',
            }
     ]
     }
});