function checkSpam() {
    let commentSect = document.querySelector('#commentSection');
    let comment = document.getElementById('comment').value;
    let spam = /viagra|xxx/gi;

    newComm = comment.replace(spam, "***");
    commentSect.append(newComm + '\n');
    document.getElementById('comment').value = '';
}