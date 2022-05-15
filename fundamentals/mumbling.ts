/**
 * This time no story, no theory. The examples below show you how to write function accum:
 * 
 * Examples:
 *  accum("abcd") -> "A-Bb-Ccc-Dddd"
 *  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 *  accum("cwAt") -> "C-Ww-Aaa-Tttt"
 * 
 * The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

 export function accum(s: string): string {
    const lowerCaseString = s.toLowerCase(); 
    let returnString = '';
    let repetitions = 0;
    for (let char of lowerCaseString) {
      returnString += `${char.toUpperCase()}${char.repeat(repetitions)}-`
      repetitions++;
    }
    return returnString.slice(0, -1);
  }