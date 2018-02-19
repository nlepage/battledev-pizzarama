const fs = require('fs')
const { promisify } = require('util')
const { solve } = require('.')

const readFile = promisify(fs.readFile);

(async function() {
  for (let i = 1; i <= 6; i++) {
    const [input, output] = await Promise.all([
      readFile(`input${i}.txt`),
      readFile(`output${i}.txt`),
    ])
    const a = solve(input.toString().trim().split('\n')).toString().trim()
    const e = output.toString().trim()
    if (a !== e) {
      console.log(`Test ${i} failed, actual "${a}" !== expected "${e}"`)
    }
  }
})()
