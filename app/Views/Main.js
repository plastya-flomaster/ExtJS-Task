Ext.define('TestApp.Views.Main', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.plugin.Viewport',
        'TestApp.Controllers.MainController'    ],
    xtype: 'main',

    controller: 'main',
    plugins: 'viewport',

   // ui: 'navigation',

    layout: {
        type: 'hbox'
    },
    items: [
        {
            xtype: 'mainlist',
            flex: 2
        }, {
            xtype: 'surnameform',
            flex: 1
        }],
    buttons: [
        {
            text: 'Выйти',
            handler: 'onLogoutClick'
        }
    ]
});
