function forLoops(array) {
  for (var i = 0; i < 26; i++) {
    if (i === 1) {
      array = array.push("I am 1 strange loop.");
    } else if (i > 1) {
      array.push("I am 1 strange loop.");
    }
  }
  return array;
}