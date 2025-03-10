export const fetchData = async () => {
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=camry'
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e1fcc44796mshaf66558bafa88a7p1dbf74jsn6d022e6c8b4e',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export const calcCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50
  const mileageFactor = 0.1
  const ageFactor = 0.05

  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}
