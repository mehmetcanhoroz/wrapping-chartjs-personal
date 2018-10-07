import {API_BASE} from "../config/env";

export const FETCHED_CHARTS = "FETCHED_CHARTS";
export const FETCHED_TABLE = "FETCHED_TABLE";

export function fetchCharts() {
    return dispatch => {
        dispatch({
            type: FETCHED_CHARTS,
            payload: [{id: "1", name: "chart1"}, {id: "2", name: "chart2"}, {id: "3", name: "chart3"}]
        });
    };
}
export function fetchTable() {
    return dispatch => {
        dispatch({
            type: FETCHED_TABLE,
            payload: [{id: "1", name: "table1"}, {id: "2", name: "table2"}, {id: "3", name: "table3"}]
        });
    };
}