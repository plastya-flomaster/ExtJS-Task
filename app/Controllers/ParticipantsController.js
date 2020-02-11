/**
 * Created by APlaskevich on 28.01.2020.
 */
Ext.define('TestApp.Controllers.ParticipantsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.participants',
    requires: [
        'TestApp.Views.DutyModalDialog'
    ],
    config: {},

    showDuties: function (dutyId) {
        const dutyStore = this.getStore('duties');
        const record = dutyStore.getById(dutyId);
        return record ? record.get('dutyName') : 'не указано';
    },

    onDutyClick: function (_this, cellElem, rowIndex) {
        var gridstore = _this.getStore(),
            view = this.getView(),
            record = gridstore.data.items[rowIndex];

        this.dialog = view.add({
            xtype: 'dutymodaldialog',
            viewModel: {
                data: {
                    title: `${record.get('name')} ${record.get('surname')}`,
                    dutyId: record.get('duty'),
                    participantId: record.get('id')
                }
            },
            session: true
        });
        this.dialog.show();
    },

    selectionChange: function (view, cell, cellIndex, record) {
        if (cellIndex === 3) //3 -- столбец с фамилией (не знаю как сделать по id)
        {
            this.setActiveRecord(record || null);
        }
    },

    setActiveRecord: function (record) {
        var form = Ext.getCmp('surnamePanel');
        form.show();
        form.activeRecord = record;
        if (record) {
            Ext.getCmp('save').enable();
            form.loadRecord(record);
        }
    },

    onSaveClick: function () {
        var dialog = this.dialog,
            participantId = dialog.getViewModel().get('participantId'),
            newDutyId = dialog.getViewModel().get('dutyId');
        dialog.getSession().save();
        this.getStore('participants').getById(participantId).set('duty', newDutyId);
        this.onCancelClick();
    },

    onCancelClick: function () {
        this.dialog = Ext.destroy(this.dialog);
    }
});