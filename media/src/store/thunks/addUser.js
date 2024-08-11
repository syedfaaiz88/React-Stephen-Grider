import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk('users/add', async (user) => {
    const response = await axios.post('http://localhost:3005/users',{
        name: faker.person.fullName()
    })
    return response.data;
})