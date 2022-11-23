let arr = [];

function submit() {
    if (document.getElementById('comment').value != '') {
        arr.push(document.getElementById('comment').value);
    }
    document.getElementById('comment').value = '';
    commentSection.innerHTML = '' + arr + '\n';
    console.log(arr + '\n');
}