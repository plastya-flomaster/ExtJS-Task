Ext.define('TestApp.Views.Main', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.window.MessageBox',
        'Ext.layout.Fit'
    ],
    controller: 'main',
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
            text: 'Выйти'
        }
    ]
});
