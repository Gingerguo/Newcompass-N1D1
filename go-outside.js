var raining = false;
var temperature = 42;

if(raining){
  console.log("Do not forget your umbrella");
}

if(temperature < 15){
  console.log('Make sure you pick a scarf!');
} else if (temperature < 15){
  console.log("Short sleeves won't cut it!");
} else {
  console.log('Short sleeves are fine.');
}

if (temperature < -40 || temperature > 40){
  console.log('Maybe going outside is not a great idea...');
}

if (!raining){
  console.log("leave your umbrella at home!");
}

console.log('Now you are ready to go outside!');
