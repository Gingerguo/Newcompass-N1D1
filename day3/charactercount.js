let words = process.argv.slice(2)[0];
countLetters(words);

function countLetters(str){
  let characters = {};
  let letter = str.toLowerCase().replace(/\s/g, "").split("");
  console.log(letter);
  for(let j = 0; j < letter.length; j++){
    let cha = letter[j];
    if (characters[cha]){
      characters[cha] += 1;
    }else{
      characters[cha] = 1;
    }
  }
  console.log(characters);
}
