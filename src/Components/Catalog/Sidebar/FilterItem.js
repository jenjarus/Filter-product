import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeFilters} from "../../../Actions";

const COLOR = {
    белый: 'white',
    розовый: 'pink',
    черный: 'black',
    ассорти: 'assorti'
};

const FilterItem = ({data, nameFilter}) => {
    const dispatch = useDispatch();
    const selector = useSelector((store) => store.filters);

    const classSelected = selector[nameFilter].includes(data) ? 'selected' : '';
    const checkedSelected = selector[nameFilter].includes(data) ? 'checked' : '';
    const colorClass = (nameFilter === 'TSVET') ? ' ' + COLOR[data] : '';


    const changeFilter = (e) => {
        dispatch(changeFilters(e, nameFilter))
    };

    return (
        <label className={"filter__item " + classSelected + colorClass}>
            <input type="checkbox" value={data} onChange={changeFilter} checked={checkedSelected} />
            <span className="checkbox"/>
            {data}
        </label>
    )
};

export default FilterItem;
