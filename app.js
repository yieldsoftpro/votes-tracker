Ext.application({
    name:'voting-charts',

    views:['Main'],
    controllers:['Application'],

    tabletStartupScreen:'resources/images/tablet_startup.jpg',
    phoneStartupScreen:'resources/images/phone_startup.jpg',

    onReady:function () {

       Ext.regModel('dataModel', {
            fields: [
                     {name: 'errorMsg',  type: 'string'},
                     {name: 'data',   type: 'int'}
                    ]
                });

       window.dataStore = new Ext.data.Store({
            model: 'dataModel',
            proxy: {
                     type: 'ajax',
                     url : 'http://localhost:8080/JsonServlet?q=5'
                    },
            autoLoad: true
          })
        },

    launch:function () {

        function renewData(){
            window.dataStore.load();
             };

        var periodicFunction = window.setInterval(renewData,1000);
        var MyApp = Ext.create('voting-charts.view.Main');
        Ext.Viewport.add(MyApp);

        settlerRelativeCoordinates = {
          setValue: function(x,y){
              var height = window.innerHeight;
              var width = window.innerWidth;

              var onePercentHeight = Math.round((height/100));
              var onePercentWidth = Math.round((width/100));

              if(x==0){return myWid = y*onePercentWidth};
              if(y==0){return myHeg = x*onePercentHeight}
             }
         }
    }
});
