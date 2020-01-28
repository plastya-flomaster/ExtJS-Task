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
        'Ext.grid.plugin.CellEditing'
    ],

    title: 'Участники школьного проекта',

    viewModel: 'listVm',
    controller: 'participants',
    bind:
        {
            store: '{participants}'
        },

    columns: [{
        text: '№',
        xtype: 'rownumberer'
    },
        {
            text: 'Пользователь',
            xtype: 'templatecolumn',
            tpl: '{name} {surname}',
            cell: {
                userCls: 'bold'
            },
            flex: 3
        },
        {
            text: 'Имя',
            dataIndex: 'name',
            editor: {
                completeOnEnter: false,
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }
        },
        {
            text: 'Дата (мес./год)',
            dataIndex: 'date',
            xtype: 'datecolumn',
            format: 'm/y',
            flex: 1
        }, {
            text: 'Должность',
            dataIndex: 'duty',
            flex: 2,
            renderer: 'showDuties'
        }],
    selModel: 'cellmodel',
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },
    listeners: {
       // select: 'onItemSelected'
    }
});
