const button = document.querySelector('#changeButton');
const messageText = document.querySelector('#messageText');
const chaosInput = document.querySelector('#chaosInput');
const chaosStatus = document.querySelector('#chaosStatus');
const addItemBtn = document.querySelector('#addItemBtn');
const removeItemBtn = document.querySelector('#removeItemBtn');
const chaosList = document.querySelector('#chaosList');
const adviceButton = document.querySelector('#adviceButton');
const adviceResult = document.querySelector('#adviceResult');
const parentingQuotes = [
  'The smallest moments often become the biggest memories.',
  'You are doing important work, even on the messy days.',
  'Children do not need perfect parents; they need present ones.'
];

button.addEventListener('click', function () {
  messageText.textContent = 'Every day through the chaos she is my greatest joy and my biggest motivation. She saved me in ways I hope she never understands.';
  button.textContent = 'Truth revealed';
});

chaosInput.addEventListener('input', function () {
  if (chaosInput.value.trim() !== '') {
    chaosStatus.classList.add('highlight');
    chaosStatus.textContent = 'Status: chaos level rising';
  } else {
    chaosStatus.classList.remove('highlight');
    chaosStatus.textContent = 'Status: calm';
  }
});

addItemBtn.addEventListener('click', function () {
  const newItem = document.createElement('li');
  const chaosItems = [
    'Toothpaste on the sheets?',
    'Raw eggs in the floor?',
    'Laundry everywhere!',
    'A 2 a.m. snack request?',
    'Sticker window art?',
    'Sharpie on the walls?',
    'Death by audacity?',
    'Laundry detergent spilt on the floor?',
    'Attitude of a teenager?',
    'Mouth full of crayons?',
    'Got ahold of flour?',
    'No diaper, no problem?',
    'Scream because they got what they wanted?',
    'Hide your keys or other necessities?',
    'Crashout because the sandwich is squares and not triangles?',
    'Say with a straight face that there is a brown crown in their diaper?',
    'Cut their hair while you take a shower?',
    'Nothing and No one is their best friend?',
    'Same thing they love today, they hated yesterday?',
    'Refuse dinner because the plate is not the right color?',
    'Ask "why" 37946 times in a row?',
    'Become violently offened by literally anything?',
    'Bites food and then spits it in your hand',
    'Make the indoor slide, a water slide.',
    'Or the complete last thing youu would expect'

  ];

  const randomItem = chaosItems[Math.floor(Math.random() * chaosItems.length)];
  newItem.textContent = randomItem;
  chaosList.appendChild(newItem);
});

removeItemBtn.addEventListener('click', function () {
  const lastItem = chaosList.lastElementChild;

  if (lastItem) {
    chaosList.removeChild(lastItem);
  }
});

adviceButton.addEventListener('click', function () {
  adviceResult.textContent = 'Loading encouragement...';

  fetch('https://zenquotes.io/api/random')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('The quote service is unavailable.');
      }

      return response.json();
    })
    .then(function (data) {
      adviceResult.textContent = data[0].q + ' - ' + data[0].a;
    })
    .catch(function () {
      const randomQuote = parentingQuotes[Math.floor(Math.random() * parentingQuotes.length)];
      adviceResult.textContent = randomQuote;
    });
});

