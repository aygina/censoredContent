function submit() {
    let commentSect = document.querySelector('#commentSection');
    let comment = document.getElementById('comment').value + '\n';
    document.getElementById('comment').value = '';

    commentSect.append(comment);
    checkSpam(str);
}

function checkSpam(str) {
    let comment = document.getElementById('comment').value;
    
}

// функция смотретьСпам () {
//   Записываешь сообщение, которое ввёл пользователь
//   Меняешь регистр
//   Создаёшь переменную, которая содержит спам (нужны флаги)
//   Заменяешь спам, если он есть
//   Добавляешь строку в чат
//   Очищаешь поле ввода
// }