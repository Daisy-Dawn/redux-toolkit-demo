const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfIceCream: 20,
    numberOfCones: 40,
}

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        iceCreamOrdered: (state, action) => {
            state.numberOfIceCream -= 1;
            state.numberOfCones -= action.payload * 2
        },
        iceCreamRestocked: (state, action) => {
            state.numberOfIceCream += action.payload,
            state.numberOfCones += action.payload * 2
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamAction = iceCreamSlice.actions