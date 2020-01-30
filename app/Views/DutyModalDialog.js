/**
 * модальное окно выбора должности
 */
Ext.define('TestApp.Views.DutyModalDialog', {
    extend: 'Ext.window.Window',
    xtype: 'dutymodaldialog',
    alias: 'widget.dutymodaldialog',
    modal: true,
    title: 'Редактирование должности',
    height: 200,
    width: 400,
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'middle'
    },

    items: [{
        xtype: 'combo',
        fieldLabel: 'Должность',
        displayField: 'displayValue',
        valueField: '{duties.id}',
        bind: {
            value: '{selectedDuty}',
            store: '{duties}'
        },
        forceSelection: true,
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