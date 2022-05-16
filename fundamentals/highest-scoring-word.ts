/**
 * Given a string of words, you need to find the highest scoring word.
 * 
 * Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 * 
 * You need to return the highest scoring word as a string.
 * 
 * If two words score the same, return the word that appears earliest in the original string.
 * 
 * All letters will be lowercase and all inputs will be valid.
 */

export const high = (str: string): string => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let highestScoreWord: {value: number, word: string} = {value: 0, word: ''};
    const splittedString = str.split(' ');
    for (let word of splittedString) {
      let wordData: {value: number, word: string} = {value: 0, word: word};
      word.split('').forEach(char => wordData.value += alphabet.indexOf(char) + 1);
      if (wordData.value > highestScoreWord.value) highestScoreWord = wordData;
    }
    return highestScoreWord.word;
  }