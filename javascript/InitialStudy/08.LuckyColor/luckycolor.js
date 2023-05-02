// // クリック回数
// let term = 0;
// // クリック回数上限
// const maxTerm = 20;
// // 取得した値の最大値からランダムな整数を返します
// const getRandomInt = (max) => {
//     return Math.floor(Math.random() * max);
// }
// // 色名を配列に格納します
// // const colorName = ["青", "緑", "赤", "灰色", "紫", "ピンク"];
// // 色を配列に格納します (要素数は色名と同じ数にしてください。)
// // 色のコードは以下のサイトで確認できます。
// // https://www.colordic.org/
// const color = ["blue", "green", "red", "gray", "purple", "pink"];
// // 横縞カラー出力
// const getLuckyColor = () => {
//     // 色を出力するパネルを取得します
//     const panel = document.getElementById("result");
//     // 上限になったらクリック回数を初期化する
//     if (term === maxTerm) {
//         alert("クリック回数を初期化します。");
//         term = 0;
//         // パネルの中身を消す
//         panel.innerHTML = "";
//         panel.textContent = "初期化しました";
//         return;
//     }
//     term++;
//     // 領域内に出力するhtml
//     let elements = "";
//     // 前の色番号
//     let preColor = 0;
//     for (let i = 0; i <  6 * 14; i++) {
//         // 今回取得する色の番号を取得します。
//         const temp = getRandomInt(color.length);
//         // 前の色と同じ場合はスキップする。
//         if (temp === preColor) {
//             console.log("Skip!!!!!");
//             // 繰り返しを回数を元に戻す
//             i--;
//             // 次の繰り返しへスキップする
//             continue;
//         }
//         // 前の色番号を代入する
//         preColor = temp;
//         // 今回の色番号を出力
//         console.log(temp);
//         // htmlの要素を追加する。
//         elements += '<div style="width: 100%; background:' + color[temp] + '; height:  5px;"></div>'
//     }
//     // パネルの中にhtmlを追加
//     panel.innerHTML = elements;

// }
window.addEventListener('load', (event) => {
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
});
// 取得した値の最大値からランダムな整数を返します
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
const showContents = (value) => {
    const target = document.getElementById("result");
    target.innerHTML = value;
}
