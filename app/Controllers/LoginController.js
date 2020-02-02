/**
 * Created by APlaskevich on 01.02.2020.
 */
Ext.define('TestApp.Controllers.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    routes: {
        'home': 'onHome'
    },

    onHome: function () {
        console.log('редиректчено на home');
    },

    onLoginClick: function() {
        localStorage.setItem('LoggedIn', true);
        this.getView().destroy();
        Ext.create({
            xtype: 'main'
        })

    }
});