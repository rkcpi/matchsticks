import { expect } from 'chai'
import { playMatchSticks } from '../src/matchstickgame'

describe('Match Stick Game', () => {
  it('wins a game with 3 matches', () => {
    expect(playMatchSticks(3)).to.be.true
  })

  it('wins a game with 4 matches', () => {
    expect(playMatchSticks(4)).to.be.true
  })

  it('loses a game with 5 matches', () => {
    expect(playMatchSticks(5)).to.be.false
  })

  it('wins a game with 6 matches', () => {
    expect(playMatchSticks(6)).to.be.true
  })

  it('loses a game with 7 matches', () => {
    expect(playMatchSticks(7)).to.be.false
  })

  it('wins a game with 8 matches', () => {
    expect(playMatchSticks(8)).to.be.true
  })

  it('loses a game with 9 matches', () => {
    expect(playMatchSticks(9)).to.be.false
  })
})