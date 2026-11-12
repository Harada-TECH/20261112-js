// body要素にアニメーションを加える
document.body.animate(
  {
    // 背景色を変化させる
    background: ["#fcc", "#f66"]
  },
  {
    // 終了時の状態で止める
    fill: "forwards",
    // 3000ミリ秒（3秒）かけてアニメーション
    duration: 3000
  }
);