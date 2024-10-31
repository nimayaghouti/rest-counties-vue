import instance from '@/helper/apiHelper'

export const getCountryService = async countryCode => {
  try {
    const { data } = await instance.get(`/alpha/${countryCode}`)
    return data[0]
  } catch (error) {
    console.error(error)
  }
}
