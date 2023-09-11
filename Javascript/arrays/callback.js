function capitaliseWords(word) {
  word[0] = word[0].toUpperCase();
  return word;
}

//console.log(capitaliseWords("Hello"));

function reverseWord(word) {
  // let newWord = [];
  // for (let i = word.length - 1; i >= 0; i--) {
  //   newWord.push(word[i]);
  //   console.log(newWord);
  //   // newWord += word[i];
  //   //console.log(word[i]);
  //   // console.log(newWord);
  return word.split("").reverse().join("");
  // }
}
//reverseWord("Hello");
//console.log(reverseWord("Hello"));

const alterSentence = (sentence, callback) => {
  let newSentence = "";
  const wordArr = sentence.split(" ");
  console.log(wordArr);

  for (let i = 0; i < wordArr.length; i++) {
    newSentence += callback(capitaliseWords(wordArr));
  }
  console.log(newSentence);
  return newSentence;
};

//console.log(alterSentence("hello world", capitaliseWords));
alterSentence("hello world", capitaliseWords);
