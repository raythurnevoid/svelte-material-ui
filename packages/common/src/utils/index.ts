export function arrEquals(arr1, arr2) {
  return arr1.length === arr2.length && !arr1.some((v, i) => v !== arr2[i]);
}

export function memo<T = any>(val: T = {} as T) {
  return {val}
}