var myArgs = process.argv.slice(2);
// console.log(myArgs);
// function obfuscate(password){
//   var newPass = password.replace(/a/gi, "4" || /e/gi, "3" || /l/gi, "1" || /o/gi, "0");
//   //Regex g means global find all matches not just the first match; i means case-insensitive
//   return newPass;
// }
//
var newPass = "";
function obfuscate(password){
  for (var i = 0; i < password.length; i++){
    var chara = password.charAt(i);
    if ( chara === "a" ){
      newPass += 4;
    }else if ( chara === "e"){
      newPass += 3;
    }else if ( chara === "o"){
      newPass += 0;
    }else if ( chara === "l") {
      newPass += 1;
    }else {
      newPass += chara;
    }
  }
  return newPass;
}

obfuscate(myArgs);
