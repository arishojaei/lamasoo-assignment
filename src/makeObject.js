/**
 * sort string in each index of array
 * @param {array} value 
 * @returns {array}
 */
const sortString = function (value) {
  return value.map(index => index.split('').sort().join(''));
}

/**
 * find vowels in each index of
 * array and uppercase them
 * @param {array} value 
 * @returns {array}
 */
const uppercaseVowels = function (value) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  var splittedStrings = value.map(index => index.split(''));

  for (let string of splittedStrings) {
    for (let [i, word] of string.entries()) {
      if (vowels.indexOf(word) !== -1) {
        string[i] = word.toUpperCase();
      }
    }
  }

  return splittedStrings.map(string => string.join(''))
}

function makeObject() {
  let _functionsQueue = [];

  return {
    data: [],

    vowelsToCapital() {
      _functionsQueue.unshift(value => uppercaseVowels(value));
      return this;
    },

    toObject() {
      _functionsQueue.push(value => Object.assign({}, value));
      return this;
    },

    provideData(payload) {
      this.data = sortString(payload)

      for (const fn of _functionsQueue) {
        this.data = fn(this.data);
      }

      return this.data;
    }
  }
}

// do NOT remove the following line
module.exports = makeObject;