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
    document.getElementById('btn-execute3').addEventListener('click', () => {
        // プログラム編集用テキストエリア
        let program3 = document.getElementById("program-area3");
        // メッセージ表示領域
        const messageElement3 = document.getElementById('message3');
        const errorHeader3 = document.getElementById('error-header3');
        messageElement3.innerText = '';
        errorHeader3.innerText = '';
        try {
            program3 && eval(program3.value);
        }
        catch (exception) {
            messageElement3.innerText = exception.toString();
            errorHeader3.innerText = 'エラーが発生しました。';
        }
    });
    document.getElementById('btn-execute4').addEventListener('click', () => {
        // プログラム編集用テキストエリア
        let program4 = document.getElementById("program-area4");
        // メッセージ表示領域
        const messageElement4 = document.getElementById('message4');
        const errorHeader4 = document.getElementById('error-header4');
        messageElement4.innerText = '';
        errorHeader4.innerText = '';
        try {
            program4 && eval(program4.value);
        }
        catch (exception) {
            messageElement4.innerText = exception.toString();
            errorHeader4.innerText = 'エラーが発生しました。';
        }
    });
});

const showMessage = (value) => {
    const target = document.getElementById("output");
    target.innerHTML = value;
}