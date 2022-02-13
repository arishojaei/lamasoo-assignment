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
  return {
    _input: [],
    _functionsQueue: [],

    vowelsToCapital() {
      this._functionsQueue.push(value => uppercaseVowels(value));
      return this;
    },

    toObject() {
      this._functionsQueue.push(value => Object.assign({}, value));
      return this;
    },

    provideData(input) {
      this._input = sortString(input)

      for (const fn of this._functionsQueue) {
        this._input = fn(this._input);
      }

      return this._input;
    }
  }
}

const data = [
  'thisisfirsttest',
  'anotherlongcase',
  '8761o8372@test#',
  '--:)example3233'
];

console.log(makeObject());

// do NOT remove the following line
module.exports = makeObject;