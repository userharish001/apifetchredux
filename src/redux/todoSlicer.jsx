import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    const response = await axios.get("https://api.restful-api.dev/objects");
    return response.data; // Only return the relevant data
});

const todoSlicer = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: [], // Default to an empty array
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload; // Store the fetched data
        });
        builder.addCase(fetchTodo.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message; // Capture error details
        });
    }
});

export default todoSlicer.reducer;
