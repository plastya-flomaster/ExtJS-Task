/**
 * Created by APlaskevich on 28.01.2020.
 */
Ext.define('TestApp.Controllers.ParticipantsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.participants',

    config: { },

    init: function() {

    },
    showDuties: function (dutyId) {
        var dutyStore = this.getStore('duties');
        var record = dutyStore.getById(dutyId);
        return record ? record.get('dutyName') : 'не указано';
    },
    selectionchange: function(selModel, selected) {
        this.setActiveRecord(selected[0] || null);
    },
    setActiveRecord: function(record){
        var form = Ext.ComponentQuery.query('writerform')[0];
        form.activeRecord = record;
        if (record) {
            Ext.ComponentQuery.query('#save')[0].enable();
            form.loadRecord(record);
        } else {
            Ext.ComponentQuery.query('#save')[0].disable();
            form.reset();
        }
    }
});