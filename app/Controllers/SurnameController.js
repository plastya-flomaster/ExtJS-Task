/**
 * Created by APlaskevich on 29.01.2020.
 */
Ext.define('TestApp.Controllers.SurnameController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.surname',

    onSave: function () {
        var form = Ext.getCmp('surnamePanel'),
            active = form.activeRecord;
        if (!active) {
            return;
        }
        if (form.isValid()) {
            form.updateRecord(active);
            this.onReset();
            form.hide();
        }
    },

    onReset: function () {
        var form = Ext.getCmp('surnamePanel');
        form.loadRecord(form.activeRecord);
        form.reset();
    }
});