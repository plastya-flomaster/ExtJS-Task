Ext.define('TestApp.Views.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
        'TestApp.Controllers.LoginController',
        'Ext.form.Panel',
        'Ext.form.field.Checkbox'
    ],
    controller: 'login',
    bodyPadding: 10,
    title: 'Вход в систему',
    closable: false,
    autoShow: true,
    items: [{
        xtype: 'form',
        items: [{
            id: 'username',
            xtype: 'textfield',
            fieldLabel: 'Логин',
            allowBlank: false
        }, {
            id: 'password',
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false
        }, {
            id: 'rememberMe',
            xtype: 'checkbox',
            boxLabel: 'Запомнить меня',
            formBind: true
        }],
        buttons: [{
            formBind: true,
            text: 'Войти',
            listeners: {
                click: 'onLoginClick'
            }
        }],
        defaults: {
            listeners: {
                specialkey: 'checkIfEnter'
            }
        }
    }],
    listeners: {
        show: 'onShow'
    }
});