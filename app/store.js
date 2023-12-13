const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require("redux-logger")
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/iceCreamSlice')
const peanutReducer = require('../features/peanuts/peanutSlice')
const userReducer = require('../features/users/userSlice')
const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        peanut: peanutReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store