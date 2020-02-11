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
            let user = {
                login: view.lookupComponent('username').value,
                password: view.lookupComponent('password').value
            };
            localStorage.setItem('CurrentUser', JSON.stringify(user));
        }
        localStorage.setItem('LoggedIn', true);
        view.destroy();
        Ext.create({
            xtype: 'main'
        });
    },
    onShow: function (_this) {
        var user = JSON.parse(localStorage.getItem('CurrentUser'));
        if (user) {
            _this.lookupComponent('username').setValue(user.login);
            _this.lookupComponent('password').setValue(user.password);
        }
    }
});