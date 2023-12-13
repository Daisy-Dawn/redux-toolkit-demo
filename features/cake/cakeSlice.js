const { iceCreamAction } = require('../icecream/iceCreamSlice')
const { peanutAction } = require('../peanuts/peanutSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfCakes -= 1
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(iceCreamAction.iceCreamOrdered, (state) => {
            state.numberOfCakes -= 1
        })
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeAction = cakeSlice.actions