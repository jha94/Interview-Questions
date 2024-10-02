function Encode(strs) {
  let result = "";
  strs.forEach((str) => (result += `${str.length}#${str}`));
  return result;
}

const decode = (str) => {
  let i = 0;
  let decodedMessage = [];
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    let length = parseInt(str.substring(i, j));
    i = j + 1;
    j = i + length;
    decodedMessage.push(str.substring(i, j));
    i = j;
  }
  return decodedMessage;
};

const str = Encode(["neet", "code", "love", "you"]);
const decodeMessage = decode(str);
console.log(decodeMessage);
