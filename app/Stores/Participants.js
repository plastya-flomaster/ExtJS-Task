Ext.define('TestApp.Stores.Participants', {
    extend: 'Ext.data.Store',

    alias: 'store.ParticipantsStore',

    model: 'TestApp.Models.Participants',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'surname', type: 'string'},
        {name: 'date', type: 'date'},
        {name: 'duty', type: 'int'}

    ],
    data: {
        items: [
            {id: '1', name: 'Виктория', surname: 'Пермякова', date: new Date('2018-05-20'), duty: 1},
            {id: '2', name: 'Валерий', surname: 'Остапенко', date: new Date('2016-09-01'), duty: 2},
            {id: '3', name: 'Марина', surname: 'Кетова', date: new Date('2014-09-01'), duty: 2},
            {id: '4', name: 'Татьяна', surname: 'Агеева', date: new Date('2016-09-01'), duty: 3},
            {id: '5', name: 'Сергей', surname: 'Иванов', date: new Date('2012-09-01'), duty: 2}
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
