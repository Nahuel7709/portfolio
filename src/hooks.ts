import { useEffect, useState } from 'react'
import type { Lang } from './data/content'

type Theme = 'dark' | 'light'

function read(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* storage no disponible: el cambio vale solo para esta visita */
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) ?? 'dark',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    write('theme', theme)
  }, [theme])

  return { theme, toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) }
}

export function useLang() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = read('lang')
    if (saved === 'en' || saved === 'es') return saved
    return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    write('lang', lang)
  }, [lang])

  return { lang, setLang }
}

export function useBuenosAiresClock() {
  const format = () =>
    new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Argentina/Buenos_Aires',
    })
  const [time, setTime] = useState(format)

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000)
    return () => clearInterval(id)
  }, [])

  return time
}
