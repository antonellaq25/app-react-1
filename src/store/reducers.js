
const initialState = {
    cityData: [],
    itineraries: [],
    filter: '',
    userLogged: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CITY_DATA':
            return {
                ...state,
                cityData: action.payload,
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            };
        case 'SET_ITINERARIES_DATA':
            return {
                ...state,
                itineraries: action.payload,
            };
        case 'SET_USER_LOGGED':
            return {
                ...state,
                userLogged: action.payload,
            };
        default:
            return state;
    };

};

export default rootReducer;
