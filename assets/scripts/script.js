const button = document.querySelector('#changeButton');
const messageText = document.querySelector('#messageText');
const chaosInput = document.querySelector('#chaosInput');
const chaosStatus = document.querySelector('#chaosStatus');

button.addEventListener('click', function () {
  messageText.textContent = 'My toddler is chaos, but she is also my greatest joy and my biggest motivation. She saved me.';
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
