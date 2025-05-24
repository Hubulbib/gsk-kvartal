export const Calculate = (square: number, paySum: number, period: number, initPaySum: number): number => {
  return Number(((square * paySum - initPaySum) / period).toFixed(2))
}
