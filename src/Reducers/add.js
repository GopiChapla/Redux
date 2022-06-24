const initstate = ['hello']
const add = (state = initstate, action) => {
    if (action.type === "ADD") {
        return [...state, action.payload]
    }
    else if (action.type === "DELETE") {
        state.splice(action.payload, 1)
        return state
    }
    else {
        return state
    }
}
export default add
