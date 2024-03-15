const before_text = document.getElementById("before_text");
const after_text = document.getElementById("after_text");
//テキスト変換関数   
function text_replace() {
    
//入力されたテキストを取得（letで宣言しよう）。 ..①
let text_value = before_text.value;
    
//テキストを変換 ..②
text_value = text_value.replace(/かも/g,"⬛︎⬛︎");
text_value = text_value.replace(/カモ/g,"⬛︎⬛︎");
text_value = text_value.replace(/ｶﾓ/g,"⬛︎⬛︎");
text_value = text_value.replace(/kamo/g,"⬛︎⬛︎⬛︎⬛︎");
text_value = text_value.replace(/Kamo/g,"⬛︎⬛︎⬛︎⬛︎");
text_value = text_value.replace(/KAMO/g,"⬛︎⬛︎⬛︎⬛︎");

//変換後のテキストエリアに表示 ..③
after_text.value = text_value;
}
