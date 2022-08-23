import { expect } from 'chai'
import { playMatchSticks } from '../src/matchstickgame'

describe('Match Stick Game', () => {
  it('wins a game with 3 matches', () => {
    expect(playMatchSticks(3)).to.be.true
  })


  for (let index = 4; index <= 100; index+=2) {
    it(`wins a game with ${index} matches`, () => {
        expect(playMatchSticks(index)).to.be.true
    })
  }

  for (let index = 5; index <= 101; index+=2) {
    it(`loses a game with ${index} matches`, () => {
        expect(playMatchSticks(index)).to.be.false
    })
  }
})