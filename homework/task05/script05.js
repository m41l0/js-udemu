'use strict';

// Какое будет выведено значение: let x = 5; alert( x++ ); ?
// let x = 5; console.log( x++ ); // 5

// Чему равно такое выражение: [ ] + false - null + true ? 
// console.log([] + false - null + true); // NaN

// Что выведет этот код: let y = 1; let x = y = 2; alert.log(x); ?
// let y = 1; let x = y = 2; console.log(x); // 2

// Чему равна сумма [ ] + 1 + 2?
// console.log([ ] + 1 + 2); // 12

// Что выведет этот код: alert( "1"[0] )?
// console.log( "1"[0] ); // 1
// let a = "123"[1]; console.log(a);

// Чему равно 2 && 1 && null && 0 && undefined ?
//console.log(2 && 1 && null && 0 && undefined); // null

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
//var a, b; ( !!( a && b ) != (a && b) ) ? console.log('true') : console.log('false'); // есть

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// console.log( null || 2 && 3 || 4 ); // 3

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// var a = [1, 2, 3], b = [1, 2, 3]; (a == b) ? console.log('true') : console.log('false'); // нет
// console.log(a);
// console.log(b);

// Что выведет этот код: alert( +"Infinity" ); ?
// console.log( +"Infinity" ); // Infinity

// Верно ли сравнение: "Ёжик" > "яблоко"?
//( "Ёжик" > "яблоко" ) ? console.log('true') : console.log('false'); // неверно

// Чему равно 0 || "" || 2 || undefined || true || false ?
console.log( 0 || "" || 2 || undefined || true || false ); // 2