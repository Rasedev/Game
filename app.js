let fInput = document.querySelector('.fInput');
let gameBtn = document.querySelector('.gameBtn');
let error = document.querySelector('.error');

let fIbox = document.querySelector('.fIbox');
let playerOneBox = document.querySelector('.playerOneBox');
let playerOneInput = document.querySelector('.playerOneInput');
let playerOneInputBtn = document.querySelector('.playerOneInputBtn');

let playerTwoBox = document.querySelector('.playerTwoBox');
let playerTwoInput = document.querySelector('.playerTwoInput');
let playerTwoInputBtn = document.querySelector('.playerTwoInputBtn');
let win = document.querySelector('.win');
let GameOver = document.querySelector('.GameOver');

let chance = document.querySelector('.chance');

let count = 5;

gameBtn.addEventListener('click', function () {
  //   let x = document.getElementById('myText').value;
  //   console.log(x);
  //   document.getElementsByClassName('.tit'[0]).innerHTML = x;

  if (fInput.value == '') {
    //console.log('faka');
    error.innerHTML = 'ami faka';
  } else {
    //console.log(fName.value);

    playerOneBox.style.display = 'block';
    fIbox.style.display = 'none';
  }
});

playerOneInputBtn.addEventListener('click', function () {
  // console.log('player-1');
  if (playerOneInput.value <= 1 || playerOneInput.value >= 10) {
    console.log('ERROR');
  } else {
    //console.log(playerOneInput.value);
    if (playerOneInput.value - 20) {
      //console.log('VALID');
      playerTwoBox.style.display = 'block';
      chance.innerHTML = count;

      playerOneBox.style.display = 'none';
    } else {
      console.log('Ami Number Na');
    }
  }
});

playerTwoInputBtn.addEventListener('click', function () {
  // console.log('player - 2');
  if (playerOneInput.value == playerTwoInput.value) {
    //playerTwoBox.style.display = 'PLAYER - 2 WIN';
    playerTwoBox.style.display = 'none';
    win.style.display = 'block';

    // win.innerHTML = '<h3>PLAYER - 2 WIN </h3>';
  } else {
    playerOneBox.style.display = 'PLAYER - 1 WIN';
    count--;
    chance.innerHTML = count;
    if (count <= 0) {
      count = 0;
      chance.innerHTML = 'GAME OVER';
      GameOver.style.display = 'block';
      playerTwoBox.style.display = 'none';
    }
    // playerTwoBox.style.display = 'none';
    // playerOneBox.style.display = 'block';
  }
});
