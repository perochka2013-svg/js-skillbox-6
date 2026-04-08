function getFilter() {
    let objects = [{
            name: 'Василий',
            surname: 'Васильев'
        },
        {
            name: 'Иван',
            surname: 'Иванов'
        },
        {
            name: 'Пётр',
            surname: 'Петров'
        }
    ]
    let result = objects.filter(el => el.name === 'Иван');
    console.log(result);
}
getFilter();