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
});

const drawBlockArea = (y, x) => {
    const tableStart = '<table class="table bordered"><tbody>';
    const tableEnd = '</tbody></table>'
    let tdTag = '<td>&nbsp;</td>'
    let tableContent = '';
    for (let i = 0; i < y; i++) {
        tableContent += '<tr>';
            for (let j = 0; j < x; j++) {
                tableContent += tdTag;
            }
        tableContent += '</tr>';
    }
    const outputHtml = tableStart + tableContent + tableEnd;
    document.getElementById('output-area').innerHTML = outputHtml;
}
let synth = new MySynth();
let playing = false;
let waiting = null;
let currentLength = 0;

const startSound = (oscillator = 1, note = 0, volume = 100, length = 1) => {

}
const playSound = (oscillator, note = 0, length = 1) => {
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
    if (playing) {
        waiting = setTimeout(() => {playSound(oscillator, note, length);}, currentLength);
        currentLength = length * 1000 + 10;
    } else {
        console.log(volume);
        console.log(keys[note - 1]);
        console.log(oscillatorTypes[oscillator - 1]);
        console.log(currentLength);


        synth.play(1, notes[keys[note - 1]], oscillatorTypes[oscillator - 1]);
        setTimeout(stopSound, length * 1000);
        currentLength = length * 1000 + 10;
        // clearInterval(waiting);
        playing = true;
    }


}
const stopSound = () => {
    console.log("stop")
    synth.stop();
    playing = false;
}