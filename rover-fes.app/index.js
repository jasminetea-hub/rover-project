// ひらがなで札幌市の区名を文字ごとに分解
let letters = [
    "あ", "か", "い", "へ", "や", // 「あかいへや」
    "う", "え", "お",
    "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "あ", "か", "い", "へ", "や",
    "は", "ひ", "ふ", "ほ",
    "ま", "み", "む", "め", "も",
    "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん",
    "が", "ぱ", "ゃ", "ゅ", "ょ"
];



// 配列をランダムにシャッフル
letters = letters.sort(() => Math.random() - 0.5);

const container = document.getElementById("lettersContainer");

// 文字ボタン生成
letters.forEach(letter => {
    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.classList.add("letter-button");

    btn.addEventListener("click", () => {
        const input = document.getElementById("inputBox"); // 長方形ボックス
        input.value += letter; // クリックで文字追加
    });

    container.appendChild(btn);
});

// 1文字削除ボタン
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
    const input = document.getElementById("inputBox");
    input.value = input.value.slice(0, -1); // 末尾の1文字を削除
});

// 正解判定関数
function checkInput() {
    const input = document.getElementById("inputBox");
    const answerMessage = document.getElementById('answerMessage');
    const errorMessage = document.getElementById('errorMessage');
    const overlay = document.getElementById('overlay');

    overlay.classList.remove('hidden'); // オーバーレイ表示

    if (input.value === "あかいへや") {
        answerMessage.classList.remove('hidden'); // 正解
        // 音声を再生（1回だけ）
        const audio = document.getElementById("bgmaudio");
        audio.loop = false; // 念のためループを無効化
        audio.currentTime = 0; // 最初から再生
        audio.play().catch(err => {
            console.error("音声再生エラー:", err);
        });
    } else {
        errorMessage.classList.remove('hidden'); // 不正解
    }

    // 5秒後にリロード
    setTimeout(() => location.reload(), 5000);
}