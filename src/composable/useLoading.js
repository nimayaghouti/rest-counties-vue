import { ref } from 'vue'

const isLoading = ref(false)

const useLoading = () => {
  const setIsLoading = bool => {
    isLoading.value = bool
  }

  return {
    isLoading,
    setIsLoading,
  }
}

export default useLoading
