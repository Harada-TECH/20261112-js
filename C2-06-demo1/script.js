// ボタンの定義
const btn = document.getElementById("btn");

// メッセージの表示を定義
const message = () => {
  alert("JavaScriptって楽しいね！");
};

// イベント
btn.addEventListener("click", message);