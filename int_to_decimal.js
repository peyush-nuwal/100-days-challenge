 
const binaryToDecimal = (num) => {
  if (typeof num !== "string") {
    num = String(num);
  }

  console.log(typeof num);
  let res = 0;
  for (let i = 0; i < num.length; i++) {
    res = res * 2 + Number(num[i]);
  }
  return res;
};


 console.log(binaryToDecimal("101"));