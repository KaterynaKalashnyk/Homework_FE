// Напишите функцию, range, которая принимает два аргумента (n и m) с 
// числовым значением и возвращает массив с числами от меньшего до большего -1.

function range(n, m){
    let a = [];
    if(n < m){
        a.push(m, n)
    }else{
        a.push(n, m)
    }
    return a
}
console.log(range(29, 57))