import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        addCar(state, action) {
            state.data.push({
                id: action.payload.id,
                name: action.payload.name,
                cost: action.payload.cost
            })
        },
        deleteCar(state, action) {
            const updated = state.data.filter((car)=>{
                return car.id !== action.payload;
            })
            state.data = updated;
        },
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
})

export const { addCar,deleteCar,changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;