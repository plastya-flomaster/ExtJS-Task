/**
 * Created by APlaskevich on 28.01.2020.
 */
Ext.define('TestApp.Controllers.ParticipantsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.participants',

    config: {
        /*
        Uncomment to add references to view components
        refs: [{
            ref: 'list',
            selector: 'grid'
        }],
        */

        /*
        Uncomment to listen for events from view components
        control: {
            'useredit button[action=save]': {
                click: 'updateUser'
            }
        }
        */
    },

    init: function() {

    },
    showDuties: function (dutyId) {
        var dutyStore = this.getStore('duties');
        var record = dutyStore.getById(dutyId);
        return record ? record.get('dutyName') : 'не указано';
    }
});