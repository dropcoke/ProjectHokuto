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

    playMySynth = PlayMySynth;
    playMySynth.outputArea = document.getElementById('note_map');
    playMySynth.drawTable();

});

const noteMap = [
    ["ド", "レ", "ミ", "ファ", "ソ", "ラ", "シ"],
    ["playC1();", "playD1();", "playE1();", "playF1();", "playG1();", "playA1();", "playB1();"],
    ["ド+1", "レ+1", "ミ+1", "ファ+1", "ソ+1", "ラ+1", "シ+1"],
    ["playC2();", "playD2();", "playE2();", "playF2();", "playG2();", "playA2();", "playB2();"],
    ["ド+2", "レ+2", "ミ+2", "ファ+2", "ソ+2", "ラ+2", "シ+2"],
    ["playC3();", "playD3();", "playE3();", "playF3();", "playG3();", "playA3();", "playB3();"],
]

const keyColor = ["steelblue", "aquamarine", "hotpink", "gold", "rosybrown", "darkviolet", "salmon"];
const createTable = () => {
    const tableStart = '<table id="block_table" class="table table-bordered" style="border-color: black;"><tbody>';
    const tableEnd = '</tbody></table>';
    let tdTag = '<td id="###,$$$" style="width: 75px; height: 75px; text-align: center; background: #000000" class="align-middle"></td>';
    let tableContent = '';
    for (let i = 0; i < tableCells.length; i++) {
        for (let j = 0; i < tableCells[i].length; j++) {

        }
    }
}


let playMySynth = null;
let sound = 4;
const startSound = (oscillator, note = 0, length = 1) => {
    // console.log(playMySynth);
    playMySynth.playSound(oscillator, note, length);
}
const stopSound = () => {
    playMySynth.stopSound();
    for(let waiting of playMySynth.waiting) {
        clearTimeout(waiting);
    }

}
let noteLength = 0.5;
const playC1 = () => {
    startSound(sound, 8, noteLength);
    playMySynth.markNote(0, 0, noteLength);
}
const playD1 = () => {
    startSound(sound, 9, noteLength);
    playMySynth.markNote(0, 1, noteLength);
}
const playE1 = () => {
    startSound(sound, 10, noteLength);
    playMySynth.markNote(0, 2, noteLength);
}
const playF1 = () => {
    startSound(sound, 11, noteLength);
    playMySynth.markNote(0, 3, noteLength);
}
const playG1 = () => {
    startSound(sound, 12, noteLength);
    playMySynth.markNote(0, 4, noteLength);
}
const playA1 = () => {
    startSound(sound, 13, noteLength);
    playMySynth.markNote(0, 5, noteLength);
}
const playB1 = () => {
    startSound(sound, 14, noteLength);
    playMySynth.markNote(0, 6, noteLength);
}
const playC2 = () => {
    startSound(sound, 15, noteLength);
    playMySynth.markNote(2, 0, noteLength);
}
const playD2 = () => {
    startSound(sound, 16, noteLength);
    playMySynth.markNote(2, 1, noteLength);
}
const playE2 = () => {
    startSound(sound, 17, noteLength);
    playMySynth.markNote(2, 2, noteLength);
}
const playF2 = () => {
    startSound(sound, 18, noteLength);
    playMySynth.markNote(2, 3, noteLength);
}
const playG2 = () => {
    startSound(sound, 19, noteLength);
    playMySynth.markNote(2, 4, noteLength);
}
const playA2 = () => {
    startSound(sound, 20, noteLength);
    playMySynth.markNote(2, 5, noteLength);
}
const playB2 = () => {
    startSound(sound, 21, noteLength);
    playMySynth.markNote(2, 6, noteLength);
}
const playC3 = () => {
    startSound(sound, 22, noteLength);
    playMySynth.markNote(4, 0, noteLength);
}
const playD3 = () => {
    startSound(sound, 23, noteLength);
    playMySynth.markNote(4, 1, noteLength);
}
const playE3 = () => {
    startSound(sound, 24, noteLength);
    playMySynth.markNote(4, 2, noteLength);
}
const playF3 = () => {
    startSound(sound, 25, noteLength);
    playMySynth.markNote(4, 3, noteLength);
}
const playG3 = () => {
    startSound(sound, 26, noteLength);
    playMySynth.markNote(4, 4, noteLength);
}
const playA3 = () => {
    startSound(sound, 27, noteLength);
    playMySynth.markNote(4, 5, noteLength);
}
const playB3 = () => {
    startSound(sound, 28, noteLength);
    playMySynth.markNote(4, 6, noteLength);
}
const PlayMySynth = {
    outputArea: null,
    tableBlock: [],
    cells: [],
    keyOn: false,
    noteWaiting: [],
    currentNoteLength: 0,
    getCellElemet(y, x) {
        return document.getElementById(y + "," + x);
    },
    currentNotCell: {y: 0, x: 0},
    markNote(y, x, length) {
        if (this.keyOn) {
            this.noteWaiting.push(setTimeout(() => {this.markNote(y, x, length);}, this.currentNoteLength));
            this.currentNoteLength = length * 1000;
            return;
        }
        this.keyOn = true;
        this.getCellElemet(y, x).style.background = keyColor[x];
        this.currentNotCell = {y: y, x: x};
        setTimeout(() => {
            this.getCellElemet(this.currentNotCell.y, this.currentNotCell.x).style.background = 'white';
            this.keyOn = false;}, length * 1000);
        this.currentNoteLength = length * 1000;
    },
    drawTable() {
        // テーブルサイズ
        let y = noteMap.length;
        let x = noteMap[0].length;
        // テーブルテンプレート
        const tableStart = '<table id="block_table" class="table table-bordered" style="border-color: black;"><tbody>';
        const tableEnd = '</tbody></table>';
        let tdTag = '<td id="###,$$$" class="align-middle text-center">@@@</td>';
        let tableContent = '';
        // テーブル作成
        for (let i = 0; i < y; i++) {
            tableContent += '<tr>';
            this.tableBlock[i] = [];
                for (let j = 0; j < x; j++) {
                    tableContent += tdTag.replace("###", i).replace("$$$", j).replace("@@@", noteMap[i][j]);
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
                        if (y % 2 != 0) {
                            eval(target.innerText)
                        }
                        else {
                            const playCellId = [y + 1, x];
                            const playCell = document.getElementById(playCellId.join(','));
                            eval(playCell.innerText);
                        }

                    });
                }
        }
    },
    synth:  new MySynth(),
    playing: false,
    waiting: [],
    currentLength: 0,
    playSound(oscillator, note = 0, length = 1) {
        const volume = 1;
        const oscillatorTypes = ['sine', 'square', 'sawtooth', 'triangle'];
        // 音階を周波数に設定
        notes = {'C1': 65.4,
        'D1': 73.41,
        'E1': 82.4,
        'F1': 87.3,
        'G1': 97.99,
        'A1': 110,
        'B1':123.47,
        'C2':130.81,
        'D2':146.83,
        'E2':164.81,
        'F2':174.61,
        'G2':195.99,
        'A2':220,
        'B2':246.94,
        'C3':261.62,
        'D3':293.66,
        'E3':329.62,
        'F3':349.22,
        'G3':391.99,
        'A3':440,
        'B3':493.88,
        'C4':523.25,
        'D4':587.33,
        'E4':659.25,
        'F4':698.45,
        'G4':783.99,
        'A4':880,
        'B4':987.76,
        };
        // 音階
        keys = ['C1',
            'D1',
            'E1',
            'F1',
            'G1',
            'A1',
            'B1',
            'C2',
            'D2',
            'E2',
            'F2',
            'G2',
            'A2',
            'B2',
            'C3',
            'D3',
            'E3',
            'F3',
            'G3',
            'A3',
            'B3',
            'C4',
            'D4',
            'E4',
            'F4',
            'G4',
            'A4',
            'B4',
            ];
        if (note <= 0 || note > keys.length){
            throw new Error('その音程はありません' + note);
        }
        if (oscillator <= 0 || oscillator > oscillatorTypes.length){
            throw new Error('その音程はありません');
        }
        if (this.playing) {
            this.waiting.push(setTimeout(() => {this.playSound(oscillator, note, length);}, this.currentLength));
            this.currentLength = length * 1000;
        } else {
            // console.log(volume);
            // console.log(keys[note - 1]);
            // console.log(oscillatorTypes[oscillator - 1]);
            // console.log(this.currentLength);
            this.synth.play(-10, notes[keys[note - 1]], oscillatorTypes[oscillator - 1]);
            setTimeout(() => {this.stopSound();}, length * 1000);
            this.currentLength = length * 1000;
            this.playing = true;
        }
    },
    stopSound() {
        // console.log("stop")
        this.synth.stop();
        this.playing = false;
    }
}

