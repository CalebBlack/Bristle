const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
function isAlphaNumeric(str){
  for (var i = 0; i < str.length; i++) {
    let check = str[i].toLowerCase();
    if (alphabet.includes(check) === false && numbers.includes(check) === false){
      return false;
    }
  }
  return true;
}
export default isAlphaNumeric;
