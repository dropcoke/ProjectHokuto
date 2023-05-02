$(() => {
    document.getElementById('btn-execute').addEventListener('click', () => {
        // プログラム編集用テキストエリア
        let program = document.getElementById("program-area");
        // メッセージ表示領域
        const messageElement = document.getElementById('message');
        const errorHeader = document.getElementById('error-header');
        messageElement.innerText = '';
        errorHeader.innerText = '';


        try {
            reset();
            program && eval(program.value);
        }
        catch (exception) {
            console.log(exception)
            messageElement.innerText = exception.toString();
            errorHeader.innerText = 'エラーが発生しました。';
        }


    });
    $('#program-area').linedtextarea({
        selectedLine: 1
    });
    blockNavi = BlockNavi;
    blockNavi.outputArea = document.getElementById('output-area');
    // テーブルサイズ
    const tableSize = {y: 7, x: 7};
    blockNavi.drawTable(tableSize);
    drawRouteFirst();
    // カーソルキー移動
    window.addEventListener('keydown', (e) => {
        blockNavi.onArrowKey(e);
    });
});



