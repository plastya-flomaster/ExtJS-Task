/**
 * Created by APlaskevich on 29.01.2020.
 */
Ext.define('TestApp.Controllers.SurnameController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.surname',

    /**
     * Called when the view is created
     */
    init: function () {

    },

    onSave: function () {

        var form = Ext.getCmp('surnamePanel'),
            active = form.activeRecord;

        if (!active) {
            return;
        }

        if (form.isValid()) {
            form.updateRecord(active);
            this.onReset();
        }
    },

    onReset: function () {
        var form = Ext.getCmp('surnamePanel');
        form.activeRecord = null;
        form.reset();
    }
});