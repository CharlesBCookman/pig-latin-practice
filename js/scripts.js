function pigLatinTranslator(text) {
  const startingWord = text;
  let translation = startingWord.slice(0, 1);
  console.log(translation);
}                 

function isVowel(letter) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(letter)) {
    return true;
  } else {
    return false;
  }
}
