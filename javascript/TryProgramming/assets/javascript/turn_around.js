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
    window.addEventListener('keydown', (e) => {
        // 矢印移動
        if (blockNavi.isSelected) {
            const position = blockNavi.selectedCell;
            let y = position.y;
            let x = position.x;
            if (e.code == 'ArrowUp') {
                y = y - 1
                if (y < 0) {
                    return;
                }
            }
            else if (e.code == 'ArrowDown') {
                y = y + 1;
                if (y > blockNavi.route.length) {
                    return;
                }
            }
            else if (e.code == 'ArrowRight') {
                x = x + 1;
                if (x > blockNavi.route[y].length) {
                    return;
                }
            }
            else if (e.code == 'ArrowLeft') {
                x = x - 1;
                if (x < 0) {
                    return;
                }
            }
            if (!blockNavi.route[y]) {
                return;
            }
            else if (!blockNavi.route[y][x]) {
                return;
            }
            blockNavi.changeSelectElement(y, x);
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
    drawRouteThird();
});



