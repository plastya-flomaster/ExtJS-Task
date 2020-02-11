## TestApp

### Тестовое задание по итогам изучения ExtJS

ТЗ и выполненная часть в файле: https://docs.google.com/document/d/12m5yMmwXP7IbHzPgNLjOoLwhOeBXfmyNmS9OtT_rwYY/edit?usp=sharing 

### Примеры использования ES6

Для этого добавила в app.json
```$xslt
    "output": {
        //...
        "js": {
            "version": "ES6"
        }
    },
```
1. Использую ограничение scope 
```$xslt
let user = {
                login: view.lookupComponent('username').value,
                password: view.lookupComponent('password').value
            };
            
 showDuties: function (dutyId) {
         const dutyStore = this.getStore('duties'); //потому что нужен просто ключ
         const record = dutyStore.getById(dutyId); //берем для чтения
         return record ? record.get('dutyName') : 'не указано';
     },
```
2. Использую Template literals 
```$xslt
this.dialog = view.add({
            xtype: 'dutymodaldialog',
            viewModel: {
                data: {
                    title: `${record.get('name')} ${record.get('surname')}`,
                    dutyId: record.get('duty'),
                    participantId: record.get('id')
                }
            },
            session: true
        });
```
3. 
