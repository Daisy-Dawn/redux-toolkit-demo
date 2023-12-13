const store = require('./app/store')
const cakeAction = require("./features/cake/cakeSlice").cakeAction
const iceCreamAction = require("./features/icecream/iceCreamSlice").iceCreamAction
const peanutAction = require("./features/peanuts/peanutSlice").peanutAction
const fetchUsers = require("./features/users/userSlice").fetchUsers

console.log("Initial State: ", store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("Updated State: ", store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(iceCreamAction.iceCreamOrdered(1))
// store.dispatch(iceCreamAction.iceCreamOrdered(1))
// store.dispatch(iceCreamAction.iceCreamOrdered(1))
// store.dispatch(peanutAction.peanutOrdered(2))
// store.dispatch(peanutAction.peanutOrdered(2))
// store.dispatch(peanutAction.peanutOrdered(2))
// store.dispatch(cakeAction.restocked(3))
// store.dispatch(iceCreamAction.iceCreamRestocked(3))
// store.dispatch(peanutAction.peanutRestocked(6))


// unsubscribe()