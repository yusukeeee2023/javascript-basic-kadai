// 変数numに任意を整数を代入する
let num = 15;

// numを3で割った余りが0であるかどうかを判定することで、numが3の倍数かどうかを確認可能。
if (num % 3 === 0 && num % 5 === 0) {
  console.log('３と５の倍数です');
}

// numが５の倍数なら’５の倍数です’と出力する
else if (num % 5 === 0) {
  console.log('５の倍数です');
}

// numが３と５の倍数なら’３と５の倍数です’と出力する
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

else {
  console.log(num);
}