type Cell = [number, number, string]
type P = [number, number]

const S = 16
const T = 14
const GLYPHS = ['$', '%', 'X', ':', 't', 'S', ';', '*']

let seed = 7
const rand = () => {
  seed = (seed * 16807) % 2147483647
  return seed / 2147483647
}

const inPoly = (x: number, y: number, pts: P[]) => {
  let inside = false
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i]!
    const [xj, yj] = pts[j]!
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside
    }
  }
  return inside
}

const line = (a: P, b: P) => {
  const out: P[] = []
  const n = Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1])) * 2
  for (let i = 0; i <= n; i++) {
    out.push([Math.round(a[0] + ((b[0] - a[0]) * i) / n), Math.round(a[1] + ((b[1] - a[1]) * i) / n)])
  }
  return out
}

class Grid {
  cells = new Map<string, Cell>()
  set(x: number, y: number, c: string) {
    this.cells.set(`${x},${y}`, [x, y, c])
  }
  list() {
    return [...this.cells.values()]
  }
}

const LEFT_WING: P[] = [
  [14, 10.5], [6, 3.5], [-6.5, 7.5], [-3.5, 14.5], [-0.5, 12.5], [0.5, 18.5], [3.8, 15.5], [5.5, 21], [8.8, 17], [11, 21.5], [13, 18.5], [14, 19.5],
]
const LEFT_BONES: [P, P][] = [
  [[13, 11], [6, 4]], [[6, 4], [-6, 8]], [[6, 4], [-3, 14]], [[6, 4], [1, 18]], [[6, 4], [6, 20]], [[6, 4], [11, 20]],
]

const wing = (side: 1 | -1) => {
  const g = new Grid()
  const mx = (x: number) => (side === 1 ? x : 32 - x)
  for (let y = 2; y < 23; y++) {
    for (let x = -8; x < 15; x++) {
      if (inPoly(x + 0.5, y + 0.5, LEFT_WING)) {
        g.set(mx(x), y, rand() < 0.3 ? 'o2' : 'o')
      }
    }
  }
  for (const [a, b] of LEFT_BONES) {
    for (const [x, y] of line(a, b)) {
      g.set(mx(x), y, 'b')
    }
  }
  g.set(mx(6), 3, 'c')
  g.set(mx(-6), 7, 'c')
  return g.list()
}

const body = () => {
  const g = new Grid()
  const rows: [number, number, number][] = [
    [0, 15, 17], [1, 14, 18], [2, 13, 19], [3, 13, 19], [4, 13, 19], [5, 13, 19], [6, 13, 19], [7, 14, 18],
    [8, 14, 18], [9, 14, 18], [10, 14, 18],
  ]
  for (const [y, a, b] of rows) {
    for (let x = a; x <= b; x++) {
      g.set(x, y, 'r')
    }
  }
  for (let y = 10; y <= 25; y++) {
    for (let x = 10; x <= 22; x++) {
      if (((x + 0.5 - 16.5) / 3.7) ** 2 + ((y + 0.5 - 17.5) / 7.8) ** 2 <= 1) {
        g.set(x, y, 'r')
      }
    }
  }
  const tail: P[] = [[16.5, 25], [16.8, 29], [18.5, 32.5], [21.5, 35], [24.5, 36.5]]
  for (let i = 0; i < tail.length - 1; i++) {
    for (let k = 0; k <= 12; k++) {
      const t = k / 12
      const [ax, ay] = tail[i]!
      const [bx, by] = tail[i + 1]!
      const cx = ax + (bx - ax) * t
      const cy = ay + (by - ay) * t
      const r = 2.3 - ((i + t) / (tail.length - 1)) * 1.7
      for (let y = Math.floor(cy - r); y <= cy + r; y++) {
        for (let x = Math.floor(cx - r); x <= cx + r; x++) {
          if ((x + 0.5 - cx) ** 2 + (y + 0.5 - cy) ** 2 <= r * r) {
            g.set(x, y, 'r')
          }
        }
      }
    }
  }
  for (const [x, y] of [[25, 35], [26, 36], [25, 37], [24, 38], [26, 37], [27, 36], [25, 36]] as P[]) {
    g.set(x, y, 'd')
  }
  for (let y = 4; y <= 26; y += 1) {
    g.set(16, y, y % 2 === 0 ? 'd' : 'd2')
  }
  for (const [x, y] of [[17, 28], [17, 30], [18, 32], [20, 34], [22, 35]] as P[]) {
    g.set(x, y, 'd')
  }
  for (const [x, y] of [[14, 3], [18, 3]] as P[]) {
    g.set(x, y, 'y')
  }
  for (const [x, y] of [[15, 0], [17, 0]] as P[]) {
    g.set(x, y, 'd')
  }
  for (const [x, y] of [[12, 6], [11, 7], [10, 8], [20, 6], [21, 7], [22, 8]] as P[]) {
    g.set(x, y, 'c')
  }
  for (const [x, y] of [[12, 13], [20, 13], [12, 22], [11, 23], [20, 22], [21, 23]] as P[]) {
    g.set(x, y, 'r')
  }
  for (const [x, y] of [[11, 12], [11, 14], [21, 12], [21, 14], [10, 23], [11, 24], [22, 23], [21, 24]] as P[]) {
    g.set(x, y, 'c')
  }
  return g.list()
}

const fire = () => {
  const g = new Grid()
  for (let k = 1; k <= 15; k++) {
    const half = 0.6 + k * 0.5 + (rand() - 0.5) * 0.8
    for (let x = Math.floor(16.5 - half); x <= 16.5 + half; x++) {
      const d = Math.abs(x + 0.5 - 16.5) / half
      if (d > 1 || (k > 12 && rand() < 0.35)) {
        continue
      }
      g.set(x, -k, d < 0.35 && k < 12 ? 'f1' : d < 0.75 ? 'f2' : 'f3')
    }
  }
  for (let i = 0; i < 9; i++) {
    g.set(Math.round(16 + (rand() - 0.5) * 16), -16 - Math.floor(rand() * 3), rand() < 0.5 ? 'f1' : 'f2')
  }
  return g.list()
}

const square = (x: number, y: number) => `M${x * S} ${y * S}h${T}v${T}h-${T}z`

const paths = (cells: Cell[]) => {
  const by = new Map<string, string>()
  for (const [x, y, c] of cells) {
    by.set(c, (by.get(c) ?? '') + square(x, y))
  }
  return [...by].map(([c, d]) => `<path class="${c}" d="${d}"/>`).join('')
}

const glyphs = (cells: Cell[]) =>
  cells
    .filter(() => rand() < 0.55)
    .map(([x, y, c]) => `<text class="g${c}" x="${x * S + T / 2}" y="${y * S + 11}">${GLYPHS[Math.floor(rand() * GLYPHS.length)]}</text>`)
    .join('')

const layer = (cells: Cell[], cls: string) => `<g class="${cls}">${paths(cells)}${glyphs(cells)}</g>`

const shadow = (cells: Cell[], cls: string) =>
  `<g class="${cls}"><path class="sh" d="${cells.map(([x, y]) => square(x, y)).join('')}"/></g>`

const L = wing(1)
const R = wing(-1)
const B = body()
const F = fire()

const ripples = () => {
  let out = ''
  for (let i = 0; i < 9; i++) {
    const cx = Math.floor(rand() * 96) + 2
    const cy = Math.floor(rand() * 58) + 2
    let d = ''
    for (let k = 0; k < 5 + Math.floor(rand() * 6); k++) {
      d += square(cx + k, cy + (k % 3 === 0 ? 1 : 0))
    }
    out += `<path class="rip r${i % 4}" d="${d}"/>`
  }
  for (let i = 0; i < 26; i++) {
    const x = Math.floor(rand() * 100)
    const y = Math.floor(rand() * 62)
    out += `<g class="foam r${i % 4}"><path d="${square(x, y)}"/><text x="${x * S + T / 2}" y="${y * S + 11}">${GLYPHS[i % GLYPHS.length]}</text></g>`
  }
  return out
}

const RIPPLES = ripples()
const SHADOW = `<g class="shadow-drift">${shadow(L, 'wl')}${shadow(R, 'wr')}${shadow(B, '')}</g>`
const WINGS_AND_BODY = `${layer(L, 'wl')}${layer(R, 'wr')}${layer(B, '')}`
const FIRE = `<g class="fire">${layer(F, 'flick')}</g>`

const STYLE = `
  .sea-top { stop-color: #29b6ea; }
  .sea-low { stop-color: #0f86c8; }
  .grid { stroke: #ffffff; stroke-opacity: 0.09; }
  .rip { fill: #0a6fae; opacity: 0.35; }
  .foam path { fill: #6fd3f7; opacity: 0.35; }
  .foam text { fill: #e9fbff; opacity: 0.5; }
  .sh { fill: #064f82; opacity: 0.32; }
  .r { fill: #e0262f; } .gr { fill: #8f1017; }
  .d { fill: #8d1218; } .gd { fill: #ff8a8a; }
  .d2 { fill: #a5161d; } .gd2 { fill: #ff9a9a; }
  .o { fill: #ff8a1f; } .go { fill: #b8500a; }
  .o2 { fill: #ffa543; } .go2 { fill: #b8500a; }
  .b { fill: #b3181f; } .gb { fill: #ffb08a; }
  .c { fill: #f4e2bb; } .gc { fill: #9c7f4a; }
  .y { fill: #ffe234; } .gy { fill: #3b0507; }
  .f1 { fill: #fff27a; } .gf1 { fill: #e07a00; }
  .f2 { fill: #ffa21f; } .gf2 { fill: #b33a00; }
  .f3 { fill: #f0421e; } .gf3 { fill: #7a1200; }
  text { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 10px; font-weight: 700; text-anchor: middle; }

  @media (prefers-color-scheme: dark) {
    .sea-top { stop-color: #0c2350; }
    .sea-low { stop-color: #06142f; }
    .grid { stroke-opacity: 0.06; }
    .rip { fill: #1d4c8f; opacity: 0.4; }
    .foam path { fill: #2a5ea8; opacity: 0.35; }
    .foam text { fill: #9cc4ff; opacity: 0.4; }
    .sh { fill: #000814; opacity: 0.45; }
  }

  .glide { animation: glide 10s ease-in-out infinite alternate; }
  .shadow-drift { transform: translate(44px, 52px); animation: shglide 10s ease-in-out infinite alternate; }
  .wl, .wr { transform-box: fill-box; animation: flap 3.2s ease-in-out infinite; }
  .wl { transform-origin: 100% 40%; }
  .wr { transform-origin: 0% 40%; }
  .rip, .foam { animation: shimmer 8s ease-in-out infinite; }
  .r1 { animation-delay: -2s; } .r2 { animation-delay: -4s; } .r3 { animation-delay: -6s; }
  .fire { transform-box: fill-box; transform-origin: 50% 100%; animation: breathe 4.2s ease-out forwards; }
  .flick { animation: flicker 0.5s steps(2) infinite; }

  @keyframes glide { from { transform: translate(0, 0); } to { transform: translate(18px, -22px); } }
  @keyframes shglide { from { transform: translate(44px, 52px); } to { transform: translate(66px, 36px); } }
  @keyframes flap { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(0.84); } }
  @keyframes shimmer { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.6; } }
  @keyframes breathe { 0% { transform: scaleY(0.05); opacity: 1; } 18% { transform: scaleY(1); opacity: 1; } 75% { opacity: 1; } 100% { transform: scaleY(1.06); opacity: 0; } }
  @keyframes flicker { 0% { opacity: 1; } 100% { opacity: 0.82; } }

  .place { transform: translate(190px, 310px); }
  @media (max-aspect-ratio: 1/1) {
    .place { transform: translate(628px, 300px) scale(0.6); }
  }
`

export const scene = (breathing: boolean) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<style>${STYLE}</style>
<defs>
  <linearGradient id="sea" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" class="sea-top"/>
    <stop offset="1" class="sea-low"/>
  </linearGradient>
  <pattern id="tiles" x="0" y="0" width="${S}" height="${S}" patternUnits="userSpaceOnUse">
    <path class="grid" d="M${S} 0V${S}H0" fill="none" stroke-width="1"/>
  </pattern>
</defs>
<rect x="0" y="0" width="1600" height="1000" fill="url(#sea)"/>
<rect x="0" y="0" width="1600" height="1000" fill="url(#tiles)"/>
${RIPPLES}
<g class="place">${SHADOW}<g class="glide">${WINGS_AND_BODY}${breathing ? FIRE : ''}</g></g>
</svg>`
