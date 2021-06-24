const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        let val = results[letter];
        val.push(i);
        results[letter] = val;
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

letterPositions("lighthouse in the house");