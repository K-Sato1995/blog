import { writable } from 'svelte/store'

type Theme = 'LIGHT' | 'DARK'

interface ThemeObj {
  type: Theme
  mainColor: string
  backgroundColor: string
}

const lightTheme: ThemeObj = {
  type: 'LIGHT',
  mainColor: '#333',
  backgroundColor: '#fff',
}

const darkTheme: ThemeObj = {
  type: 'DARK',
  mainColor: '#fff',
  backgroundColor: '#141318',
}

function createTheme() {
  const { subscribe, update } = writable<ThemeObj>(darkTheme)

  return {
    subscribe,
    toDark: () => update(() => darkTheme),
    toLight: () => update(() => lightTheme),
  }
}

export const themeObj = createTheme()
