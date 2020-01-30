/**
 * Created by APlaskevich on 28.01.2020.
 */
Ext.define('TestApp.Controllers.ParticipantsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.participants',

    config: {},

    init: function () {

    },
    showDuties: function (dutyId) {
        var dutyStore = this.getStore('duties');
        var record = dutyStore.getById(dutyId);
        return record ? record.get('dutyName') : 'не указано';
    },

    onDutyClick: function () {
        console.log('df');
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
    }
});