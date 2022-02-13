import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeFilters} from "../../../Actions";

const SectionItem = ({data}) => {
    const dispatch = useDispatch();
    const selector = useSelector((store) => store.filters);

    const classSelected = selector['SECTIONS'].includes(data) ? 'selected' : '';
    const checkedSelected = selector['SECTIONS'].includes(data) ? 'checked' : '';

    const changeFilter = (e) => {
        dispatch(changeFilters(e, 'SECTIONS'))
    };

    return(
        <label className={"section__item " + classSelected}>
            <input type="checkbox" value={data} onChange={changeFilter} checked={checkedSelected}/>
            {data}
        </label>
    )
};

export default SectionItem;
