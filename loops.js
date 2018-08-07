function forLoop(array) {
  for (var i = 0; i < 26; i++) {
    if (i === 1) {
      array[i - 1] = "I am 1 strange loop.";
    } else if (i > 1) {
      array[i - 1] = `I am ${i} strange loops`;
    }
  }
  return array;
}