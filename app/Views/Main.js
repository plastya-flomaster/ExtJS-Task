Ext.define('TestApp.Views.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'layout-horizontal-box',
    requires: [
        'Ext.window.MessageBox',
        'Ext.layout.Fit'
    ],
    controller: 'main',
    viewModel: 'main',
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
        }]
});
