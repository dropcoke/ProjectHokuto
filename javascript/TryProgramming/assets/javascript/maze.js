const arrow = {
    up: '<img src="assets/images/icons8-arrow-40.png" style="transform: rotate(270deg);">',
    down: '<img src="assets/images/icons8-arrow-40.png" style="transform: rotate(90deg);">',
    left: '<img src="assets/images/icons8-arrow-40.png" style="transform: rotate(180deg);">',
    right: '<img src="assets/images/icons8-arrow-40.png" style="transform: rotate(0deg);">'
}

const goalFlag = '<img src="assets/images/checkered-flag.png">';

const direction = {
    up: 0,
    down: 180,
    left: 270,
    right: 90
}
const turnDirection = {
    left: -90,
    right: 90
}
/**
 * ルート1
 */
const drawRouteFirst = () => {
    const route = [
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
    ];
    const start = {y: 6, x: 3};
    const goal = {y: 0, x: 3};
    blockNavi.initRoute();
    blockNavi.init(route, direction.up, start, goal);
}
/**
 * ルート2
 */
const drawRouteSecond = () => {
    const route = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
    ];
    const start = {y: 6, x: 3};
    const goal = {y: 3, x: 6};
    blockNavi.initRoute();
    blockNavi.init(route, direction.up, start, goal);
}
/**
 * ルート3
 */
const drawRouteThird = () => {
    const route = [
        [0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 0],

    ];
    const start = {y: 6, x: 0};
    const goal = {y: 0, x: 6};
    blockNavi.initRoute();
    blockNavi.init(route, direction.right, start, goal);
}
/**
 * ルート3
 */
const drawRouteForth = () => {
    const route = [
        [1, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0],
    ];
    const start = {y: 0, x: 0};
    const goal = {y: 6, x: 6};
    blockNavi.initRoute();
    blockNavi.init(route, direction.up, start, goal);
}
// テーブル迷路宣言
let blockNavi = null;
/**
 * 前に進む
 */
const moveForward = () => {
    blockNavi.move();
}
/**
 * 左に曲がる
 */
const turnLeft = () => {
    blockNavi.turn(turnDirection.left);
}
/**
 * 右に曲がる
 */
const turnRight = () => {
    blockNavi.turn(turnDirection.right);
}
/**
 * 元に戻す
 */
const reset = () => {
    $('#modalError').hide();
    blockNavi.initRoute();
    blockNavi.reset();
}

let stepLength = 800;

const BlockNavi = {
    elementId: 'block_table',
    element: null,
    outputArea: null,
    tableBlock: [],
    cells: [],
    route: [],
    selectedCell: {y:0, x: 0},
    getSelectedElement() {
        return document.getElementById(this.selectedCell.y + "," + this.selectedCell.x);
    },
    isSelected: false,
    // テーブル描画
    drawTable(size) {
        // テーブルサイズ
        const y = size.y;
        const x = size.x;
        // テーブルテンプレート
        const tableStart = '<table id="block_table" class="table table-bordered" style="border-color: black;"><tbody>';
        const tableEnd = '</tbody></table>';
        let tdTag = '<td id="###,$$$" style="width: 75px; height: 75px; text-align: center; background: #000000" class="align-middle"></td>';
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
                    this.cells[i][j].addEventListener('click', (e) => {
                        let target = e.target;
                        if(!e.target.id) {
                            target = e.target.parentElement;
                        }
                        const position = target.id.split(",");
                        const y = Number(position[0]);
                        const x = Number(position[1]);
                        if (this.route[position[0]][position[1]]) {
                            // this.getSelectedElement().style.background = "white";
                            // this.selectedCell = {y: y, x: x}
                            // target.style.background = 'aliceblue';
                            // this.isSelected = true;
                            this.changeSelectElement(y, x);

                        }
                    });
                }
        }
    },
    setDirectionArrow() {
        switch (this.direction) {
            case direction.down:
                this.arrow = arrow.down;
                break;
            case direction.up:
                this.arrow = arrow.up;
                break;
            case direction.left:
                this.arrow = arrow.left;
                break;
            case direction.right:
                this.arrow = arrow.right;
                break;
        }
    },
    startDirection: direction.down,
    direction: direction.down,
    arrow: arrow.down,
    route: null,
    /**
     * スタート
     * @param {} route
     * @param {*} targetDirection
     * @param {*} startCell
     * @param {*} goalCell
     */
    init (route, targetDirection, startCell, goalCell) {
        this.startDirection = targetDirection;
        this.start = startCell;
        this.drawRoute(route, targetDirection, startCell, goalCell);
        this.move();
        this.initRoute();
        this.reset();
    },
    /**
     * 初期化
     */
    reset () {
        this.finished = false;
        this.out = false;
        this.step = 0;
        this.moving = true;
        setTimeout(() => {this.moving = false;}, stepLength);
        this.drawRoute(this.route, this.startDirection, this.start, this.goal);
    },
    // ルートを描画する
    drawRoute(route, targetDirection, startCell, goalCell) {
        this.totalStep = 0;
        this.route = route;
        this.goal = goalCell;
        this.direction = targetDirection;
        this.setDirectionArrow();
        for (let i = 0; i < this.cells.length; i++) {
            let row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                if (route[i][j]) {
                    if (i === goalCell.y && j === goalCell.x) {
                        this.cells[i][j].style.background = "aqua";
                        this.cells[i][j].innerHTML = goalFlag;
                    }
                    else if (i === startCell.y && j === startCell.x) {
                        this.cells[i][j].style.background = "#FFFFFF";
                        this.cells[i][j].innerHTML = this.arrow;
                        // 現在の位置
                        this.current = {y: i, x: j};
                    }
                    else {
                        this.cells[i][j].style.background = "#FFFFFF";
                    }
                    this.totalStep++;
                }
                else {
                    this.cells[i][j].style.background = "#000000";
                }
            }
        }
    },
    initRoute() {
        for (let i = 0; i < this.cells.length; i++) {
            let row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                this.cells[i][j].innerHTML = null;
                this.cells[i][j].style.background = "#000000";
            }
        }
    },
    totalStep: 0,
    step: 0,
    current: {y: 0, x: 0},
    getCurrentElement() {
        return document.getElementById(this.current.y + "," + this.current.x);
    },
    start: {y: 0, x: 0},
    getStartElement() {
        return document.getElementById(this.start.y + "," + this.start.x);
    },
    goal: {y: 0, x: 0},
    getGoalElement() {
        return document.getElementById(this.goal.y + "," + this.goal.x);
    },
    // 正しい場所かチェック
    collect() {
        return true;
    },
    // 到着チェック
    arrived() {
        if(this.current.y === this.goal.y && this.current.x === this.goal.x) {
            this.getGoalElement().innerHTML = goalFlag;
            $('#goalModal').modal('toggle');
            this.finished = true;
            return true;
        }
        return false;
    },
    turn(target) {
        if (this.moving) {
            this.waiting.push(setTimeout(() => {this.turn(target);}, this.currentLength));
            this.currentLength = stepLength + 10;
            return
        }
        let direction = this.direction + target;
        if (direction < 0) {
            direction = direction + 360
        }
        if (direction == 360) {
            direction = 0;
        }
        this.direction = direction;
        this.setDirectionArrow();
        this.moving = true;
        this.getCurrentElement().innerHTML = this.arrow;
        setTimeout(() => {this.moving = false;}, stepLength);
    },
    moving: false,
    waiting: [],
    currentLength: 1000,
    out: false,
    finished: false,
    move() {
        if (this.out) {
            return;
        }
        if (this.moving) {
            this.waiting.push(setTimeout(() => {this.move();}, this.currentLength));
            this.currentLength = stepLength + 10;
            return
        }
        this.getGoalElement().innerHTML = null;
        let y = this.current.y;
        let x = this.current.x;
        if (this.direction === direction.up) {
            y -= 1;
            if (y < 0) {
                this.out = true;
            }
        }
        else if (this.direction === direction.down) {
            y += 1;
            if (y > this.route.length) {
                this.out = true;
            }
        }
        else if (this.direction === direction.left) {
            x -= 1;
            if (x < 0) {
                this.out = true;
            }
        }
        else if (this.direction === direction.right) {
            x += 1;
            if (x > this.route[y].length) {
                this.out = true;
            }
        }
        // 行き先が経路にない場合はNG
        if (!this.route[y]) {
            this.out = true;
        }
        else if (!this.route[y][x]) {
            this.out = true;
        }
        if (this.finished && this.out) {
            $('#modalError').show();
            return;
        }
        else if (this.out) {
            $('#noWayModal').modal('toggle');
            return;
        }

        this.getCurrentElement().innerHTML = null;
        this.current = {y: y, x: x};
        this.currentLength = stepLength + 10;
        this.moving = true;
        if (!this.arrived()) {
            this.getCurrentElement().innerHTML = this.arrow;
        }
        setTimeout(() => {this.moving = false;}, stepLength);
    },
    // 選択セル変更
    changeSelectElement(y ,x) {
        if (this.isSelected) {
            if (this.goal.y == this.selectedCell.y && this.goal.x == this.selectedCell.x) {
                this.getSelectedElement().style.background = "aqua";
            }
            else {
                this.getSelectedElement().style.background = "white";
            }
        }
        this.selectedCell = {y: y, x: x};
        this.getSelectedElement().style.background = 'wheat';
        this.isSelected = true;
    },
    onArrowKey(e) {
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
                if (y > this.route.length) {
                    return;
                }
            }
            else if (e.code == 'ArrowRight') {
                x = x + 1;
                if (x > this.route[y].length) {
                    return;
                }
            }
            else if (e.code == 'ArrowLeft') {
                x = x - 1;
                if (x < 0) {
                    return;
                }
            }
            if (!this.route[y]) {
                return;
            }
            else if (!this.route[y][x]) {
                return;
            }
            this.changeSelectElement(y, x);
        }
    }
}