/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once. 
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
 * because it uses the letters A-Z at least once (case is irrelevant).
 * 
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

 export const isPangram = (phrase: string): boolean => {
    // If less than 26 characters it can never have the whole alphabet
    if (phrase.length < 26) return false;
    const lowerCaseString = phrase.toLowerCase();
    const alphabet = 'abcdefghijklmnoprstuvwxyz';
    // If any of the alphabet chars is not present in the phrase, returns false
    for (let char of alphabet) {
      if (!lowerCaseString.includes(char)) return false;
    }
    return true;
  }