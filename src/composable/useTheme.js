import { ref, watchEffect } from 'vue'

const useTheme = () => {
  const isDarkTheme = ref(localStorage.getItem('theme') === 'dark')

  watchEffect(() => {
    localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDarkTheme.value)
  })

  const toggleDarkMode = () => {
    isDarkTheme.value = !isDarkTheme.value
  }

  return { isDarkTheme, toggleDarkMode }
}

export default useTheme
