Ext.application({
    name:'voting-charts',

    views:['Main'],
    controllers:['Application'],

    tabletStartupScreen:'resources/images/tablet_startup.jpg',
    phoneStartupScreen:'resources/images/phone_startup.jpg',

    onReady:function () {

        Ext.regModel('dataModel', {
            fields:[
                {name:'errorMsg', type:'string'},
                {name:'data', type:'int'}
            ]
        });

        window.dataStore = new Ext.data.Store({
            model:'dataModel',
            proxy:{
                type:'ajax',
                //url:'http://192.168.1.4/votescount.php'
                url:'http://localhost:8080/dummy.json'
            },
            autoLoad:true
        });


        window.maxValue = 500;
        window.refreshMaxValue = function (currentValue) {
            if (currentValue >= maxValue || currentValue > (maxValue - 20)) {
                window.maxValue = 500 * Math.ceil(currentValue/500);
            }
        }

    },


    launch:function () {

        function renewData() {
            window.dataStore.load({
                params:{trackingId:Ext.getCmp("trackingIdField").getValue()}
            });

            window.refreshMaxValue(window.dataStore.data.items[0].data.data);
            Ext.getCmp("gaugeChart")._axes.items[0]._maximum = window.maxValue;
            Ext.getCmp("columnChart")._axes.items[0]._maximum = window.maxValue;
            Ext.getCmp("barChart")._axes.items[1]._maximum = window.maxValue;

            Ext.getCmp("gaugeChart").redraw();
            Ext.getCmp("columnChart").redraw();
            Ext.getCmp("barChart").redraw();
        }

        var periodicFunction = window.setInterval(renewData, 1000);
        var app = Ext.create('voting-charts.view.Main');
        Ext.Viewport.add(app);

        settlerRelativeCoordinates = {
            setValue:function (x, y) {
                var height = window.innerHeight;
                var width = window.innerWidth;

                var onePercentHeight = Math.round((height / 100));
                var onePercentWidth = Math.round((width / 100));

                if (x == 0) {
                    return myWid = y * onePercentWidth
                }

                if (y == 0) {
                    return myHeg = x * onePercentHeight
                }
            }
        }
    }
});
