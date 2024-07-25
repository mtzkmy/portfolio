
// // カラーコードを表示するように値を取得
// document.querySelector('#colorText').textContent = `カラーコード:${document.querySelector('#ColorPicker').value}`;

// でも長すぎるので定数宣言
const text = document.querySelector('#colorText');

const picker = document.querySelector('#ColorPicker');



const colorBg = () =>{
  // 選択した色を背景色に設定
document.body.style.backgroundColor = picker.value;

// カラーコードを表示
  text.textContent = `カラーコード: ${picker.value}` ;

// 色の名前も表示するようif文を追加する
if (picker.value === '#ffffff') {
  text.textContent = `カラーコード: ${picker.value} (white)`;
}
};

// 色が選択されたらカラーコードを表示する
picker.addEventListener('input', colorBg);

