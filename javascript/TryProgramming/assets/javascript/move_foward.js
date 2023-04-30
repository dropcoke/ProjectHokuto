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
    blockNavi = BlockNavi;
    blockNavi.drawTable(tableSize)
});
const arrow = {
    up: '<img src="assets/images/icons8-arrow-40.png" style="transform: rotate(270deg);">',
    down: '<img src="assets/images/icons8-arrow-40.png" style="transform: rotate(90deg);">',
    left: '<img src="assets/images/icons8-arrow-40.png" style="transform: rotate(180deg);">',
    right: '<img src="assets/images/icons8-arrow-40.png" style="transform: rotate(0deg);">'
}

const goalFlag = '<img src="assets/images/checkered-flag.png">';

const direction = {
    up: 0,
    down: 1,
    left: 2,
    right: 3
}
/**
 * ルート1
 */
const drawRouteFirst = () => {
    const route = [
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
    ];
    const goal = {y: 5, x: 2};
    blockNavi.initRoute();
    blockNavi.drawRoute(route, direction.down,  goal);
}
/**
 * ルート2
 */
const drawRouteSecond = () => {
    const route = [
        [1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1],
    ];
    const goal = {y: 5, x: 5};
    blockNavi.initRoute();
    blockNavi.drawRoute(route, direction.right,  goal);
}
/**
 * ルート3
 */
const drawRouteThird = () => {
    const route = [
        [1, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [1, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
    ];
    const goal = {y: 5, x: 5};
    blockNavi.initRoute();
    blockNavi.drawRoute(route, direction.right,  goal);
}
/**
 * ルート3
 */
const drawRouteForth = () => {
    const route = [
        [1, 0, 0, 1, 1, 1],
        [1, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0],
    ];
    const goal = {y: 0, x: 5};
    blockNavi.initRoute();
    blockNavi.drawRoute(route, direction.down,  goal);
}
// テーブル迷路宣言
let blockNavi = null;

// テーブルサイズ
const tableSize = {y: 6, x: 6};

const BlockNavi = {
    outputArea:  document.getElementById('output-area'),
    tableBlock: [],
    cells: [],
    route: [],
    // テーブル描画
    drawTable(size) {
        // テーブルサイズ
        const y = size.y;
        const x = size.x;
        // テーブルテンプレート
        const tableStart = '<table id="block_table" class="table table-bordered" style="border-color: black;"><tbody>';
        const tableEnd = '</tbody></table>'
        let tdTag = '<td id="###,$$$" style="width: 50px; height: 75px; text-align: center; background: #000000" class="align-middle"></td>'
        let tableContent = '';
        // テーブル作成
        for (let i = 0; i < y; i++) {
            tableContent += '<tr>';
            this.tableBlock[i] = [];
                for (let j = 0; j < x; j++) {
                    tableContent += tdTag.replace("###", i).replace("$$$", j);
                    // this.tableBlock[i] = [i + "," + j];
                    // console.log(i + "," + j)
                    this.tableBlock[i][j] = i + "," + j
                }
            tableContent += '</tr>';
        }
        const outputHtml = tableStart + tableContent + tableEnd;
        this.outputArea.innerHTML = outputHtml;
        // セルを配列に格納
        for (let i = 0; i < y; i++) {
            this.cells[i] = []
                for (let j = 0; j < x; j++) {
                    this.cells[i][j] = document.getElementById(this.tableBlock[i][j]);
                }
        }
    },

    getDirectionArrow(targetDirection) {
        switch (targetDirection) {
            case direction.down:
                return arrow.down;
            case direction.up:
                return arrow.up;
            case direction.left:
                return arrow.left;
            case direction.right:
                return arrow.right;
        }
    },
    direction: direction.down,
    arrow: arrow.down,
    // ルートを描画する
    drawRoute(route, targetDirection, goalCell) {
        this.direction = targetDirection;
        this.arrow = this.getDirectionArrow(targetDirection);
        let started = false;
        let goal = null;
        for (let i = 0; i < this.cells.length; i++) {
            let row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                if (route[i][j]) {
                    if (!started) {
                        this.cells[i][j].style.background = "#FFFFFF";
                        this.cells[i][j].innerHTML = this.arrow;
                        started = true;
                    }
                    else {
                        this.cells[i][j].style.background = "#FFFFFF";
                        if (i === goalCell.y && j === goalCell.x) {
                            goal = this.cells[i][j];
                        }
                    }
                }
                else {
                    this.cells[i][j].style.background = "#000000";
                }
            }
        }
        goal.style.background = "aqua";
        goal.innerHTML = goalFlag;
    },
    initRoute() {
        for (let i = 0; i < this.cells.length; i++) {
            let row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                this.cells[i][j].innerHTML = null;
                this.cells[i][j].style.background = "#000000";
            }
        }
    }

}


