import { writable } from 'svelte/store'

type Theme = 'BASE' | 'DARK'

interface ThemeObj {
  type: Theme
  mainColor: string
  backgroundColor: string
}

const baseTheme: ThemeObj = {
  type: 'BASE',
  mainColor: '#333',
  backgroundColor: '#fff;',
}

const darkTheme: ThemeObj = {
  type: 'DARK',
  mainColor: '#fff',
  backgroundColor: '#1e1e1e;',
}

function createTheme() {
  const { subscribe, update } = writable<ThemeObj>(baseTheme)

  return {
    subscribe,
    toDark: () => update(() => darkTheme),
    toBase: () => update(() => baseTheme),
  }
}

export const themeObj = createTheme()
