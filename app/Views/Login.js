/**
 * Форма входа в приложение
 */
Ext.define('TestApp.Views.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: ['TestApp.Controllers.LoginController',
        'Ext.form.Panel'],
    autoshow: true,
    closable: false,
    title: 'Войти',
    frame: true,
    width: 320,
    bodyPadding: 10,
    controller: 'login',
    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'Логин',
        name: 'login',
        emptyText: 'example@email.com'
    }, {
        allowBlank: false,
        fieldLabel: 'Пароль',
        name: 'pass',
        emptyText: 'Введите пароль...',
        inputType: 'password'
    }, {
        xtype: 'displayfield',
        hideEmptyLabel: false,
        value: 'Введите пароль!!!'
    },
    {
        xtype: 'checkbox',
        fieldLabel: 'Запомнить меня',
        name: 'rememberMe'
    }],

    buttons: [
        {
            text: 'Войти',
            formBind: true, //This means that the Button will not be clickable until the two input fields contain values.
            listeners: {
                click: 'onLoginClick'
            }
        }
    ]
});