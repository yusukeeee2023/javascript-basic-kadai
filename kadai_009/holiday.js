// holidaysを出力するには const と　console.log(holidays)が必要
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]
console.log(holidays)

// インデックスが０から始まるので正月から勤労感謝の日まで０〜１６という意味
let num = Math.floor(Math.random() * 16);

  for (let i = 0; i <+ 16; i++) {
    console.log(holidays[i]);
  }
let i = 0;
  // 16回繰り返し処理を行う
  while (i < holidays.length) {
    console.log(holidays[i]);
    // iが一つずつ増える処理
    i++;
  }



  