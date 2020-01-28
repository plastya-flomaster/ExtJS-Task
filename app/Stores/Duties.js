/**
 * Справочник должностей
 */
Ext.define('TestApp.Stores.Duties', {
    extend: 'Ext.data.Store',
    alias: 'store.DutiesStore',
    data: [
        {id: '1', dutyName: 'Директор'},
        {id: '2', dutyName: 'Ученик'},
        {id: '3', dutyName: 'Учитель'}
    ]

});