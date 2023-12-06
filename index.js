/** 1-misol
 
    let n = prompt("Son kiriting men u songacha bo'lgan barcha juft sonlarni yig'indisini xisoblayma:");
    let sum = 0;
    let i = 0;

    while (i <= n) {
    if (i % 2 == 0) {
    sum += i;
    }
    i++;
    }

    console.log("Barcha juft sonlar yig'indisi:" + ' ' + sum);

 */

/** 2-misol
      let n = prompt("Son kiriting men u songacha bo'lgan 3 ga karrali sonlarni ko'paytmasini topaman");
    let sum = 0;
    let i = 0;

    while (i <= n) {
    if (i % 3 == 0) {
    sum *= i;
    }
    i++;
    }

    console.log("Javob:" + ' ' + sum);

 */

/** 6-misol
  let a = 324;

let b = a % 10;
let o = ((a % 100) - b) / 10;
let y = a / 100 - a % 100 / 100;

let result = '';

switch (y) {
    case 1:
        result = `bir yuzi `
        break;
    case 2:
        result = `ikki yuzi `
        break;
    case 3:
        result = `uch yuzi `
        break;
    case 4:
        result = `to'rt yuzi `
        break;
    case 5:
        result = `besh yuzi `
        break;
    case 6:
        result = `olti yuzi `
        break;
    case 7:
        result = `yetti yuzi `
        break;
    case 8:
        result = `sakkiz yuzi `
        break;
    case 9:
        result = `to'qqiz yuzi `
        break;

    default:
        result = "Ushbu amaliyotni bajarish mumkin emas"
        break;
}

switch (o) {
    case 1:
        result += `o'n `
        break;
    case 2:
        result += `yigirma `
        break;
    case 3:
        result += `o'ttiz `
        break;
    case 4:
        result += `qirq `
        break;
    case 5:
        result += `ellik `
        break;
    case 6:
        result += `oltmush `
        break;
    case 7:
        result += `yetmush `
        break;
    case 8:
        result += `sakson `
        break;
    case 9:
        result += `to'qson `
        break;

    default:
        result = "Ushbu amaliyotni bajarish mumkin emas"
        break;
}

switch (b) {
    case 1:
        result += `bir`
        break;
    case 2:
        result += `ikki`
        break;
    case 3:
        result += `uch`
        break;
    case 4:
        result += `to'rt`
        break;
    case 5:
        result += `besh`
        break;
    case 6:
        result += `olti`
        break;
    case 7:
        result += `yetti`
        break;
    case 8:
        result += `sakkiz`
        break;
    case 9:
        result += `to'qqiz`
        break;
    default:
        result = "Ushbu amaliyotni bajarish mumkin emas"
        break;
}

console.log(result);
 */

let a = +prompt("son kiriting:");
let b = a % 10;
let o = ((a % 100) - b) / 10;
let y = a / 100 - a % 100 / 100;
let all = b + o + y;
console.log(all);

