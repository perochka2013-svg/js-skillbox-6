let user1 = {
    name: 'Игорь',
    age: 17
}
let user2 = {
    name: 'Оля',
    age: 21
}

function getOlderUser() {
    let GetAgeOne = user1.age;
    let GetAgeTwo = user2.age;
    if (GetAgeOne > GetAgeTwo) {
        console.log(user1.name, 'старше', user2.name);
    } else if (GetAgeTwo > GetAgeOne) {
        console.log(user2.name, 'старше', user1.name);
    } else {
        console.log('никто не старше');
    }
}
getOlderUser();

function getOlderUserArray() {
    let allUsers = [{
            name: 'Валя',
            age: 11
        },
        {
            name: 'Таня',
            age: 24
        },
        {
            name: 'Рома',
            age: 21
        },
        {
            name: 'Надя',
            age: 34
        },
        {
            name: 'Антон',
            age: 7
        }
    ]
    let maxAge = 0;
    allUsers.forEach((el) => {
        if (el.age > maxAge) {
            maxAge = el.age
        }
    })

    return allUsers.filter(el => el.age == maxAge );
}

let maxPeopls = getOlderUserArray()
console.log('Самые старшие пользователи:')
maxPeopls.forEach(el => console.log(el.name))