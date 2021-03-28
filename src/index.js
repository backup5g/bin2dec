const inputElement = document.querySelector('input.numberInput');
const convertButton = document.querySelector('button.convertButton');
const resultContainer = document.querySelector('div.result');
const resultMessage = document.querySelector('.result h3');
const convertedNumberElement = document.querySelector('.result h2');

function convert(numberInBinary) {
  const splitedNumber = numberInBinary.split('').map(number => Number(number));
  let numberInDecimal = 0;

  splitedNumber.forEach((binaryDigit, index) => {
    if (binaryDigit === 1) {
      numberInDecimal += Math.pow(2, index);
    } else if (binaryDigit !== 0) {
      return null;
    }
  })

  return numberInDecimal;
}

function success(convertedNumber) {
  resultMessage.innerHTML = 'The converted number is:';
  resultMessage.className = 'text-2xl text-gray-700 text-center mt-20';

  convertedNumberElement.innerHTML = convertedNumber;
  convertedNumberElement.className = 'text-8xl text-green-700 text-center font-light mt-4';
}

function error(msg) {
  resultMessage.innerHTML = msg;
  resultMessage.className = 'text-2xl text-red-500 text-center mt-20'

  convertedNumberElement.className = 'hidden';
}

convertButton.onclick = () => {
  const convertedNumber = convert(inputElement.value);

  resultContainer.className = 'result';

  if (!convertedNumber) {
    error('Insert only binaries digits');
    return 0;
  }

  success(convertedNumber);
}
