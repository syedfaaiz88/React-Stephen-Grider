import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');
    //Dev Only
    await pause(3000);
    return response.data;
});

// Dev Only
const pause = (duration) => {
    return new Promise((resolve)=>{
        setTimeout(resolve, duration);
    });
};