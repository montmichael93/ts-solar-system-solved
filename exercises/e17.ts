export const minBy = <TYPE>(
  array: TYPE[],
  cb: (ele: TYPE) => string | number
) => {
  let min: string | number = Infinity;
  let strMin: string | number = "z";
  let outPut;
  for (let item of array) {
    let someValue = cb(item);
    if (someValue < min) {
      min = someValue;
      outPut = item;
    } else {
      if (someValue < strMin) {
        strMin = someValue;
        outPut = item;
      }
    }
  }

  return outPut;
};

export function maxBy<TYPE>(array: TYPE[], cb: (ele: TYPE) => number) {
  let max = -Infinity;
  let outPut;
  for (let item of array) {
    let someValue = cb(item);
    if (someValue > max) {
      max = someValue;
      outPut = item;
    }
  }
  return outPut;
}
