const input = []

readline_object.on("line", (value) => {
  input.push(value)
})
readline_object.on("close", ContestResponse)

function ContestResponse() {
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

  console.log(0)
}

function p2(n) {
  return n * n
}
