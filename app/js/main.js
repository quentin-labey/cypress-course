function encrypt() {
  let key = document.getElementById("key").value;
  let text = document.getElementById("text").value;
  let newArray = [];
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      newArray.push(((text.charCodeAt(i) - 65 + key) % 26) + 65);
    } else if (text.charCodeAt(i) >= 97) {
      newArray.push(((text.charCodeAt(i) - 97 + key) % 26) + 97);
    } else {
      newArray.push(text.charCodeAt(i));
    }
  }
  let newWords = "";
  for (let j = 0; j < newArray.length; j++) {
    newWords += String.fromCharCode(newArray[j]);
  }
  document.getElementById("res").innerHTML = newWords;
}
