/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TestApp.Controllers.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    requires: [],
    routes: {
        //хэш this.redirectTo(‘home’); //редиректит на http://localhost#homePage
        'login': 'onLogin'
    },


    onLogin: function () {
        
    },

    onLogoutClick: function () {
    //this.redirectTo('login'); //document.location.href
    localStorage.removeItem('LoggedIn');
    this.getView().destroy();
    Ext.create({
        xtype: 'login'
    });    }

});
