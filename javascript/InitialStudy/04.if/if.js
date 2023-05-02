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
    document.getElementById('btn-execute5').addEventListener('click', () => {
        // プログラム編集用テキストエリア
        let program5 = document.getElementById("program-area5");
        // メッセージ表示領域
        const messageElement5 = document.getElementById('message5');
        const errorHeader5 = document.getElementById('error-header5');
        messageElement5.innerText = '';
        errorHeader5.innerText = '';
        try {
            program5 && eval(program5.value);
        }
        catch (exception) {
            messageElement5.innerText = exception.toString();
            errorHeader5.innerText = 'エラーが発生しました。';
        }
    });
    document.getElementById('btn-execute6').addEventListener('click', () => {
        // プログラム編集用テキストエリア
        let program6 = document.getElementById("program-area6");
        // メッセージ表示領域
        const messageElement6 = document.getElementById('message6');
        const errorHeader6 = document.getElementById('error-header6');
        messageElement6.innerText = '';
        errorHeader6.innerText = '';
        try {
            program6 && eval(program6.value);
        }
        catch (exception) {
            messageElement6.innerText = exception.toString();
            errorHeader6.innerText = 'エラーが発生しました。';
        }
    });
});
const getColor = () => {
    return document.getElementById("color").value;
}
const showColor = (color, message) => {
    const target = document.getElementById("output");
    target.style.backgroundColor = color;
    console.log(message)
    target.textContent = message;

}
const showMessage = (value) => {
    const target = document.getElementById("output");
    target.innerHTML = value;
}