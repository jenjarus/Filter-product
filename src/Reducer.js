import Data from "./data";

const itemsCart = () => {
    const data = Data.hits.hits;
    return data.filter(el => el._source.STORE[475] !== 0 && el._source.STORE[472] !== 0);
};
const minPrice = Data.hits.total.minPrice;
const maxPrice = Data.hits.total.maxPrice;

const initialState = {
    itemsCart: itemsCart(),
    sortFlag: 'nameASC',
    minPrice: minPrice,
    maxPrice: maxPrice,
    filters: {
        SECTIONS: [],
        RAZMER: [],
        TSVET: [],
        MATERIAL: [],

    }
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_SORT':
            return {
                ...state,
                sortFlag: action.sortFlag,
            };
        case 'CHANGE_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters, [action.filterName]:
                        (!state.filters[action.filterName].includes(action.filterValue) && action.filterCheck) ?
                        [...state.filters[action.filterName], action.filterValue] :
                        [...state.filters[action.filterName].filter(n => n !== action.filterValue)]
                }
            };
        case 'RESET_FILTER':
            return {
                ...state,
                filters: {
                    SECTIONS: [],
                    RAZMER: [],
                    TSVET: [],
                    MATERIAL: [],
                },
            };
        case 'DEL_FILTER':
            return {
                ...state,
                filters: {...state.filters, [action.filterName]:
                        [...state.filters[action.filterName].filter(n => n !== action.filterValue)]
                },
            };
        case 'CHANGE_MIN_PRICE':
            return {
                ...state,
                minPrice: action.minPrice,
            };
        case 'CHANGE_MAX_PRICE':
            return {
                ...state,
                maxPrice: action.maxPrice,
            };
        case 'RESET_PRICE':
            return {
                ...state,
                minPrice: minPrice,
                maxPrice: maxPrice,
            };
        default:
            return state;
    }
}
