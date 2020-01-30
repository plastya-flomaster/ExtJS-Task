/**
 * Модель справочника Должностей
 */
Ext.define('TestApp.Models.DutiesModel', {
    extend: 'Ext.data.Model',

    fields: [
        'id',
        'dutyName',
        {
            name: 'displayValue',
            depends: ['id', 'dutyName'],
            calculate: function (record) {
                return '' + record.id + '. ' + record.dutyName;
            }
        }
    ]
});