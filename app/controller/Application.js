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
            window.dataStore.load({
                params:{trackingId:Ext.getCmp("trackingIdField").getValue()},
                callback: function(records, operation, success) {
                    console.log(records);
                    onLoad();
                }

            });


            function onLoad() {
                myData2 = window.dataStore.data.items[0].data.errorMsg;
                myData = window.dataStore.data.items[0].data.data;

                myModel = Ext.create('dataModel',{
                    errorMsg : myData2,
                    data : myData
                });

                errors = myModel.validate();

                if (!errors.isValid() || myData <= 0) {
                    Ext.Msg.alert('The data is not valid!');
                    return;
                }
                else{
                    refreshMaxValue();
                    Ext.getCmp("mainview").setActiveItem(1);
                    setIntervalId = window.setInterval(function(){
                        window.dataStore.load({
                            params:{trackingId:Ext.getCmp("trackingIdField").getValue()}
                        });
                        refreshMaxValue();
                    }, 1000)
                }

            }

            function refreshMaxValue() {
                window.refreshMaxValue(window.dataStore.data.items[0].data.data);
                Ext.getCmp("gaugeChart")._axes.items[0]._maximum = window.maxValue;
                Ext.getCmp("columnChart")._axes.items[0]._maximum = window.maxValue;
                Ext.getCmp("barChart")._axes.items[0]._maximum = window.maxValue;

                Ext.getCmp("gaugeChart").redraw();
                Ext.getCmp("columnChart").redraw();
                Ext.getCmp("barChart").redraw()
            }

        }
    },

    onBackTap: function() {
        this.getMain().setActiveItem(0);
        window.clearInterval(setIntervalId);
        Ext.getCmp("gaugeChart")._axes.items[0]._maximum = 1000;
        Ext.getCmp("columnChart")._axes.items[0]._maximum = 1000;
        Ext.getCmp("barChart")._axes.items[0]._maximum = 1000;
        Ext.getCmp("barChart")._axes.items[0]._maximum = 1000;
        window.maxValue = 1000;
    }

});