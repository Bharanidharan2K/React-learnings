// this file is an action creator
// action creator returns action
// action is an object that has at least a prop of type 
// this action creator is going to handed to the dispatch

export default (operation, index)=>{
    console.log(operation, index)
    return{
        type : 'updateFrozen',
        payload: {
            operation,
            index
        }
    }
}