/**
 * Created by APlaskevich on 22.01.2020.
 */
Ext.define('TestApp.ViewModels.ListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.listVm',
    requires: ['TestApp.Stores.Duties'],
    stores: {
        participants: {
            // model: 'TestApp.Models.Participants',
            type: 'ParticipantsStore',
            autoLoad: true
        },
        duties: {
            model: 'TestApp.Models.DutiesModel',
            type: 'DutiesStore',
            autoLoad: true,
            session: true
        }
    },

    data: {
        dutyId: null,
        participantId: null
    },
    formulas: {}
});