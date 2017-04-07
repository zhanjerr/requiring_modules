function weather (){
  return weatherGenerator();
}

function weatherGenerator () {
  if (Math.random < 0.5) {
    return "rain :'(";
  } else {
    return "sunny :)";
  }
}

module.exports = {
  weather : weather
}