class VigenereCipheringMachine {
  constructor(value) {
    if (value == false) {
      this.value = false;
    } else {
      this.value = true;
    }
  }
  encrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") {
      throw Error;
    } else {
      let result = "",
        tempMessage = message.toLowerCase(),
        tempKey = key.toLowerCase();
      if (this.value == false) {
        tempMessage = tempMessage.split("").reverse().join("");
      }
      for (let i = 0, j = 0; i < tempMessage.length; i++) {
        if (tempMessage[i] == tempMessage[i].toUpperCase()) {
          result += tempMessage[i];
        } else {
          result += String.fromCharCode(
            ((tempMessage.charCodeAt(i) - 97 + tempKey.charCodeAt(j % tempKey.length) - 97) % 26) + 97 );
          j++;
        }
      }
      return result.toUpperCase();
    }
  }
  decrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined") {
      throw Error;
    } else {
      let result = "",
        tempMessage = message.toLowerCase(),
        tempKey = key.toLowerCase();
      if (this.value == false) {
        tempMessage = tempMessage.split("").reverse().join("");
      }
      for (let i = 0, j = 0; i < tempMessage.length; i++) {
        if (tempMessage[i] == tempMessage[i].toUpperCase()) {
          result += tempMessage[i];
        } else {
          result += String.fromCharCode(
            ((tempMessage.charCodeAt(i) + 26 -tempKey.charCodeAt(j % tempKey.length)) %26) + 97);
          j++;
        }
      }
      return result.toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;
