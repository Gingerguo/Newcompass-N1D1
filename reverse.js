var words = process.argv.slice(2);
function reverse(str){
  newStr = "";
  for(var i = str.length - 1 ; i >= 0 ; i--){
    // var chara = str.charAt(i);
    newStr += str[i];
  }
  return newStr;
}
var b = reverse(words.split(""));
console.log(b);
