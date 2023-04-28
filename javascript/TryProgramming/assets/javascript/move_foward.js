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
            program && eval(program.value);
        }
        catch (exception) {
            console.log(exception)
            messageElement.innerText = exception.message;
            errorHeader.innerText = 'エラーが発生しました。';
        }


    });
    $('#program-area').linedtextarea({
        selectedLine: 1
    });
    drawBlockArea(6, 6);
});

const drawBlockArea = (y, x) => {
    const tableStart = '<table id="block_table" class="table table-bordered" style="border-color: black"><tbody>';
    const tableEnd = '</tbody></table>'
    let tdTag = '<td id="###,$$$" style="width: 50px; height: 75px"></td>'
    let tableContent = '';
    for (let i = 0; i < y; i++) {
        tableContent += '<tr>';
            for (let j = 0; j < x; j++) {
                tableContent += tdTag.replace("###", i).replace("$$$", j);
            }
        tableContent += '</tr>';
    }
    const outputHtml = tableStart + tableContent + tableEnd;
    document.getElementById('output-area').innerHTML = outputHtml;
    console.log(document.getElementById('block_table'));

}


