import {FETCHED_CHARTS, FETCHED_TABLE} from "../actions/charts";

const initialState = {
    chartData: [],
    tableData: [],
    fetching: true,
    fetched: false
};

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCHED_CHARTS:
            return {
                ...state,
                chartData: action.payload
            }
            break;
        case FETCHED_TABLE:
            return {
                ...state,
                tableData: action.payload
            }
            break;

        default:
            return state;
    }
}