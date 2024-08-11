import React from 'react'
import { useSelector } from 'react-redux'

export default function CarValue() {
  const totalValue = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    let total = 0;
    filteredCars.forEach(car => {
      total = total + car.cost;
    });
    return total;
  })
  return (
    <div className='car-value'>
      Total Cost: ${totalValue}
    </div>
  )
}
