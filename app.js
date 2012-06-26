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
            ],
            validations:[
                //{type: 'presence',  field: 'errorMsg'},
                {type: 'presence',  field: 'data'}
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


        window.maxValue = 1000;
        window.refreshMaxValue = function (currentValue) {
            if (currentValue >= maxValue || currentValue > (maxValue - 20)) {
                window.maxValue = Math.round(1000 * Math.ceil(currentValue/1000));
            }
        }

    },


    launch:function () {

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
}});
