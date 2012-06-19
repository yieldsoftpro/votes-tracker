Ext.define('voting-charts.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            enterButton: '#enterButton',
            backButton: '#backButton'
        },

        control: {
            enterButton: {
                tap: 'onEnterTap'
            },
            backButton: {
                tap: 'onBackTap'
            }
        }
    },

    onEnterTap: function() {
        if (Ext.getCmp("trackingIdField").getValue()) {
            this.getMain().setActiveItem(1);
        }
    },

    onBackTap: function() {
        this.getMain().setActiveItem(0);
    }

});