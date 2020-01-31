/**
 * Created by APlaskevich on 01.02.2020.
 */
Ext.define('TestApp.Controllers.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    routes: {
        'login': 'onLogin'
    },

    onLogin: function () {
        console.log('редиректчено на логин');
    }
});