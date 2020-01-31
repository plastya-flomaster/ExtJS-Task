/**
 *  Модель сведений о пользователе
 */
Ext.define('TestApp.Models.Users', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'login', type: 'string'},
        { name: 'password', type: 'string'},
        { name: 'rememberMe', type: 'boolean'}
    ],

    validators: {
        login: { type: 'email'},
        password: {type: 'length', min: 8}
    }
    /*
    Uncomment to add a rest proxy that syncs data with the back end.
    proxy: {
        type: 'rest',
        url : '/users'
    }
    */
});