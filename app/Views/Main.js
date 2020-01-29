Ext.define('TestApp.Views.Main', {
    extend: 'Ext.form.Panel',
    xtype: 'app-main',
reference: 'app-main',
    requires: [
        'Ext.window.MessageBox',
        'Ext.layout.Fit'
    ],
    controller: 'main',
    viewModel: 'main',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'mainlist',
            flex: 2
        }, {
            xtype: 'surnameform',
            flex: 1,
            margin: '10 10 10 10'

        }]
});
