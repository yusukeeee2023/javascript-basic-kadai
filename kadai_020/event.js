// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const showText = document.getElementById('text');

// クリックした時にイベントぞ実行する
clickBtn.addEventListener('click', () => {
  // イベント実行時にtext要素を作成する
  const showText = document.createElement('text');
  // 作成したh２要素に「ボタンがクリックされました」というテキストを追加する= text.content
  text.textContent ='ボタンがクリックされました';
});