const button = document.querySelector('#changeButton');
const messageText = document.querySelector('#messageText');

button.addEventListener('click', function () {
  messageText.textContent = 'My toddler is chaos, but she is also my greatest joy and my biggest motivation. She saved me.';
  button.textContent = 'Truth revealed';
});
