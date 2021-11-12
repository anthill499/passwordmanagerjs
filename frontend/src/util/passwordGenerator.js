// Count = 10, 20, 30,
const ASCII =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";
// Length of ASCII = 93;

const passwordGenerator = (count) => {
  let answer = "";
  for (let i = 0; i < count; i++) {
    answer += ASCII[Math.floor(Math.random() * 93)];
  }
  return answer;
};

export default passwordGenerator;
