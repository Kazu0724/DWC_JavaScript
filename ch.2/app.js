let hello = 'Hello World';
alert(hello);

// 変数に代入できるコードの例
// let int1 = 1;
// alert(int1);

// let int2 = -10;
// alert(int2);

// let float1 = 3.14;
// alert(float1);

// let str1 = 'JavaScriptを覚えよう';
// alert(str1);


// 四則演算
// alert(4 + 3);

// alert(8 - 5);

// alert(2 * 6);

// alert(10 / 2);

// alert('Hello' + 'World');

// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);


// 条件分岐
let orange = 100;
let apple = 120;

if (orange < apple){
  alert('みかんの値段がりんごより安い');
} else if (orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}


// 繰り返し処理
// while文
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + "回です");

// for文
let i;
let num1 = 0;

for(i = 1; i < 11; i++){
  num1 = num1 + i;
}

alert('1から10までの足し算をした結果は' + num1 + 'です');

let i2;
let num2 = 0;

for(i2 = 1; i2 < 11; i2++){
  num2 = num2 - i2;
}

alert('1から10までの引き算をした結果は' + num2 + 'です');

let i3;
let num3 = 0;

for(i3 = 1; i3 < 11; i3++){
  num3 = num3 * i3;
}

alert('1から10までの掛け算をした結果は' + num3 + 'です');

let i4;
let num4 = 0;

for(i4 = 1; i4 < 11; i4++){
  num4 = num4 / i4;
}

alert('1から10までの割り算をした結果は' + num4 + 'です');