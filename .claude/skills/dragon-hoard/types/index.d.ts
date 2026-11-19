export type Breathing = boolean

declare module 'claude-code' {
  interface PluginState {
    'dragon-hoard': { breathing: Breathing }
  }
}
