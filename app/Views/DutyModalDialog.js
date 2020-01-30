/**
 * модальное окно выбора должности
 */
Ext.define('TestApp.Views.DutyModalDialog', {
    extend: 'Ext.window.Window',
    xtype: 'dutymodaldialog',
    alias: 'widget.dutymodaldialog',
    modal: true,
    bind: {
        title: 'Изменить должность: ' + '{title}'
    },
    height: 200,
    width: 400,
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'middle'
    },
    viewmodel: 'listVm',
    items: [{
        xtype: 'combobox',
        fieldLabel: 'Должность',
        displayField: 'displayValue',
        valueField: 'id',

        bind: {
            store: '{duties}',
            value: '{dutyId}'
        },
        forceSelection: true,
        queryMode: 'local',
        editable: false

    }],

    buttons: [{
        text: 'Сохранить',
        handler: 'onSaveClick'
    }, {
        text: 'Отменить',
        handler: 'onCancelClick'
    }]
});