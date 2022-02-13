import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetFilters} from "../../../Actions";
import ActiveFilterItem from "./ActiveFilterItem";

const ActiveFilters = () => {
    const dispatch = useDispatch();
    const filters = useSelector((store) => store.filters);
    let arrItems = [];

    for(let key in filters) {
        filters[key].forEach(el => {
            arrItems.push(<ActiveFilterItem key={el} nameFilter={key} data={el} />)
        })
    }

    if(arrItems.length) {
        return (
            <div className="active__filter-box">
                <div className="active__filter-title">Фильтры:</div>
                <div className="active__filters">
                    {arrItems.map(el => el)}
                    <span className="active__filter-reset" onClick={() => dispatch(resetFilters())}>Сбросить все</span>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
};

export default ActiveFilters;
