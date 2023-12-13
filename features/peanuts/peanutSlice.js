const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numberOfRibbons: 50,
    numberOfPeanuts: 30,
}

const peanutSlice = createSlice({
    name: "peanut",
    initialState,
    reducers: {
       peanutOrdered: (state, action) => {
        state.numberOfPeanuts -= action.payload
        state.numberOfRibbons -= action.payload * 3
       },
       peanutRestocked: (state, action) => {
        state.numberOfPeanuts += action.payload
        state.numberOfRibbons += action.payload * 3
       }
    }
})

module.exports = peanutSlice.reducer
module.exports.peanutAction = peanutSlice.actions