// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新

  kaisu = kaisu + 1;

  let c = document.querySelector('span#kaisu');

  c.textContent = kaisu;

  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  

  // ここから: テキストボックスに指定された数値を yoso に代入する

  let g = document.querySelector('input[name="yosou"]');

  let yoso = Number(g.value);

  // ここまで: テキストボックスに指定された数値を yoso に代入する
  

  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する

  let f = document.querySelector('p#result');

  // 1〜10以外
  if (yoso < 1 || yoso > 10) {

    f.textContent =
      '1から10の間の整数を入力してください。';
  }

  // 4回以上
  else if (kaisu >= 4) {

    f.textContent =
      '答えは ' + kotae + ' でした。すでにゲームは終わっています。';
  }

  // 正解
  else if (yoso === kotae) {

    f.textContent =
      '正解です。おめでとう！';

    kaisu = 4;
  }

  // 3回目で失敗
  else if (kaisu === 3) {

    f.textContent =
      'まちがい。残念でした。答えは ' + kotae + ' です。';
  }

  // 答えの方が大きい
  else if (yoso < kotae) {

    f.textContent =
      'まちがい。答えはもっと大きいですよ';
  }

  // 答えの方が小さい
  else {

    f.textContent =
      'まちがい。答えはもっと小さいですよ';
  }

  // ここまで: 正解判定する
}


// ここから: ボタンを押した時のイベントハンドラとして hantei を登録

let b = document.querySelector('button#kai');

b.addEventListener('click', hantei);

// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録