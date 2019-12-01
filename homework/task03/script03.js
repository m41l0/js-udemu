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
    savings: true
};

function chooseExpenses() {
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
}

function chooseOptExpenses() {
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
}

function detectDayBudget() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
    alert('Ваш бюджет на день: ' + appData.moneyPerDay);
}

function detectLevel() {
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
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', 44000),
            percent = +prompt('Под какой процент?', 9);

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

chooseExpenses();
chooseOptExpenses();
detectDayBudget();
detectLevel();
checkSavings();