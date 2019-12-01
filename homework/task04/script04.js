'use strict';

let money, time;

function start() {
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', 100000);
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '1945-05-09');
}

start(); // call before appData variable definition

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = +prompt('Во сколько обойдется?', '');
        
            if (typeof(a) === 'string' &&
                typeof(a) != null &&
                typeof(b) != null &&
                a != '' &&
                b != '' &&
                a.length < 50 &&
                !isNaN(b)
               ) {
                appData.expenses[a] = b;
            } else {
                --i;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
        alert('Ваш бюджет на день: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        let ret;
        if (appData.moneyPerDay < 2000) {
            ret = 'Минимальный уровень достатка.';
        } else if (appData.moneyPerDay >= 2000 && appData.moneyPerDay < 5000) {
            ret = 'Средний уровень достатка.';
        } else if (appData.moneyPerDay >= 5000) {
            ret = 'Высокий уровень достатка.';
        } else {
            ret = 'Ошибочка вышла!';
        }
    
        return console.log(ret);
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', 44000),
                percent = +prompt('Под какой процент?', 9);
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt('Введите необязательную статью расходов в этом месяце', '');
        
            if (typeof(a) === 'string' &&
                typeof(a) != null &&
                a != '' &&
                a.length < 50 &&
                isNaN(a)
               ) {
                appData.optionalExpenses[i] = a;
            } else {
                --i;
            }
        }
    },
    chooseIncome: function() {
        let items;
        while (typeof(items) != 'string' || items == '' || items == null) {
            items = prompt('Что принесет дополнительнй доход? (Перечислите через запятую)', '');
        }

        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();

        appData.income.forEach(function(item, i) {
            alert('Способы доп. заработка: ' + (i+1) + ' - ' + item);
        });        
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные:  ' + key + ' - ' + appData[key]);
}

appData.chooseExpenses();
appData.chooseOptExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();


// Вопросы к этому заданию:
// Как перебрать свойства объекта?
// Для перебора всех свойств объекта используется цикл for..in.