(function() {
  if (typeof readline_object !== 'undefined') {
    const input = []
    readline_object.on("line", (value) => {
      input.push(value)
    })
    readline_object.on("close", () => console.log(solve(input)))
  }
})()

function solve(input) {
  N = +input[0]

  // Parse stations
  const S = []
  for (i = 1; i <= N; i++) {
    S.push(input[i].split(' ').map(s => +s))
  }
  S.sort((s1, s2) => s1[1] - s2[1])

  // Precompute distances
  const D = new Array(N - 1)
  for (i1 = 0; i1 < N - 1; i1++) {
    D[i1] = new Array(N - i1)
    for (i2 = i1 + 1; i2 < N; i2++) {
      D[i1][i2] = Math.sqrt(p2(S[i2][0] - S[i1][0]) + p2(S[i2][1] - S[i1][1]) + p2(S[i2][2] - S[i1][2]))
    }
  }

  return 0
}

function p2(n) {
  return n * n
}

module.exports = {
  solve,
}
