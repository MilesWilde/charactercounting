countLetters("hello how are you");

function countLetters(inputString){
  var currentLetter = '';
  var concatString = inputString.split(' ').join('')

  for (var i = 0; i < concatString.length; i++){
    currentLetter = concatString.substring(i,i+1);
    var currentLetterCount = 1;
    var listOfPreviousLetters = concatString.substring(0,i).split('');

    for (var j = 0; j < concatString.length; j++){
      if (i!=j && currentLetter == concatString.substring(j,j+1)){
        currentLetterCount++;
      }
    }

    if (!listOfPreviousLetters.includes(currentLetter)){  
      console.log("" + currentLetter + ": " + currentLetterCount);
    }
  }
}
