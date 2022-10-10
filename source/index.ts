const {abs, round} = Math

function almostEq(a: number, b: number) {
  return abs(a - b) <= 9.5367432e-7
}

// 最大公约数 Greatest Common Divisor
function greatestCommonDivisor(a: number, b: number): number {
  if (almostEq(b, 0)) return a
  return greatestCommonDivisor(b, a % b)
}

function findPrecision(n: number) {
  let p = 1

  while (!almostEq(round(n * p) / p, n)) {
    p *= 10
  }

  return p
}

export default function num2fraction(value: number | string) {
  if (
    value === Number.POSITIVE_INFINITY ||
    value === Number.NEGATIVE_INFINITY
  ) {
    return value
  }

  if (value === 0 || value === '0') return '0'

  if (typeof value === 'string') {
    value = Number.parseFloat(value)
  }

  const precision = findPrecision(value) // 精确度
  const number = value * precision
  const gcd = abs(greatestCommonDivisor(number, precision))

  // 分子
  const numerator = number / gcd
  // 分母
  const denominator = precision / gcd

  // 分数
  return `${round(numerator)}/${round(denominator)}`
}
