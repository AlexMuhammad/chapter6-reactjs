import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getCars = createAsyncThunk("cars/getCars", async () => {
    const response = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
    return response.data
})

const carEntity = createEntityAdapter({
    selectId: (car) => car.id
})

export const carSlice = createSlice({
    name: "car",
    initialState: carEntity.getInitialState(),
    extraReducers: {
        [getCars.fulfilled]: (state, action) => {
            carEntity.setAll(state, action.payload)
        },
    }
})

export const carSelectors = carEntity.getSelectors(state => state.car);

export default carSlice.reducer