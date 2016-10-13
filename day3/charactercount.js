let words = process.argv.slice(2);
console.log(words);
countLetters(words);

function countLetters(str){
  let characters = {};
  let letter;
  let count;
  for(let i = 0; i < str.length; i++){
    letter = str[i].toLowerCase().replace(/\s/g, "").split("");
    for(let j = 0; j < letter.length; j++){
      let cha = words[0].charAt(j);
      if (characters[cha]){
        count ++;
      }else{
        count = 1;
      }
      characters[letter[j]] = count;
    }
    console.log(characters);
  }
}
