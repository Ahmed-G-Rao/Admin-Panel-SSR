const initialState = "Close"
const Dropdown = (state = initialState, action) => {
    if (action.type === "Close") {
        return state = "Open"
    }
    else if (action.type === "Open") {
        return state = "Close"
    }
    return state;
}
export default Dropdown;