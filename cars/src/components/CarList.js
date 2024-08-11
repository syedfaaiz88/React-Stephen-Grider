import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCar } from '../store';

export default function CarList() {

  const dispatch = useDispatch();

  const {cars,name} = useSelector((state) => {
    const filteredCars = state.cars.data.filter((car) =>
      car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
    )
    return {
      cars: filteredCars,
      name: state.form.name
    }
  })

  const handleCarDelete = (id) => {
    dispatch(deleteCar(id));
  }

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && 'has-text-success bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className='button is-danger' onClick={() => handleCarDelete(car.id)}>Delete</button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars}
    </div>
  )
}
