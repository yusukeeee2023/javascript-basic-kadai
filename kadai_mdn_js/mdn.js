const specificDate = new Date(2023, 7, 22);  // 月は0-11の範囲なので4は5月を指す
const year = specificDate.getFullYear();
const month = specificDate.getMonth() +1;
const day = specificDate.getDate();

const formattedDate = year + '年' + month + '月' + day + '日';
console.log(formattedDate);
