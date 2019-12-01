'use strict';

let money = +prompt('Ваш бюджет на месяц?', 100000),
    time = prompt('Введите дату в формате YYYY-MM-DD', '1945-05-09'),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', '');

    if (typeof(a) === 'string' &&
        typeof(a) != null &&
        typeof(b) != null &&
        a != '' &&
        b != '' &&
        a.length <50 &&
        !isNaN(b)
       ) {

        // console.log('Какое-то условие прошло');
        appData.expenses[a] = b;
    } else {
        --i;
    }
}

// Используя цикл while
/* let i = 0;
while (i < 2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b = +prompt('Во сколько обойдется?', '');

    if (typeof(a) === 'string' &&
        typeof(a) != null &&
        typeof(b) != null &&
        a != '' &&
        b != '' &&
        a.length <50 &&
        !isNaN(b)
        ) {
            console.log('Какое-то условие прошло');
            appData.expenses[a] = b;
        } else {
        --i;
    }
    i++;
} */

// Используя цикл do .. while
/* let i = 0;
do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b = +prompt('Во сколько обойдется?', '');

    if (typeof(a) === 'string' &&
        typeof(a) != null &&
        typeof(b) != null &&
        a != '' &&
        b != '' &&
        a.length <50 &&
        !isNaN(b)
        ) {
            console.log('Какое-то условие прошло');
            appData.expenses[a] = b;
        } else {
        --i;
    }
    i++;
} while (i < 2); */

appData.moneyPerDay = appData.budget / 30;
alert('Ваш бюджет на день: ' + appData.moneyPerDay);

// console.log(appData);
// console.log(appData.expenses);

if (appData.moneyPerDay < 2000) {
    console.log('Минимальный уровень достатка.');
} else if (appData.moneyPerDay >= 2000 && appData.moneyPerDay < 5000) {
    console.log('Средний уровень достатка.');
} else if (appData.moneyPerDay >= 5000) {
    console.log('Высокий уровень достатка.');
} else {
    console.log('Ошибочка вышла!');
}