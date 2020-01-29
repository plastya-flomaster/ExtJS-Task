/**
 * Форма ввода фамилии
 */
Ext.define('TestApp.Views.SurnameForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.writerform',
    requires: ['Ext.form.field.Text'],
    xtype: 'surnameform',
    controller: 'surname',

    activeRecord: null,
    iconCls: 'icon-user',
    frame: true,
    title: 'Редактирование Фамилии',
    defaultType: 'textfield',
    bodyPadding: 5,
    fieldDefaults: {
        anchor: '100%',
        labelAlign: 'right'
    },
    items: [{
        fieldLabel: 'Фамилия',
        name: 'surname',
        allowBlank: false,
        vtype: 'surname'
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        layout:{
            pack: 'end'
        },
        items: [{
            itemId: 'save',
            text: 'Применить',
            disabled: true,
            handler: 'onSave'
        }, {
            text: 'Очистить',
            handler: 'onReset'
        }]
    }]
});