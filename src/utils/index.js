export const getCorrectVariety = (num, word) => {

  const words = {
      'książka' : [
          'książka',
          'książki',
          'książek'
      ],
      'strona': [
          'strona',
          'strony',
          'stron'
      ],
      'sztuka': [
        'sztuka',
        'sztuki',
        'sztuk'
      ]
  }

  const lastNumber = String(num).slice(-1);
  const lastTwoNumbers = String(num).slice(-2);

  if (num === 1) return words[word][0];
  else if (
    (lastNumber === "2" || lastNumber === "3" || lastNumber === "4") &&
    lastTwoNumbers[0] !== "1"
  ) {
    return words[word][1]
  } else return words[word][2]
};

export const getCorrectLetterCasing = (text) => {
  let resultText = "";
  for (let i = 0 ; i < text.length ; i++) {
    if (text[i] !== " ") resultText += text[i]; 
  }
  return resultText[0].toUpperCase() + resultText.slice(1, resultText.length).toLowerCase();
}