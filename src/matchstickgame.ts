import assert from 'assert'

interface Factors {
  x: number
  y: number
}

export const knownGames = new Map<number, boolean>()

const factorize = (n: number): Set<Factors> => {
  const result = new Set<Factors>()
  for(let i = 2; i<=n; i++) {
    if (n % i === 0) {
      const factors = { x: i, y: n/i }
      result.add(factors)
    }
  }
  return result
}

export const playMatchSticks = (n: number): boolean => {
  assert(n >= 2)
  if (knownGames.has(n)) return knownGames.get(n)!
  if (n === 2) {
    knownGames.set(2, false)
    return false
  }
  for (const factors of factorize(n)) {
    const newNumberOfMatchSticks = n - factors.y
    if (!playMatchSticks(newNumberOfMatchSticks)) {
      knownGames.set(n, true)
      return true
    }
  }
  knownGames.set(n, false)
  return false
}