import { playMatchSticks } from './matchstickgame'

const startingMatchSticks = parseInt(process.argv[2])

const winningGame = playMatchSticks(startingMatchSticks)

if (winningGame) {
  console.log(`I will win a game starting with ${startingMatchSticks} match sticks. 🥳`)
} else {
  console.log(`I will not win a game starting with ${startingMatchSticks} match sticks. 😭`)
}
