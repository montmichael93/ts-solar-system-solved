export const minBy = <T>(array: T[], cb: (ele: T) => string | number) => {
  if (array.length === 0) return undefined;
  let currentMin: T = array[0]!;
  for (let el of array) {
    const testMinVal = cb(currentMin);
    if (testMinVal > cb(el)) {
      currentMin = el;
    }
  }
  return currentMin;
};

export function maxBy<T>(array: T[], cb: (ele: T) => number) {
  let currentMax: T = array[0]!;
  for (let el of array) {
    const testMinVal = cb(currentMax);
    if (testMinVal < cb(el)) {
      currentMax = el;
    }
  }
  return currentMax;
}
