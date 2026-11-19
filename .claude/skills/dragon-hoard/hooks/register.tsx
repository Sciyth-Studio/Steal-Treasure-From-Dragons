import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { scene } from './scene.js'

const { theme, problems } = makeColors({
  label: 'Dragon Hoard',
  roles: { accent: '#e0401a', danger: '#c8102e', success: '#12b347', warning: '#e8a317', pro: '#7b3fe0' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#f3e5bf',
        'surface-1': '#f7ecd0',
        'surface-2': '#fbf4e2',
        'text-primary': '#2b1b0e',
        'text-secondary': '#553820',
        'text-muted': '#6b4f36',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#0e1230',
        'surface-1': '#151a3b',
        'surface-2': '#1b2146',
        'surface-3': '#21284f',
        'text-primary': '#f6eedb',
        'text-secondary': '#d6cab0',
        'text-muted': '#aca189',
      },
    },
  },
})

const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: 'dragon-hoard', glass: { blur: 18, opacity: 0.62 } },
}

const COMMIT = /\bgit\b[^|;&\n]*\bcommit\b/
const BREATH_MS = 4500

const breathing = { plugin: 'dragon-hoard', key: 'breathing' } as const

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.state.set(breathing, false)
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('tool.call', async ($, e, next) => {
    const ran = await next(e)
    const command = (e as { command?: unknown }).command

    if (typeof command === 'string' && COMMIT.test(command) && ran.deny === undefined && ran.isError !== true) {
      await $.state.set(breathing, true)
      $.clock.after(BREATH_MS, () => {
        void $.state.set(breathing, false)
      })
    }

    return ran
  })

  on('ui.render', { component: 'Backdrop' }, async ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }

    const { Svg } = $.ui.resolve(e)
    const { value: isBreathing = false } = await $.state.get(breathing)

    return (
      <Svg
        source={scene(isBreathing)}
        alt={isBreathing ? 'A red pixel dragon breathing fire over the sea' : 'A red pixel dragon gliding over a tiled sea'}
        isInteractive
      />
    )
  })
}
