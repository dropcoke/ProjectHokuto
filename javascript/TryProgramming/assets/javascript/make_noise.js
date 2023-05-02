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
});


let playMySynth = null;
let sound = 4;
const startSound = (oscillator, note = 0, length = 1) => {
        playMySynth = PlayMySynth;
    // console.log(playMySynth);
    playMySynth.playSound(oscillator, note, length);
}
const stopSound = () => {
    playMySynth.stopSound();
    for(let waiting of playMySynth.waiting) {
        clearTimeout(waiting);
    }

}
let noteLength = 1;
const playC1 = () => {
    startSound(sound, 8, noteLength);
}
const playD1 = () => {
    startSound(sound, 9, noteLength);
}
const playE1 = () => {
    startSound(sound, 10, noteLength);
}
const playF1 = () => {
    startSound(sound, 11, noteLength);
}
const playG1 = () => {
    startSound(sound, 12, noteLength);
}
const playA1 = () => {
    startSound(sound, 13, noteLength);
}
const playB1 = () => {
    startSound(sound, 14, noteLength);
}
const playC2 = () => {
    startSound(sound, 15, noteLength);
}
const playD2 = () => {
    startSound(sound, 16, noteLength);
}
const playE2 = () => {
    startSound(sound, 17, noteLength);
}
const playF2 = () => {
    startSound(sound, 18, noteLength);
}
const playG2 = () => {
    startSound(sound, 19, noteLength);
}
const playA2 = () => {
    startSound(sound, 20, noteLength);
}
const playB2 = () => {
    startSound(sound, 21, noteLength);
}
const playC3 = () => {
    startSound(sound, 22, noteLength);
}
const playD3 = () => {
    startSound(sound, 23, noteLength);
}
const playE3 = () => {
    startSound(sound, 24, noteLength);
}
const playF3 = () => {
    startSound(sound, 25, noteLength);
}
const playG3 = () => {
    startSound(sound, 26, noteLength);
}
const playA3 = () => {
    startSound(sound, 27, noteLength);
}
const playB3 = () => {
    startSound(sound, 28, noteLength);
}
const PlayMySynth = {
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
            this.currentLength = length * 1000 + 10;
        } else {
            console.log(volume);
            console.log(keys[note - 1]);
            console.log(oscillatorTypes[oscillator - 1]);
            console.log(this.currentLength);
            this.synth.play(-10, notes[keys[note - 1]], oscillatorTypes[oscillator - 1]);
            setTimeout(() => {this.stopSound();}, length * 1000);
            this.currentLength = length * 1000 + 10;
            this.playing = true;
        }
    },
    stopSound() {
        console.log("stop")
        this.synth.stop();
        this.playing = false;
    }
}

