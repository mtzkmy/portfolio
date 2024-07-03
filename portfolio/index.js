// 監視対象が範囲に現れたら実行する動作
const showsky = () => {
  console.log('あおぞら');
};

// 監視の設定
const skyObserver = new IntersectionObserver(showsky);
