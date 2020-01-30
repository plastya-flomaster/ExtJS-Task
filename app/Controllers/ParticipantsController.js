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

    init: function () {

    },
    showDuties: function (dutyId) {
        var dutyStore = this.getStore('duties');
        var record = dutyStore.getById(dutyId);
        return record ? record.get('dutyName') : 'не указано';
    },

    onDutyClick: function (_this, cellElem, rowIndex) {
        var gridstore = _this.getStore();
        var id = gridstore.data.items[rowIndex].get('id');

        var view = this.getView();
        this.dialog = view.add({
            xtype: 'dutymodaldialog',
            viewModel: {
                data: {
                    selectedDuty: id
                }
            }
        });
        this.dialog.show();
    },

    selectionChange: function (selModel, selected) {
        this.setActiveRecord(selected[0] || null);
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
        // // Save the changes pending in the dialog's child session back to the
        // // parent session.
        // var dialog = this.dialog,
        //     form = this.lookupReference('form'),
        //     isEdit = this.isEdit,
        //     id;
        //
        // if (form.isValid()) {
        //     if (!isEdit) {
        //         // Since we're not editing, we have a newly inserted record. Grab the id of
        //         // that record that exists in the child session
        //         id = dialog.getViewModel().get('theCustomer').id;
        //     }
        //     dialog.getSession().save();
        //     if (!isEdit) {
        //         // Use the id of that child record to find the phantom in the parent session,
        //         // we can then use it to insert the record into our store
        //         this.getStore('customers').add(this.getSession().getRecord('Customer', id));
        //     }
        //     this.onCancelClick();
        // }
    },

    onCancelClick: function () {
        this.dialog = Ext.destroy(this.dialog);
    }
});