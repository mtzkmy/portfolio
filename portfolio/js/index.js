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


