document.addEventListener('DOMContentLoaded', function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById('author').value = name;
    }
})

function checkSpam() {
    let commentSect = document.querySelector('#commentSection');
    let comment = document.getElementById('comment').value;
    let spam = /viagra|xxx/gi;

    newComm = comment.replace(spam, "***");
    commentSect.append(newComm + '\n');
    document.getElementById('comment').value = '';
}

function checkMessage() {
    let author = document.getElementById('author').value;
    let picture = document.getElementById('picture').value;

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }

    

}