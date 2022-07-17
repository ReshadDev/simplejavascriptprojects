'use strict';

/*DOM- Document Object Model demekdir. DOMun sayesinde biz html elementlerini secib , atributlarini clasini textini ve saireni deyise bilerik. DOM-a biz JS ve HTML arasinda connection deye bilerik.

DOM - web API adlanir. Web API JS de yazilmis library demekdir ve bizim avtomatik istifade ede bileceyimizdir.

HTML deki her bir element node dur.*/

/*Selecting elements

'querySelector -- elementi secir';
'textContent -- hemin elementin icindeki texti gosterir';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

Burada Guess Number textini Correct Numberle evez etdik

Istenilen elementi secib sonuna textContent yazaraq onu deyise bilerik !!

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 3;


Burda inputun valuesini gormek ucun onu secib sonuna value yaziriq 
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

// Elementlere Click edende hadise bas vermesi

'addEventListener -- ozu bir methoddur. ilk hissede hansi event olacagi yazilir. Yeni click olsun, mouse ustune gelende ve ya gedende ve sair. Ikinci hissede ise event bas veren zaman hansi funksiya islemelidi o yazilir';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Input bos olan zaman bizim gorduyumuz
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!')

    // Oyuncu qazandigi zaman
  } 
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'You are Correct!';
    displayMessage("Correct Number!")
    document.querySelector('.number').textContent = secretNumber;

    // Css Deyismek !!

    // Burda bodyni secib backgroundunu deyisirik
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Burda ise numberin oldugu qutunu secib widthni 30 rem e beraber edirik
    document.querySelector('.number').style.width = '30rem';

    if(score  > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // Oyuncu uduzan zaman
  else if(guess !== secretNumber){
    if (score > 1) {
      // document.querySelector('.message').textContent = 
      // guess > secretNumber ? 'Too High!' : 'Too Low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost the game!';
      displayMessage("You Lost the game!")
      document.querySelector('.score').textContent = 0;
    }
  }
  /*// Tapdigi reqem cox boyuk olanda
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // Tapdigi reqem cox kicik olanda
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

// JS de bizim inputdan aldigimiz deyer hemise string olaraq gelir
// her defe Check duymesine click olduqda bu funksiya isleyecek.

const again = document.querySelector('.again');
again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
});
