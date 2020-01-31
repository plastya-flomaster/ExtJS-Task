Ext.define('TestApp.Views.LoginView', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    title: 'Login',
    frame:true,
    width: 320,
    bodyPadding: 10,

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
        xtype:'checkbox',
        fieldLabel: 'Запомнить меня',
        name: 'rememberMe'
    }],

    buttons: [
        { text:'Войти' }
    ],

    initComponent: function() {
        this.defaults = {
            anchor: '100%',
            labelWidth: 120
        };
        this.callParent();
    }
});