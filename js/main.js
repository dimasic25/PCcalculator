let input = document.querySelector('.input');

function insert(num) {
    input.textContent = input.textContent + num;
    exception(buf, num);
}

function cleanMas() {
    buf.splice(0, buf.length);
    index = -1,  indexClose = -1,   indexOpen = -1;
}

function clean() {
    input.textContent = "";
    cleanMas();
}

function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length-1);

    let last = buf.pop();
    index--;
    if (last == '(') {
        indexOpen--;
    }
    if (last == ')') {
        indexClose--;

    }
}

function equal() {
    let exp = input.textContent;

    if (indexOpen != indexClose) {
        alert('Error! Ошибка со скобками');
        clean();
    }

    if (arr.includes(buf[index])) {
        alert('Error! Выражение не может оканчиваться на знак');
        clean();
    }

    if(exp) {
        input.textContent = eval(exp);
    }
}

let arr = ['+', '-', '*', '/', 'e', '.'];

let buf = [];

let  index = -1, indexOpen = -1, indexClose = -1;


function exception(buf, num) {
    index++;
    buf[index] = num;

    // Проверка на знаки
    if (index != 0 && arr.includes(num) && arr.includes(buf[index - 1])) {
        alert('Error! Некорректный синтаксис');
        clean();
    }

    // Проверка на скобки
    if (num == '(') {
        indexOpen++;
    }
    if (num == ')') {
        indexClose++;
    }
    if (indexOpen < indexClose) {
        alert('Error! Неправильное расположение скобок');
        clean();
       }
}