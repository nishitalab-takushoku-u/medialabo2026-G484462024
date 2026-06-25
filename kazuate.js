// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let fin=false;
let yoso;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu++;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  yoso=Number(document.querySelector("#yoso").value);
  document.querySelector("#yosonum").textContent=kaisu+"回目の予想:"+yoso;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  let p=document.querySelector("#result");

  if(fin||kaisu>=4){
    document.querySelector("#result").textContent=
    "答えは"+kotae+"でした.すでにゲームは終わっています";
    return;
  }

  if(yoso===kotae){
    p.textContent="正解です.おめでとう!";
    fin=true;
  }
  else if(kaisu===3){
    p.textContent="まちがい.残念でした答えは"+kotae+"です.";
    fin=true;
  }
  else if(yoso<kotae){
    p.textContent="まちがい.答えはもっと大きいですよ";
  }
  else{
    p.textContent="まちがい.答えはもっと小さいですよ";
  }
}
// ここまで: 正解判定する

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b=document.querySelector("#btn");
b.addEventListener("click",hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
