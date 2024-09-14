// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const showText = document.getElementById('text');

// クリックした時にイベントを実行する
clickBtn.addEventListener('click', () => {

  setTimeout(() => {
// 作成したtext要素に「ボタンがクリックされました」というテキストを追加する= text.content
showText.textContent ='ボタンがクリックされました';
}, 2000);
});
  