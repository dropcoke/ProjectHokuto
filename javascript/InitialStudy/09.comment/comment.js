$(() => {
    document.getElementById('btn-execute1').addEventListener('click', () => {
        // プログラム編集用テキストエリア
        let program1 = document.getElementById("program-area1");
        // メッセージ表示領域
        const messageElement1 = document.getElementById('message1');
        const errorHeader1 = document.getElementById('error-header1');
        messageElement1.innerText = '';
        errorHeader1.innerText = '';
        try {
            program1 && eval(program1.value);
        }
        catch (exception) {
            messageElement1.innerText = exception.toString();
            errorHeader1.innerText = 'エラーが発生しました。';
        }
    });
    document.getElementById('btn-execute2').addEventListener('click', () => {
        // プログラム編集用テキストエリア
        let program2 = document.getElementById("program-area2");
        // メッセージ表示領域
        const messageElement2 = document.getElementById('message2');
        const errorHeader2 = document.getElementById('error-header2');
        messageElement2.innerText = '';
        errorHeader2.innerText = '';
        try {
            program2 && eval(program2.value);
        }
        catch (exception) {
            messageElement2.innerText = exception.toString();
            errorHeader2.innerText = 'エラーが発生しました。';
        }
    });
});

const showMessage = (value) => {
    const target = document.getElementById("output");
    target.innerHTML = value;
}