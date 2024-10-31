import instance from '@/helper/apiHelper'

export const getCountriesService = async () => {
  try {
    const { data } = await instance.get('/all')
    return data
  } catch (error) {
    console.error(error)
  }
}
