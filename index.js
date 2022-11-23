function xx () {
    let commentSect = document.querySelector('#commentSection');
    let comment = document.getElementById('comment').value + '\n';
    document.getElementById('comment').value = '';

    commentSect.append(comment);
}

function submit() {
    let comment = document.getElementById('comment').value;
    let spam = /viagra|xxx/gi;
    newComm = comment.replace(spam, "***");
    console.log(newComm);
}


// функция смотретьСпам () {
//   Записываешь сообщение, которое ввёл пользователь
//   Меняешь регистр
//   Создаёшь переменную, которая содержит спам (нужны флаги)
//   Заменяешь спам, если он есть
//   Добавляешь строку в чат
//   Очищаешь поле ввода
// }