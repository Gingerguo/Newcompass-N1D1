let words = process.argv.slice(2)[0];
console.log(words);
IndeiceWords(words);

function IndeiceWords(str){
  let characters = {};
  let count;
  let letters = str.toLowerCase().replace(/\s/g,"").split("");
  console.log(letters);
  for (let i = 0; i < letters.length; i++){
    let cha = letters[i];
    if(characters[cha]){
      characters[cha].push(Number(i));
    }else{
      characters[cha] = [Number(i)];
    }
  }
  console.log(characters);
}
