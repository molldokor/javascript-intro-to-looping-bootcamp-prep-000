function forLoops(array) {
  for (var n = 0, n < 25, n++) {
    if (n === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${n} strange loops`);
    }
  }
  return array;
}