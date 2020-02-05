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
        console.log('редирект на home');
    },
    checkIfEnter: function (element, event) {
        if (event.getKey() === event.ENTER) {
            this.onLoginClick();
        }
    },

    onLoginClick: function () {
        var view = this.getView();

        //если выбрана галка "запомни меня"
        if (view.lookupComponent('rememberMe').getValue()) {
            localStorage.setItem('CurrentUser', {
                login: view.lookupComponent('username'),
                password: view.lookupComponent('password')
            });
        }
        localStorage.setItem('LoggedIn', true);
        view.destroy();
        Ext.create({
            xtype: 'main'
        });
    },
    onShow: function () {
        var view = this.getView(),
            user = localStorage.getItem('CurrentUser');
        if (user) {
            view.lookupComponent('username').setValue(user.login);
            view.lookupComponent('password').setValue(user.password);
        }
    }
});