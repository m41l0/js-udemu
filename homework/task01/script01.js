'use strict';

let money = +prompt('Ваш бюджет на месяц?', 10000),
    time = prompt('Введите дату в формате YYYY-MM-DD', '1945-05-09'),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    },
    q1 = prompt('Введите обязательную статью расходов в этом месяце', 'Car'),
    q2 = +prompt('Во сколько обойдется?', 1000),
    q3 = prompt('Введите обязательную статью расходов в этом месяце', 'Fuel'),
    q4 = +prompt('Во сколько обойдется?', 5000);

appData.expenses[q1] = q2;
appData.expenses[q3] = q4;

alert('Ваш бюджет на день: ' + appData.budget / 30);

//console.log(appData);

/*
Вопросы к этому заданию:
1.Сколько типов данных существует в JS?
Ответ: 7 (boolean, string, number, object, symbol, null, undefined) 

2.Как вывести информацию в консоль?
Ответ: console.log('Информация');

3.Какая функция операторов || и &&?
Ответ: Относятся к логическим операторам, используются
с булевым типом данных (и не только) и возвращают логическое значение (ture или false).
*/