/**
 * Created by APlaskevich on 29.01.2020.
 */
Ext.define('TestApp.Controllers.SurnameController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.surname',

    /**
     * Called when the view is created
     */
    init: function() {

    },

    onSave: function(){
        var active = this.activeRecord,
            form = this.getForm();

        if (!active) {
            return;
        }
        if (form.isValid()) {
            form.updateRecord(active);
            this.onReset();
        }
    },

    onReset: function(){
        this.setActiveRecord(null);
        this.getForm().reset();
    }
});