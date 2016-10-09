var myArgs = process.argv.slice(2);
console.log(myArgs);
function obfuscate(password){
  var newPass = password.replace(/a/gi, "4" || /e/gi, "3" || /l/gi, "1" || /o/gi, "0");
  //Regex g means global find all matches not just the first match; i means case-insensitive
  return newPass;
}

obfuscate(myArgs);
