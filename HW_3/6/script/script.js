// В программе заданы две переменные n и m с числовым значением каждая. 
// Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n.


const n = 45;
const m = 17;
for (i = +n; i >= +m; i = i - 1){
    console.log(i)
}