/**
 *  Модель сведений об участниках проекта
 */
Ext.define('TestApp.Models.Participants', {
    extend: 'TestApp.Models.Base',
    requires: 'Ext.data.validator.DateTime',
    fields: [
        'id', 'name', 'surname', 'date', 'duty'
    ],
    validators:
        {
            date: {type: 'datetime'}
        }
});
