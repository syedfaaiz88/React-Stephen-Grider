import React from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux'
import { addCar, changeName, changeCost } from '../store'

export default function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return state.form;
  })

  const handleClick = (event) => {
    event.preventDefault();

    dispatch(addCar({ id: nanoid(), name, cost }))
    
  }
  const handleChangeName = (event) => {
    dispatch(changeName(event.target.value));
  }
  const handleChangeCost = (event) => {
    const cost = parseInt(event.target.value) || 0;
    dispatch(changeCost(cost));
  }

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              className='input is-expanded'
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <div className='field'>
            <label className='label'>Cost</label>
            <input
              className='input is-expanded'
              value={cost || ''}
              onChange={handleChangeCost}
              type='number'
            />
          </div>
        </div>
        <div className='field'>
          <button className='button is-link' type='submit' onClick={handleClick}>Add Car</button>
        </div>
      </form>
    </div>
  )
}
