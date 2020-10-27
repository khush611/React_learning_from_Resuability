const redux = require("redux")

/**
 * Challenge: implement an action creator called `removeFavoriteThing` which takes the string
 * of the favorite thing you want to remove from the array and removes it
 */
function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

const initialState = {
    count: 0,
    favoriteThings: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: [...state.favoriteThings, action.payload]
            }
        case "REMOVE_FAVORITE_THING": 
           // const arrCopy = [...state.favoriteThings]
           //you can use above statement as well and perform splice,erc operation.
           //don't forget to enclose the respectice case within {} so that you can use
           // the same varible:arrCopy in other states without having to change it to arrCopy1,2 etc.
           //because const has block scope. 
            const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            return {
                ...state,
                favoriteThings: updatedArr
            }
        
        default:
            return state
    }

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addFavoriteThing("Raindrops on roses"))
store.dispatch(addFavoriteThing("Whiskers on kittens"))

store.dispatch(removeFavoriteThing("raindrops on roses"))