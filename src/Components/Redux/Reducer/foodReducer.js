import allFoods from "../../fakeData/fakeData.json"

const initialState = {
    foodsList: allFoods,
    orderedList: []
}


const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDERED_FOOD': {
            const newState = {
                ...state,
                orderedList: [...state.orderedList, action.payload]
            }
            return newState
        }
        default: {
            return state
        }

    }
}

export default foodReducer