// Count = 10, 20, 30,
const ASCII =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";
// Length of ASCII = 93;

function passwordGenerator(count) {
  let answer = "";
  while (answer.length !== count) {
    answer += ASCII[Math.floor(Math.random() * 93)];
  }
  return answer;
}

module.exports = passwordGenerator;
