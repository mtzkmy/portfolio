// 監視対象が範囲に現れたら実行する動作
const showsky = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['0 0', 0],
  }
entries[0].target.animate(keyframes, 3000);


};

// 監視の設定
const skyObserver = new IntersectionObserver(showsky);

// skyを監視するように指示
skyObserver.observe(document.querySelector('#sky'));

// footer画像のアニメーション
// .itemの配列要素を個別に取得
const imgItem = document.querySelectorAll('.item');

for(let i = 0; i < imgItem.length; i++){
  const keyframes = {
    // 定数keyframesで画像の透明度を指定する
    opacity: [0, 1],
  };

// 再生時間の指定
  const option = {
    duration: 800,
  // fill: 'forwards'はキーフレームの状態を保持するという意味
    fill: 'forwards',
  };
imgItem[i].animate(keyframes, option);
}
