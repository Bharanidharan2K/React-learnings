//All reducers have 2 param
//1. Current state, usually provide a default state
//2. Info that came from the action

const seedData = [
    {
        food: "Ice-Cream",
        quantity: 10
    },
    {
        food: "Juice",
        quantity: 3
    }
]

export default (state = seedData, action)=> {
    console.log("Frozen Reducer is running");
    console.log(action);
    if(action.type === "updateFrozen"){
        console.log("I care about this updateFrozen");
        // We make a copy of state, because We NEVER EVER mutate state
        const newState = [...state];
        if(action.payload.operation === "+"){
            newState[action.payload.index].quantity++;
        }
        else if(action.payload.operation === "-"){
            newState[action.payload.index].quantity--;
        }
        return newState;
    }
    else return state;
}