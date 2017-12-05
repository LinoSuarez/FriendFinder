function generateRandomArray(){
    var arr = [];
    for (var x = 0; x < 10; x++){
        arr.push(getRandomArbitrary(0, 5));
    }
    console.log(arr)
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generateRandomArray();

  