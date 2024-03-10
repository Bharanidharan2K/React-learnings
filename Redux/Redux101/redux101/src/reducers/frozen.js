//All reducers have 2 param
//1. Current state, usually provide a default state
//2. Info that came from the action

const seedData = [
    "Fish",
    "Ice cream"
]

export default (state = seedData, action)=> {
    return state;
}