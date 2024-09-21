// 変数の初期化
let typed = '';
let untyped = '';
let score = 0;

// 必要なHTML要素の取得(document.HTML要素名)→ブラウザに表示される文字が表示される
// 例）getElementById()：HTML要素をidで取得する
// 　　getElementsByClassName()：HTML要素をclassで取得する
// 　　querySelector()：HTML要素をCSSセレクタで取得する（最初の１つ）
// 　　querySelectorAll()：HTML要素をCSSセレクタで取得する（すべて）
const typedfield = document.getElementById('typed');
const untypedfield = document.getElementById('untyped');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');

// 複数のテキストを格納する配列
const textLists = [
  'Hello World','This is my App','How are you?',
   'Today is sunny','I love JavaScript!','Good morning',
   'I am Japanese','Let it be','Samurai',
   'Typing Game','Information Technology',
   'I want to be a programmer','What day is today?',
   'I want to build a web app','Nice to meet you',
   'Chrome Firefox Edge Safari','machine learning',
   'Brendan Eich','John Resig','React Vue Angular',
   'Netscape Communications','undefined null NaN',
   'Thank you very much','Google Apple Facebook Amazon',
   'ECMAScript','console.log','for while if switch',
   'var let const','Windows Mac Linux iOS Android',
   'programming'
];

// ランダムなテキストを表示
const createText = () => {

  typed = '';
  typedfield.textContent = typed;

  // ランダムな数値を取得するメソッド(ブラウザを読み込むたびに、０〜２の間でランダムな整数値を取得できる)
  // Math.randomは０〜0.99999..、textlists.lengthは３。Math.floorは切り捨ての数。よって0~2の数値が取得できる仕組み。
  // console.log(Math.floor(Math.random() * textLists.length));
  let random = Math.floor(Math.random() * textLists.length);
  // 配列textListsのrandomをuntypedに代入する
  untyped = textLists[random];
  // 変数untypedを定数untypedfieldのtextContntプロパティに代入する
  untypedfield.textContent = untyped;
};

// キー入力の判定
const keyPress = e => {
  // 誤タイプの場合
  if(e.key !== untyped.substring(0,1)) {
    wrap.classList.add('mistyped');
    setTimeout(() => {
      wrap.classList.remove('mistyped');
    }, 100);
    return;
  }

  // 正タイプの場合
  // スコアのインクリメント
  score++;
  wrap.classList.remove('mistyped');
  // 変数untypedの先頭文字を取得し、変数typedの末尾に追加する
  typed += untyped.substring(0,1);
  // 変数untypedに2文字目以降の文字列を再代入する（変数untypedの先頭文字を削除する）
  untyped = untyped.substring(1);
  // 定数typedfieldのtextContentプロパティに変数typedを代入する
  typedfield.textContent = typed;
  // 定数untypedfieldのtextContentプロパティに変数untypedを代入する
  untypedfield.textContent = untyped;

  // テキストがなくなったら新しいテキストを表示
  if(untyped === '') {
    createText();
  }

};

// タイピングスキルのランクを判定
const rankCheck = score => {
  // テキストを格納する変数を作る
  let text = '';
  // スコアに応じて異なるメッセージを変数textに格納する
  if(score < 100) {
    text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
  }else if(score < 200) {
    text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;    
  } else if(score < 300) {
    text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;    
  } else if(score >= 300) {
    text = `あなたのランクはSです。\nおめでとうございます!`;    
  }
 
  // 生成したメッセージと一緒に文字列を返す
  return `${score}文字打てました!\n${text}\n【OK】リトライ / 【キャンセル】終了`;
};

// ゲーム修了
const gameOver = id => {
  clearInterval(id);
  const result = confirm(rankCheck(score));

  // OKボタンをクリックされたらリロードする
  if(result == true) {
    window.location.reload();
  }
};

// カウントダウンタイマー
const timer = () => {
  // タイマー部分のHTML要素（p要素）を取得する
  let time = count.textContent;

  const id = setInterval(() => {
    // カウントダウンする
    time--;
    count.textContent = time;

    // カウントが０になったらタイマーを停止する
    if(time <= 0) {
      gameOver(id);
    }
    // １秒間
  }, 1000);
};


// ゲームスタート時の処理
start.addEventListener('click', () => {
  // カウントタイマーを開始する
  timer();

  // ランダムなテキスト表示する
  createText();
  // 「スタート」ボタンを非表示にする
  start.style.display = 'none';

  // キーボードのイベント処理
  document.addEventListener('keypress', keyPress);
});

untypedfield.textContent = 'スタートボタンで開始'