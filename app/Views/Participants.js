/**
 * Отображение списка участников школьного проекта
 */
Ext.define('TestApp.Views.ListView.Participants', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'TestApp.Stores.Participants',
        'TestApp.Stores.Duties',
        'TestApp.Controllers.ParticipantsController',
        'Ext.grid.plugin.CellEditing',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem',
        'TestApp.Views.DutyModalDialog'
    ],

    title: 'Участники школьного проекта',

    viewModel: 'listVm',
    controller: 'participants',
    bind:
        {
            store: '{participants}'
        },
    forceFit: true,

    columns: [{
        text: '№',
        xtype: 'rownumberer'
    },
        {
            text: 'Пользователь',
            xtype: 'templatecolumn',
            tpl: '{name} {surname}',
            draggable: false,
            cell: {
                userCls: 'bold'
            },
            flex: 3
        },
        {
            text: 'Имя',
            dataIndex: 'name',
            draggable: false,
            editor: {
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }
        },
        {
            text: 'Фамилия',
            dataIndex: 'surname',
            draggable: false

        },
        {
            text: 'Дата (мес./год)',
            dataIndex: 'date',
            draggable: false,
            xtype: 'datecolumn',
            format: 'm/y',
            flex: 1
        }, {
            text: 'Должность',
            dataIndex: 'duty',
            draggable: false,
            flex: 2,
            renderer: 'showDuties',
            listeners: {
                click: 'onDutyClick'
            }
        }],
    selModel: 'cellmodel',
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    listeners: {
        selectionchange: 'selectionChange'
    }

});
