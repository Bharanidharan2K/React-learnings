//All reducers have 2 param
//1. Current state, usually provide a default state
//2. Info that came from the action

const seedData = [
    {
        food: "Fish",
        quantity: 10
    },
    {
        food: "Meat",
        quantity: 3
    },
    {
        food: "Chicken",
        quantity: 1
    },
]

export default (state = seedData, action)=> {
    console.log("Meat Reducer is running");
    console.log(action);
    if(action.type === "updateMeat"){
        console.log("I care about this updateMeat");
        const newState = [...state];
        if(action.payload.operation === "+"){
            newState[action.payload.index].quantity++;
        }
        else if(action.payload.operation == "-"){
            newState[action.payload.index].quantity--;
        }
        return newState;
    }
    return state;
}