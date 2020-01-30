/**
 * Created by APlaskevich on 30.01.2020.
 */
Ext.define('TestApp.ViewModels.DutyModalDialogViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dutymodaldialog',
    requires: ['TestApp.Stores.Duties'],

    stores: {
        duties: {
            type: 'DutiesStore',
            autoLoad: true
        }
    },
    data: {
    }
});