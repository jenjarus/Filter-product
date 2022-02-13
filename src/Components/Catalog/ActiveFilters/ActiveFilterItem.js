import React from "react";
import IconClose from "../../../Images/icon_close.svg"
import {useDispatch} from "react-redux";
import {delFilters} from "../../../Actions";

const ActiveFilterItem = ({nameFilter, data}) => {
    const dispatch = useDispatch();

    return(
        <span className="active__filter-item" onClick={() => dispatch(delFilters(nameFilter, data))}>{data} <img src={IconClose} alt="close"/></span>
    )
};

export default ActiveFilterItem;
